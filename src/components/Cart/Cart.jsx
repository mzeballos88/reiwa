import React from 'react'
import { Button } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext"
import { NavLink } from 'react-router-dom';

export default function Cart() {
    
    const {clear, removeItem} = useCartContext()
    
    
    return (
        <div>
            <Button variant="dark" size="lg" onClick={removeItem}>
                Eliminar Item
            </Button>
            <hr/>    
            <Button variant="dark" size="lg" onClick={clear}>
                Vaciar Carrito
            </Button> 
             <hr/>  
            <NavLink to='/' >
             <Button variant="dark" size="lg">
               Seguir comprando
             </Button>
             </NavLink>     

        </div>
    )
}
