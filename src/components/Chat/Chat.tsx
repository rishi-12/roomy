import * as React from "react";
import NavBar from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Chat() {
  return (
    <>
      <NavBar />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: "#FFFFF3", height: "100vh" }} />
      </Container>
    </>
  );
}
