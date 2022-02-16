import React from "react";
import Page from "./Page";
import Container from "./Container";
import CategoryCard from "./CategoryCard";

function Blogs() {
  const title = "blog"

  return (
    <Page id="blog" title={title} classes="vh-100">
      <h2 className="text-center font-headers font-white mb-2">{title}</h2>
      <h2 className="text-center font-body font-white mb-4"> just some articles and resources that you'll find useful</h2>
      <div className="scrolling-panel py-5">
        <div className="d-flex flex-row">
          <CategoryCard name="sexuality" />
          <CategoryCard name="mental health" />
          <CategoryCard name="sexual health" />
          <CategoryCard name="self-pleasure" />
        </div>
      </div>

    </Page>
  );
}

export default Blogs;
