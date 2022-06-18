import { Link } from 'react-router-dom';
function PageNotFound(){
    return(        
    <>
        <h2><b>404 Page Not Found</b></h2>
        <p><Link to ="/"> Back to Home</Link> </p> 
    </>
    );

}
export default PageNotFound;