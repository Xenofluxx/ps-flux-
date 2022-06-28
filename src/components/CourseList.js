import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";

function CourseList(props){
    return( 
        <>
            <h2><b>Courses</b></h2>
            <table className = "table">
                <thead>
                    <tr>
                        <th> Title</th>
                        <th> Author ID</th>
                        <th> Category</th>
                    </tr>
                </thead>
                <tbody>
           
                    {
                    //this.state.
                        props.coursespar.map(course =>{  
                            return(                                
                            <tr key={course.id}> 
                                <td>
                                    <Link to={"/course/" + course.slug }>{course.title} </Link>                                
                                </td> 
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>
                           
                        )})}
                         
                </tbody>
            </table>
        </>
    );

}
// if improper props is passed Courses will no render
// if * and we specified propTypes is requiered, Courses will throw an error
// is * and defaultProps is used, page will at least render, but carefull, the error will not be longer shown


// specifies data that is accepted on  props
// only checked durying development
CourseList.propTypes = {
    coursespar: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
        })).isRequired
}



// if courses(props) doesnt fit 
/*CourseList.defaultProps = {
    courses :[]
} */

export default CourseList;