import React, { useState } from "react";
import { Card } from "react-bootstrap";


export default function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);
    const sumaClick = () => {
      if(count < stock) setCount(count + 1);
    
    }

  const restaClick = () => {
    if(count > initial) setCount(count - 1);
    }

  const handlerOnAdd=()=> {
    onAdd(count)
    setCount(initial)
   }

  
    return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://bit.ly/3DvaDmk" />
            <Card.Body>
              <Card.Title>Chasu Tamago <br/> チャーシュー玉子</Card.Title>
              <Card.Text>
              Finas láminas de cerdo flameadas, acompañadas con huevito ajitsuke.
              </Card.Text>
              <label>Cantidad</label> <br />
             <button className="btn" onClick={sumaClick}>+</button>
             <h3>{count}</h3>
             <button className="btn" onClick={restaClick}>-</button><br />
             <button className="btn btn-dark" onClick={handlerOnAdd}>Agregar</button>
            </Card.Body>
        </Card>
        </div>
    )
}
