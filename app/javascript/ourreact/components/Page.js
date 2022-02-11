import React, { useEffect } from "react";
import Container from "./Container";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | React App`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container></Container>
    </>
  );
}

export default Page;
