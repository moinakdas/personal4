import React, {useEffect, useState } from 'react';
import './Skills.css';

// MyComponent.js
function Skills() {
    return (
        <div className="skills-container" style={{height : "300vh"}}>
            <div className="Skills">
                <img id="background-grid-about"></img>
                <div id="card-container">
                    <div id="card-1" className="card">
                        <div class="numerical-label" id="numerical-label-1">
                            <img class="numerical-label-img" id="numerical-label-img-1"></img>
                        </div>
                        <img class="card-label" id="card-label-1"></img>
                        <div class="card-description-container">
                            <div className="card-text">
                                Worked as a Mechanical Engineer at TCE since 2023, and as a software developer before then (since 2018)
                                <br></br><br></br>
                                Consistently worked 60-70 hour weeks to assist on construction sites
                                <br></br><br></br>
                                Coordinated with subcontractors for equipment installations
                                <br></br><br></br>
                                Developed workflow automation tools reducing manual processing by over 60%
                                <br></br><br></br>
                                Wrote proposals resulting in $8,000 of recieved funding
                                <br></br><br></br>
                                Developed websites increasing user traffic by 300%
                            </div>
                            <div className="card-images">
                                <img id = "grouped-logos"></img>
                            </div>
                            {/* Worked as a Mechanical Engineer at TCE since 2023
                            <br></br><br></br>
                            Consistently worked 60-70 hour weeks to assist on construction sites
                            <br></br><br></br>
                            Coordinated with subcontractors for equipment installations
                            <br></br><br></br>
                            Worked as a software developer since 2018
                            <br></br><br></br>
                            Developed workflow automation tools reducing manual processing by over 60%
                            <br></br><br></br>
                            Wrote proposals resulting in $8,000 of recieved funding
                            <br></br><br></br>
                            Developed websites increasing user traffic by 300%
                            <br></br><br></br> */}
                            
                        </div>
                    </div>
                    <div id="card-2" className="card">
                        <div class="numerical-label" id="numerical-label-2">
                            <img class="numerical-label-img" id="numerical-label-img-2"></img>
                        </div>
                        <img class="card-label" id="card-label-2"></img>
                    </div>
                    <div id ="card-3" className="card">
                        <div class="numerical-label" id="numerical-label-3">
                            <img class="numerical-label-img" id="numerical-label-img-3"></img>
                        </div>
                        <img class="card-label" id="card-label-3"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;