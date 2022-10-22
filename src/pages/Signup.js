import { Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const [name, setName]=useState("");
  const [password, setPassword]=useState("");
  const [email, setEmail]=useState("");
  const history = useNavigate();

  async function signup(){
    let item={name,password,email}
    console.warn(item)
    
    let result = await fetch("http://localhost:8000/api/register",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json',
      }

    })
    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    alert("User Created")
    history("/login")
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
          SIGN UP
        </Typography>
        <div className="col-sm-6 offset-sm-3">
          <h1>Register</h1>
          <input type="text" style={{ height:50 }} value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name"/>
          <br />
          <input type="text" style={{ height:50 }} value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email"/>
          <br />
          <input type="password" style={{ height:50 }} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password"/>
          <br />
          <button  onClick={signup} className="btn btn-primary" >Sign Up</button>
        </div>
        

      </div>
    </div>
  );
};

export default Signup;
