import React, { useState } from "react"
import Box from "@mui/material/Box"
import Popper from "@mui/material/Popper"
import Fade from "@mui/material/Fade"
import Tooltip from "@mui/material/Tooltip"
import Grid from "@mui/material/Grid"

function ClickableBody(props) {
  return (
    <Tooltip title={props.title} placement="right" followCursor={true}>
      <area alt={props.title} coords={props.coords} shape="rect" type="button" onClick={props.handleClick}></area>
    </Tooltip>
  )
}

export default function TransitionsPopper(props) {
  const [placement, setPlacement] = useState()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [bodyPart, setBodyPart] = useState(null)

  const handleClick = (event) => {
    setBodyPart(event.target.alt)
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? "transition-popper" : undefined

  return (
    <div>
      <img src="female_statue.png" useMap="#image-map" />
      <map name="image-map">
        <ClickableBody title="breasts and nipples" handleClick={handleClick} coords="344,143,195,53" />
        <ClickableBody title="stomach" handleClick={handleClick} coords="224,152,298,268" />
        <ClickableBody title="vulva" handleClick={handleClick} coords="221,282,277,318" />
        <ClickableBody title="thighs" handleClick={handleClick} coords="184,329,308,381" />
      </map>

      <Popper id={id} open={open} anchorEl={anchorEl} transition placement="left">
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>{bodyPart}</Box>
          </Fade>
        )}
      </Popper>
    </div>
  )
}
