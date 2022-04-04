import React, { useEffect, useState } from "react";
import Page from "./Page";
import CategoryCard from "./CategoryCard";
import Axios from "axios";

function Blogs() {
  const title = "blog";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await Axios.get("/api/blog/categories");
        console.log("fetching all our categories");
        console.log(response.data);
        setCategories(response.data);
      } catch (e) {
        console.log("there was a problem");
      }
    }
    fetchCategories();
  }, []);

  return (
    <Page id="blog" title={title} classes="vh-100 container-background py-4">
      <h2 className="text-center font-headers font-white mb-2">{title}</h2>
      <h2 className="text-center font-body font-white mb-4"> just some articles and resources that you'll find useful</h2>
      <div className="scrolling-panel py-5">
        <div className="d-flex flex-row">
          {categories.map(category => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Blogs;
