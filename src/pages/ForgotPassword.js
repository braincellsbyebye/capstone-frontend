import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { Icon } from "@iconify/react";

const ForgotPassword = () => {
  return (
    <div className="login-forms-container container">
      <div className="content">
        <div className="heading-container">
          <IconButton color="secondary" size="large">
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <div className="heading-rounded">
            <Typography variant="h3" sx={{ mb: 3 }}>
              'Hippo-Campus'
            </Typography>

            <Typography variant="body1">
              MSEUF's first beta web based and mobile application clinic management system
            </Typography>
          </div>
        </div>

        <div className="content-item">
          <div className="heading">
            <Typography variant="h3">
              Forgot Password?
            </Typography>
          </div>

          <Box className="page-image" component="img" src="/static/pass-removebg.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} alt="logo" />

          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Enter the Email Associated with your Account
          </Typography>

          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
