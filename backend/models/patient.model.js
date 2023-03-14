const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ip = require('ip');


const PatientSchema = new mongoose.Schema({
  // _id: new Schema.Types.ObjectId,
    // name: {
    //   firstName: String,
    //   lastName: String
    //   },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    mobile: {
      type: Number,
      required: [true, 'What is your contact number?']
    },
  avatar: {
      // type: Buffer,
      type: String
    },
    dob: {
        type: Date
    },
    address: {
      type: String
    },
    accountCreated: {
      type: Date,
      default: Date.now
    },
      // attendance: [{ type: Schema.Types.ObjectId, ref: 'Attendance' }],
  }, {
    collection: 'patients',
    timestamps: true,
    }
);

const Patient = mongoose.model("Patient", PatientSchema, "Patient");
module.exports = Patient;