import Navbar from "./Navbar";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";

function SearchStudent() {

    const [table, setTable] = useState(null);

    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/"+key);
        console.log(result);
        result = await result.json();
    
        var student_HTMLTABLE = result.map((item, index) => {
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
        setTable(student_HTMLTABLE)

    }

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

    return (
        <div>
            <Navbar />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Student</h1>
                <br/>
                <input type='text' onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Student" />
            </div>
            <div className="col-sm-6 offset-sm-3">
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
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchStudent;