import React, { useState} from 'react'
import LoginImg from '../../img/panda.jpg'
import AddItem from './AddItem'
import ShoppingItems from './ShopingItems'
import CategoryNotes from './shoppingListNotes/CategoryNotes.jsx'
import '../../style/style.scss'
import ShoppingCatgories from '../shoppingListCatgories/ShoppingCatgroies'
import ShoppingListNotebook from './shoppingListNotebook/ShoppingListNotebook.jsx';
import {
    vegetablesImg,
    fruitsImg,
    meatfishImg,
    milkImg,
    alcoholImg,
    pharmImg,
    hygieneImg,
    beautyImg,
    otherImg
} from '../shoppingListCatgories/ImportImage';

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
    },
    {
        type: 'dairy',
        image: milkImg
    },
    {
        type: 'alchol',
        image: alcoholImg
    },
    {
        type: 'pharm',
        image: pharmImg
    },
    {
        type: 'hygiene',
        image: hygieneImg
    },
    {
        type: 'beauty and cosmetics',
        image: beautyImg
    },
    {
        type: 'others',
        image: otherImg
    }
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
                return {name, category: item.category, count, checked: item.checked};
            } else return item;
        });
        setItems(incrementArr);
        
    }

    const filterByCategory = (category) => {
        setSelectedCategory(category)
    }

    const toggleChecked = name => {
        setItems([...items].map(item => item.name === name ? {...item, checked: !item.checked} : item));
    }


    return (
        <div className="categories-card-note">
            <CategoryNotes items={items} filterByCategory={filterByCategory} categories={categories} />
            {/* <div className="main-container"> */}
                {/* <AddItem addItem={addItem} onClick={addItem} /> */}
                {/* <div className="categories-card"> */}
                    {/* <ShoppingCatgories filterByCategory={filterByCategory} categories={categories}/> */}
                {/* </div> */}
                {/* <ShoppingItems items={items.filter(item => item.category === selectedCategory || selectedCategory === 'none')}  removeItem={removeItem} changeCount={changeCount} /> */}
                
            {/* </div> */}
            {/* <AddItem addItem={addItem} onClick={addItem} /> */}
            {/* <div className="categories-card">
                <ShoppingCatgories filterByCategory={filterByCategory} categories={categories}/>
            </div>
            <ShoppingItems items={items.filter(item => item.category === selectedCategory || selectedCategory === 'none')}  removeItem={removeItem} changeCount={changeCount} /> */}
            {/* <ShoppingListNotebook items={items} removeItem={removeItem} changeCount={changeCount} toggleChecked={toggleChecked} /> */}
        </div>
    )
}

export default ShoppingList

