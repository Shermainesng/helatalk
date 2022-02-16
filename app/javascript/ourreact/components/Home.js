import React from "react";
import Page from "./Page";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  const title = "Home";
  return (
    <div className="container-background">
      <Page id="home" title={title} classes="d-flex align-items-center vh-100 position-relative">
        <Container classes="text-center ">
          <h1 className="d-none">hela | your daily dose of sex positivity sex positivity</h1>
          <h2 className="font-white font-headers">Your Daily Dose of Sex Positivity</h2>
          <h3 className="font-white font-body-emphasis">Join the Community</h3>
          <div className="position-absolute fixed-bottom pb-5">
            <Link to="/about">
              <FontAwesomeIcon className="triangle-down" icon={faCaretDown} />
              <p className="font-white-p">read more</p>
            </Link>
          </div>
        </Container>
      </Page>
    </div>
  );
}

export default Home;
