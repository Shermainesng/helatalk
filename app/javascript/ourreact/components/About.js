import React from "react";
import Page from "./Page";

function About() {
  const title = "About Us";
  return (
      <Page id="about" title={title} classes="text-center">
        <h2 className="font-white font-headers">About Us</h2>
        <p className="font-white font-body w-75 m-auto">
          platform for open discussions about sex and anything sexual wellness. our goal is to spark conversations and destigmatize the oh so taboo topic of sex
        </p>
      </Page>
  );
}

export default About;
