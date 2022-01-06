import { useState } from 'react';

import './App.css';
import foodImg from './images/food.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup , FormControl , Button } from 'react-bootstrap';

import MealDetails from './components/MealDetails';
import MealItem from './components/MealItem';

function App() {
  const foodApi = 'www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';

  const [getMeal, setGetMeal] = useState();
  const [searchedMeal, setSearchedMeal] = useState();

  function handleMeal(event){
    const mealSearched = event.target.value;

    setGetMeal(mealSearched);
  }

  function handleSearch(){
    setSearchedMeal(getMeal);

    console.log(searchedMeal)
  }

  return (
      <div className="container">
        <div className="meal-wrapper">
          <div className="meal-search">
            <h2 className="title">
              Find Meals For The Ingredients You Love
            </h2>
            <blockquote>If you can't feed a hundred people, then feed just one.<br/>
              <cite>- Mother Teresa</cite>
            </blockquote>

            <InputGroup className="meal-search-box">
              <FormControl
              className='search-control'
              id="search-input"
              placeholder="Search..."
              aria-label="Search-bar"
              aria-describedby="basic-addon2"
              onChange={handleMeal}
              value={getMeal}
              />
              <Button className='search-btn' onClick={handleSearch}>
                  <FontAwesomeIcon className='search-icon' icon={faSearch}/>
              </Button>
            </InputGroup>

            <div className="meal-result">
              <h2 className="title">Your Search Results:</h2>
              <MealItem />
            </div>            

            <MealDetails/>

          </div>
        </div>
      </div>
  );
}

export default App;
