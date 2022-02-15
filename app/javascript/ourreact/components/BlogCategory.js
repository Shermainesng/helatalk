import React from "react";
import { useParams } from "react-router-dom";

import Page from "./Page";
import ArticleCard from "./ArticleCard";


function BlogCategory(props) {
  let params = useParams();
  const category = params.category;

  const articles = [
    { title: "How to ride your man", id: 1, publisher: "Bad girls bible", author: "autho"},
    { title: "vaginal orgasm", id: 2, publisher: "Bad girls bible", author: "authorname"},
    { title: "cat person and me", id: 3, publisher: "slate", author: "authorname"},
    { title: "sexual desire", id: 4, publisher: "the cut", author: "authorname"}
  ]
  const renderArticles = (articles) => {
    return( articles.map((article) => <ArticleCard article={article} key={article.id}/>) );
  }
  return (
    <Page id={category} title={category} classes="p-3 my-4 mx-5">
      <h1 className="font-headers font-white">blog</h1>
      <h2 className="font-body font-white">articles about <em>{category}</em></h2>

      <div className="w-75">
        {renderArticles(articles)}
      </div>
    </Page>
  );
}

export default BlogCategory;
