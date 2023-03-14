// import { useState } from "react"
// import { useBookingsContext } from "../../hooks/useBookingContext"
// import { useAuthContext } from '../../hooks/useAuthContext'

// const BookingForm = () => {
//   const { dispatch } = useBookingsContext()
//   const { user } = useAuthContext()

//   const [name, setName] = useState('')
//   const [time, setTime] = useState('')
//   const [date, setDate] = useState('')
//   const [error, setError] = useState(null)
//   const [emptyFields, setEmptyFields] = useState([])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!user) {
//       setError('You must be logged in')
//       return
//     }

//     const booking = {name, time, date}

//     const response = await fetch('/api/bookings', {
//       method: 'POST',
//       body: JSON.stringify(booking),
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `x-access-token ${user.token}`
//         // 'Authorization': `Bearer ${user.token}`
//       }
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setError(json.error)
//       setEmptyFields(json.emptyFields)
//     }
//     if (response.ok) {
//       setName('')
//       setTime('')
//       setDate('')
//       setError(null)
//       setEmptyFields([])
//       dispatch({type: 'CREATE_BOOKING', payload: json})
//     }
//   }

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Add a New Booking</h3>

//       <label>Full Name:</label>
//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//         className={emptyFields.includes('name') ? 'error' : ''}
//       />

//       <label>Book Time:</label>
//       <input
//         type="time"
//         onChange={(e) => setTime(e.target.value)}
//         value={time}
//         className={emptyFields.includes('time') ? 'error' : ''}
//       />

//       <label>Book Date:</label>
//       <input
//         type="date"
//         onChange={(e) => setDate(e.target.value)}
//         value={date}
//         className={emptyFields.includes('date') ? 'error' : ''}
//       />

//       <button>Send Booking</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

// export default BookingForm