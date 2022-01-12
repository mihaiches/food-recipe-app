import { useState , useRef} from 'react';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup , FormControl , Button } from 'react-bootstrap';

import MealDetails from './components/MealDetails';
import MealItem from './components/MealItem';

function App() {
  const mealValue = useRef(null);
  const [meals, setMeals] = useState([]);
  const [mealRecipeDetail, setMealRecipeDetail] = useState([]);
  const [error, setError] = useState();

  // fetching the meals for the respective ingredinet with async/await
  async function handleGettingIngredient() {
    const searchedIngredient = mealValue.current.value.trim();
    setError(null);
    try{
      const  response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchedIngredient}`);
      const data = await response.json();

      if(!response.ok){
        throw new Error('Something went wrong!');
      }
    
      const transformedMeals = data.meals.map((mealData) => {
          return {
            id: mealData.idMeal,
            img: mealData.strMealThumb,
            recipeName: mealData.strMeal
          }
        });
        setMeals(transformedMeals);
    } catch (error) {
      setError(error.message);
    }
  }

  //fetching the meal deteails for the meals 
  async function handleMealRecipe(event){
    let mealItem = event.target.parentElement.parentElement;

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`);
    const data = await response.json();

    const transformedDetails = data.meals.map((mealDataDetails) => {
      return {
          id: mealDataDetails.idMeal,
          name: mealDataDetails.strMeal,
          category: mealDataDetails.strCategory,
          instructions: mealDataDetails.strInstructions,
          img: mealDataDetails.strMealThumb,
          link: mealDataDetails.strYoutube
        }
    });
    setMealRecipeDetail(transformedDetails);
    console.log(mealRecipeDetail);
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
              placeholder="Enter an ingredient..."
              aria-label="Search-bar"
              aria-describedby="basic-addon2"
              autoComplete='off'
              ref={mealValue}
              />
              <Button className='search-btn' onClick={handleGettingIngredient}>
                  <FontAwesomeIcon className='search-icon' icon={faSearch}/>
              </Button>
            </InputGroup>

            <div className="meal-result">
              <h2 className="title">Your Search Results:</h2>

  {/* Conditial rendering of the meal items if no error */}

              {!error ? <div id="meal">
                {meals.map((meal) => {
                  return(
                <MealItem 
                key={meal.id}
                id={meal.id}
                img={meal.img}
                recipeName={meal.recipeName}
                onDetails={handleMealRecipe}
                />
                  )
                })}
              </div> : <p className="notFound">Sorry, we didn't find any meal.</p>}
            </div>      

            <MealDetails/>

          </div>
        </div>
      </div>
  );
}

export default App;
