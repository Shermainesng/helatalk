import React from "react";
import Page from "./Page";
import Container from "./Container";
import CategoryCard from "./CategoryCard";

function Blogs() {
  const title = "blog"

  return (
    <Page id="blog" title={title} classes="vh-100 container-background py-4">
      <h2 className="text-center font-headers font-white mb-2">{title}</h2>
      <h2 className="text-center font-body font-white mb-4"> just some articles and resources that you'll find useful</h2>
      <div className="scrolling-panel py-5">
        <div className="d-flex flex-row">
          <CategoryCard name="sexuality" img="sexuality.png" description="sexuality is a spectrum" />
          <CategoryCard name="mental health" img="mentalhealth.png" description="everyone's boundaries are unique. learn to explore at your own pace" />
          <CategoryCard name="sexual health" img="sexualhealth.png" description="sex isn't dangerous as long as you know how to protect yourself" />
          <CategoryCard name="kinks" img="kinks.png" description="self-exploration is key to understanding our bodies and our desires" />
        </div>
      </div>

    </Page>
  );
}

export default Blogs;
