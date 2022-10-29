import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

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
          <td>{item.uid}</td>
          <td>
            <Link
              to={"/editmed"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <Navbar />
      <div>
        <br></br>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Verdict</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
  );
}

export default MedCert;