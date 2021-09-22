import { useCartContext } from "../../Context/CartContext"
import MostrarCart from "./MostrarCart";
import CartVacio from "./CartVacio";


export default function Cart() {
      const {producto} = useCartContext()
    
    return (
        <>
        {producto.length ? 
        <MostrarCart />
             :
        <CartVacio/>
             }    
        </>
    )
} 
