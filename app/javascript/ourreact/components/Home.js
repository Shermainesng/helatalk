import React from "react";
import Page from "./Page";
import Container from "./Container";

function Home() {
  const title = "Home";
  return (
    <Page id="home" title={title} classes="d-flex align-items-center vh-100">
      <Container classes="text-center">
        <h1 className="d-none">hela | your daily dose of sex positivity sex positivity</h1>
        <h2 className="font-white font-headers">Your Daily Dose of Sex Positivity</h2>
        <h3 className="font-white font-body">Join the Community</h3>
        <div className="fixed-bottom">
          <i className="triangle-down"></i>
          <p className="font-white-p">read more</p>
        </div>
      </Container>
    </Page>
  );
}

export default Home;
