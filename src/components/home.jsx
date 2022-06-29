import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Students from './students';
import Demo from './demo';


class home extends Component {
    render() {
        return (
            <Router>
                <ul className="App-header">
                    <li>
                        <Link to="/">students</Link>
                    </li>
                    <li>
                        <Link to="/demo">Demo</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path='/' element={< Students />}></Route>
                    <Route exact path='/demo' element={< Demo />}></Route>
                </Routes>

            </Router>
        );
    }
}

export default home;