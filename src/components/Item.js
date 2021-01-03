import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (event) => {
    this.props.store.checkItem(event.target.value)
  }
  editItem = () => {
    let newLocation = prompt("Input the new Location for the item!");
    this.props.store.editItem(this.props.item.name,newLocation)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className = {item.completed ? "crossed": null}>
      <input type="checkbox" onClick = {this.checkItem} 
          value={item.name}/> 
          {item.name} - at {item.location}
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>)
}
}

export default observer(Item)