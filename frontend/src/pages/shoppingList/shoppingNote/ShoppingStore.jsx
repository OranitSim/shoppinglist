import React, { useState} from 'react';
import AddItem from '../AddItem.jsx';
import ShoppingListNote from './ShoppingListNote.jsx';
import '../../../style/style.scss'
const proudects = [
    {
        name: 'Milk',
        count: 2,
        category: 'dairy',
        checked: false
    },
    {
        name: 'Eggs',
        count: 12,
        category: 'others',
        checked: false
    },
    {
        name: 'Honey',
        count: 1,
        category: 'others',
        checked: false
    },
    {
        name: 'Apple',
        count: 1,
        category: 'fruits',
        checked: false
    }
]

const defCategories = [
    {
        type: 'vegtables'
    },
    {
        type: 'fruits'
    },
    {
        type: 'meat&fish'
    },
    {
        type: 'dairy'
    },
    {
        type: 'alchol'
    },
    {
        type: 'pharm'
    },
    {
        type: 'hygiene'
    },
    {
        type: 'beauty and cosmetics'
    },
    {
        type: 'others'
    }
]

function ShoppingStore() {
    const [items, setItems] = useState(proudects);
    const [categories, setCategories] = useState(defCategories);
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
