 import React, { Component } from 'react'
import ToDo from '../ToDo/ToDo'
import './ToDoList.css'

export default class ToDoList extends Component {
  // Events
  deleteHandler = (event) => {
    event.preventDefault();
    let index = this.props.todos.indexOf(this.props.todo)
    // console.log(index)
    // console.log(this.props.todos.splice(index, 1))
    this.setState(() => {
      console.log(this.props.todos)
      return {
        todos: this.props.todos.splice(index, 1)
      }
    })
  }

  completedHandler = () => {
    this.setState(
      this.props.todos.map((item) => {
        if (item.id === this.props.todo.id) {
          return {
            ...this.state.item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }
  // if (event.target.previousSibling.innerText.style.textDecoration){
  //   event.target.previousSibling.innerText.style.removeProperty('text-decoration');
  // } else {
  //   event.target.previousSibling.innerText.style.setProperty('text-decoration', 'line-through');
  // }



render() {
  const { deleteHandler } = this
  const { completedHandler } = this
  const { inputText } = this.props
  const { todos } = this.props



  console.log('refresh list')
  return (
    <div className='todo-containier'>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <ToDo key={todo['id']} deleteHandler={deleteHandler} completedHandler={completedHandler} inputText={inputText} todos={todos} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
}


