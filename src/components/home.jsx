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
                        <Link to="/">Demo</Link>
                    </li>
                    <li>
                        <Link to="/demo">Demo</Link>
                    </li>
                    <li>
                        <Link to="/students">Students</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path='/' element={< Demo />}></Route>
                    <Route exact path='/demo' element={< Demo />}></Route>
                    <Route exact path='/students' element={< Students />}></Route>

                </Routes>

            </Router>
        );
    }
}

export default home;