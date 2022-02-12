import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "./Page";
import Container from "./Container";

function Events() {
  const title = "Events"
  const navigate = useNavigate();

  return (
    <Page title={title} classes="d-flex align-items-center py-5">
      <Container classes="text-center">
        <h1 className="font-white-h2">{title}</h1>
        <h2 className="font-white-h2">We're planning some exciting stuff</h2>
        <h3 className="font-white-h3">Get notified!</h3>
        <form onSubmit={event => {
          event.preventDefault();
          let data = new FormData(event.target)
          let urlEncoded = new URLSearchParams(data)
          navigate("/mailinglist", { state: urlEncoded })
        }}>
          <input type="text"></input>
        </form>
      </Container>
    </Page>
  );
}

export default Events;
