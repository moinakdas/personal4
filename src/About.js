import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useNavigate, useLocation  } from 'react-router-dom';
import React, {useEffect, useState, useRef } from 'react';
import './About.css';

// MyComponent.js
function About() {

  const [coloredText, setColoredText] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const text = `Whether it's pulling 70 hour weeks in construction or training neural networks on point 
    cloud data, I've learned that dedication drives results. I've applied this mindset to
    working on $400M construction projects, designing machine learning algorithms, 
    and developing workflow automation tools. This wide range of experiences provides
    me with a unique perspective to tackle future challenges.`;

    const colorizeText = (text) => {
      return text
        .split("")
        .map(
          (char, index) =>
            `<span class="letter" data-index="${index}" style="color: #414141">${char}</span>`
        )
        .join("");
    };

    setColoredText(colorizeText(text)); // Set the initial colored text
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = window.scrollY;
      setScrollPosition(scroll / maxScroll); // Normalize between 0 and 1
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update letter colors based on scroll position
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    const totalLetters = letters.length;
    const startScroll = window.innerHeight * 1.5;
    const endScroll = startScroll + window.innerHeight * 2.5;

    let progress =
      (window.scrollY - startScroll) / (endScroll - startScroll);
    progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1

    const lettersToUpdate = Math.floor(progress * totalLetters);

    letters.forEach((letter, index) => {
      letter.style.color = index < lettersToUpdate ? "#FFFFFF" : "#414141";
    });
  }, [scrollPosition]);

    //ABOUT scroll mechanic
   
    useEffect(() => {
      const speed = 0.5; // Adjust speed of movement
      const elements = document.querySelectorAll(".about-solid, .about-outline");
  
      if (elements.length === 0) return; // Ensure elements exist
  
      // Function to initialize animation once elements are fully rendered
      const initializeAnimation = () => {
          const elementWidth = elements[0]?.offsetWidth;
          
          // If elementWidth is still 0 or too small, delay and try again
          if (!elementWidth || elementWidth < 10) {
              setTimeout(initializeAnimation, 50); // Retry after 50ms
              return;
          }
  
          const spacing = elementWidth * 1.1; // Element width + 10%
  
          // Position elements evenly across the screen at start
          elements.forEach((el, index) => {
              el.style.position = "absolute";
              el.style.left = `${index * spacing}px`; // Evenly distribute
          });
  
          const animate = () => {
              let maxRight = Math.max(...Array.from(elements).map(el => parseFloat(el.style.left)));
  
              elements.forEach((el) => {
                  let left = parseFloat(el.style.left) || 0;
                  left -= speed;
  
                  // Only respawn AFTER the last element has moved a full spacing
                  if (left < -el.offsetWidth) {
                      left = maxRight + spacing; // Move after last element
                      maxRight = left; // Update last element position
                  }
  
                  el.style.left = `${left}px`;
              });
  
              requestAnimationFrame(animate);
          };
  
          animate();
      };
  
      // Use MutationObserver to check when elements are fully rendered
      const observer = new MutationObserver(() => {
          if (document.querySelector(".about-solid") && document.querySelector(".about-outline")) {
              observer.disconnect(); // Stop observing once elements are ready
              initializeAnimation(); // Start animation after rendering is confirmed
          }
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
  
      return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
      <div className="about-container" style={{height:"300vh"}}>
        <div className="About">
            <img id="background-grid-about"></img>
            <div id="about-bar">
                <img class = "about-solid"></img>
                <img class = "about-outline"></img>
                <img class = "about-solid"></img>
                <img class = "about-outline"></img>
                <img class = "about-solid"></img>
                <img class = "about-outline"></img>
            </div>
            <div id="about-description-container" dangerouslySetInnerHTML={{ __html: coloredText }} />
            <div id="description-buffer"></div>
        </div>
      </div>
    );
}
    
export default About;