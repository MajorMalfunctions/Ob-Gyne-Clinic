import { useState, useEffect } from 'react'
import axios from 'axios'

export const Admin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5050/api/booking/findAll').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Bookings List</h2>
      {data.map(booking => {
        return <div>{booking.name}</div>
      })}
    </>
  )
}

export default Admin;