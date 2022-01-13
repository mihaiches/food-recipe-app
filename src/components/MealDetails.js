import './MealDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

export default function MealDetails(props){
    return(
        <div className="meal-details">
            {/* recipe close btn */}
            <Button onClick={props.onRemoveDetails}  className="recipe-close-btn recipe-close-btn-id">
            <FontAwesomeIcon icon={faTimes}/>
            </Button>

            {/* meal content */}
            <div className="meal-details-content">
            <h2 className="recipe-title">{props.name}</h2>
            <p className="recipe-category">{props.category}</p>
            <div className="recipe-instruct">
                <h3>Instructions:</h3>
                <p>{props.instructions}</p>
            </div>
            <div className="recipe-meal-img">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="recipe-link">
                <a href={props.link} className="recipe-link-a" target="_blank" rel="noreferrer">Watch Video</a>
            </div>
            </div>
        </div>
    )
}