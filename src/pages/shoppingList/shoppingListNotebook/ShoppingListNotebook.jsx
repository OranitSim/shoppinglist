import React from 'react';
import '../../../style/pages/shoppingListNotebook/shoppingListNotebook.scss';
import NotebookItemsList from './NotebookItemsList.jsx';

function ShoppingListNotebook({items}) {
    return (
        <div className="notebook-container">
            <NotebookItemsList items={items} />
        </div>
    )
}
export default ShoppingListNotebook;