import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "./Page";
import Container from "./Container";

function Events() {
  const title = "Events";
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let urlEncoded = new URLSearchParams(data);
    navigate("/mailinglist", { state: urlEncoded });
  }
  return (
    <Page id="events" title={title} classes="d-flex align-items-center py-5 vh-100">
      <Container classes="text-center">
        <h1 className="font-white-h2">{title}</h1>
        <h2 className="font-white-h2">We're planning some exciting stuff</h2>
        <h3 className="font-white-h3">Get notified!</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input type="text"></input>
          </fieldset>
        </form>
      </Container>
    </Page>
  );
}

export default Events;
