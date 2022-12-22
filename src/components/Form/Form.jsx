import React, { Component } from 'react'

export default class ToDoList extends Component {
  render() {
    // Destructuring
    const { inputTextHandler } = this.props
    const { submitToDoHandler } = this.props

    return (
      <form>
        <input value={this.props.inputText} onChange={inputTextHandler} type='text' className='todo-input'/>
        <button onClick={submitToDoHandler} className='todo-btn' type='submit'>Add</button>
      </form>
    )
  };
}
