import React, {useState} from "react";
import {useParams} from "react-router-dom";
import CourseForm from "./CourseForm";

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
    const [cours, setCourse] = useState({
        id: null,
        slug:"",
        title:"",
        autorId:null,
        category:"",

    })
    // set on name the content of value
    function handleChange({target}){       
        const updatedCourse ={ [target.name]: target.value};        
        setCourse(updatedCourse);       
    }
    //   {props.match.params.slug}  
    // value on left of = should be the same on both sides
    return(
        <>
            <h2><b>Manage Course</b></h2>       
            <CourseForm course = {cours} onChange = {handleChange}/>
        </>
    )


}
export default withRouter(ManageCoursePage);