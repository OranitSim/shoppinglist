import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <span>
                    { this.props.item.name}
                </span>
                
                <span>
                    { this.props.item.count}
                </span>

            </div>
        )
    }
}
