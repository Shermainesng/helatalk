import React, { useEffect } from "react";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | HELA`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={props.id} className={props.classes}>
      {props.children}
    </div>
  );
}

export default Page;
