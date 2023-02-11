import * as React from "react";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import WcIcon from "@mui/icons-material/Wc";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../css/newPost.scss";
// import Typography from "@mui/material/Typography";
import { styleConstants } from "../../constants/styleConstants";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Man } from "@mui/icons-material";

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

export default function NewPostForm() {
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [size, setSize] = React.useState("1 BHK");
  const [houseType, setHouseType] = React.useState("Flat");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const sizes = styleConstants.sizesList.map((item) => (
    <div
      className={size === item ? "newPost_size selected" : "newPost_size"}
      onClick={() => handleSize(item)}
    >
      {item}
    </div>
  ));

  const houseTypes = styleConstants.houseList.map((item) => (
    <div
      className={houseType === item ? "newPost_size selected" : "newPost_size"}
      onClick={() => handleHouseType(item)}
    >
      {item}
    </div>
  ));

  const handleGender = (gender: string) => {
    setGender(gender);
  };

  const handleSize = (size: string) => {
    setSize(size);
  };

  const handleHouseType = (houseType: string) => {
    setHouseType(houseType);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: styleConstants.bg_color,
          pt: "2em",
          // border: "1px solid red",
          minHeight: "95vh",
          // display: "flex",
        }}
        maxWidth={false}
        disableGutters
      >
        <div className="newPost_header">
          <h1>Find a roomie</h1>
        </div>
        <div className="newPost_form">
          {/* <FormControl sx={{ width: "60%" }}>
            <InputLabel id="demo-simple-select-label">
              Room mate gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="gender"
              onChange={handleChange}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Either"}>Either</MenuItem>
            </Select>
          </FormControl> */}
          <div className="newPost_row">
            <div className="newPost_col">
              <div className="newPost_label">
                <p>Select Your Roommate Preference</p>
              </div>
              <div className="newPost_input">
                <div
                  className={
                    gender === "female"
                      ? "gender_icon selected_gender"
                      : "gender_icon"
                  }
                  onClick={() => handleGender("female")}
                >
                  <WomanIcon fontSize="large" />
                </div>
                <div
                  className={
                    gender === "male"
                      ? "gender_icon selected_gender"
                      : "gender_icon"
                  }
                  onClick={() => handleGender("male")}
                >
                  <ManIcon fontSize="large" />
                </div>
                <div
                  className={
                    gender === "any"
                      ? "gender_icon selected_gender"
                      : "gender_icon"
                  }
                  onClick={() => handleGender("any")}
                >
                  <WcIcon fontSize="large" />
                </div>
              </div>
            </div>
            <div className="newPost_col">
              <div className="newPost_label">
                <p>Number of roommates required</p>
              </div>
              <div className="newPost_input">
                <div className="input-number">
                  <button type="button">&minus;</button>
                  <span>1</span>
                  <button type="button">&#43;</button>
                </div>
              </div>
            </div>
          </div>

          <div className="newPost_row">
            <div className="newPost_address">
              <Grid container spacing={3}>
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
              </Grid>
            </div>
          </div>
          <div className="newPost_row">
            <div className="newPost_col">
              <div className="newPost_label">
                <p>House Size</p>
              </div>
              <div className="newPost_input">{sizes}</div>
            </div>
            <div className="newPost_col">
              <div className="newPost_label">
                <p>House Type</p>
              </div>
              <div className="newPost_input">{houseTypes}</div>
            </div>
          </div>
          <div className="newPost_row">
            <div className="newPost_address">
              <Grid container spacing={2}>
                <Grid item xs={8} sm={4}>
                  <TextField
                    required
                    id="deposit"
                    name="deposit"
                    label="deposit"
                    fullWidth
                    type="number"
                    autoComplete="shipping address-level2"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={8} sm={4}>
                  <TextField
                    id="rent"
                    type="number"
                    name="rent"
                    label="rent"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={8} sm={4}>
                  <TextField
                    id="maintenance"
                    name="maintenance"
                    label="maintenance"
                    fullWidth
                    type="number"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
