import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Axios from "axios";

import Page from "./Page";
import ArticleCard from "./ArticleCard";

function BlogCategory() {
  const params = useParams();
  const [category, setCategory] = useState(params.category.toLowerCase());
  const categories = ["sexuality", "mental health", "sexual health", "self-pleasure"];
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   console.log(`fetching articles on: ${category.toLowerCase()}`);
  //   axios
  //     .get(`/api/articles/${category}`)
  //     .then(function (response) {
  //       setArticles(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await Axios.get(`/api/articles/${category}`);
        console.log(response.data);
        console.log(`fetching articles on: ${category.toLowerCase()}`);
        setArticles(response.data); //set the array of posts as the posts variable
      } catch (e) {
        console.log("there was a problem");
      }
    }
    fetchArticles();
  }, []);

  function handleClick(e) {
    setCategory(e.target.value);
    useEffect(() => {
      async function fetchArticlesAgain() {
        try {
          const response = await Axios.get(`/api/articles/${category}`);
          console.log(response.data);
          console.log(`fetching articles on: ${category.toLowerCase()}`);
          setArticles(response.data); //set the array of posts as the posts variable
        } catch (e) {
          console.log("there was a problem");
        }
      }
      fetchArticlesAgain();
    }, [{ category }]);
  }

  return (
    <Page id={category} title={category} classes="p-3 my-4 mx-5 vh-100">
      <h1 className="font-anton font-white text-center">blog</h1>
      <h2 className="font-poppins font-body font-white text-center">articles and resources we love</h2>
      <div className="wh-100 linear-gradient p-4">
        <ul className="nav font-white font-poppins">
          {categories.map((category, index) => {
            return (
              <li className="nav-item">
                <NavLink onClick={handleClick} className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to={`/blog/${category.replace(/\W/, "")}`} key={index}>
                  {category}
                </NavLink>
              </li>
            );
          })}
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
