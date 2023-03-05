import axios from 'axios'

const API_URL = '/api/booking/'

// Create new goal
const createBooking = async (bookingData, token) => {
  const config = {
    headers: {
      Authorization: `x-access-token ${token}`
    //   Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bookingData, config)

  return response.data
}

// Get user goals
const getBookings = async (token) => {
  const config = {
    headers: {
        Authorization: `x-access-token ${token}`
    //   Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, + 'findAll', config)

  return response.data
}

// Delete user goal
const deleteBooking = async (bookingId, token) => {
  const config = {
    headers: {
    //   Authorization: `Bearer ${token}`,
      Authorization: `x-access-token ${token}`
    },
  }

  const response = await axios.delete(API_URL + bookingId, config)

  return response.data
}

const bookingService = {
  createBooking,
  getBookings,
  deleteBooking,
}

export default bookingService