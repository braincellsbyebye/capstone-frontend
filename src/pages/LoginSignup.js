import React from "react";
import { Box, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

const LoginSignup = () => {
  return (
    <div className="login-signup-container container">
      <div className="content">
      <IconButton href="/selection" color="secondary" size="large">
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>
        <div className="content-item">
          <Button href="/signup" variant="contained" size="large" color="info" sx={{ fontSize: "24px", mt: 18, mb: 4 }}>SIGN UP</Button>
          <Button href="/login" variant="contained" size="large" color="info" sx={{ fontSize: "24px", mb: 18 }}>LOGIN</Button>
        </div>
        <Box className="page-image" component="img" src="/static/log-removebg.svg" alt="logo" />
      </div>
    </div>
  );
};

export default LoginSignup;
