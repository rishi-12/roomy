import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styleConstants } from "../../constants/styleConstants";

export default function Feed() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{ bgcolor: styleConstants.bg_color, height: "100vh", pt: "2em" }}
        maxWidth={false}
        disableGutters
      >
        <h1>Feed</h1>
      </Container>
    </React.Fragment>
  );
}
