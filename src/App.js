import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';

function App() {
  
  return (

    <CartContextProvider >
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route exact path='/categoria/:category' component={ItemListContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart}  />
        </Switch>    
      </div>
    </Router>
    </CartContextProvider>
  );
}

export default App;
