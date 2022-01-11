import './MealItem.css'
import { Fragment } from 'react';

// import foodImg from '../images/food.jpg';
import { Link } from 'react-router-dom';

export default function MealItem(props){
    return( 
    <Fragment>
        <div className="meal-item">
        <div className="meal-img">
            <img src={props.img}/>
        </div>
        <div className="meal-name">
            <h3>{props.recipeName}</h3>
            <Link to="#" className="recipe-btn">Get Recipe</Link>
        </div>
        </div>
    </Fragment>
    )
}