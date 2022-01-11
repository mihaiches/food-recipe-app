import { useState , useRef} from 'react';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup , FormControl , Button } from 'react-bootstrap';

import MealDetails from './components/MealDetails';
import MealItem from './components/MealItem';

function App() {

  // useRef variant for reading searched ingredient
  const mealValue = useRef(null);

  // useState variant for reading searched ingredient
  // const [getMeal, setGetMeal] = useState("");

  const [meals, setMeals] = useState([]);

  // useState variant for reading searched ingredient
  // function handleMeal(event){
  //   setGetMeal(event.target.value);
  // }

  function handleGettingIngredient() {
    const searchedIngredient = mealValue.current.value;

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchedIngredient}`)
    .then((response) => {
      return response.json();
      })
      .then((data) => {
       const transformedMeals = data.meals.map( (mealData) => {
         return {
           id: mealData.idMeal,
           img: mealData.strMealThumb,
           recipeName: mealData.strMeal
         }
       });
       setMeals(transformedMeals);
      });

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
              autoComplete='off'

              // useState variant for reading searched ingredient
              // onChange={handleMeal}
              // value={getMeal}

              ref={mealValue}
              />
              <Button className='search-btn' onClick={handleGettingIngredient}>
                  <FontAwesomeIcon className='search-icon' icon={faSearch}/>
              </Button>
            </InputGroup>

            <div className="meal-result">
              <h2 className="title">Your Search Results:</h2>
              <div id="meal">
                {meals.map((meal) => {
                  return(
                <MealItem 
                key={meal.id}
                img={meal.img}
                recipeName={meal.recipeName}
                />
                  )
                })}
              </div>
            </div>      

            <MealDetails/>

          </div>
        </div>
      </div>
  );
}

export default App;
