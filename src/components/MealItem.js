import './MealItem.css'

// import foodImg from '../images/food.jpg';
import { Link } from 'react-router-dom';

export default function MealItem(props){
    return( 
        <div className="meal-item" data-id={props.id}>
            <div className="meal-img">
                <img src={props.img} alt={props.recipeName}/>
            </div>
            <div className="meal-name">
                <h3>{props.recipeName}</h3>
                <Link to="#" onClick={props.onDetails} className="recipe-btn">Get Recipe</Link>
            </div>
        </div>
    )
}