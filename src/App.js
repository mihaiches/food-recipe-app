import './App.css';
import foodImg from './images/food.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faTimes} from '@fortawesome/free-solid-svg-icons'
import { InputGroup , FormControl , Button } from 'react-bootstrap';

function App() {
  return (
    <div className="app">
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
              placeholder="Search..."
              aria-label="Search-bar"
              aria-describedby="basic-addon2"
              />
              <Button className='search-btn' >
                  <FontAwesomeIcon className='search-icon' icon={faSearch}/>
              </Button>
            </InputGroup>

            <div className="meal-result">
              <h2 className="title">Your Search Results:</h2>
              <div id="meal">
                {/* meal item */}
                <div className="meal-item">
                  <div className="meal-img">
                    <img src={foodImg}/>
                  </div>
                  <div className="meal-name">
                    <h3>Salad</h3>
                    <Link to="#" className="recipe-btn">Get Recipe</Link>
                  </div>
                </div>
                {/* end of meal item */}
                {/* meal item */}
                <div className="meal-item">
                  <div className="meal-img">
                    <img src={foodImg}/>
                  </div>
                  <div className="meal-name">
                    <h3>Salad</h3>
                    <Link to="#" className="recipe-btn">Get Recipe</Link>
                  </div>
                </div>
                {/* end of meal item */}
                {/* meal item */}
                <div className="meal-item">
                  <div className="meal-img">
                    <img src={foodImg}/>
                  </div>
                  <div className="meal-name">
                    <h3>Salad</h3>
                    <Link to="#" className="recipe-btn">Get Recipe</Link>
                  </div>
                </div>
                {/* end of meal item */}
              </div>
            </div>            


            <div className="meal-details">
              {/* recipe close btn */}
              <Button className="recipe-close-btn" id="recipe-close-btn">
                <FontAwesomeIcon icon={faTimes}/>
              </Button>

              {/* meal content */}
              <div className="meal-details-content">
                <h2 className="recipe-title">Meal Name Here</h2>
                <p className="recipe-category">Category Name</p>
                <div className="recipe-instruct">
                  <h3>Instructions:</h3>
                  <p>Donec nec felis vulputate, sollicitudin nunc nec, ornare 
                    ipsum. Proin a justo blandit, interdum mauris id, molestie 
                    nulla. Ut sed cursus justo. Nam eleifend eros a massa venenatis
                     placerat. Sed rhoncus erat sed dapibus pretium. Curabitur in 
                     consequat mauris. Vestibulum tincidunt tellus neque, et 
                     malesuada dui elementum non. Morbi ultricies scelerisque 
                     lorem id interdum.</p>
                     <p>Donec nec felis vulputate, sollicitudin nunc nec, ornare 
                    ipsum. Proin a justo blandit, interdum mauris id, molestie </p>
                </div>
                <div className="recipe-meal-img">
                  <img src={foodImg} alt=""/>
                </div>
                <div className="recipe-link">
                  <Link to="#" target="_blank">Watch Video</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
