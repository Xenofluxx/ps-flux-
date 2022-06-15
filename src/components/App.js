// determines which component will render
import React from 'react';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';

function App(){
    /*
    function getPage(){
        const route = window.location.pathname; 
        if(route === '/about') return <AboutPage />;   
        if(route === '/courses') return <CoursesPage />;   
        return <HomePage/>;
    }
    */
    return(
        <div className = "container-fluid">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/courses" element={<CoursesPage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;