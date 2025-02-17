import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {
  
  //transform operations onscroll for header-boxes and headshots
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight; // 20rem in pixels (assuming 1rem = 16px)
      const scrollFactor = Math.min(scrollTop / maxScroll, 1); // Normalized scroll value (0 to 1)
  
      const elements = [
        // Header boxes (keep translation)
        { id: "header-box-1", delay: 0, scaleFactor: 1.3, translate: true },
        { id: "header-box-3", delay: 0, scaleFactor: 1.3, translate: true },
        { id: "header-box-2", delay: 0.4, scaleFactor: 1.5, translate: true },
        
        // Headshots (no translation)
        { id: "headshot-1", delay: 0.2, scaleFactor: 1.4, translate: false },
        { id: "headshot-2", delay: 0.6, scaleFactor: 1.6, translate: false },
  
        // Notes (no translation, staggered delay)
        { id: "note-1", delay: 0.1, scaleFactor: 1.2, translate: false },
        { id: "note-2", delay: 0.2, scaleFactor: 1.2, translate: false },
        { id: "note-3", delay: 0.3, scaleFactor: 1.2, translate: false },
        { id: "note-4", delay: 0.4, scaleFactor: 1.2, translate: false },
  
        // Title and links (no translation, staggered delay)
        { id: "stylized-name", delay: 0.1, scaleFactor: 1.3, translate: false },
        { id: "job-title", delay: 0.2, scaleFactor: 1.3, translate: false },
        { id: "links-container-inner", delay: 0.3, scaleFactor: 1.2, translate: false },
      ];
  
      elements.forEach(({ id, delay, scaleFactor, translate }) => {
        const element = document.getElementById(id);
        if (element) {
          const progress = Math.max(0, (scrollFactor - delay) / (1 - delay)); // Delay-based progression
          const scaleValue = 1 + progress * (scaleFactor - 1);
          
          // Apply translation only to header-box elements
          if (translate) {
            element.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
          } else {
            element.style.transform = `scale(${scaleValue})`;
          }
          
          element.style.opacity = `${1 - progress}`;
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  //onhover arrow shit
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

  //floating movement with mousemove for header-boxes and headshots
  useEffect(() => {
    const elements = [
      { id: "headshot-1", scale: -0.01 },
      { id: "headshot-2", scale: 0.04 },
      { id: "header-box-1", scale: -0.02, preserveTranslate: true },
      { id: "header-box-2", scale: 0.1, preserveTranslate: true },
      { id: "header-box-3", scale: -0.03, preserveTranslate: true },
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
      <img id="background-grid-landing"></img>
      <div id="graphics-container">
        <img id="headshot-1" className="headshot-images"></img>
        <img id="headshot-2" className="headshot-images"></img>
        <div className="header-box" id="header-box-1"></div>
        <div className="header-box" id="header-box-2"></div>
        <div className="header-box" id="header-box-3"></div>
        <div className="note-container" id="note-1">
          <div className="icon-container">
            <img className="plus-icon"></img>
          </div>
          <div className="note-description">Field Engineer @ TCE</div>
        </div>
        <div className="note-container" id="note-2">
          <div className="icon-container">
            <img className="plus-icon"></img>
          </div>
          <div className="note-description">
            Seven years of professional experience
          </div>
        </div>
        <div className="note-container" id="note-3">
          <div className="icon-container">
            <img className="plus-icon"></img>
          </div>
          <div className="note-description">
            Undergraduate Researcher @<br></br> Interacting Robotics Systems <br></br> Laboratory
          </div>
        </div>
        <div className="note-container" id="note-4">
          <div className="icon-container">
            <img className="plus-icon"></img>
          </div>
          <div className="note-description">
          Undergraduate Researcher @<br></br> Stony Brook Dept. of Computer <br></br> Science
          </div>
        </div>
      </div>
      <div id = "title-container">
        <div id = "stylized-name">Moinak Das</div>
        <div id = "job-title">MECHANICAL ENGINEER</div>
        <div className = "links-container-outer">
          <div className = "links-container-inner" id="links-container-inner">
            <a href="https://github.com/moinakdas"><div className = "link-entry-container">
              <div className = "link-entry-icon-container">
                <img className = "arrow-icon"></img>
                <img className = "item-dot" id = "green-dot"></img>
              </div>
              <div className = "link-entry-label-container">
                GitHub
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div className = "link-entry-container" href="#">
              <div className = "link-entry-icon-container">
                <img className = "arrow-icon"></img>
                <img className = "item-dot" id = "blue-dot"></img>
              </div>
              <div className = "link-entry-label-container">
                LinkedIn
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div className = "link-entry-container" href="#">
              <div className = "link-entry-icon-container">
                <img className = "arrow-icon"></img>
                <img className = "item-dot" id = "purple-dot"></img>
              </div>
              <div className = "link-entry-label-container">
                Resume
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div className = "link-entry-container" href="#">
              <div className = "link-entry-icon-container">
                <img className = "arrow-icon"></img>
                <img className = "item-dot" id = "orange-dot"></img>
              </div>
              <div className = "link-entry-label-container">
                Projects
              </div>
            </div></a>
            <a href="https://github.com/moinakdas"><div className = "link-entry-container" href="#">
              <div className = "link-entry-icon-container">
                <img className = "arrow-icon"></img>
                <img className = "item-dot" id = "yellow-dot"></img>
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
