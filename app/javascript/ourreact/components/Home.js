import React from "react";
import Page from "./Page";
import Container from "./Container";

function Home() {
  const title = "Home";
  return (
    <Page title={title} classes="d-flex align-items-center h-100">
      <Container classes="text-center">
        <h1 className="font-white-h1">Your Daily Dose of Sex Positivity</h1>
        <h3 className="font-white-h3">Join the Community</h3>
        <div className="readmore fixed-bottom">
          <i className="triangle-down"></i>
          <p className="font-white-p">read more</p>
        </div>
      </Container>
    </Page>
  );
}

export default Home;
