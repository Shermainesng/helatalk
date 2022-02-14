import React, { useEffect } from "react";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | HELA`;
    window.scrollTo(0, 0);
  }, []);

  return <div className={props.classes}>{props.children}</div>;
}

export default Page;
