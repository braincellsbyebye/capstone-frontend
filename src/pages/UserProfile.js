import './css/UserProfile.css';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

function UserProfile() {   
  let user = JSON.parse(localStorage.getItem('user-info'))
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

<div className='title-section'>
    <text class="content-name">CONTENT</text>
        <div class="card-section">
         <div class="card-image">
            <img src="/record.png" alt='record' width={50} height={40}></img> 
            <text style={{marginLeft: 20, fontWeight:'bold', fontSize:30}}>Medical Records</text> 
            <Link to="/medicalrecords">
             <IconButton sx= {{ color: 'black', ml:2}}>
              <Icon icon="eva:arrow-ios-forward-fill" />
              </IconButton>
            </Link>
         </div>
            
        </div>
     <div className='title-sec'>
        <text class="content-preference">PREFERENCES</text>
        <div class="card-section-one">
        <div class="card-image-two">
          <img src="/pol.png" alt='pol' width={40} height={40}></img>
          <text style={{marginLeft: 20, fontWeight:'bold', fontSize:30}}>Policy</text>
          <Link to="/policy">
             <IconButton sx= {{ color: 'black', ml:20}}>
              <Icon icon="eva:arrow-ios-forward-fill" />
              </IconButton>
            </Link>
        </div>
        </div>
        <div class="card-section-two">
      <div class="card-image-three">
          <img src="/about1.png" alt='about1' width={40} height={40}></img>
          <text style={{marginLeft: 20, fontWeight:'bold', fontSize:30}}>About</text>
          <Link to="/about">
             <IconButton sx= {{ color: 'black', ml:20}}>
              <Icon icon="eva:arrow-ios-forward-fill" />
              </IconButton>
            </Link>
      </div>
     </div>
     </div>
      
</div>



    </>

  );
  }


export default UserProfile;