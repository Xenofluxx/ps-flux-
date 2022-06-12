import React from 'react';
//  ES class?
class AboutPage extends React.Component {
    render(){
        // if more than one element wrap with 
        // () and div inside return
        // or use () and <>, the later implies a React.Fragment
        return (
        <>
            <h2><b>About</b></h2>
            <p>Made with React.</p>
        </>
        );
    }
}

export default AboutPage;