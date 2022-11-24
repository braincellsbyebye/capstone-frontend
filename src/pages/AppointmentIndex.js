import './css/AppointmentIndex.css';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function AptIndex() {  

  let user = JSON.parse(localStorage.getItem('user-info'))

  const [pref, setPref] = useState("");
  const [accept, setAccept] = useState("");
  const history = useNavigate();

  useEffect(() => {
    axios.get('/api/pending').then(response => {
      if(response.status === 200)
      {
          setPref(response.data.all)
      }
    });
    axios.get('/api/accepted').then(response => {
      if(response.status === 200)
      {
          setAccept(response.data.all)
      }
    });
  }, []);

  function logout()
  {
    localStorage.clear();
    history("/")
  }

  return (
<>



<div className="pb-10">
        <nav className="navbar navbar-expand-lg text-dark bg-primary bg-gradient">
        <div className="container">
        <Link to="/dashboard">
        <IconButton sx= {{ color: 'white', marginLeft: -15, marginTop: 2}}>
          <Icon icon="eva:arrow-ios-back-fill" />
        </IconButton>  
      </Link>



          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <div className='user-profile-name'>
                <text>{user.name}</text>
              </div>
                <div className='user-profile-email'>
                <text>{user.email}</text>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
<div className="header-image">
    <div className="card-body">
        <img src="/appoint.png" alt='appoint' width={1500} height={300}></img>
        <button onClick={logout} >Logout</button>
    <div className="header-title">
         <text className='confirmation'>Confirmation</text>
    </div>
    <div style={{ marginLeft: 50 }}>
          <text>Pending Appointments: {pref}</text> <br />
          <text>Accepted Appointments: {accept}</text>
    </div>
        <div className="body-card">
         <div className="body-title">
            <text>Clinic Appointment</text>           
         </div>
         <Link to='/apt'>
         <div className='clinic-image'>
            <img src="/clinic1.png" alt='clinic' width={80} height={80}></img>
          </div>   
          </Link>    
        </div>  

        
        
        <div className="body-card-one">
          <div className="body-title-one">
            <text>Dental Appointment</text>
          </div>
        <Link to='/dentalapp'>
        <div className="dental-image">
          <img src="/dent1.png" alt='dent' width={80} height={80}></img>
        </div>
        </Link>
        </div>
        <Link to='/med'>
          <button>Medical Certificate Request</button>
        </Link>
        

        </div>
</div>


    </>

  );
  }


export default AptIndex;