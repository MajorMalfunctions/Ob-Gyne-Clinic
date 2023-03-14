import axios from "axios";
import React, { useState, useEffect } from "react";

function Bookings() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5050/api/booking/findAll')
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
        Booking Lists:
        <table>
          <tr>
            <th> Name </th>
            <th> Time </th>
            <th> Date </th>
            <th> Status </th>
          </tr>
            {
            data.length > 0 &&
            data.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.time}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                  </tr>
                )
            })
          }
        </table>
    </div>
  )
}

export default Bookings;