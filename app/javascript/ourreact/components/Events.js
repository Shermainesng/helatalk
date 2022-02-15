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
        <h1 className="font-headers font-white">{title}</h1>
        <h2 className="font-white font-body">We're planning some exciting stuff</h2>
        <form onSubmit={handleSubmit} className="w-50 m-auto">
          <input type="text" placholder="your email here" className="form-control my-2"></input>
          <input type="submit" value="Get notified!" className="btn btn-secondary w-100"/>
        </form>
      </Container>
    </Page>
  );
}

export default Events;
