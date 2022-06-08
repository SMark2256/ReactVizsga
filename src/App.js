import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Nav,Container,Navbar,NavDropdown} from 'react-bootstrap'

import BooksList from './components/BooksList'

function App() {


const booksElements = [
  {
    id: 1,
    title: 'teszt1',
    date: '1970-02-02',
    pages: '100'
  },
  {
    id: 2,
    title: 'teszt2',
    date: '1972-08-22',
    pages: '250'
  },
  {
    id: 3,
    title: 'teszt3',
    date: '2004-01-14',
    pages: '800'
  }
]


  return (
    <React.Fragment>
      <section>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
      </section>
      <section>
        <BooksList books={booksElements}/>
      </section>
    </React.Fragment>
  );
}

export default App;
