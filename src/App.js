import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const onAdd = (count) =>{
    console.log(`La cantidad es: ${count}`)
    alert(`La cantidad es: ${count}`)
  }
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount initial={1} stock={12} onAdd={onAdd} />
    
    </div>
  );
}

export default App;
