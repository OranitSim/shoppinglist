import React from 'react'

function NotebookItem({item}) {
    console.log('Name', item.name)
    return (
        <div className="notebook-item">
            <span>{item.name}</span>
            <div className="notebook-space"></div>
            <span>{item.count}</span>
        </div>
    )
}
export default  NotebookItem;