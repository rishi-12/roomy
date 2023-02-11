import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styleConstants } from "../../constants/styleConstants";
import Post, { POST } from "./Post";
import Box from "@mui/material/Box";

export default function Feed() {
  const posts: POST[] = [
    {
      userName: "Mighil Dath",
      userId: "mighil",
      postBody: "content1",
      date: "September 16, 2022",
    },
    {
      userName: "Rishinath T M",
      userId: "rishi",
      postBody: "content2",
      date: "September 15, 2022",
    },
    {
      userName: "Vishaal Karthik M",
      userId: "vishal",
      postBody: "content3",
      date: "September 17, 2022",
    },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: styleConstants.bg_color,
          pt: "2em",
        }}
        maxWidth={false}
        disableGutters
      >
        {/* <Container sx={{ bgcolor: "#FFFFFF", pt: "2em" }}> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {posts.map((v) => (
            <Post {...v} />
          ))}
        </Box>
        {/* </Container> */}
      </Container>
    </React.Fragment>
  );
}
