import React, { useState} from 'react'
import LoginImg from '../../img/panda.jpg'
import AddItem from './AddItem'
import ShoppingItems from './ShopingItems'
import '../../style/style.scss'
import ShoppingCatgories from '../shoppingListCatgories/ShoppingCatgroies'
import ShoppingListNotebook from './shoppingListNotebook/ShoppingListNotebook.jsx';
import {
    vegetablesImg,
    fruitsImg,
    meatfishImg
} from '../shoppingListCatgories/ImportImage';

const proudects = [
    {
    name: 'Milk',
    count: 2,
    category: 'dairy'
    },
    {
        name: 'Eggs',
        count: 12,
        category: 'others'
    },
    {
        name: 'Honey',
        count: 1,
        category: 'others'
    },
    {
        name: 'Apple',
        count: 1,
        category: 'fruits'
    }
]

const defCategories = [
    {
        type: 'vegtables',
        image: vegetablesImg
    },
    {
        type: 'fruits',
        image: fruitsImg
    },
    {
        type: 'meat&fish',
        image: meatfishImg
    }
    // {
    //     type: 'dairy',
    //     image: milkImg
    // },
    // {
    //     type: 'alchol',
    //     image: alcholsImg
    // },
    // {
    //     type: 'pharm',
    //     image: pharmImg
    // },
    // {
    //     type: 'others',
    //     image: othersImg
    // }
]

function ShoppingList() {
    const [items, setItems] = useState(proudects);
    const [categories, setCategories] = useState(defCategories);
    const [selectedCategory, setSelectedCategory] = useState('none');

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
   

    const removeItem = nameToRemove => {
        const removeArr = [...items.filter(({name}) => name !== nameToRemove )]
        setItems(removeArr);
    }

    const changeCount = (count, name) => {
        console.log(count,name)
        const incrementArr = [...items].map( item => {
            if ( item.name === name ) {
                return {name, category: item.category, count};
            } else return item;
        });
        setItems(incrementArr);
        
    }

    const filterByCategory = (category) => {
        setSelectedCategory(category)
    }


    return (
        <div className="main-container">
            {/* <AddItem addItem={addItem} onClick={addItem} />
            <div className="categories-card">
                <ShoppingCatgories filterByCategory={filterByCategory} categories={categories}/>
            </div>
            <ShoppingItems items={items.filter(item => item.category === selectedCategory || selectedCategory === 'none')}  removeItem={removeItem} changeCount={changeCount} /> */}
            <ShoppingListNotebook items={items} removeItem={removeItem} changeCount={changeCount} />
        </div>
    )
}

export default ShoppingList

