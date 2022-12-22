import React, { Component } from 'react';
import './foot.css'

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
    

        return (
            <div>
                <footer className='footer'>
                    <p className='footer-text'>©To-Do 2022</p>
                </footer>
            </div>
        )
    }
}
