import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./components/AboutPage";
// index.js determines what files are in your app

// imports from a file that default exports 
import React from 'react';
// imports from a file that const exports
import {render} from 'react-dom';

import App from "./components/App";

// Render using React Dom
// first argument component we want to render
// second argument, DOM element to place app
render(<App />, document.getElementById('root'))