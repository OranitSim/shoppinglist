import React from 'react'
import {
vegetablesImg,
fruitsImg,
meatfishImg
} from './ImportImage'

function Category({filterByCategory, image, type}) {
    return (
        <div className="category" onClick={() => filterByCategory(type)} >
            <img src={image} className="category-img" />
            <div className="category-name">
                <h1> {type} </h1>
            </div>
        </div>
      
    )
}

export default Category






