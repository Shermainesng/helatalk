import React, { useState, useEffect} from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from 'axios';

import Page from "./Page";
import ArticleCard from "./ArticleCard";

function BlogCategory(props) {
  const params = useParams();
  const [category, setCategory] = useState(params.category.toLowerCase());
  const [articles, setArticles] = useState([]);
  const categories = ["sexuality", "mental health", "sexual health", "self-pleasure"];

  useEffect(() => {
    // console.log(`/api/articles/${category.toLowerCase()}`);
    // Make a request for a user with a given ID
    axios.get(`/api/articles/${category}`)
      .then(function (response) {
        // console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return(
    <Page id={category} title={category} classes="p-3 my-4 mx-5 vh-100">
      <h1 className="font-anton font-white text-center">blog</h1>
      <h2 className="font-poppins font-body font-white text-center">articles and resources we love</h2>
      <div className="wh-100 linear-gradient p-4">
        <ul className="nav font-white font-poppins">
          {categories.map((category, index) => {
            return(
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "hela-nav-link active" : "hela-nav-link"} to={`/blog/${category.replace(/\W/, '')}`} key={index}>
                {category}
              </NavLink>
            </li>
            );})}
        </ul>
        <div className="p-2">
          {articles.map((article) => <ArticleCard article={article} key={article.id} />) }
        </div>
      </div>
  </Page>
  );
}

export default BlogCategory;
