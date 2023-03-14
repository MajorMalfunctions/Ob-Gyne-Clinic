import { useBookingsContext } from '../../hooks/useBookingContext'
import { useAuthContext } from '../../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BookingDetails = ({ booking }) => {
  const { dispatch } = useBookingsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/bookings/' + booking._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `x-access-token ${user.token}`
        // 'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_BOOKING', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{booking.id}</h4>
      <p><strong>Name: </strong>{booking.name}</p>
      <p><strong>Time: </strong>{booking.time}</p>
      <p><strong>Date: </strong>{booking.date}</p>
      <p>{formatDistanceToNow(new Date(booking.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default BookingDetails