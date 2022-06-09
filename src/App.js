import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState,useEffect,useCallback} from 'react'

import BooksList from './components/BooksList'

function App() {
const [foods, setFoods] = useState([])
const [isLoading, setLoading] = useState(false)
const [show, setShow] = useState(true)
const [foodtype, setFoodtype] = useState('drinks')

const fetchMoviesHandler = useCallback( async () => {
  setLoading(true);
  try {
      const response = await fetch(`https://ig-food-menus.herokuapp.com/${foodtype}`);
      if(!response.ok){
          throw new Error(response.status);
      }
      console.log(response)
      const data = await response.json();

      console.log(data);

      // const movieselement = data.result.map((movie) => {
      //     return ([{
      //         id: movie.id,
      //         title: movie.title,
      //         openingText: movie.openingText,
      //         releaseDate: movie.releaseDate,
      //     }]);
      // });

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

  }catch (e){
      console.log(e);
  }
  setLoading(false);
}, [])

useEffect(() => {
  fetchMoviesHandler();
}, [foodtype]);


  return (
    <React.Fragment>
      <section>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
      </section>
      <div className='nav'>
        <div className="container">
        <div className="row">
          <h1>Our Foods</h1>
        </div>
        <div className="d-inline col-12">
        <section>
          <button className="btn-lg mx-2 btn-primary" onClick={fetchMoviesHandler}>Fetch Movies</button>
          <button className="btn-lg mx-2 btn-primary" onClick={() => setShow(!show)}>Show/Hide</button>
        </section>
        <section>
          <button className="btn-lg mx-2  btn-success" onClick={() => setFoodtype('burgers')}>Hamburger</button>
          <button className="btn-lg mx-2  btn-success" onClick={() => setFoodtype('drinks')}>Drinks</button>
          <button className="btn-lg mx-2  btn-success" onClick={() => setFoodtype('pizzas')}>Pizza</button>
        </section>
        </div>
        </div>
      </div>
      <section className='foodtable'>
        {foodtype &&show && !isLoading && foods.length > 0 && <BooksList foods={foods}/>}
        {show && !isLoading && foods.length === 0 && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
    </section>
    </React.Fragment>
  );
}

export default App;
