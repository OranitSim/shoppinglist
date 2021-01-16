import React from 'react';
import NotebookItem from './NotebookItem.jsx';

function NotebookItemsList({items}) {
    return items.map(item => {
                return (
                    <NotebookItem item={item} />
                )
            })
}
export default NotebookItemsList;