import { useCartContext } from "../../Context/CartContext"
import ShowCart from "./ShowCart";
import CartEmpty from "./CartEmpty";


export default function Cart() {
      const {producto} = useCartContext()
    
    return (
        <>
        {producto.length ? 
        <ShowCart />
             :
        <CartEmpty/>
             }    
        </>
    )
} 
