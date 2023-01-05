import React, { Component } from 'react'
import './Form.css'

export default class ToDoList extends Component {
  render() {
    // Destructuring
    const { inputTextHandler } = this.props
    const { submitToDoHandler } = this.props

    return (
      <form className='searchbox'>
        <input value={this.props.inputText} onChange={inputTextHandler} type='text' className='todo-input'/>
        <button className="fa-solid fa-plus form-btn" onClick={submitToDoHandler} type='submit'></button>
      </form>
    )
  };
}
