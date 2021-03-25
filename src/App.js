import React from 'react'
//import logo from './logo.svg'
import './App.css'
import SideNav from './SideNav.js'
import MainNav from './MainNav'

function App() {
    return (

        <div className="container">
            <SideNav name = "sideboy" />
            <MainNav name = "mainboy"/>
        </div>

    )

}

export default App