import React from 'react';
import { Link }  from 'react-router-dom';
 // function 
 // Capital letter  -> in JSX, assumed to be React components
 // Lowercase -> HTML, native elements.
 function HomePage(){
     return (
        //className instead class because JSX is used
        <div className = "jumbotron" >
        <h1> <b>Mock App</b></h1>
        <p>React, Flux, and react Router for ultra-responsive web apps.</p>
        <Link to="about" className = "btn btn-primary"> 
            About 
        </Link>
    </div>
     );
    
 }

 //export so other files can use this

 export default HomePage;