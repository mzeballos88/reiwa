import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getFirestore } from "../../service/getFirebase";
import firebase from "firebase";
import 'firebase/firestore';

const initialState = {
    nombre: '',
    email: '',
    telefono: '',
}

export default function ShowCart() {

    const {producto, clear, removeItem, showTotal} = useCartContext() 
    const [form, setForm] = useState(false);
    
    const showForm=()=> {
        setForm(true)
       }
    const [formData, setFormData] = useState (initialState)

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    function handleSumit(e){
        e.preventDefault()
        const newOrder={
            buyer: formData,
            items: producto,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: showTotal(),
        }

        const database = getFirestore()
        const orders = database.collection('orders')

        orders.add(newOrder)
        .then(respuesta => alert( `Gracias por tu compra! tu numero de orden es: ${respuesta.id}`))
        .catch(err => console.log(err))
        .finally(()=>{
            setFormData(initialState)
            clear()
        })
    }
    
    return (
        <>
        <h1>Resumen de tu Pedido</h1>
            {producto.map (prod => 
            <div>
                <Card>
                    <Card.Header>Producto</Card.Header>
                    <Card.Body>
                        <Card.Title><h2>{prod.item.title} x({prod.quantity}und)</h2></Card.Title>
                        <Card.Text>
                        <Card.Img variant="top" style={{ width: '7rem' , margin: '1rem' }} src={prod.item.img} />
                            Precio: S/.{prod.item.price}
                            <br/>
                            {prod.item.descripcion} 
                            <br/>
                            Categoría: {prod.item.categoria}
                        </Card.Text>
                        <Button variant="dark" size="lg" onClick={() =>removeItem(prod.item.id)}>
                            Borrar item
                        </Button>
                    </Card.Body>
                </Card>
          </div>
          )}
          <h1>El total es: S/.{showTotal()}</h1>
            <hr/>  
            <Button variant="dark" size="lg" style={{ margin: '1rem' }} onClick={clear}>
                Vaciar Carrito
            </Button>
            <NavLink to='/' >
             <Button variant="dark" size="lg">
               Seguir comprando
             </Button>
            </NavLink>  
            {
            form ?
            (
                <div class="mb-5">
                    <h1>Completa los siguientes campos para proceder: </h1>
                    <form 
                    onChange={handleChange}
                    onSubmit={handleSumit}>
                        <label>Nombre
                        <br/>                    
                        <input type="text" placeholder="Ingrese Nombre" name="nombre" value={formData.nombre}/>
                        </label>
                        <label>Teléfono
                        <br/> 
                        <input type="text" placeholder="Ingrese Teléfono" name="telefono" value={formData.telefono}/>
                        </label>
                        <label>Email
                        <br/> 
                        <input type="email" placeholder="Ingrese Email" name="email" value={formData.email}/>
                        </label>
                        <label>Confirmar email
                        <br/> 
                        <input type="email" placeholder="Confirme Email" name="email2"/>
                        </label>
                        <br/> 
                        <Button type="sumit" variant="dark" size="lg" style={{ margin: '1rem' }}>
                            ¡Generar Orden!
                        </Button>
                        
                    </form>  
                </div>)
            :
           (
            <Button variant="dark" size="lg" style={{ margin: '1rem' }} onClick={showForm}>
                Terminar compra
            </Button>       
            )
            }  
        </>
    )
} 

