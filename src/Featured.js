import React, {useEffect, useRef, useState} from 'react';
import './Featured.css';


const Featured = () => {
    
  return (
    <div className="featured-container" style={{ height: "300vh" }}>
      <div className="Featured">
        <img id="featured-decal-top" class="featured-decal"></img> 
        <img id="featured-decal-bottom" class="featured-decal"></img>
        <div id="project-menu">
            
        </div>
      </div>
    </div>
  );
};

export default Featured;