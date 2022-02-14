import React from "react";
import Page from "./Page";

function About() {
  const title = "About Us";
  return (
      <Page id="about" title={title} classes="vh-100">
        <h2>Your Daily Dose of Sex Positivity</h2>
        <p className="lead text-muted">Join the Community</p>
      </Page>
  );
}

export default About;
