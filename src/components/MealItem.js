import './MealItem.css'
import foodImg from '../images/food.jpg';
import { Link } from 'react-router-dom';

export default function MealItem(){
    return( 
    <div id="meal">
        <div className="meal-item">
        <div className="meal-img">
            <img src={foodImg}/>
        </div>
        <div className="meal-name">
            <h3>Salad</h3>
            <Link to="#" className="recipe-btn">Get Recipe</Link>
        </div>
        </div>
    </div>
    )
}