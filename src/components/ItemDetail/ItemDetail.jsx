import { Card } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail({producto}) {
      const {addItem} = useCartContext()

    const onAdd = (count) =>{
        addItem(producto, count)
      }

    return (
        <div className='card'>
            <Card style={{ width: '18rem' }} key={producto.id}>
                <Card.Body>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Title>
                    {producto.title}</Card.Title>
                    <Card.Text>
                    {producto.descripcion}
                    </Card.Text>
                    <h3>S/.{producto.price}</h3>
                    <Card.Footer>
                    <ItemCount initial={1} stock={12} onAdd={onAdd} addItem={addItem} />
                    </Card.Footer>
                </Card.Body>
            </Card>   
        </div>
    )
}
