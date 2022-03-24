import React from "react"
import Page from "./Page"
import Container from "./Container"
import Tooltip from "@mui/material/Tooltip"
import TransitionsPopper from "./TransitionsPopper"

function Discover() {
  const title = "Discover"

  return (
    <Page id="discover" title={title} classes="d-flex align-items-center py-5 vh-100 container-background">
      <Container classes="text-center">
        <h1 className="font-headers font-white mb-1">watch this page!</h1>
        <h2 className="font-white font-body mb-4">we've got something cool for you</h2>

        <TransitionsPopper content="breast" />
      </Container>
    </Page>
  )
}

export default Discover
