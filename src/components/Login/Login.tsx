import * as React from "react";
import "../../css/login.scss";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-body">
        <div className="login-left-pane">
          <img src="mountains.jpg" />
        </div>
        <div className="login-right-pane">
          <div className="login-title">
            <h4>
              Welcome to <span>roomy</span>
            </h4>
            <p>Find your roomate today</p>
          </div>
          <div className="login-form">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // border: "1px solid green",
              }}
            >
              <AccountCircle
                sx={{
                  color: "action.active",
                  mr: 1,
                  my: 0.5,
                }}
                // size={"medium"}
              />
              {/* <TextField
                id="input-with-sx"
                label="Username"
                variant="standard"
              /> */}
              <input type="text" placeholder="Username" />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                // border: "1px solid green",
              }}
            >
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              {/* <TextField
                id="input-with-sx"
                label="Password"
                variant="standard"
              /> */}
              <input type="password" />
            </Box>
          </div>
          <div className="login-button">
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#21b6ae",
                padding: "9px 18px",
                fontSize: "16px",
              }}
              variant="contained"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
