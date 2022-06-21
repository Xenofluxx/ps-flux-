import React from "react";
import {useParams} from "react-router-dom";

//Children {...props}, those are  spread attributes, inside the second return, after Manage, props is placed
// {params: useParams()} returns Route matched dynamic params
export function withRouter(Manage){
    return(props)=>{
       let match  = {params: useParams()};
       return <Manage {...props} match= {match} />
   }
 }
 //arrow functions
const ManageCoursePage = props =>{
    
    return(
        <>
            <h2>Manage Course</h2>
           
            {props.match.params.slug}   
    
    
        </>
    )


}
export default withRouter(ManageCoursePage);