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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
