import React from 'react';
import './SideNav.css'
import {Link} from 'react-router-dom'

const SideNav = (props) => {
return (

<nav className="navbar">
   <ul className="nav-menu-items">
      <li key="home" className="nav-text">
         <Link to='/home'>
            <span>heck</span>
         </Link>
      </li>

      <li key="home2" className="nav-text">
         <Link to='./MainNav.js'>
            <span>dang</span>
         </Link>
      </li>

   </ul>
</nav>

 );
};
export default SideNav;