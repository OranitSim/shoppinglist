import React from 'react';
import Category from './Category'


function ShoppingCatgroies({categories, filterByCategory}) {



    return categories.map(category => { return (
            <Category key={category.type} filterByCategory={filterByCategory} type={category.type} image={category.image}/>
    )})
}

export default ShoppingCatgroies
