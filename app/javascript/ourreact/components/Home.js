import React from "react";
import Page from "./Page";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function Home() {
  const title = "Home";
  return (
    <Page id="home" title={title}>
      <div className="container-fluid container-background">
        <div className="row row-custom align-items-center">
          <div className="text-center align-items-center">
            <h1 className="d-none">hela | your daily dose of sex positivity sex positivity</h1>
            <h2 className="font-white font-headers">Your Daily Dose of Sex Positivity</h2>
            <h3 className="font-white font-body-emphasis">Join the Community</h3>
            <div className="position-absolute fixed-bottom pb-5">
              <Link to="/about">
                <FontAwesomeIcon className="triangle-down" icon={faCaretDown} />
                <p className="font-white-p">read more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </Page>
  );
}

export default Home;
