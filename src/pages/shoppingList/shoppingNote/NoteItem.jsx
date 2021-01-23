import React from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import '../../../style/style.scss'

function NoteItem({ items, changeCount, removeItem, toggleChecked}) {
    const handleRemove = (e, name) => {
        e.stopPropagation();
        removeItem(name);
    }

    const handleChangeCount = (e, name, count) => {
        e.stopPropagation();
        changeCount(count, name);
    }

    const handleToggleChecked = name => {
        toggleChecked(name);
    }


    return items.map (({name,count}) => { return ( 
        <div>
            <section>
                <div onClick={() => handleToggleChecked(name)}>
                    <IoClose onClick={e => handleRemove(e, name)} className="note-remove-icon" />
                    <div>
                        <span>{name}</span>
                        <div></div>
                        <span>{count}</span>
                    </div>
                   
                </div>   
                <div>
                    <BiMinus onClick={e => handleChangeCount(e, name, count - 1)} className="note-count-icon" />
                    <BiPlus onClick={e => handleChangeCount(e, name, count + 1)} className="note-count-icon" />
                </div>
            
            </section>    
        </div>
    )})
}

export default NoteItem
