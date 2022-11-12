import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "./Navbar";

function Guardian() {
  const [loading, setLoading] = useState(true);
  const [guardian, setGuardian] = useState([]);
  const [table, setTable] = useState(null);

  const history = useNavigate();
  function logout()
  {
    localStorage.clear();
    history("/login")
  }

  useEffect(() => {
    axios.get(`/api/guardian`).then((res) => {
      if (res.status === 200) {
        setGuardian(res.data.guardian);
        setLoading(false);
      }
    });
  }, []);

  const deleteGuardian = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-guardian/${id}`).then((res) => {
      if (res.data.status === 200) {
        swal("Deleted!", res.data.message, "success");
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        thisClicked.innerText = "Delete";
      }
    });
  };

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
          <td>
            <button
              type="button"
              onClick={(e) => deleteGuardian(e, item.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
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
          <td>
            <button
              type="button"
              onClick={(e) => deleteGuardian(e, item.id)}
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
          <button onClick={logout} >Log Out</button>
        </div>
        <hr></hr>
        <br></br>
      </div>
      <div className="col-sm-6 offset-sm-3">
        <h4 style={{ marginLeft: 50 }}>
          Guardian Data
        </h4>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Relation to Student</th>
              <th>Student ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
      <div className="col-sm-6 offset-sm-3">
        <h4>Search Guardian by Student ID</h4>
        <br/>
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
              <th>Delete</th>
              </tr>
          </thead>
          <tbody>{table}</tbody>
          </table>
    </div>
    </>
  );
}

export default Guardian;
