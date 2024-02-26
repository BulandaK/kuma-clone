import { Button, OutlinedInput, TextField, Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";

function Login() {
  return (
    <div
      style={{
        height: "25vh",
        // backgroundColor: "aqua",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <OutlinedInput
        id="filled-basic"
        placeholder="Username"
        sx={{
          width: "300px",
          backgroundColor: "#070a10",
          borderRadius: "10px",
          color: "#b1b8c0",
          ".MuiOutlinedInput-notchedOutline": {
            border: "2px solid gray",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid gray", // Zmiana koloru obramowania w stanie hover
          },
          // ,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #88B04B",
          },
        }}
      />
      <OutlinedInput
        id="filled-basic"
        placeholder="Password"
        type="password"
        inputProps={{
          disableunderline: true,
        }}
        sx={{
          width: "300px",
          borderRadius: "10px",
          backgroundColor: "#070a10",
          color: "#b1b8c0",
          ".MuiOutlinedInput-notchedOutline": {
            border: "2px solid gray",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid gray", // Zmiana koloru obramowania w stanie hover
          },
          // ,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #88B04B",
          },
        }}
      />
      {/* 
      google auth sceleton
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
      <Button>
        <Typography color="white">Log in</Typography>
      </Button>
    </div>
  );
}

export default Login;
