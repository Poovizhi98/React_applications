import React, { useContext } from 'react';
import cartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`

    const cartCtx = useContext(cartContext);

    const addToCartHandler = (amount) => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        }
        cartCtx.addItem(item);
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default MealItem;