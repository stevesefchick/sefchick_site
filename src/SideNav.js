import React from 'react';
import './SideNav.css'
import {Link} from 'react-router-dom'

const SideNav = (props) => {
return (

<nav className="navbar">
   <ul className="nav-menu-items">

      <li key="about" className="nav-text">
         <Link to='/about'>
            <span>about</span>
         </Link>
      </li>

      <li key="home2" className="nav-text">
         <Link to='./home2'>
            <span>experience</span>
         </Link>
      </li>

      <li key="home3" className="nav-text">
         <Link to='./home3'>
            <span>projects</span>
         </Link>
      </li>

      <li key="home4" className="nav-text">
         <Link to='./home4'>
            <span>skillset</span>
         </Link>
      </li>

      <li key="home5" className="nav-text">
         <Link to='./home5'>
            <span>education</span>
         </Link>
      </li>

      <li key="home6" className="nav-text">
         <Link to='./home6'>
            <span>contact</span>
         </Link>
      </li>
   </ul>
</nav>

 );
};
export default SideNav;