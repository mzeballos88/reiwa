import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail({producto}) {
    const {id} = useParams()

    const {addItem} = useCartContext()

    const onAdd = (count) =>{
        addItem({item: producto, quantity: count})
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
                    <ItemCount initial={1} stock={12} onAdd={onAdd} addItem={addItem} />
                    </Card.Footer>
                </Card.Body>
            </Card>   
        </div>
    )
}
