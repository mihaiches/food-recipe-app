import './MealDetails.css'
import foodImg from '../images/food.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

export default function MealDetails(){
    return(
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
                <img src={foodImg} alt="foodImage"/>
            </div>
            <div className="recipe-link">
                <Link className="recipe-link-a" to="#" target="_blank">Watch Video</Link>
            </div>
            </div>
        </div>
    )
}