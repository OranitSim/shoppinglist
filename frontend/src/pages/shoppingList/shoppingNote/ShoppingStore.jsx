import React, { useState} from 'react';
import AddItem from '../AddItem.jsx';
import ShoppingListNote from './ShoppingListNote.jsx';
import '../../../style/style.scss'




function ShoppingStore({items, setItems, categories, setCategories}) {
    const [selectedCategory, setSelectedCategory] = useState('none');
    const removeItem = nameToRemove => {
        const removeArr = [...items.filter(({name}) => name !== nameToRemove )]
        setItems(removeArr);
    }

    const addItem = newItem => {
        let isItemInList = false;
        items.forEach(({ name}) =>{
            if (newItem.name === name ) {
                isItemInList = true;
            }
        } )
        if (isItemInList) return console.error("you cant add this item, it already exist :( ")
        else setItems([...items, newItem])
    }
   

    const changeCount = (count, name) => {
        console.log(count,name)
        const incrementArr = [...items].map( item => {
            if ( item.name === name ) {
                return {name, category: item.category, count, checked: item.checked};
            } else return item;
        });
        setItems(incrementArr);
        
    }

    const toggleChecked = name => {
        setItems([...items].map(item => item.name === name ? {...item, checked: !item.checked} : item));
    }
    console.log(items)




    return (
        <div className="container-notes">
            <AddItem onClick={addItem}/>
            <ShoppingListNote items={items}
            categories={categories} 
            removeItem={removeItem} 
            changeCount={changeCount} 
            toggleChecked={toggleChecked} />
            

            
        </div>
    )
}

export default ShoppingStore
