import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
/*import { useCartContext } from '../../Context/CartContext'*/

export default function Item({item}) {
   /*const producto = useCartContext()*/

    return (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <h3>{item.price}</h3>
                    </Card.Body>
                    <NavLink to ={`/item/${item.id}`}>
                        <button className="btn btn-dark">Ver detalle</button>
                    </NavLink>
                </Card>

    )
}
