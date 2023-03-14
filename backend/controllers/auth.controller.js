const crypto = require("crypto");
const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken } = db;

const sendEmail = require("../utils/sendEmail");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const ip = require('ip');


exports.getMe = (req, res) => {
  const user = User.findById(req.user.id).populate([{
    // path: 'contents',
    match: { isDeleted: false },
    populate: [
      {
        // path: 'contents',
        match: { isDeleted: false }
      },
    ],
  }, {
    path: 'profile'
  }])

  res.status(200).json({
      ...user._doc
  })
};

exports.signup = (req, res) => {
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    isVerified: false,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  // res.cookie("token", token, {
  //   path: "/",
  //   httpOnly: true,
  //   expires: new Date(Date.now() + 1000 * 2592000), // 30day
  //   sameSite: "none",
  //   secure: true,
  // })

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            res.send({ message: "User Successfully Created!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "patient" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "User Registered Successfully With Roles!" });
          // if (success) {
          //   res.status(200).send({
          //     m: "Welcome!",
          //     s: 200,
          //     d: {user},
          //   })
          // }
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    mobile: req.body.mobile,
    email: req.body.email,
  })
    .populate("roles", "-__v")
    .exec(async (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not Found." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.jwtExpiration,
      });

      let refreshToken = await RefreshToken.createToken(user);

      let authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      req.session.token = token;

      res.status(200).send({
        // m: "Welcome Back!",
        // s: 200,
        // d: {user},
        // accessToken: token,
        // refreshToken: refreshToken,
        // expiryDate: config.jwtRefreshExpiration
        id: user._id,
        cover: user.cover,
        name: user.fullname,
        email: user.email,
        roles: authorities,
        ip: ip.address(),
        accessToken: token,
        refreshToken: refreshToken,
        expiryDate: config.jwtRefreshExpiration
      });
    });
};

exports.logout = async (req, res) => {
  try {
    // localStorage.clear();
    req.session = null;
    return res.status(200).send({
      message: "Logged Out Successful!"
    });
  } catch (err) {
    this.next(err);
  }
};

// exports.logout = async (req, res) => {
  // try {
//     res.cookie('jwt', '', { maxAge: 1 });
//     // res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
//     req.session = null;
//     return res.status(200).send({
//       message: "Logged Out Successful!"
//     });
//   } catch (err) {
//     this.next(err);
// }
// const cookies = req.cookies;
// if (!cookies?.jwt) return res.sendStatus(204); //No content
// const refreshToken = cookies.jwt;

// // Is refreshToken in db?
// const foundUser = await User.findOne({ refreshToken }).exec();
// if (!foundUser) {
//     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
//     return res.sendStatus(204);
// }

// // Delete refreshToken in db
// foundUser.refreshToken = foundUser.refreshToken.filter(rt => rt !== refreshToken);;
// const result = await foundUser.save();
// console.log(result);

// res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
// res.sendStatus(204);

  // try {
  //   localStorage.clear();
  //   req.session = null;
  //   return res.status(200).send({ message: "You've been signed out!" });
  // } catch (err) {
  //   this.next(err);
  // };
// }

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, { useFindAndModify: false }).exec();

      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    let newAccessToken = jwt.sign({ id: refreshToken.user._id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
            expiryDate: config.jwtExpiration,
            accessToken: newAccessToken,
            refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

exports.getMe = (req, res) => {
  res.status(200).json(req.user)
};

// GET ALL Users
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some Error Occurred While Retrieving Users."
      });
    });
};

exports.getPrivateRoute = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: "You got access to the private data in this route",
    });
};

// Forgot Password [ "email"]
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1d",
    });

    const link = `http://localhost:5050/api/auth/reset-password/${oldUser._id}/${token}`;

    var transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      ssl: true,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL_NAME,
      to: process.env.EMAIL_ME,
      subject: "Password Reset Link",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.json({ status: "200", success: "true", message: "Password Changed Successfully" });
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
};

// Reset Password [ "password",  "confirmPassword" ]
exports.resetPassword = async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Type', 'text/html');

  const { id, token } = req.params;
  console.log(req.params);
  
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  
  const secret = process.env.JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.status(200).json({
     success: true,
     message: "Password Successfully Changed"
 });
 res.json({ status: "Success" });

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
};

// // @desc    Forgot Password Initialization
// exports.forgotPassword = async (req, res, next) => {
//   // Send Email to email provided but first check if user exists
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return next(new ErrorResponse("No email could not be sent", 404));
//     }

//     // Reset Token Gen and add to database hashed (private) version of token
//     const resetToken = user.getResetPasswordToken();

//     await user.save();

//     // Create reset url to email to provided email
//     const resetUrl = `http://localhost:5050/api/auth/reset-password/${resetToken}`;

//     // HTML Message
//     const message = `
//       <h1>You have requested a password reset</h1>
//       <p>Please make a put request to the following link:</p>
//       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
//     `;

//     try {
//       await sendEmail({
//         to: user.email,
//         subject: "Password Reset Request",
//         text: message,
//       });

//       res.status(200).json({ success: true, data: "Email Sent" });
//     } catch (err) {
//       console.log(err);

//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpire = undefined;

//       await user.save();

//       return next(new ErrorResponse("Email could not be sent", 500));
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Reset User Password
// exports.resetPassword = async (req, res, next) => {
//   // Compare token in URL params to hashed token
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.resetToken)
//     .digest("hex");

//   try {
//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });

//     if (!user) {
//       return next(new ErrorResponse("Invalid Token", 400));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.status(201).json({
//       success: true,
//       data: "Password Updated Success",
//       token: user.getSignedJwtToken(),
//     });
//   } catch (err) {
//     next(err);
//   }
// };

exports.sendToken = (user, statusCode, res) => {
  const token = user.accessToken;
  res.status(statusCode).json({ sucess: true, token });
};

// // Forgot Password
// exports.forgotPassword = async (req, res, next) => {
//   // Send Email to email provided but first check if user exists
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return next(new ErrorResponse("No email could not be sent", 404));
//     }

//     // Reset Token Gen and add to database hashed (private) version of token
//     const resetToken = user.getResetPasswordToken();

//     await user.save();

//     // Create reset url to email to provided email
//     const resetUrl = `http://localhost:8080/api/auth/passwordreset/${resetToken}`;

//     // HTML Message
//     const message = `
//       <h1>You have requested a password reset</h1>
//       <p>Please make a put request to the following link:</p>
//       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
//     `;

//     try {
//       await sendEmail({
//         to: user.email,
//         subject: "Password Reset Request",
//         text: message,
//       });

//       res.status(200).json({ success: true, data: "Email Sent" });
//     } catch (err) {
//       console.log(err);

//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpire = undefined;

//       await user.save();

//       return next(new ErrorResponse("Email could not be sent", 500));
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// // Reset Password
// exports.resetPassword = async (req, res, next) => {
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.resetToken)
//     .digest("hex");

//   try {
//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });

//     if (!user) {
//       return next(new ErrorResponse("Invalid Token", 400));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.status(201).json({
//       success: true,
//       data: "Password Updated Success",
//       token: user.accessToken(),
//       // token: user.getSignedJwtToken(),
//     });
//   } catch (err) {
//     next(err);
//   }
// };







// exports.sendToken = (user, statusCode, res) => {
//   const token = user.accessToken;
//   res.status(statusCode).json({ sucess: true, token });
// };

// // Forgot Password [ "email"]
// exports.forgotPassword = async (req, res, next) => {
//   const { email } = req.body;
//   try {
//     const oldUser = await User.findOne({ email });
//     if (!oldUser) {
//       return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = process.env.JWT_SECRET + oldUser.password;
//     const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
//       expiresIn: "1d",
//     });

//     const link = `http://localhost:5050/api/v1/pass/eset-password/${oldUser._id}/${token}`;

//     var transporter = nodemailer.createTransport({
//       service: process.env.EMAIL_SERVICE,
//       host: process.env.EMAIL_HOST,
//       ssl: true,
//       secure: true,

//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     var mailOptions = {
//       from: process.env.EMAIL_NAME,
//       to: process.env.EMAIL_ME,
//       subject: "Password Reset Link",
//       text: link,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         return res.json({ status: "200", success: "true", message: "Password Changed Successfully" });
//         console.log("Email sent: " + info.response);
//       }
//     });
//     console.log(link);
//   } catch (error) {}
// };

// // Reset Password [ "password",  "confirmPassword" ]
// exports.resetPassword = async (req, res, next) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.setHeader('Content-Type', 'text/html');

//   const { id, token } = req.params;
//   console.log(req.params);

//   const { password } = req.body;

//   const oldUser = await User.findOne({ _id: id });
//   if (!oldUser) {
//     return res.json({ status: "User Not Exists!!" });
//   }

//   const secret = process.env.JWT_SECRET + oldUser.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     const encryptedPassword = await bcrypt.hash(password, 10);
//     await User.updateOne(
//       {
//         _id: id,
//       },
//       {
//         $set: {
//           password: encryptedPassword,
//         },
//       }
//     );
//     res.status(200).json({
//      success: true,
//      message: "Password Successfully Changed"
//  });
//  res.json({ status: "Success" });

//     res.render("index", { email: verify.email, status: "verified" });
//   } catch (error) {
//     console.log(error);
//     res.json({ status: "Something Went Wrong" });
//   }
// };
