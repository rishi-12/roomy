// import { Button, Paper, Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { styleConstants } from "../../constants/styleConstants";

// No of roomates required + -
// Address
// Content
// ImageUploads
// export default function NewPostForm() {
//   const [textValue, setTextValue] = useState<string>("");

//   const onTextChange = (e: any) => setTextValue(e.target.value);
//   const handleSubmit = () => console.log(textValue);
//   const handleReset = () => setTextValue("");

//   return (
//     <Container
//       sx={{
//         bgcolor: styleConstants.bg_color,
//         pt: "2em",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//       maxWidth={false}
//       disableGutters
//     >
//       <Paper
//         sx={{
//           display: "flex",
//           // alignItems: "center",
//           // justifyContent: "center",
//           flexDirection: "column",
//           width: "60%",
//         }}
//       >
//         <h2>Form Demo</h2>

//         <TextField
//           onChange={onTextChange}
//           value={textValue}
//           label={"Heading/Title"} //optional
//           size="small"
//         />
//         <TextField
//           onChange={onTextChange}
//           value={textValue}
//           label={"Address"} //optional
//         />
//         <TextField
//           onChange={onTextChange}
//           value={textValue}
//           label={"Content"} //optional
//         />
//         <TextField
//           onChange={onTextChange}
//           value={textValue}
//           label={"PhoneNo"} //optional
//         />
//         <Button onClick={handleSubmit}>Submit</Button>
//         <Button onClick={handleReset}>Reset</Button>
//       </Paper>
//     </Container>
//   );
// }

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        New Post
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

export default function NewPostForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h2" variant="h4" align="center">
            Lets Find a Roomy
          </Typography>
          <React.Fragment>
            <AddressForm />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => {}} sx={{ mt: 3, ml: 1 }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {}}
                sx={{ mt: 3, ml: 1 }}
              >
                Post
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
