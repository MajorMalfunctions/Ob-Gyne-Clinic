const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
  name: {
    type: String,
    required: true,
    ref: "User"
  },
  time: {
    type: String,
    required: true,
    // ref: "Patient"
  },
  date: {
    type: Date,
    required: true,
  },
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      ref: "Patient",
    }
    // unavailableDates: {type: [Date]}
  ],
  published: {
    type: Boolean,
    default: false
  },
  // attendance:  {
  //   type:  Boolean,
  //   default: false,
  //   ref: "Attendance"
  // }
}, {
  timestamps: true,
  // collection: booking
  });


const bookingModel = mongoose.model('Booking', BookingSchema, "Booking");

module.exports = bookingModel;