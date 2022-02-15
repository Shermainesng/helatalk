import React from "react";

function ArticleCard(props) {
  const { publisher, title, author, url } = props.article;
  return (
    <div className="my-4 card-rounded translucent-dark font-white">
      <a className="text-decoration-none" href="https://badgirlsbible.com/vaginal-orgasm">
        <div className="card-header">
          {publisher}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{title}</p>
            <footer className="blockquote-footer">{author || publisher}</footer>
          </blockquote>
        </div>
      </a>
    </div>
  );
}

export default ArticleCard;
