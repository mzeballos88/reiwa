import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({producto}) {
    const onAdd = (count) =>{
        console.log(`La cantidad es: ${count}`)
        /*alert(`La cantidad es: ${count}`)*/
      }
    return (
        <div className='card'>
            <Card style={{ width: '18rem' }} key={producto.id}>
                <Card.Body>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Title>
                    {producto.title}</Card.Title>
                    <Card.Text>
                    {producto.description}
                    </Card.Text>
                    <h3>{producto.price}</h3>
                    <Card.Footer>
                    <ItemCount initial={1} stock={12} onAdd={onAdd} />
                    </Card.Footer>
                    <NavLink to='/'>
                    <button className="btn btn-outline-dark">← Regresar</button>
                    </NavLink>
                </Card.Body>
            </Card>   
        </div>
    )
}
