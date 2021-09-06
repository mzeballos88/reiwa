import {React , useEffect , useState } from 'react'
import ItemDetail from './ItemDetail';

const prod = {id:1, title: "Chasu Tamago", price: "S/.19", img: "https://bit.ly/3DvaDmk", description: "Finas láminas de cerdo flameadas, acompañadas con huevito ajitsuke."};

const getProduc = new Promise((resuelto)=> {
    setTimeout(() => {
        resuelto(prod)
    }, 2000);   
})


export default function ItemDetailContainer() {
    const [producto,setProducto] = useState ({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getProduc
        .then(resp => {
            setProducto(resp)
            setloading(false)
        })
    },[])

    return (
        <>
            {loading ? <h3>Cargando Productos!</h3>
            :
            <ItemDetail producto={producto} />
            }
            
        </>
    )
}
