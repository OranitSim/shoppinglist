import React from 'react';
import '../../../style/pages/shoppingListNotebook/shoppingListNotebook.scss';
import NotebookItemsList from './NotebookItemsList.jsx';

function ShoppingListNotebook({items, changeCount, removeItem, toggleChecked}) {
    return (
        <div className="notebook-container">
            <NotebookItemsList items={items} changeCount={changeCount} removeItem={removeItem} toggleChecked={toggleChecked}/>
        </div>
    )
}
export default ShoppingListNotebook;