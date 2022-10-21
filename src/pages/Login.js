import React, { useEffect, useState } from "react";
import { Typography, IconButton, Alert} from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(){
    let item={email, password};
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    if ("error" in result) {
      alert("Login Credentials do not match")
    } else {
      history("/students")
    }


  }

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
        <input type="text" style={{ height:50 }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form-control"/>
        <br />
        <input type="password" style={{ height:50 }} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control"/>
        <br />

        <button onClick={login} className="btn btn-primary">Login</button>

      </div>
    </div>
  );
};

export default Login;
