import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminView() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const history = useNavigate();
  function logout() {
    localStorage.clear();
    history("/");
  }

  useEffect(() => {
    axios.get(`/api/users`).then((res) => {
      if (res.status === 200) {
        setUsers(res.data.user);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading User Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = users.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.verified}</td>
          <td>
            <Link to={"/adminedit"} state={item} className="btn btn-success btn-sm">
              Edit
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <div>
        <div style={{ marginLeft: 20 }}>
            <h5>admin</h5>
          <h6>admin@gmail.com</h6>
          <button onClick={logout}>Log Out</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <h4 style={{ marginLeft: 50 }}>
          User Data
        </h4>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
      <br></br>
    </>
  );
}

export default AdminView;
