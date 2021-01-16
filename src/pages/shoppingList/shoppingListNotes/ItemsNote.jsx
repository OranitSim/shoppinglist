import React from 'react'

function ItemsNote({items}) {
    return items.map(({name,count}) => {return (
    <div className="note-item-style"
    key={name} > 
    {name} <input className="note-count-num" type="number" 
    value={count} /> </div>
 
      
    
    )})
}

export default ItemsNote
