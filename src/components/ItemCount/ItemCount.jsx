import React, { useState} from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function ItemCount({initial, stock, onAdd}) {

    const [count, setCount] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(false);
   
    const sumaClick = () => {
      if(count < stock) setCount(count + 1);
    
    }

  const restaClick = () => {
    if(count > initial) setCount(count - 1);
    }

  const handlerOnAdd=()=> {
    onAdd(count)
    setCount(initial)
    setCambiarBoton(true)
   }

  
    return (
        <div>
              <label>Cantidad</label> <br />
             <button className="btn" onClick={sumaClick}>+</button>
             <h3>{count}</h3>
             <button className="btn" onClick={restaClick}>-</button><br />
             {
               cambiarBoton ? 
             (<div className="d-grid gap-2">
             <NavLink to='/cart' >
             <Button variant="dark" size="lg">
               Ir al carrito
             </Button>
             </NavLink>
             <NavLink to='/' >
             <Button variant="dark" size="lg">
               Seguir comprando
             </Button>
             </NavLink> 
           </div>)
                :                
              (<div className="d-grid gap-2">
              <Button variant="dark" size="lg" onClick={handlerOnAdd}>
                Agregar al carrito
              </Button>
              <NavLink to='/'>
              <button className="btn btn-outline-dark">← Regresar</button>
              </NavLink>

            </div>)
            }
        </div>
    )
}
