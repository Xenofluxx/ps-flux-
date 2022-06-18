import React from 'react';
// contrary to <a>, <link> doesnt trigger a page refresh (states)
import { NavLink} from 'react-router-dom';
// <nav> -> navigation links
// <NavLink> ->  defines a hyperlink, 
import "./App.css";

function Header(){  

    return(
    <nav>
        <NavLink  exact="true" to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}  >
            Home 
        </NavLink> 
            {" | "}
        <NavLink  to="/about" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
            About
        </NavLink> 
            {" | "} 
        <NavLink to="/courses" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
            Courses
        </NavLink> 
            {" | "}
        <NavLink to="/shapes" className={({ isActive }) => (isActive ? "link-active" : "link")}> 
            Shapes
        </NavLink>
    </nav>
    );

}
export default Header;