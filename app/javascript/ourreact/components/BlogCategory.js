import React, { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import Axios from "axios";

import Page from "./Page";
import ArticleCard from "./ArticleCard";

function BlogCategory() {
  const params = useParams();
  const category = params.category;
  const categories = ["sexuality", "mental health", "sexual health", "kinks"];
  const [articles, setArticles] = useState([]);

  async function fetchArticles() {
    try {
      const response = await Axios.get(`/api/articles/${category.replace(/[\W\d]/, "")}`);
      console.log(`fetching articles on: ${category}`);
      setArticles(response.data);
    } catch (e) {
      console.log("there was a problem");
    }
  }

  useEffect(() => {
    fetchArticles();
    console.log("articles fetched:");
    console.log(articles);
  }, [category]);

  return (
    <Page id={category} title={category} classes="p-4 vh-100 container-background">
      <h1 className="font-headers font-white text-center">blogs</h1>
      <h2 className="font-poppins font-body font-white text-center">articles and resources we love</h2>
      <div className="wh-100 linear-gradient p-4">
        <ul className="nav font-white font-poppins">
          {categories.map((category, index) => {
            return (
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to={`/blogs/${category.replace(/[\W\d]/, "")}`} key={index}>
                  {category}
                </NavLink>
              </li>
            );
          })}
          <Outlet />
        </ul>
        <div className="p-2">
          {articles.map(article => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </div>
    </Page>
  );
}

export default BlogCategory;
