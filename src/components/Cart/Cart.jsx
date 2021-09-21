import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext"
import { NavLink } from 'react-router-dom';




export default function Cart() {
    
    const {producto, clear, removeItem, precioTotal} = useCartContext()
    
    
    return (
        <>
        <h1>Resumen de tu Pedido</h1>
            {producto.map (prod => 
            <div>
                <Card>
                    <Card.Header>Producto</Card.Header>
                    <Card.Body>
                        <Card.Title><h2>{prod.item.title} x{prod.quantity}</h2></Card.Title>
                        <Card.Text>
                        <Card.Img variant="top" style={{ width: '7rem' , margin: '1rem' }} src={prod.item.img} />
                            {prod.item.description}
                            <br/>
                            Categoría: {prod.item.categoria}
                        </Card.Text>
                        <Button variant="dark" size="lg" onClick={() =>removeItem(prod.item.id)}>
                            Eliminar Item
                        </Button>
                    </Card.Body>
                </Card>
          </div>
          )}
          <h1>El total es: S/.{precioTotal()}</h1>
            <hr/>  

            <Button variant="dark" size="lg" style={{ margin: '1rem' }} onClick={clear}>
                Vaciar Carrito
            </Button>
            <NavLink to='/' >
             <Button variant="dark" size="lg">
               Seguir comprando
             </Button>
             </NavLink>      
        </>
    )
} 
