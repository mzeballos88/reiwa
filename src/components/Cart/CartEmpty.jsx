import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function CartEmpty() {
    return (
        <div>
            <h1>Tu carrito se encuentra vacío</h1>
             <NavLink to='/' >
             <Button variant="dark" size="lg">
               ¡Ir a comprar!
             </Button>
             </NavLink>
        </div>
    )
}
