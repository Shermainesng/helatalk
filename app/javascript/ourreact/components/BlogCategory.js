import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import Page from "./Page";
import ArticleCard from "./ArticleCard";



const articles = [
  { title: "How to ride your man", id: 1, publisher: "Bad girls bible", author: "autho"},
  { title: "vaginal orgasm", id: 2, publisher: "Bad girls bible", author: "authorname"},
  { title: "cat person and me", id: 3, publisher: "slate", author: "authorname"},
  { title: "sexual desire", id: 4, publisher: "the cut", author: "authorname"}
]

function BlogCategory(props) {
  const params = useParams();
  const [category, setCategory] = useState(params.category.toLowerCase());
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(`/api/articles/${category.toLowerCase()}`);
    // Make a request for a user with a given ID
    axios.get(`/api/articles/${category}`)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  return (
    <Page id={category} title={category} classes="p-3 my-4 mx-5">
      <h1 className="font-headers font-white">blog</h1>
      <h2 className="font-body font-white">articles about <em>{category}</em></h2>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => setCategory("kink")}>kink</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => setCategory("health")}>health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>

      <div className="w-75">
        {articles.map((article) => <ArticleCard article={article} key={article.id} />) }
      </div>
    </Page>
  );
}

export default BlogCategory;
