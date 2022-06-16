import React from 'react';
// <nav> -> navigation links
// <a> ->  defines a hyperlink, 
function Header(){
    return(
    <nav>
        <a href="/">Home</a> | <a href="/about"> About</a> | <a href="/courses"> Courses</a> | <a href="/shapes"> Shapes</a>

    </nav>
    );

}
export default Header;