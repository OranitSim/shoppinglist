import React, { Component } from 'react'

export default class AddItem extends Component {
    state = {
        name: "",
        count: 0
    }

    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setCount = (e) => {
        this.setState({count: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.setName}/>
                <input type="number" onChange={this.setCount} />
                <button onClick={this.props.addItem.bind(this, this.state.name, this.state.count)}>
                    Add
                </button>

            </div>
        )
    }
}
