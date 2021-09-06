import { useEffect , useState} from 'react'
import "./ContainerStyle.css"
import ItemList from './ItemList'


const items = [
    {id:1, title: "Chasu Tamago", price: "S/.19", img: "https://bit.ly/3DvaDmk", description: "Finas láminas de cerdo flameadas, acompañadas con huevito ajitsuke."},
    {id:2, title: "Chiken Nanban", price: "S/.20", img: "https://bit.ly/3DvaDmk", description:"Chicharron de pollo bañado en salsa amazu y tártara japonesa."},
    {id:3, title: "Negitoro", price: "S/.27", img: "https://bit.ly/3DvaDmk", description:"Atun picado con cebollita china. Acompañado con hojas de nori."},
    {id:4, title: "Yakisoba", price: "S/.31", img: "https://bit.ly/3DvaDmk", description:"Fideos salteados al tradicional estilo japonés."},
    {id:5, title: "Katsudon", price: "S/.32", img: "https://bit.ly/3DvaDmk", description:"Apanado de cerdo, acompañado de huevo y cebolla blanca sobre una cama de arroz."},
    {id:6, title: "Ikura Gunkan", price: "S/.14", img: "https://bit.ly/3DvaDmk", description:"Nigiri envuelto en nori con topping de hueva de pescado."},

]

const tarea = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(items);
    },2000);
});

const ItemListContainer=() => { 
    const [items, setItems] = useState([])
    useEffect(() => {
        tarea
        .then((respuesta) => setItems(respuesta)) 
    }, [])
    console.log (items)

    return (
        <div>
            <h1 title="El lugar de auténtica comida japonesa"/>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
