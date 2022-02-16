import React from "react";

function ArticleCard(props) {
  const { publisher, title, author, url } = props.article;
  return (
    <div className="my-4 card font-poppins font-black card-shadow w-75">
      <a className="text-decoration-none" href={url}>
        <div className="card-body">
          <p className="mb-0">{publisher}</p>
          <p className="fs-3">{title}</p>
          <footer className="blockquote-footer">{author || publisher}</footer>
        </div>
      </a>
    </div>
  );
}

export default ArticleCard;
