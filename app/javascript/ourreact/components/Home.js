import React from "react";
import Page from "./Page";
import Container from "./Container";

function Home() {
  const title = "Home";
  return (
    <Page title={title} classes="d-flex align-items-center py-5">
      <Container classes="text-center" title={title}>
        <h1 className="font-white-h2">hela</h1>
        <h2 className="font-white-h2">Your Daily Dose of Sex Positivity</h2>
        <h3 className="font-white-h3">Join the Community</h3>
      </Container>
    </Page>
  );
}

export default Home;
