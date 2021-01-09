import React, { Component } from 'react';
import ShoppingListItems from './ShoppingListItems';
import ListActions from './ListActions';
import AddItem from './AddItem';

export default class ShoppingListPage extends Component {
    state = {
        items: [
            {
                name: 'Milk',
                count: 2
            },
            {
                name: 'Eggs',
                count: 12
            },
            {
                name: 'Honey',
                count: 1
            },
        ]
    }

    addItem = (name, count) => {
        this.setState({items: [...this.state.items, {name, count}] })
    }


    render() {
        return (
            <div>
                <AddItem addItem={this.addItem}/>
                <ShoppingListItems items={this.state.items}/>
                <ListActions/>
            </div>
        )
    }
}
