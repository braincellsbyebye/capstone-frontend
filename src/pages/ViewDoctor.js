import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "./Navbar";

function ViewDoctor() {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get(`/api/doctors`).then((res) => {
      if (res.status === 200) {
        setDoctors(res.data.doctors);
        setLoading(false);
      }
    });
  }, []);

  const deleteDoctor = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-doctor/${id}`).then((res) => {
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
    return <h4>Loading Doctor Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = doctors.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.docname}</td>
          <td>{item.docposition}</td>
          <td>
            <Link
              to={"/edit-doctor"}
              state={doctors}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteDoctor(e, item.id)}
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
      <Navbar />
      <div>
        <h4>
          Doctor Data
          <Link
            to={"/add-doctors"}
            className="btn btn-primary btn-sm float-end"
          >
            {" "}
            Add Doctor
          </Link>
        </h4>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Doctor Name</th>
              <th>Doctor Position</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
  );
}

export default ViewDoctor;
