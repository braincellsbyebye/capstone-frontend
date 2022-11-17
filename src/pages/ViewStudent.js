import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import BCHART from "./BarChart";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [data, setData] = useState('');
  const [female, setFemale] = useState('');
  const [male, setMale] = useState('');

  const [rc, setRC] = useState('');
  const [ba, setBA] = useState('');
  const [ig, setIG] = useState('');
  const [prr, setPRR] = useState('');

  const [single, setSingle] = useState('');
  const [mar, setMar] = useState('');
  const [sep, setSep] = useState('');
  const [pref, setPref] = useState('');

  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history("/login")
  }

  let user = JSON.parse(localStorage.getItem('user-info'))

  useEffect(() => {
    axios.get(`/api/students`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.students);
        setLoading(false);
      }
    });
    axios.get(`/api/doctors`).then((res) => {
      if (res.status === 200) {
        setDoctors(res.data.doctors);
        setLoading(false);
      }
    });
    fetch('http://localhost:8000/api/counter').then((response) => response.json()).then((data) => {setData(data)})
    fetch('http://localhost:8000/api/female').then((response) => response.json()).then((data) => {setFemale(data)})
    fetch('http://localhost:8000/api/male').then((response) => response.json()).then((data) => {setMale(data)})

    fetch('http://localhost:8000/api/RC').then((response) => response.json()).then((data) => {setRC(data)})
    fetch('http://localhost:8000/api/BA').then((response) => response.json()).then((data) => {setBA(data)})
    fetch('http://localhost:8000/api/IG').then((response) => response.json()).then((data) => {setIG(data)})
    fetch('http://localhost:8000/api/PRR').then((response) => response.json()).then((data) => {setPRR(data)})

    fetch('http://localhost:8000/api/single').then((response) => response.json()).then((data) => {setSingle(data)})
    fetch('http://localhost:8000/api/married').then((response) => response.json()).then((data) => {setMar(data)})
    fetch('http://localhost:8000/api/sep').then((response) => response.json()).then((data) => {setSep(data)})
    fetch('http://localhost:8000/api/pref').then((response) => response.json()).then((data) => {setPref(data)})

  }, []);

  const deleteStudent = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-student/${id}`).then((res) => {
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
    return <h4>Loading Student Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.bday}</td>
          <td>{item.sex}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.religion}</td>
          <td>{item.cvs}</td>
          <td>
            <Link
              to={"/add-medrec"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add Medical Record
            </Link>
          </td>
          <td>
            <Link
              to={"/add-guardian"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add Guardian
            </Link>
          </td>
          <td>
            <Link
              to={"/edit"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteStudent(e, item.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

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
    var doctor_TABLE = "";

    doctor_TABLE = doctors.map((doctor, index) => {
      return (
        <tr key={index}>
          <td>{doctor.id}</td>
          <td>{doctor.docname}</td>
          <td>{doctor.docposition}</td>
          <td>
            <Link
              to={"/edit-doctor"}
              state={doctor}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteDoctor(e, doctor.id)}
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
        <div style={{ marginLeft: 20 }}>
          <Link to='/userprofile'>
            <h5>{user.name}</h5>
          </Link>
          <h6>{user.email}</h6>
          <button onClick={logout} >Log Out</button>
        </div>
        <br></br>
        <br></br>
        <div style={{ marginLeft: 40 }}>
          <h6>Total Number of Students: {data}</h6>
          <h6>Total Number of Female Students: {female}</h6>
          <h6>Total Number of Male Students: {male}</h6>
        </div>
        <br></br>
        <br></br>
        <div style={{ marginLeft: 100}}>
          <BCHART />
        </div>
        <div style={{ marginLeft: 550, marginTop: -110 }}>
          <h5>Legend:</h5>
          <h6>Total Single: {single}</h6>
          <h6>Total Married: {mar}</h6>
          <h6>Total Seperated: {sep}</h6>
          <h6>Total Prefer not to say: {pref}</h6>
        </div>
        <div style={{ marginLeft: 1000, marginTop: -180 }}>
          <LineChart/>
        </div>
        <div style={{ marginLeft: 1500, marginTop: -120 }}>
          <h5>Legend:</h5>
          <h6>Total Roman Catholic: {rc}</h6>
          <h6>Total Born Again: {ba}</h6>
          <h6>Total Iglesia: {ig}</h6>
          <h6>Total Prefer not to say: {prr}</h6>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <h4 style={{ marginLeft: 50 }}>
          Students Data
          <Link
            to={"/add-students"}
            className="btn btn-primary btn-sm float-end"
          >
            {" "}
            Add Student
          </Link>
        </h4>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birthdate</th>
              <th>Sex</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Religion</th>
              <th>Civil Status</th>
              <th>Add Guardian</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        <h4 style={{ marginLeft: 50 }}>
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
      <div className="col-sm-6 offset-sm-3">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Doctor Name</th>
              <th>Doctor Position</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{doctor_TABLE}</tbody>
        </table>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div style={{ marginLeft: 50 }}>
        <h4>Announcements</h4>
      </div>
    </>
  );
}

export default Dashboard;
