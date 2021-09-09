import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  const onAdd = (count) =>{
    console.log(`La cantidad es: ${count}`)
    alert(`La cantidad es: ${count}`)
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          <Route exact path='/categoria/:category' component={ItemListContainer} />
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart}  />
        </Switch>
        <ItemCount initial={1} stock={12} onAdd={onAdd} />
        
      </div>
    </Router>
  );
}

export default App;
