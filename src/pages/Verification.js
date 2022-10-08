import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import VerificationForm from "../components/VerificationForm";
import { Icon } from "@iconify/react";

const Verification = () => {
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
              Verification
            </Typography>
          </div>

          <Box className="page-image" component="img" src="/static/ver-removebg.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} alt="logo" />

          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Enter the Digit Code Sent to your Email
          </Typography>

          <VerificationForm />
        </div>
      </div>
    </div>
  );
};

export default Verification;
