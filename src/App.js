import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './pages/Navbar';

import ViewStudent from './pages/ViewStudent';
import AddStudent from './pages/AddStudent.js';
import EditStudent from './pages/EditStudent';
import Home from "./pages/Home";
import SpecialistDescription from "./pages/SpecialistDescription";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Selection from "./pages/Selection";
import LoginSignup from "./pages/LoginSignup";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import CreateNewPassword from "./pages/CreateNewPassword";
import Form from "./pages/Form";
import DataVisual from './pages/DataVisual';
import Appointment from './pages/Appointment';
import DentalAppointment from './pages/DentalApp'
import AptIndex from './pages/AppointmentIndex';

import axios from 'axios';


function App() {
  axios.defaults.baseURL = "http://localhost:8000/";
  return (
    
    <div className="App">
        <Router>
          <Switch>
            <Route path="/home"component={Home} />
            <Route path="/apt"component={Appointment} />
            <Route path="/specialistdescription"component={SpecialistDescription} />
            <Route path="/login"component={Login} />
            <Route path="/signup"component={Signup} />
            <Route path="/selection"component={Selection} />
            <Route path="/loginsignup"component={LoginSignup} />
            <Route path="/forgotpassword"component={ForgotPassword} />
            <Route path="/verification"component={Verification} />
            <Route path="/createnewpassword"component={CreateNewPassword} />
            <Route path="/form"component={Form} />
            <Route path="/datavisual"component={DataVisual} />
            <Route path="/students" component={ViewStudent} />
            <Route path="/add-students" component={AddStudent} />
            <Route path="/edit-student/:id" component={EditStudent} />
            <Route path="/dentalapp" component={DentalAppointment} />
            <Route path="/appindex" component={AptIndex} />

          </Switch>
        </Router>
    </div>
  );
}

export default App;
