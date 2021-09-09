import React from 'react'
import Item from './Item';

export default function ItemList({items}) {
    return (
        <>
        { items.map((item)=> 
        <div className="d-flex p-2">
             <Item key={item.id} item={item} />
        </div> ) } 
        </>
    )
}
