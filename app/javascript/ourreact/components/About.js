import React from "react";
import Page from "./Page";

function About() {
  const title = "About Us";
  return (
    <Page id="about" title={title} classes="vh-100">
      <h2>our story</h2>
      <p className="lead text-muted">hey there! you may have found us on tiktok or instagram, giving out sex tips. but we are more than that. we believe taking a holistic approach to achieve enthusiastic, consent-driven sex, with sexual health and wellness at our core messaging. our goal is to build a community of like-minded, sex-positive people where we can have events, discussions and just being there for each there.</p>
      <h3>if you believe in this vision, join our community and spread the word</h3>
    </Page>
  );
}

export default About;
