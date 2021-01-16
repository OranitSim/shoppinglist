import React from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

function NotebookItem({item, changeCount, removeItem, toggleChecked}) {
    const { name, count, checked } = item;

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

    return (
        <div>
            <section className="notebook-item">
                <div onClick={() => handleToggleChecked(name)}
                    className={`notebook-item-details${checked ? " notebook-item-checked" : ""}`}>
                    <IoClose onClick={e => handleRemove(e, name)} className="notebook-remove-icon" />
                    <div className="notebook-item-text">
                        <span>{name}</span>
                        <div className="notebook-space"></div>
                        <span>{count}</span>
                    </div>
                </div>
                <div>
                    <BiMinus onClick={e => handleChangeCount(e, name, count - 1)} className="notebook-count-icon" />
                    <BiPlus onClick={e => handleChangeCount(e, name, count + 1)} className="notebook-count-icon" />
                </div>
            </section>
        </div>
    )
}
export default  NotebookItem;