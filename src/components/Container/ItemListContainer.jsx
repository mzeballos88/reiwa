import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import "./ContainerStyle.css"
import ItemList from './ItemList'
import { Spinner } from 'react-bootstrap'
import { getFirestore } from '../../service/getFirebase' 


const ItemListContainer=() => { 
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams();

    useEffect(() => {
        const database = getFirestore();
        /* const queryCategory = database.collection('categorias').get('id') */
        const itemCollection = database.collection('items').get()
        if (category === undefined){
            itemCollection
        .then(data => {
            if(data.size === 0){
                console.log('no hay nada')
            }
            setItems(data.docs.map(item => ({id:item.id, ...item.data()})))
            setLoading(false) 
        })
        .catch(err => console.log(err));
        
        }else{
            itemCollection
        .then((data) => setItems(data.docs.filter(item => category === item.categoria)))
        }
    }, [category])


      /*   if (category === undefined){
            tarea
            .then(respuesta => {
                setItems(respuesta)
                setLoading(false)                
            })
        }else{
            tarea
            .then((respuesta) => setItems(respuesta.filter( r => category === r.categoria ))) 
        }
    }, [category])

 */
    return (
        <div>
            {   loading ? <Spinner animation="grow" />
            :                 
            <h1 title="El lugar de auténtica comida japonesa"/> &&
            <ItemList items={items} />
            } 
        </div>
    )
}


export default ItemListContainer;
