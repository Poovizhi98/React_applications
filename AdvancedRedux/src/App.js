import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actionCreators';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const changedStatus = useSelector(state => state.cart.changed);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());  
  }, [dispatch])

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changedStatus) {
      dispatch(sendCartData(cart));
    }

    }, [cart, dispatch, changedStatus])
    

  return (
    <>
      {notification && 
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />}
      <Layout>
        {cartIsVisible && <Cart /> }
        <Products />
      </Layout>
    </>
  );
}

export default App;
