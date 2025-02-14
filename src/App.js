import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';

function App() {
  
  useEffect(() => {
    // Select all the link-entry-container elements
    const linkEntryContainers = document.querySelectorAll('.link-entry-container');

    // Add hover effect on each link-entry-container
    linkEntryContainers.forEach(container => {
      const arrowIcon = container.querySelector('.arrow-icon');
      const itemDot = container.querySelector('.item-dot');

      container.addEventListener('mouseenter', () => {
        // On hover, align both arrow-icon and item-dot at 1vw
        itemDot.style.left = '1vw';
        arrowIcon.style.left = '0.5vw';
        
        // Animate the arrow icon
        arrowIcon.style.transition = 'all 0.3s ease';
        arrowIcon.style.transform = 'translateY(-55%) translateX(10px)'; // or whatever movement you prefer
      });

      container.addEventListener('mouseleave', () => {
        // On hover out, reset positions and animation
        itemDot.style.left = '1vw';
        arrowIcon.style.left = '0.5vw';
        
        // Reset animation for the arrow icon
        arrowIcon.style.transition = 'all 0.3s ease';
        arrowIcon.style.transform = 'translateY(-55%) translateX(0)';
      });
    });

    // Cleanup listeners on unmount
    return () => {
      linkEntryContainers.forEach(container => {
        container.removeEventListener('mouseenter', () => {});
        container.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  useEffect(() => {
    const elements = [
      { id: "headshot-1", scale: -0.01 },
      { id: "headshot-2", scale: 0.04 },
      { id: "header-box-1", scale: -0.02, preserveTranslate: true },
      { id: "header-box-2", scale: 0.06, preserveTranslate: true },
      { id: "header-box-3", scale: -0.01, preserveTranslate: true },
      { id: "note-1", scale: 0.015 },
      { id: "note-2", scale: 0.020 },
      { id: "note-3", scale: 0.01 },
      { id: "note-4", scale: 0.015 },
    ];

    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      elements.forEach(({ id, scale, preserveTranslate }) => {
        const element = document.getElementById(id);
        if (element) {
          const translateX = deltaX * scale;
          const translateY = deltaY * scale;

          if (preserveTranslate) {
            element.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
          } else {
            element.style.transform = `translate(${translateX}px, ${translateY}px)`;
          }
        }
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="App">
      <img id="background-grid"></img>
      <div id="graphics-container">
        <img id="headshot-1" class="headshot-images"></img>
        <img id="headshot-2" class="headshot-images"></img>
        <div class="header-box" id="header-box-1"></div>
        <div class="header-box" id="header-box-2"></div>
        <div class="header-box" id="header-box-3"></div>
        <div class="note-container" id="note-1">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">Field Engineer @ TCE</div>
        </div>
        <div class="note-container" id="note-2">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">
            Seven years of professional experience
          </div>
        </div>
        <div class="note-container" id="note-3">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">
            Undergraduate Researcher @<br></br> Interacting Robotics Systems <br></br> Laboratory
          </div>
        </div>
        <div class="note-container" id="note-4">
          <div class="icon-container">
            <img class="plus-icon"></img>
          </div>
          <div class="note-description">
          Undergraduate Researcher @<br></br> Stony Brook Dept. of Computer <br></br> Science
          </div>
        </div>
      </div>
      <div id = "title-container">
        <div id = "stylized-name">Moinak Das</div>
        <div id = "job-title">MECHANICAL ENGINEER</div>
        <div class = "links-container-outer">
          <div class = "links-container-inner">
            <a href="https://github.com/moinakdas"><div class = "link-entry-container">
              <div class = "link-entry-icon-container">
                <img class = "arrow-icon"></img>
                <img class = "item-dot" id = "green-dot"></img>
              </div>
              <div class = "link-entry-label-container">
                GitHub
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div class = "link-entry-container" href="#">
              <div class = "link-entry-icon-container">
                <img class = "arrow-icon"></img>
                <img class = "item-dot" id = "blue-dot"></img>
              </div>
              <div class = "link-entry-label-container">
                LinkedIn
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div class = "link-entry-container" href="#">
              <div class = "link-entry-icon-container">
                <img class = "arrow-icon"></img>
                <img class = "item-dot" id = "purple-dot"></img>
              </div>
              <div class = "link-entry-label-container">
                Resume
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div class = "link-entry-container" href="#">
              <div class = "link-entry-icon-container">
                <img class = "arrow-icon"></img>
                <img class = "item-dot" id = "orange-dot"></img>
              </div>
              <div class = "link-entry-label-container">
                Projects
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div class = "link-entry-container" href="#">
              <div class = "link-entry-icon-container">
                <img class = "arrow-icon"></img>
                <img class = "item-dot" id = "yellow-dot"></img>
              </div>
              <div class = "link-entry-label-container">
                Contact
              </div>
            </div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
