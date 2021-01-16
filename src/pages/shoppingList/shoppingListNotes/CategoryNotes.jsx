import React from 'react';
import '../../../style/style.scss';
import Note from './Note.jsx';

function CategoryNotes({items, categories, filterByCategory}) {
    return categories.map(category => { return (
        
        <Note items={items.filter(item => item.category === category.type)}  key={category.type} type={category.type} />
)})

}

export default CategoryNotes
