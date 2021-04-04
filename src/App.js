import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './SideNav.js'
import AboutPage from './sections_new/About.js'
import HomePage from './sections_new/Home.js'

function App() {
    return (


        <Router>

            <SideNav />
            <Switch>
                <Route path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
            </Switch>
        </Router>
        
    )

}

export default App