import React, { Component } from 'react'
import ListItem from './ListItem.jsx';

export default class ShoppingListItems extends Component {
    render() {
        return (
            <div>
                {this.props.items.map((item, idx) => {
                    return <ListItem item={item} key={idx} />
                })}
            </div>
        )
    }
}
