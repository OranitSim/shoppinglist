import React from 'react';
import Note from './Note.jsx'

function NoteItemsList({items, categories, changeCount, removeItem, toggleChecked}) {
    return categories.map(category => {
        return (
            <Note items={items.filter(item => item.category === category.type)}
             key={category.type}
             type={category.type}
             changeCount={changeCount} 
             removeItem={removeItem} toggleChecked={toggleChecked}/>
        )
    })
      
    
}

export default NoteItemsList
