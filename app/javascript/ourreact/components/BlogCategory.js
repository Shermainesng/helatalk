import React from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";


function BlogCategory(props) {
  let params = useParams();
  return (
    <Page id={params.category} title={params.category} classes="vh-100">
      <h2>{params.category}</h2>



    </Page>
  );
}

export default BlogCategory;
