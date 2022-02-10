import React, { useEffect } from "react";

function Container(props) {
  useEffect(() => {
    document.title = `${props.title} | React App`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
      </div>
    </>
  );
}

export default Container;
