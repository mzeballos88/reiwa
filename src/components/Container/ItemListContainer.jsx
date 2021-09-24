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
        let itemCollection = database.collection("items");
        if (category) itemCollection = itemCollection.where("categoria","==", category);
        itemCollection.get().then(data => {
            if(data.size === 0){
                console.log('no hay nada')
            }
            setItems(data.docs.map(item => ({id:item.id, ...item.data()})))
            setLoading(false) 
        })
        .catch(err => console.log(err));
    }, [category])


    return (
        <div>
            {   loading ? <Spinner animation="grow" />
            :                 
            <ItemList items={items} />
            } 
        </div>
    )
}


export default ItemListContainer;
