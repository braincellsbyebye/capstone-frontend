import React from 'react';
import { Link } from 'react-router-dom';

function Navbar ()

{
  return(
    <div className="pb-5">
        <nav className="navbar navbar-expand-lg text-dark bg-primary bg-gradient">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{color:'white', fontSize:25, fontFamily:'serif', fontWeight:'bold'}}>'Hippo-Campus'</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" style={{color:'white', fontSize:20, fontFamily:'serif'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search" style={{color:'white', fontSize:20, fontFamily:'serif'}}>Search Student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/guardian" style={{color:'white', fontSize:20, fontFamily:'serif'}}>Contact Person</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/med" style={{color:'white', fontSize:20, fontFamily:'serif'}}>Medical Certificate Request</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appindex" style={{color:'white', fontSize:20, fontFamily:'serif'}}>Appointments</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;