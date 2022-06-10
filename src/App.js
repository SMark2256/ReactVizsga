import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState,useEffect,useCallback} from 'react'

import BooksList from './components/BooksList'
const axios = require('axios')


function App() {
const [foods, setFoods] = useState([])
const [isLoading, setLoading] = useState(false)
const [show, setShow] = useState(true)
const [foodtype, setFoodtype] = useState('best-foods')

const fetchMoviesHandler = useCallback( async (foodtype) => {
  setLoading(true);
  try {
      const response = await axios.post(`http://localhost:3001/foods`, {foodtype});
    
      setFoods(response.data)

      console.log(response.data)


      /*const data = await response.json();

      console.log(data);


      const foodselements = [];

      for (const key in data) {
        foodselements.push({
              id: key,
              name: data[key].name,
              img: data[key].img,
              price: data[key].price,
              rate: data[key].rate,
          });
      }

      setFoods(foodselements);
*/
  }catch (e){
      console.log(e);
  }
  setLoading(false);
}, [])


async  function addHandler(foods) {

  const response = await fetch(`https://reactvizsga-default-rtdb.europe-west1.firebasedatabase.app/foods/${foodtype}.json`, {
      method: 'POST',
      body: JSON.stringify(foods),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  const data = response.json();
  console.log(data);

}



useEffect(() => {
  fetchMoviesHandler(foodtype);
}, [foodtype]);


  return (
    <React.Fragment>
      <div className='nav'>
        <div className='container'>
          <h1>Our Foods</h1>
          <div className="d-inline col-12">
          <section>
            <button className="btn-lg mx-2 btn-primary" onClick={fetchMoviesHandler}>Fetch Movies</button>
            <button className="btn-lg mx-2 btn-primary" onClick={() => setShow(!show)}>Show/Hide</button>
            <button className="btn-lg mx-2 btn-primary" onClick={() => addHandler(foods)}>Upload</button>
          </section>
          <section>
            <button className="btn mx-2  btn-success" onClick={() => setFoodtype('desserts')}>Hamburger</button>
            <button className="btn mx-2  btn-success" onClick={() => setFoodtype('breads')}>Drinks</button>
            <button className="btn mx-2  btn-success" onClick={() => setFoodtype('porks')}>Pizza</button>
          </section>
          </div>
        </div>
      </div>
      <section className='foodtable'>
        {foodtype &&show && !isLoading && foods.length > 0 && <BooksList foods={foods}/>}
        {show && !isLoading && foods.length === 0 && <p>Found no foods</p>}
        {isLoading && 
            <div className='loading'>
              <h1>Loading...</h1>
              <img src={logo} className="App-logo" alt="logo" />  
            </div>}
      </section>
    </React.Fragment>
  );
}

export default App;
