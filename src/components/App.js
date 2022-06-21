// determines which component will render
import React,{useEffect} from 'react';
import {Navigate,BrowserRouter,Route, Routes,useParams} from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import Shapes from "./Shapes";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";
import CourseList from './CourseList';


function App(){
   
    /*
    function getPage(){
        const route = window.location.pathname; 
        if(route === '/about') return <AboutPage />;   
        if(route === '/courses') return <CoursesPage />;   
        return <HomePage/>;
    }
    */

    // Routes is the new Switch
    return(
        <div className = "container-fluid">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/courses" element={<CoursesPage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="/course/:slug" element={<ManageCoursePage/>}></Route>                
                <Route path="/shapes" element={<Shapes/>}></Route>    
                <Route path="/about-page" element={<Navigate replace to="/about" />}> </Route>  
                <Route path="*" element = {<PageNotFound/>}></Route>
            </Routes>          
        </div>
    );
   
}

export default App;