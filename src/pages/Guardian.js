import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function Guardian() {
  const [loading, setLoading] = useState(true);
  const [guardian, setGuardian] = useState([]);
  const [table, setTable] = useState(null);


  useEffect(() => {
    axios.get(`/api/guardian`).then((res) => {
      if (res.status === 200) {
        setGuardian(res.data.guardian);
        setLoading(false);
      }
    });
  }, []);

  async function search(key) {
    console.warn(key)
    let result = await fetch("http://localhost:8000/api/search-guardian/"+key);
    console.log(result);
    result = await result.json();

    var student_HTMLTABLE = result.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.num}</td>
          <td>{item.relts}</td>
          <td>{item.student_id}</td>
          <td>
            <Link
              to={"/edit-guardian"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
        </tr>
      );
    });
    setTable(student_HTMLTABLE)
}

  if (loading) {
    return <h4>Loading Guardian Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = guardian.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.num}</td>
          <td>{item.relts}</td>
          <td>{item.student_id}</td>
          <td>
            <Link
              to={"/edit-guardian"}
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
      <div className="col-sm-6 offset-sm-3">
        <h3>Search Contact by Student ID</h3>
        <br></br>
        <input type='text' onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Student" />
      </div>
      <div className="col-sm-6 offset-sm-3">
          <table className="table table-bordered table-striped">
          <thead>
              <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Relation to Student</th>
              <th>Student ID</th>
              <th>Edit</th>
              </tr>
          </thead>
          <tbody>{table}</tbody>
          </table>
    </div>
    <div>
      </div>
      <div className="col-sm-6 offset-sm-3">
        <h3 style={{ marginLeft: 5, marginTop:50 }}>
          Contact Person
        </h3>
        <br></br>
        <br>
        </br>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Relation to Student</th>
              <th>Student ID</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
          <br></br>
          <br></br>
          <br></br>
        </table>
      </div>
    </>
  );
}

export default Guardian;