import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Logo from "../components/Logo";

const Selection = () => {
  return (
    <div className="selection-container container">
      <div className="content">
        <Box className="page-image" component="img" src="/static/nurse-removebg.svg" />
        <div className="content-item">
          <div className="heading">
            <Logo />
          </div>

          <Typography sx={{ textAlign: "center", color: "text.secondary", mb: 2 }}>
            Select Yourself As
          </Typography>
          <Button href="/loginsignup" variant="outlined" size="large" color="secondary" startIcon={<img src="/static/group-chat.svg" style={{ width: "50px", height: "50px" }} />} sx={{ justifyContent: "space-between", mb: 4 }}>STUDENT OR EMPLOYEE</Button>
          <Button href="/loginsignup" variant="outlined" size="large" color="secondary" startIcon={<img src="/static/insurance.svg" style={{ width: "50px", height: "50px" }} />} sx={{ justifyContent: "space-between", py: 2 }}>CLINIC PERSONNEL</Button>
        </div>
      </div>
    </div>
  );
};

export default Selection;
