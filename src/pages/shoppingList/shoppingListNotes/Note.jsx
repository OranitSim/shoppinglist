import React from 'react';
import '../../../style/style.scss';
import ShoppingItems from './ItemsNote.jsx';

function Note({items,filterByCategory, type, removeItem, changeCount}) {
    return (
        <div className="category-notes"> 
            <h1 className="note-name-cat"> {type} </h1>
            <ShoppingItems className="note-item-style" items={items}  />
        
        

        </div>
        
    )
}

export default Note
