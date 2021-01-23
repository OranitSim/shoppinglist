import React from 'react';
import NoteItemsList from './NoteItemsList.jsx'
import '../../../style/style.scss'
import AddItem from '../AddItem.jsx'


function ShoppingListNote({items, categories, changeCount, removeItem, toggleChecked}) {
    return (
        <div className="categories-card-note" >
        <NoteItemsList items={items} 
        categories={categories}
        changeCount={changeCount} 
        removeItem={removeItem} 
        toggleChecked={toggleChecked}/>
            
        </div>
    )
}

export default ShoppingListNote
