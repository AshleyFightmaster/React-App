import React, { Component } from 'react'

export default class ToDo extends Component {
    
    // Events
    deleteHandler = () => {
        let index = this.props.todos.indexOf(this.props.todo)
        console.log(index)
        console.log(this.props.todos.splice(index, 1))
        
    }
  render() {
    const {text} = this.props
    const {deleteHandler} =this
    
    return (
      <div className='todo'>
        <li className='todo-item'>{text}</li>
        <button className='complete-btn'>Completed</button>
        <button onClick={deleteHandler} className='trash-btn'>Trash</button>
      </div>
    )
  }
}
