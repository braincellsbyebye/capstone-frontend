import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

import axios from 'axios';

class Appointment extends Component
{
    state = {
        appointment: [],
        loading: true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/appointment');
        
        if (res.data.status === 200)
        {
            this.setState({
                appointment: res.data.appointment,
                loading: false,
            });
        }
    }

    render(){

        var appointment_table = "";
        if (this.state.loading)
        {
            appointment_table = <tr><td colSpan="6"> <h2>Loading...</h2> </td></tr>;
        }
        else 
        {
            appointment_table = 
            this.state.appointment.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.aptcategory}</td>
                        <td>{item.aptdate}</td>
                        <td>{item.apttime}</td>
                        <td>{item.aptpurpose}</td>
                        <td>{item.aptverify}</td>
                        <td>
                            <Link
                            to={"/edit-aptclinic"}
                            state={item}
                            className="btn btn-success btn-sm"
                            >
                            Verify
                            </Link>
                        </td>
                    </tr>
                );
            } )
        }

        return(
            <div>
                <div className="pb-10">
                    <nav className="navbar navbar-expand-lg text-dark bg-primary bg-gradient">
                <div className="container">
                <Link to="/appindex">
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
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>

                <div className="container">
                    <br/><br/>
                    <div className="card-header">
                        <h1>Clinic Appointments</h1>
                        <br></br>
                        <br></br>
                    </div>
                <div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Appointment Category</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                                <th>Appointment Purpose</th>
                                <th>Appointment Verification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointment_table}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default Appointment;
