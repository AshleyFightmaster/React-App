import './App.css';
import { Component } from 'react';
import NavBar from './components/nav_bar/nav';
import Footer from './components/footer/footer'


class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className='App'>
      <NavBar/>
      <p>This is my body.</p>
      <Footer/>
      </div>
    );
  }
}


export default App;