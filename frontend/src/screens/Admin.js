import axios from "axios";
import React, { useState, useEffect } from "react";


function Admin() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5050/api/auth/users')
          .then(res => {
            console.log(res.data)
            setData(res?.data?.data)
          })
          .catch(err => {
              alert('Something went wong')
          })
    }, [])

  return (
    <div>
        TABLE PATIENTS:
        <table>
          <tr>
            <th> Name </th>
            <th> Start Time </th>
            <th> End Time </th>
            <th> Total Time </th>
          </tr>

          {
            data.length > 0 &&
            data.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    {/* <td>{item.phone}</td> */}
                  </tr>
                )
            })
          }
        </table>
    </div>
  )
}

export default Admin;

// import { useState, useEffect } from 'react'
// import axios from 'axios'

// export const Admin = () => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [data, setData] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:5050/api/booking/findAll').then(res => {
//       setData(res.data)
//       setIsLoading(false)
//     })
//   }, [])

//   if (isLoading) {
//     return <h2>Loading...</h2>
//   }

//   return (
//     <>
//       <h2>Bookings List</h2>
//       {data.map(booking => {
//         return <div>{booking.name}</div>
//       })}
//     </>
//   )
// }

// export default Admin;