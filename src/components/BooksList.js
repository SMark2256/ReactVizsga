import React from 'react'
import Foods from './Books.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './BooksList.module.css'


const BooksList = (props) => {
      

  return (
      <ul className="row col-lg-10">
            {props.foods.map((foods) => (
                  <Foods
                        key={foods.id}
                        name={foods.name}
                        img={foods.img}
                        price={foods.price}
                        rate={foods.rate}
                  />
            ))}
      </ul>
  )
}

export default BooksList