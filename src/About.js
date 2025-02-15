import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import React, {useEffect} from 'react';
import './About.css';

// MyComponent.js
function About() {
    return (
        <div className="About">
            <img id="background-grid"></img>
            <div id="about-bar">
                <img class = "about-solid"></img>
                <img class = "about-outline"></img>
                <img class = "about-solid"></img>
                <img class = "about-outline"></img>
            </div>
        </div>
    );
}
    
export default About;