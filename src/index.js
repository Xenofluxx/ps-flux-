import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactDOMClient from 'react-dom/client';
// import router
import {BrowserRouter} from 'react-router-dom';
// index.js determines what files are in your app
// imports from a file that default exports 
import React from 'react';
import App from "./components/App";
import AboutPage from "./components/AboutPage";

// imports from a file that const exports
import {render} from 'react-dom';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <BrowserRouter> 
        <App /> 
    </BrowserRouter>
    );