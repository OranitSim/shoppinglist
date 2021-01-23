import React, { Component } from 'react'
import { COMPLETED, DELETE } from '../../utils/enums';
import '../../style/pages/shoppingList/shoppingList.scss';

export default class ListActions extends Component {
    state = {
        buttons: [
            { 
                title: 'Delete',
                onClick: () => this.props.onAction(DELETE),
                color: '#ff0000',
                hoverColor: '#fe8686',
                isHovered: false
            },
            { 
                title: 'Completed',
                onClick: () => this.props.onAction(COMPLETED),
                color: '#4caf50',
                hoverColor: '#b1eab4',
                isHovered: false
            }
        ]
    }

    toggleHoverState = title => {
        this.setState({ buttons: this.state.buttons.map(btn => {
            if (btn.title === title) btn.isHovered = !btn.isHovered
            return btn;
        }) });
    }

    render() {
        return (
            <div className="list-actions-container">
                {this.state.buttons.map((btn, idx) => {
                    return <button onClick={btn.onClick} key={idx} style={{backgroundColor: btn.isHovered ? btn.hoverColor : btn.color}} className="action-btn" onMouseOver={this.toggleHoverState.bind(this, btn.title)}
                    onMouseLeave={this.toggleHoverState.bind(this, btn.title)}>{btn.title}</button>
                })}
            </div>
        )
    }
}
