import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import BCHART from "./BarChart";
import YRBChart from "./BChartYrlvl";

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

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');

  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history("/")
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
    axios.get('/api/counter').then(response => {
      if(response.status === 200)
      {
          setData(response.data.all)
      }
    });
    axios.get('/api/female').then(response => {
      if(response.status === 200)
      {
          setFemale(response.data.all)
      }
    });
    axios.get('/api/male').then(response => {
      if(response.status === 200)
      {
          setMale(response.data.all)
      }
    });
    axios.get('/api/RC').then(response => {
      if(response.status === 200)
      {
          setRC(response.data.all)
      }
    });
    axios.get('/api/BA').then(response => {
      if(response.status === 200)
      {
          setBA(response.data.all)
      }
    });
    axios.get('/api/IG').then(response => {
      if(response.status === 200)
      {
          setIG(response.data.all)
      }
    });
    axios.get('/api/PRR').then(response => {
      if(response.status === 200)
      {
          setPRR(response.data.all)
      }
    });
    axios.get('/api/single').then(response => {
      if(response.status === 200)
      {
          setSingle(response.data.all)
      }
    });
    axios.get('/api/married').then(response => {
      if(response.status === 200)
      {
          setMar(response.data.all)
      }
    });
    axios.get('/api/sep').then(response => {
      if(response.status === 200)
      {
          setSep(response.data.all)
      }
    });
    axios.get('/api/pref').then(response => {
      if(response.status === 200)
      {
          setPref(response.data.all)
      }
    });
    axios.get('/api/first').then(response => {
      if(response.status === 200)
      {
          setFirst(response.data.all)
      }
    });
    axios.get('/api/second').then(response => {
      if(response.status === 200)
      {
          setSecond(response.data.all)
      }
    });
    axios.get('/api/third').then(response => {
      if(response.status === 200)
      {
          setThird(response.data.all)
      }
    });
    axios.get('/api/fourth').then(response => {
      if(response.status === 200)
      {
          setFourth(response.data.all)
      }
    });
    axios.get('/api/fifth').then(response => {
      if(response.status === 200)
      {
          setFifth(response.data.all)
      }
    });
  }, []);

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
          <td>{item.course}</td>
          <td>{item.yrlvl}</td>
          <td>{item.address}</td>
          <td>{item.religion}</td>
          <td>{item.cvs}</td>
          <td><img src={ "http://localhost:8000/" + item.cbc } className="img-fluid img-bordered" width="200px" alt='alternative'/></td>
          <td><img src={ "http://localhost:8000/" + item.uri } className="img-fluid img-bordered" width="200px" alt='alternative'/></td>
          <td>
            <Link
              to={"/add-medrec"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add
            </Link>
          </td>
          <td>
            <Link
              to={"/add-guardian"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add
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
        </tr>
      );
    });
  }

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
          <h4>Civil Status Chart</h4>
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
          <h4>Religion Chart</h4>
          <LineChart/>
        </div>
        <div style={{ marginLeft: 1500, marginTop: -120 }}>
          <h5>Legend:</h5>
          <h6>Total Roman Catholic: {rc}</h6>
          <h6>Total Born Again: {ba}</h6>
          <h6>Total Iglesia: {ig}</h6>
          <h6>Total Prefer not to say: {prr}</h6>
        </div>
        <div style={{ marginLeft: 100}}>
          <h4>Year Level Chart</h4>
          <YRBChart/>
        </div>
        <div style={{ marginLeft: 550, marginTop: -110 }}>
          <h5>Legend:</h5>
          <h6>Total First Year: {first}</h6>
          <h6>Total Second Year: {second}</h6>
          <h6>Total Third Year: {third}</h6>
          <h6>Total Fourth Year: {fourth}</h6>
          <h6>Total Fifth Year: {fifth}</h6>
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
              <th>Course</th>
              <th>Year Level</th>
              <th>Address</th>
              <th>Religion</th>
              <th>Civil Status</th>
              <th>CBC Image</th>
              <th>Urinalysis Image</th>
              <th>Add Medical Record</th>
              <th>Add Contact Person</th>
              <th>Edit</th>
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
            </tr>
          </thead>
          <tbody>{doctor_TABLE}</tbody>
        </table>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
    </>
  );
}

export default Dashboard;
