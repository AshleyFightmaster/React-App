import React, { Component } from 'react'
import './ToDo.css'
export default class ToDo extends Component {
    
   
        
    
  render() {
    const {deleteHandler} =this.props
    const {completedHandler} = this.props
    const { inputText } = this.props
    const { todo } = this.props

    console.log('refresh todo')
    
    return (
      <div className='todo'>
        <li className='todo-item' >{todo['text']}</li>
        <button onClick={completedHandler} className='fa-solid fa-check done-btn'></button>
        <button value={inputText} onClick={deleteHandler} className="fa-regular fa-trash-can delete-btn"></button>
      </div>
    )
  }
}
