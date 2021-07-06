import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/welcome'/>
            </Route>
            <Route path='/welcome'>
              <Welcome/>
            </Route>
            <Route exact path='/products'>
              <Products/>
            </Route>
            <Route exact path='/products/:productId'>
              <ProductDetail/>
            </Route>
        </Switch>
      </main>  
    </div>
  );
}

export default App;
