import React, {useState} from 'react'
import Books from './Books.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './BooksList.module.css'


const BooksList = (props) => {
      const [show, setShow] = useState(true)

  return (
      <>
      <button className="btn-lg mx-4 btn btn-primary" onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <ul className="row col-lg-12 books-list">
            {props.books.map((books) => (
                  <Books
                        key={books.id}
                        title={books.title}
                        date={books.date}
                        pages={books.pages}
                  />
            ))}
      </ul>}
      </>
  )
}

export default BooksList