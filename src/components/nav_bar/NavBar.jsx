import React, { Component } from 'react';
import "./nav.css"


export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
    
   
        return (
            <div>
                <nav className='nav-bar'>
                    <a className='nav-text' href='#'>Home</a>
                    <br/>
                    <a className='nav-text' href='#'>To-Do</a>
                    <br/>
                    <a className='nav-text' href ='#'>Done</a>
                </nav>
            </div>
        )
    }
}