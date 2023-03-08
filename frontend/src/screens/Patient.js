// import { useEffect }from 'react'
// import { useBookingsContext } from "../hooks/useBookingContext"
// import { useAuthContext } from "../hooks/useAuthContext"

// // components
// import BookingDetails from '../components/Booking/BookingDetails'
// import BookingForm from '../components/Booking/BookingForm'

// const Patient = () => {
//   const {bookings, dispatch} = useBookingsContext()
//   const {user} = useAuthContext()

//   useEffect(() => {
//     const fetchBookings = async () => {
//       const response = await fetch('/api/booking/findAll', {
//         headers: {'Authorization': `x-access-token ${user.token}`},
//         // headers: {'Authorization': `Bearer ${user.token}`},
//       })
//       const json = await response.json()

//       if (response.ok) {
//         dispatch({type: 'SET_BOOKINGS', payload: json})
//       }
//     }

//     if (user) {
//       fetchBookings()
//     }
//   }, [dispatch, user])

//   return (
//     <div className="Patient">
//       <div className="bookings">
//         {bookings && bookings.map((booking) => (
//           <BookingDetails key={booking._id} booking={booking} />
//         ))}
//       </div>
//       <BookingForm />
//     </div>
//   )
// }

// export default Patient