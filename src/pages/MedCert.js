import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import {IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

function MedCert() {
  const [loading, setLoading] = useState(true);
  const [Med, setMed] = useState([]);


  useEffect(() => {
    axios.get(`/api/medcert`).then((res) => {
      if (res.status === 200) {
        setMed(res.data.reqmed);
        setLoading(false);
      }
    });
  }, []);

  const deleteMedCert = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-medcert/${id}`).then((res) => {
      if (res.data.status === 200) {
        swal("Deleted!", res.data.message, "success");
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        thisClicked.innerText = "Delete";
      }
    });
  };


  if (loading) {
    return <h4>Loading Med Cert Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = Med.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.verdict}</td>
          <td>{item.doctor}</td>
          <td>{item.uid}</td>
          <td>
            <Link
              to={"/editmed"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Verify
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteMedCert(e, item.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
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
          <h1>Verify Medical Certificate</h1>
          <br></br>
          <br></br>
      </div>
      <div>
        
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Decision</th>
              <th>Doctor in Charge</th>
              <th>User ID</th>
              <th>Verification</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
  );
}

export default MedCert;