import React, { useState } from "react"

const ButtonClick = () => {
  const [booking, setBooking] = useState([])

  const fetchData = () => {
    fetch("http://localhost:5050/api/booking/findAll")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBooking(data)
      })
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Bookings List</button>
      {booking.length > 0 && (
        <ul>
          {booking.map(booking => (
            <li key={booking.id}>
              {booking.name} | {" "}
              {booking.time}| {" "}
              {booking.date} | {" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ButtonClick