import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import "./ContainerStyle.css"
import ItemList from './ItemList'


const items = [
    {id:1, categoria: "fondo", title: "Chasu Tamago", price: "S/.19", img: "https://bit.ly/3DvaDmk", description: "Finas láminas de cerdo flameadas, acompañadas con huevito ajitsuke."},
    {id:2, categoria: "fondo", title: "Chiken Nanban", price: "S/.20", img: "https://bit.ly/3tu3cHI", description:"Chicharron de pollo bañado en salsa amazu y tártara japonesa."},
    {id:3, categoria: "entrada", title: "Negitoro", price: "S/.27", img: "https://bit.ly/3ySZHeH", description:"Atun picado con cebollita china. Acompañado con hojas de nori."},
    {id:4, categoria: "bebida", title: "Umeshu", price: "S/.18", img: "https://bit.ly/3jSPzyj", description:"Licor de ciruela ideal para acompañar tus platos favoritos."},
    {id:5, categoria: "fondo", title: "Katsudon", price: "S/.32", img: "https://bit.ly/3yX1Fej", description:"Apanado de cerdo, acompañado de huevo y cebolla blanca sobre una cama de arroz."},
    {id:6, categoria: "entrada", title: "Ikura Gunkan", price: "S/.14", img: "https://bit.ly/3DvaDmk", description:"Nigiri envuelto en nori con topping de hueva de pescado."},

]

const tarea = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(items);
    },2000);
});

const ItemListContainer=() => { 
    const [items, setItems] = useState([])

    const { category } = useParams();

    useEffect(() => {
        if (category === undefined){
            tarea
            .then((respuesta) => setItems(respuesta)) 
        }else{
            tarea
            .then((respuesta) => setItems(respuesta.filter( r => category === r.categoria ))) 
        }
    }, [category])


    return (
        <div>
            <h1 title="El lugar de auténtica comida japonesa"/>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;
