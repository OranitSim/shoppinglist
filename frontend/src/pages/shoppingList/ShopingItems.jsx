import React, {useState} from 'react'
import { AiFillDelete, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import {FiPlus, FiMinus} from 'react-icons/fi'
import {BiMinus} from 'react-icons/bi'

function ShoppingItems({items, removeItem, changeCount}) {
    
    

    return items.map(({name,count}) => {return (
        <div className="item"
            key={name} >
                <AiFillDelete onClick={() => removeItem(name)} className="remove-button"/>
            <div className="item-name" >
                {name}
            </div>
            <div className="count-container">
                <FiMinus onClick={() => changeCount(count-1,name)} />
                <input className="count-num" type="number" 
                value={count}
                onChange={e => e.preventDefault} />
                <FiPlus onClick={() => changeCount(count+1,name)} /> 
            </div>
        </div>   
        
       
   
   )})
}

export default ShoppingItems

