import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Axios from "axios";

import Page from "./Page";
import ArticleCard from "./ArticleCard";

function BlogCategory() {
  const { category } = useParams();
  const [cat, setCategory] = useState(category);
  const categories = ["sexuality", "mental health", "sexual health", "self-pleasure"];
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const api_key = "8dec3990bf234643b97d478782c39c42";
    var url = `https://newsapi.org/v2/everything?q=${cat}&from=2022-02-17&sortBy=popularity&apiKey=${api_key}`;
    var req = new Request(url);
    fetch(req).then(function (response) {
      console.log(response.json());
      console.log(`fetching articles on: ${cat}`);
      // setArticles(response.data);
    });
  }, [cat]);
  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       const response = await Axios.get(`https://newsapi.org/v2/everything?q=${category}&from=2022-02-17&sortBy=popularity&apiKey=${api_key}`);
  //       console.log(response.data);
  //       console.log(`fetching articles on: ${category}`);
  //       setArticles(response.data); //set the array of posts as the posts variable
  //     } catch (e) {
  //       console.log("there was a problem");
  //     }
  //   }
  //   fetchArticles();
  // }, []);

  function handleClick(e) {
    setCategory(e.target.outerText);
  }

  return (
    <Page id={category} title={category} classes="p-3 my-4 mx-5 vh-100">
      <h1 className="font-anton font-white text-center">blog</h1>
      <h2 className="font-poppins font-body font-white text-center">articles and resources we love</h2>
      <div className="wh-100 linear-gradient p-4">
        <ul className="nav font-white font-poppins">
          {categories.map((c, index) => {
            return (
              <li className="nav-item">
                <NavLink onClick={handleClick} className={({ isActive }) => (isActive ? "hela-nav-link active" : "hela-nav-link")} to={`/blog/${c.replace(/\W/, "")}`} key={index}>
                  {c}
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
