// Mexico.js
import React, { useEffect, useState } from "react";

import { getHoliday } from "../services/calendarific";

function Mexico() {

  const [holidays, setHolidays] = useState([]);

  useEffect(()=>{
      // Holidays Colombia..
      getHoliday('mx').then((res)=>{
          console.log('------testing-------',typeof res)
          setHolidays(res);
      })
  
    },[])


return (
  <table className="table">
  <thead>
      <tr>
      <th scope="col">#</th>
      <th scope="col">Festvo</th>
      <th scope="col">Fecha</th>
      <th scope="col">Descripcion</th>
      </tr>
  </thead>
  <tbody>
      {holidays.map((holiday, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{holiday.name}</td>
            <td>{holiday.date.iso}</td>
            <td>{holiday.description}</td>
          </tr>
        ))}
  </tbody>
  </table>

)
}

export default Mexico;

