import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './SideNav.js'
import MainNav from './Home.js'

function App() {
    return (


        <Router>

            <SideNav />
            <Switch>
                <Route path='/home' component={MainNav} />
            </Switch>
        </Router>
        
    )

}

export default App