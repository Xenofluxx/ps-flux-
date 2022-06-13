import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactDOMClient from 'react-dom/client';
import AboutPage from "./components/AboutPage";
// index.js determines what files are in your app

// imports from a file that default exports 
import React from 'react';
// imports from a file that const exports
import {render} from 'react-dom';

import App from "./components/App";

// Updated to React 18
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />)