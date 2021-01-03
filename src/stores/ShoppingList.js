/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = this.list.length
        
        makeObservable(this,{
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem: action
        })

    }
    
    checkItem = (name) =>
    {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    addItem = (name) => {
        let newItem = new Item(name)
        this.list.push(newItem)
        this.length++
    }
    editItem = (itemName, newLocation) => {
        this.list.find(i => i.name === itemName).location = newLocation

    }
    deleteItem = (itemName) => {
        let index = this.list.findIndex(item => item.name === itemName)
        this.list.splice(index,1)
    }
}

