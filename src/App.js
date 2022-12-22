import './App.css';
import { Component } from 'react';
import NavBar from './components/nav_bar/NavBar';
import Footer from './components/footer/Footer'
// import BasicSpeedDial from './components/speed_dial/speed_dial';
import ToDoList from './components/ToDoList/ToDoList';
import Form from './components/Form/Form';


class App extends Component {
  constructor() {
    super()
    this.state = {
      inputText: '',
      todos: [],
    }
  }

  inputTextHandler = (event) => {
    const inputText = event.target.value
    this.setState(() => {
      return { inputText: inputText }
    })
  }

  submitToDoHandler = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        todos: [
          ...this.state.todos,
          { text: this.state.inputText, completed: false, id: Math.random() * 1000 }
        ]
      }
    })
    this.setState(() => {
      return{
        inputText: ''
      }
  })
  }
  

    render() {
      // Destructuring
      const { inputText } = this.state
      const { inputTextHandler } = this
      const { submitToDoHandler } = this
      const { todos } = this.state
      

      return (
        <div className='App'>
          <NavBar />
          <h1>My To-Do List</h1>
          <Form inputText={inputText} inputTextHandler={inputTextHandler} submitToDoHandler={submitToDoHandler} />
          <ToDoList todos={todos}/>
          {/* <BasicSpeedDial/> */}
          <Footer />
        </div>
      );
    }
  }



export default App;