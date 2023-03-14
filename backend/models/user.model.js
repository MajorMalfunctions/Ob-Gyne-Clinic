const mongoose = require("mongoose");
const ip = require('ip');

const jwt = require ('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    required: [true, "Fullname Not Provided "],
    ref:  "Patient"
  },
  address: {
    type: String,
    trim: true
  },
  phone: {
    type: String
  },
    email: {
      type: String,
      trim: true,
      required: [true, "Please Provide Email Address"],
      unique: [true, "Email Already Exists In Database!"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Provide A Valid Email",
      ],
    },
    phone: {
      type: String,
      default: "+639",
    },
    password: {
      type: String,
      required: [true, "Please Add A Password"],
      minlength: [8, "Password Must Atleast Have 8 Characters"],
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        enum: ["patient", "admin", "moderator"],
        default: "patient",
        ref: "Roles",
      }
    ],
    cover: {
      type: String,
      require: [true, "Please add a photo"],
      default: "https://img.icons8.com/color/1x/doctor-female-skin-type-3.png",
    },
      /*images: [
      {
        public_id: {
          type: String,
          require: true,
        },
        url: {
          type: String,
          require: true,
        },
      },
    ],*/
    ip: {
      type: String,
      default: ip.address()
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },  {
      timestamps: true,
      collection: 'patients',
    });

UserSchema.methods.accessToken = function () {
    const accessToken = jwt.sign({
        id: this._id,
    },
        process.env.ACCESS_TOKEN,
    {
        expiresIn: process.env.JWT_REFRESH_EXPIRATION,
    }
  );
  return { accessToken };
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function() {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString('hex');
  // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
  // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
};

//Match input password with encrypted password
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};


const User = mongoose.model("User", UserSchema,  "User");
module.exports = User;