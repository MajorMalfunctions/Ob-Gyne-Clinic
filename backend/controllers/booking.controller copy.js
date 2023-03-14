const asyncHandler = require('express-async-handler')

const db = require("../models");
const Booking = db.booking;
const User = db.user;

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id })
  res.status(200).json(bookings)
})

const setBooking = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const booking = await Booking.create({
    text: req.body.text,
    name: req.body.fullname,
    time: req.body.time,
    date: req.body.date,
    user: req.user.id,
  })

  res.status(200).json(booking)
})

const updateBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id)

  if (!booking) {
    res.status(400)
    throw new Error('Booking not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the booking user
  if (booking.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updateBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updateBooking)
})

const deleteBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id)

  if (!booking) {
    res.status(400)
    throw new Error('Booking not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the booking user
  if (booking.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await booking.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBookings,
  setBooking,
  updateBooking,
  deleteBooking,
}