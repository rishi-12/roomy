import * as React from "react";
import NavBar from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styleConstants } from "../../constants/styleConstants";

export default function Chat() {
  return (
    <>
      <NavBar />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: styleConstants.bg_color, height: "100vh" }} />
      </Container>
    </>
  );
}
