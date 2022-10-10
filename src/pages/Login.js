import React, { useEffect, useState } from "react";
import { Typography, IconButton, Alert} from "@mui/material";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();
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
      alert("test")
    } else {
      history.push("/home")
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
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control"/>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" className="form-control"/>
        <br />

        <button onClick={login} className="btn btn-primary">Login</button>

      </div>
    </div>
  );
};

export default Login;
