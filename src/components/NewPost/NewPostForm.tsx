import * as React from "react";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import WcIcon from "@mui/icons-material/Wc";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MDEditor from "@uiw/react-md-editor";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "../../css/newPost.scss";
import axiosConfig from "../Utils/axiosConfig";
// import Typography from "@mui/material/Typography";
import { styleConstants } from "../../constants/styleConstants";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Man } from "@mui/icons-material";
import MarkDown from "./MarkDown";
const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

export default function NewPostForm() {
  const [gender, setGender] = React.useState("male");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [noOfRoommates, setNoOfRoommates] = React.useState(1);
  const [size, setSize] = React.useState("1 BHK");
  const [houseType, setHouseType] = React.useState("Flat");
  const [rent, setRent] = React.useState("Flat");
  const [postBody, setPostBody] = React.useState<string>("");
  let userId = "40cd1e5f-a8b7-43aa-88d5-5fe39e3a4098";

  const sizes = styleConstants.sizesList.map((item) => (
    <div
      className={size === item ? "newPost_size selected" : "newPost_size"}
      onClick={() => handleInput(setSize, item)}
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

  const handleNoOfRoommates = (sign: String) => {
    if (sign == "-") {
      if (noOfRoommates > 1)
        setNoOfRoommates((prevNoOfRoommates) => prevNoOfRoommates - 1);
    } else if (noOfRoommates < 5)
      setNoOfRoommates((prevNoOfRoommates) => prevNoOfRoommates + 1);
  };

  const handleInput = (setValue: Function, value: String) => {
    setValue(value);
  };

  const onSubmit = async () => {
    const postData = {
      gender,
      noOfRoommates,
      address1,
      address2,
      city,
      state,
      pincode,
      country,
      size,
      rent,
      postBody,
      userId,
    };
    console.log(postData);
    try {
      console.log("Post");
      const res = await axiosConfig.post("/post", postData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
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
                  <button
                    type="button"
                    onClick={() => handleNoOfRoommates("-")}
                  >
                    &minus;
                  </button>
                  <span>{noOfRoommates}</span>
                  <button
                    type="button"
                    onClick={() => handleNoOfRoommates("+")}
                  >
                    &#43;
                  </button>
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
                    value={address1}
                    onChange={(e) => handleInput(setAddress1, e.target.value)}
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
                    value={address2}
                    onChange={(e) => handleInput(setAddress2, e.target.value)}
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
                    value={city}
                    onChange={(e) => handleInput(setCity, e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    variant="standard"
                    value={state}
                    onChange={(e) => handleInput(setState, e.target.value)}
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
                    value={pincode}
                    onChange={(e) => handleInput(setPincode, e.target.value)}
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
                    value={country}
                    onChange={(e) => handleInput(setCountry, e.target.value)}
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
                <p>Rent</p>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={8} sm={12}>
                  <TextField
                    required
                    id="rent"
                    name="rent"
                    label="rent"
                    fullWidth
                    type="number"
                    autoComplete="shipping address-level2"
                    value={rent}
                    onChange={(e) => handleInput(setRent, e.target.value)}
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="newPost_markdown">
            <MarkDown postBody={postBody} setPostBody={setPostBody} />
          </div>
          <div className="newPost_row">
            <Button
              variant="contained"
              onClick={() => onSubmit()}
              style={{
                backgroundColor: "#b197fc",
              }}
            >
              Create Post
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
