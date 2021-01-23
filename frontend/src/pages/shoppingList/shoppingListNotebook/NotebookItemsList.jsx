import React from 'react';
import NotebookItem from './NotebookItem.jsx';

function NotebookItemsList({items, changeCount, removeItem, toggleChecked}) {
    return items.map(item => {
                return (
                    <NotebookItem key={item.name} item={item} changeCount={changeCount} removeItem={removeItem} toggleChecked={toggleChecked}/>
                )
            })
}
export default NotebookItemsList;