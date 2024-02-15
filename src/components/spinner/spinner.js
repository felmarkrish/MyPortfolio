// LoadingScreen.js
import React, { useEffect, useState } from "react";
import loadingGif from "../../assets/spinner2.gif"; // Update with the correct path
import "./spinner.css"; // Import the styles

const LoadingScreen = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading completion after 3000 milliseconds (adjust as needed)
    const loadingTimer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          // Loading complete
          clearInterval(loadingTimer);
          setLoadingComplete(true);
        }
        return newProgress;
      });
    }, 900); // Adjust the interval for smoother progress

    // Cleanup the timer when the component is unmounted
    return () => clearInterval(loadingTimer);
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div className={`loading-screen ${loadingComplete ? "loaded" : ""}`}>
      <div className="loading-content">
        <img src={loadingGif} alt="Loading" />
        <p>Loading... {progress}%</p>
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
