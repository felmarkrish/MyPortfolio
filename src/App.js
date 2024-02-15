// App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/navbar";
import Revslider from "./components/revsliders/revslider";
import About from "./components/aboutme/aboutme";
import Service from "./components/services/service";
import Gallery from "./components/Galleries/gallery";
import MySport from "./components/mysports/mysport";
import Contact from "./components/contacts/contact";
import LoadingScreen from "./components/spinner/spinner"; // Import the loading component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data) before hiding the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Revslider />
          <About />
          <Service />
          <Gallery />
          <MySport />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
