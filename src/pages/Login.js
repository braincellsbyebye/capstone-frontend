import React from "react";
import { Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

const Login = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="heading-container">
          <IconButton href="/loginsignup" color="secondary" size="large">
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

        <Typography variant="h3" sx={{ textAlign: "center", my: 4 }}>
          LOGIN
        </Typography>
        <h1>Login Page</h1>
        <input type="text" placeholder="email" className="form-control"/>
        <br />
        <input type="text" placeholder="password" className="form-control"/>
        <br />

        <button className="btn btn-primary">Login</button>

      </div>
    </div>
  );
};

export default Login;
