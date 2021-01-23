import React from 'react'
import NoteItem from './NoteItem'
import '../../../style/style.scss'

function Note({items,filterByCategory, type, removeItem, changeCount, toggleChecked}) {
    return (
        <div className="note">
            <h1> {type} </h1>
            <NoteItem items={items}  changeCount={changeCount}  removeItem={removeItem} toggleChecked={toggleChecked}/>
            
        </div>
    )
}

export default Note
