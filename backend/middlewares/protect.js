// const asyncHandler = require('express-async-handler')

// const config = require("../config/auth.config");
// const jwt = require("jsonwebtoken");
// const db = require("../models");
// const User = db.user;

// const protect = asyncHandler(async (req, res, next) => {
//   try {
//     // first check request form forntend have a cookies or not
//     const token = req.cookies.token

//     // if token is not exits
//     if (!token) {
//       res.status(401)
//       throw new Error("Not authorized, Please Login")
//     }

//     // Verfiy Token
//     const verified = jwt.verify(token, process.env.JWT_SECRET)

//     // Get userId form token
//     const user = await UserModal.findById(verified.id).select("-password")

//     if (!user) {
//       res.status(401)
//       throw new Error("User not Found!")
//     }
//     req.user = user
//     next()
//   } catch (error) {
//     res.status(401)
//     throw new Error("Not authorized, Please Login")
//   }
// })

// // access only for admin
// /*const verifyTokenAndAdmin = (req, res, next) => {
//   protect(req, res, () => {
//     if (req.user.isAdmin) {
//       next()
//     } else {
//       res.status(403).json("You are not allowed to do this!")
//     }
//   })
// }*/

// // access only for admin
// const verifyAdmin = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return next(new Error(`${req.user.role} user can not access this resources`))
//     }
//     next()
//   }
// }
// // access  admin and login user
// // const verifyTokenAndAuthorization = async (req, res, next) => {
// //   protect(req, res, () => {
// //     if (req.user.id === req.params.id || req.user.isAdmin) {
// //       next()
// //     } else {
// //       res.status(403).json("You are not authenticated!")
// //     }
// //   })
// // }

// module.exports = {
//   protect,
//   verifyTokenAndAdmin,
//   // verifyTokenAndAuthorization,
// }














// // const protect = asyncHandler(async(req, res, next) => {
// //   let token;

// //   if (
// //     req.headers.authorization &&
// //     req.headers.authorization.startsWith('x-access-token')
// //     // req.headers.authorization.startsWith("Bearer")
// //   ) {
// //     token = req.headers.authorization.split(" ")[1];
// //   }

// //   if (!token) {
// //     return next(new ErrorResponse("Not Authorized To Access This Route", 401));
// //   }

// //   try {
// //     const decoded = jwt.verify(token, user.accessToken);

// //     const user = await User.findById(decoded.id);

// //     if (!user) {
// //       return next(new ErrorResponse("No User Found With This Id", 404));
// //     }

// //     req.user = user;

// //     next();
// //   } catch (err) {
// //     return next(new ErrorResponse("Not Authorized To Access This Router", 401));
// //   }
// // })

// // module.exports = { protect }
