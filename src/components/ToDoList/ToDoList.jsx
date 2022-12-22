import React, { Component } from 'react'
import ToDo from '../ToDo/ToDo'

export default class ToDoList extends Component {
  render() {
    const { todos } = this.props
  
   
    return (
      <div className='todo-containier'>
        <ul className='todo-list'>
          {todos.map((todo) => (
            <ToDo todo={todo} todos={todos} key={todo.id} text={todo.text} />
          ))}
        </ul>
      </div>
    )
  }
}


