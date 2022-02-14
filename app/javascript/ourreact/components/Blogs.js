import React from "react";
import Page from "./Page";
import Container from "./Container";
import CategoryCard from "./CategoryCard";

function Blogs() {
  const title = "blog"

  return (
    <Page id="blog" title={title} classes="vh-100">
      <h2>{title}</h2>
      <Container classes="d-flex flex-row scroll-horiz w-100">
        <CategoryCard name="Health" />
        <CategoryCard name="Kink" />
        <CategoryCard name="Mental" />
        <CategoryCard name="Explore" />
        <CategoryCard name="Others" />
      </Container>

    </Page>
  );
}

export default Blogs;
