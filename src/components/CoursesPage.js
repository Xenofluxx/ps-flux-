import React, {useState, useEffect} from 'react';
import CourseList from "./CourseList";
//import API
import {getCourses} from "../api/courseApi";  



// arrow function better than an anonimus fuction regarding the scope
// af with this inherits the enclosing scope

/*class CoursesPage  extends React.Component{
//not necessary inside class component
    constructor(props){
        super(props);
        this.state = {            
            courses: []
        };
    }
} */
function CoursesPage (){
    const [courses, setCourses] = useState([]);
    
    useEffect(()=>{
        //getCourses uses promise based api (fetch, so we use then)
        //async
        getCourses().then(_courses =>
            // set state courses from getCourses courses
            //this.setState({courses: courses})
            setCourses(_courses));
    },[]);

    // props (data) will be passed to CourseList
     return(
        <>            
            <CourseList courses = {courses} /> 
        </>
    );



/*componentDidMount(){

    getCourses().then(courses => this.setState({courses:courses}));
}
*/


/* to iteratea an array  call map(), and {} to indicate JSX use

    renderRow(_courses){
    return(
        <tr key={course.id}>                
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
        </tr>
    );
    }
 */

// declare keys(with unique id inside scope), so order when rendering is not messed up
// better not to use counter, if a row is deleted it will change key numbers and 
// the number must always be the same

// render(){
    
}



export default CoursesPage;