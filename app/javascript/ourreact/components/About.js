import React, { useEffect } from "react";
import Page from "./Page";

function About() {
  const title = "About Us";
  useEffect(() => {
    document.title = `${title} | HELA`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" title={title}>
      <h2>Your Daily Dose of Sex Positivity</h2>
      <p className="lead text-muted">Join the Community</p>
    </div>
  );
}

export default About;
