import { useState, createContext, useContext} from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({children}) {
    const [producto, setProducto] = useState([])
    

    const addItem = (prod, count) => {
        if(isInCart(prod.id)){
            const updateCart = [...producto];
            updateCart.forEach((element) =>{
                if(element.item.id === prod.id) {
                    element.quantity += count
                }
            })
        setProducto(updateCart)
        } else {
  
        setProducto([...producto, {item: prod, quantity: count}])   
    }
}
    const isInCart = (id) =>{
        return producto.find(element => element.item.id === id)
    }

    const clear = () => setProducto([])
    
    const removeItem = (item) => {
        const cartFilter = producto.filter((prod) => prod.item.id !== item.item.id)
        return setProducto([...cartFilter]);

    }
/*     const removeItem = (id) => {
        const cartFilter = producto.filter(element => element.item.id !== id)
        return setProducto(cartFilter)
    } */

    const iconCart = () => {
        return producto.reduce ((acum, valor) => acum + valor.quantity, 0)
    }

    const precioTotal = () =>{
        return producto.reduce ((acum, valor)=> (acum + (valor.quantity * valor.item.price)),0)
    }

    console.log(producto)

    return (
        <CartContext.Provider value ={{
            producto,
            addItem,
            clear,
            removeItem,
            precioTotal,
            iconCart
        }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

