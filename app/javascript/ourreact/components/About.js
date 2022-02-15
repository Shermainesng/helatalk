import React from "react";
import Page from "./Page";
import Container from "./Container";

function About() {
  const title = "About Us";
  return (
    <Page id="about" title={title} classes="d-flex align-items-center vh-100 position-relative">
      <Container classes="text-center ">
        <h2 className="font-white font-headers">nice to meet you</h2>
        <p className="font-white font-body w-75 m-auto">we're HELA! you may have found us on tiktok or instagram, giving out sex tips. but we are more than that. we believe taking a holistic approach to achieve enthusiastic, consent-driven sex, with sexual health and wellness at our core messaging. our goal is to build a community of like-minded, sex-positive people where we can have events, discussions and just being there for each there.</p>
        <h3>if you believe in this vision, join our community and spread the word</h3>
      </Container>
    </Page>
  );
}

export default About;
