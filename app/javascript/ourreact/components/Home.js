import React from "react";
import Page from "./Page";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const title = "Home";
  return (
    <Page id="home" title={title} classes="d-flex align-items-center vh-100 position-relative">
      <Container classes="text-center ">
        <h1 className="font-white-h1">Your Daily Dose of Sex Positivity</h1>
        <h3 className="font-white-h3">Join the Community</h3>
        <div className="position-absolute fixed-bottom pb-5">
          <FontAwesomeIcon className="triangle-down" icon={faCaretDown} />
          <p className="font-white-p">read more</p>
        </div>
      </Container>
    </Page>
  );
}

export default Home;
