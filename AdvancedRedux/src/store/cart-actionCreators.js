import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await fetch('https://custom-hooks-create-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
            
            if (!response.ok) {
                throw new Error('Fetching cart data failed..')
            }            
            
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sent cart data failed'
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending cart data'
        }))
        
        const sendRequest = async() => {
            const response = await fetch('https://custom-hooks-create-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            })
            if (!response.ok) {
                throw new Error('Sending cart data failed..')
            }
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully'
            }))
        }
        try {
            sendRequest()
        } catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sent cart data failed'
            }))
        }
    }
}