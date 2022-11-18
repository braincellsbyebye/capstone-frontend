import './css/AppointmentIndex.css';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

function AptIndex() {  
  
  return (
<>

<div className='header-appointment'>
    <Link to="/dashboard">
     <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: 5}}>
        <Icon icon="eva:arrow-ios-back-fill" />
        </IconButton>  
    </Link>
    <div className='user-profile-name'>
      <text>admin</text>
    </div>
    <div className='user-profile-email'>
     <text>admin@gmail.com</text>
    </div>
  
      
</div>

<div className="header-image">
    <div className="card-body">
        <img src="/appoint.png" alt='appoint' width={1350} height={300}></img>

    <div className="header-title">
         <text>Confirmation</text>
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
        </div>
</div>


    </>

  );
  }


export default AptIndex;