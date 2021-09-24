import {React , useEffect , useState } from 'react'
import ItemDetail from './ItemDetail';
import { getFirestore } from '../../service/getFirebase';


const ItemDetailContainer = (props) => {
    const [productDetail,setProductDetail] = useState ({});
    const [loading, setLoading] = useState(true)
    const id = props.match.params.id;
   
     useEffect(() => {
        const database = getFirestore();
        const id = props.match.params.id;
        const itemCollection = database.collection('items').doc(id).get()
        .then(data => {
            if(data.size === 0){
                <h1>Producto no encontrado</h1>;
            }
            setProductDetail({id: data.id, ...data.data()})
            setLoading(false);
        })
        .catch(err => console.log(err));
    }, []); 
        

    return (
        <div>
        {   loading ? <h3>Cargando producto...</h3>
            :
            productDetail.id &&
            <ItemDetail producto={productDetail} />
        }           
        </div>
    )
}

export default ItemDetailContainer;