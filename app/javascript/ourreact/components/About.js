import React from "react";
import Page from "./Page";
import Container from "./Container";

function About() {
  const title = "About Us";
  return (
    <Page id="blog" title={title}>
      <div className="container-background container-about">
        <div className="d-flex flex-column">
          <h2 className="font-white font-headers">hi, we're HELA</h2>
          <p className="font-white font-body w-75 m-auto">you may have found us on tiktok or instagram, giving out sex tips. but we are more than that. we believe taking a holistic approach to achieve enthusiastic, consent-driven sex, with sexual health and wellness at our core messaging. our goal is to build a community of like-minded, sex-positive people where we can have events, discussions and just being there for each there.</p>
          <h3>if you believe in this vision, join our community and spread the word</h3>
        </div>
      </div>

      <div className="container-about">
        <h1>section2</h1>
      </div>
    </Page>
  );
}

export default About;

{
  /* // <Page id="about" title={title} classes="d-flex align-items-center position-relative">
//   <div className="container-background text-center ">
//     <h2 className="font-white font-headers">nice to meet you</h2>
//     <p className="font-white font-body w-75 m-auto">we're HELA! you may have found us on tiktok or instagram, giving out sex tips. but we are more than that. we believe taking a holistic approach to achieve enthusiastic, consent-driven sex, with sexual health and wellness at our core messaging. our goal is to build a community of like-minded, sex-positive people where we can have events, discussions and just being there for each there.</p>
//     <h3>if you believe in this vision, join our community and spread the word</h3>
//   </div>
//   <div className="container-background text-center ">
//     <h1>test</h1>
//   </div>
// </Page> */
}
