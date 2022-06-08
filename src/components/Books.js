import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Books.module.css'

const Books = (props) => {
  return (
        <div className="col-4 book">
        <li className="col-11 book">
              <h2>{props.title}</h2>
              <h2>Kiadás: {props.date}</h2>
              <p>Pages: {props.pages}</p>
        </li>
        </div>
  )
}

export default Books