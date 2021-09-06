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
              <label>Cantidad</label> <br />
             <button className="btn" onClick={sumaClick}>+</button>
             <h3>{count}</h3>
             <button className="btn" onClick={restaClick}>-</button><br />
             <button className="btn btn-dark" onClick={handlerOnAdd}>Agregar</button>
        </div>
    )
}
