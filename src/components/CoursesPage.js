import React from 'react';
//import API
import {getCourses} from "../api/courseApi";  


// arrow function better than an anonimus fuction regarding the scope
// af with this inherits the enclosing scope

class CoursesPage  extends React.Component{
    //not necessary inside class component
    constructor(props){
        super(props);
        this.state = {            
            courses: []
        };
    }
    //request list of courses
    componentDidMount(){
        //getCourses uses promise based api (fetch, so we use then)
        //async
        getCourses().then(courses =>
            // set state courses from getCourses courses
            this.setState({courses: courses}));
        }        

    
    // to iteratea an array  call map(), and {} to indicate JSX use
    
    renderRow(course){
        return(
            <tr>                   
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
            </tr>
        );
    }
    
    
    
    render(){
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
                    {this.state.courses.map(this.renderRow)}
                </tbody>
            </table>
        </>
        );
    }
}

export default CoursesPage;