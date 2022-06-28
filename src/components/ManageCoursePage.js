import React, {useState} from "react";
import {Navigate,useNavigate,useParams} from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import CoursesPage from "./CoursesPage";
//Manage{...props}, those are  spread attributes, inside the second return, after Manage, props is placed
// {params: useParams()} returns Route matched dynamic params
export function withRouter(Manage){
    return(props)=>{
       let match  = {params: useParams()};
       return <Manage {...props} match= {match} />
   }
 }



 //arrow functions
const ManageCoursePage = props =>{
  
    // change handler needed or values can't be changed
    // declare state to hold data
    const navigate = useNavigate();
    const [course, setCourse] = useState({
        id: null,
        slug:"",
        title:"",
        autorId:null,
        category:"",

    })
    // set on name the content of value
    function handleChange({target}){     
        setCourse({...course, [target.name]: target.value });       
    }

    //save before updating
    function handleSubmit(event){
        event.preventDefault();        
        courseApi.saveCourse(course).then(  ()=>{
           navigate('/courses');
        });

    }

    //   {props.match.params.slug}  
    // value on left of = should be the same on both sides
    return(
        <>
            <h2><b>Manage Course</b></h2>       
            <CourseForm 
                course={course} 
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    )


}
export default withRouter(ManageCoursePage);