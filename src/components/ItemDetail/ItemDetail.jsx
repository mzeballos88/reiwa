import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function ItemDetail({producto}) {
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
                    <NavLink to='/'>
                    <button className="btn btn-dark">Regresar</button>
                    </NavLink>

                </Card.Body>
            </Card>   
        </div>
    )
}
