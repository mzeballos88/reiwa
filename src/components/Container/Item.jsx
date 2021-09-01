import React from 'react'
import { Card } from 'react-bootstrap'

export default function Item({item}) {
    return (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <h3>{item.price}</h3>
                    </Card.Body>
                </Card>

    )
}
