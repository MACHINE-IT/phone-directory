import React, { Component } from 'react';
import Header from './Header';
import ShowSubscribers from './ShowSubscribers';
import PhoneDirectory from './PhoneDirectory';
import './common/common.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class MainPage extends Component {
    render() {
        return (
            <div>
                <Header heading="Phone Directory" />
                <div className="main-body-container btn">
                    <Router>
                        <Link to="/"><button className="show-button" >Show Subscribers</button></Link>
                        <Link to="/add"><button className="add-button" >Add Subscriber</button></Link>
                    </Router>
                </div>
            </div>
        )
    }
}

export default MainPage;
