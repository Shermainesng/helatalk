import React from "react";
import Page from "./Page";
import Container from "./Container";

function About() {
  const title = "About Us";
  return (
    <Page id="blog" title={title}>
      <div className="container-background container-about">
        <div className="d-flex flex-column text-center align-items-center">
          <h2 className="font-white font-headers">hi, we're HELA</h2>
          <p className="font-white font-body w-75">you may have found us on tiktok or instagram, giving out sex tips. but we are more than that. we believe taking a holistic approach to achieve enthusiastic, consent-driven sex, with sexual health and wellness at our core messaging. our goal is to build a community of like-minded, sex-positive people where we can have events, discussions and just being there for each there.</p>
        </div>
      </div>

      <div className="container-about-white py-5">
        <h2 className="font-white font-headers our-team text-center">the team</h2>
        <div className="intro-cards container w-75">
          <div className="d-flex flex-row">
            <div className="col-4 my-4 card font-poppins font-black card-shadow">
              <div className="text-decoration-none">
                <div className="card-body">
                  <p className="mb-0">she/her, 24</p>
                  <p className="fs-3">jaye</p>
                  <footer className="blockquote-footer">hello</footer>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <h3></h3>
            <div className="col-4 my-4 card font-poppins font-black card-shadow w-30">
              <div className="text-decoration-none">
                <div className="card-body">
                  <p className="mb-0">she/her, 21</p>
                  <p className="fs-3">ang</p>
                  <footer className="blockquote-footer">hello</footer>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="col-4 my-4 card font-poppins font-black card-shadow w-30">
              <div className="text-decoration-none">
                <div className="card-body">
                  <p className="mb-0">she/her, 24</p>
                  <p className="fs-3">sherms</p>
                  <footer className="blockquote-footer">hello</footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default About;
