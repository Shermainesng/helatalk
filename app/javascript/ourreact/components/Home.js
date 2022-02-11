import React, { useEffect } from "react";
import Page from "./Page";

function Home() {
  const title = "Home";
  useEffect(() => {
    document.title = `${title} | HELA`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-background d-flex align-items-center justify-content-center flex-column" title={title}>
      <h1 className="font-white-h1">Your Daily Dose of Sex Positivity</h1>
      <h3 className="font-white-h3">Join the Community</h3>
    </div>
  );
}

export default Home;
