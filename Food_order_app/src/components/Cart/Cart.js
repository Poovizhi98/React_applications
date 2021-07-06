import { useContext } from 'react';
import cartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const items = [{
    id: 'c1', name: 'Sushi', amount: 2, price: 12.99
}, {
    id: 'c2', name: 'Sushi1', amount: 21, price: 13.99 
}]

const Cart = (props) => {

    const cartCtx = useContext(cartContext);

    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount: 1});
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items && cartCtx.items.map(
        item => <CartItem 
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={()=>cartItemAddHandler(item)}
            onRemove={()=>cartItemRemoveHandler(item.id)}
            ></CartItem>)}</ul>

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    return (
        <Modal onHideCart={props.onHideCart}>
           {cartItems}
           <div className={classes.total}>
               <span>Total Amount</span>
               <span>{totalAmount}</span>
           </div>
           <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button> }
           </div> 
        </Modal>
    );
};

export default Cart;