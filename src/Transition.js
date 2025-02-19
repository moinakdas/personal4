import { useState, useEffect, useRef } from "react";
import "./Transition.css";

const Transition = () => {
  const [currentFrame, setCurrentFrame] = useState("0000");
  const totalFrames = 120;
  const lastFrameRef = useRef(0);
  const animationQueue = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 7;
      const minScroll = window.innerHeight * 5;

      let targetFrame = Math.min(
        Math.max(
          Math.floor(((scrollPosition - minScroll) / (maxScroll - minScroll)) * totalFrames),
          0
        ),
        totalFrames - 1
      );

      if (targetFrame !== lastFrameRef.current) {
        animateFrameTransition(lastFrameRef.current, targetFrame);
      }
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalFrames]);

  const animateFrameTransition = (from, to) => {
    if (animationQueue.current) {
      clearTimeout(animationQueue.current);
    }

    let current = from;
    const step = () => {
      if (current !== to) {
        current += current < to ? 1 : -1; // Move up or down
        setCurrentFrame(String(current).padStart(4, "0"));
        lastFrameRef.current = current;
        animationQueue.current = setTimeout(step, 20); // Adjust speed of transition
      }
    };

    step(); // Start the animation sequence
  };

  return (
    <div className="transition-container" style={{ height: "300vh" }}>
      <div className="Transition">
        <img
          src={`/img/transition_imgs/${currentFrame}.png`}
          alt="Scrolling animation frame"
          id="transition-image"
        />
      </div>
    </div>
  );
};

export default Transition;
