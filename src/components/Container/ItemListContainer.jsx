import React from 'react'
import "./ContainerStyle.css"

const ItemListContainer = ({ 
    greeting = "Un lugar donde encontrarás auténtica comida japonesa."}) => {
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;
