import React, {useState, useEffect} from "react";
import {Navigate,useNavigate,useParams} from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import CoursesPage from "./CoursesPage";
import {toast} from "react-toastify";



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
    const[errors,setErrors] = useState({});
    // change handler needed or values can't be changed
    // declare state to hold data
    const navigate = useNavigate();
    const [course, setCourse] = useState({
        id: null,
        slug:"",
        title:"",
        autorId:null,
        category:"",

});
// useEffect needed because we are managing a side effect
useEffect(()=>{
    const slug = props.match.params.slug;
    if(slug){
        courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
    }
},[props.match.params.slug]);

// set on name the content of value
function handleChange({target}){     
    setCourse({...course, [target.name]: target.value });       
}

function formIsValid(){
    //local variable
    const _errors = {};
    if(!course.title) _errors.title = "Title is required";
    if(!course.authorId) _errors.authorId = "Author ID is required";
    if(!course.category) _errors.category = "Category is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
    
}



//save before updating
function handleSubmit(event){
    event.preventDefault();  
    if(!formIsValid()) return;      
    courseApi.saveCourse(course).then(  ()=>{
        navigate('/courses');
        toast.success("Course saved.")
    });

}


//   {props.match.params.slug}  
// value on left of = should be the same on both sides
return(
    <>
        <h2><b>Manage Course</b></h2>       
        <CourseForm 
            errors = {errors}
            course={course} 
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    </>
)


}
export default withRouter(ManageCoursePage);