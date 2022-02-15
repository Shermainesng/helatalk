import React from "react";

function Article(props) {

  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
      <p className="lead text-muted">{props.content}</p>
    </div>
  );
}

export default Article;
