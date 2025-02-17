import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState } from 'react';
import './About.css';

// MyComponent.js
function About() {

    const [coloredText, setColoredText] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    const text = `Whether it's pulling 70 hour weeks in construction or training neural networks on point 
    cloud data, I've learned that dedication drives results. I've applied this mindset to
    working on $400M construction projects, designing machine learning algorithms, 
    and developing workflow automation tools. This wide range of experiences provides
    me with a unique perspective to tackle future challenges.`;

    const colorizeText = (text) => {
      return text.split('').map((char, index) => {
        // Initial color is #414141 for all letters
        const color = '#414141';
        return `<span class="letter" data-index="${index}" style="color: ${color}">${char}</span>`;
      }).join('');
    };

    setColoredText(colorizeText(text)); // Set the colored text

    // Event listener for scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // When scrolled to the top of the page, navigate to the App component
      if (window.scrollY === 0) {
        navigate("/"); // Navigate to home (App.js)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  useEffect(() => {
    // Update letter colors based on scroll position
    const letters = document.querySelectorAll('.letter');
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the scroll threshold for each letter
    const lettersToUpdate = Math.floor(scrollPosition / (window.innerHeight * 0.006)); // Every 16px scroll updates one letter

    letters.forEach((letter, index) => {
      // Only change the color for the letters that should be updated
      if (index <= lettersToUpdate) {
        letter.style.color = '#FFFFFF'; // Change color to white for this letter
      }
    });

    // Calculate the margin-top value for the about-description-container
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const marginTopValue = Math.max(35, 70 - (scrollPosition / maxScrollHeight) * 35); // From 70vh to 30vh
    const aboutDescriptionContainer = document.getElementById('about-description-container');
    if (aboutDescriptionContainer) {
      aboutDescriptionContainer.style.marginTop = `${marginTopValue}vh`;
    }
  }, [scrollPosition]);

    //ABOUT scroll mechanic
    useEffect(() => {
        const speed = 0.5; // Adjust speed of movement
        const elements = document.querySelectorAll(".about-solid, .about-outline");

        if (elements.length === 0) return; // Ensure elements exist

        // Get width of first element (assuming all are the same size)
        const elementWidth = elements[0].offsetWidth;
        const spacing = elementWidth * 1.1; // Element width + 20%

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
    }, []);

    return (
        <div className="About">
            <img id="background-grid"></img>
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
    );
}
    
export default About;