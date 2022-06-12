import React from 'react';
 // function 
 // Capital letter  -> in JSX, assumed to be React components
 // Lowercase -> HTML, native elements.
 function HomePage(){
     return (
        //className instead class because JSX is used
        <div className = "jumbotron" >
        <h1> <b>Mock App</b></h1>
        <p>React, Flux, and react Router for ultra-responsive web apps.</p>
        <a href= '/about'>About</a>
    </div>
     );
    
 }

 //export so other files can use this

 export default HomePage;