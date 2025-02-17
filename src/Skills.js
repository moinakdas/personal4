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
                            Worked as a software developer since 2018
                            <br></br><br></br>
                            Worked as a Field Engineer at TCE for two years
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