import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';

const Edit = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [studentInput, setStudent] = useState(state);
    

    const handleInput = (e) => {
        e.persist();
        setStudent({...studentInput, [e.target.name]: e.target.value });
    }


    const updateStudent = (e) => {
        e.preventDefault();
        
        const student_id = state.id;
        const data = {
            name: studentInput.name || state.name,
            bday: studentInput.bday || state.bday,
            sex: studentInput.sex || state.sex,
            phone: studentInput.phone || state.phone,
            address: studentInput.address || state.address,
            religion: studentInput.religion || state.religion, 
            cvs: studentInput.cvs || state.cvs,
        }
        axios.put(`/api/update-student/${student_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/dashboard');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/dashboard');
            }
        });
    }
    return(
        <>
        <Navbar />
        <div>
            <h4>Edit Students 
                <Link to={'/dashboard'} className="btn btn-danger btn-sm float-end"> BACK</Link>
             </h4>
            <form onSubmit={(e) => updateStudent(e)} >
                <div className="form-group mb-3">
                    <label>Name</label>
                    <input style={{ height:50 }} type="text" name="name" onChange={(e) => handleInput(e)} value={studentInput.name} className="form-control" />
                    <span className="text-danger">{errorInput.name}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Birthdate</label>
                    <input type="text" style={{ height:50 }} name="bday" onChange={(e) => handleInput(e)} value={studentInput.bday}  className="form-control" />
                    <span className="text-danger">{errorInput.bday}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Sex</label>
                    <input type="text" style={{ height:50 }} name="sex" onChange={(e) => handleInput(e)} value={studentInput.sex}  className="form-control" />
                    <span className="text-danger">{errorInput.sex}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Phone</label>
                    <input type="text" style={{ height:50 }} name="phone" onChange={(e) => handleInput(e)} value={studentInput.phone}  className="form-control" />
                    <span className="text-danger">{errorInput.phone}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Address</label>
                    <input type="text" style={{ height:50 }} name="address" onChange={(e) => handleInput(e)} value={studentInput.address}  className="form-control" />
                    <span className="text-danger">{errorInput.phone}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Religion</label>
                    <input type="text" style={{ height:50 }} name="religion" onChange={(e) => handleInput(e)} value={studentInput.religion}  className="form-control" />
                    <span className="text-danger">{errorInput.religion}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Civil Status</label>
                    <input type="text" style={{ height:50 }} name="cvs" onChange={(e) => handleInput(e)} value={studentInput.cvs}  className="form-control" />
                    <span className="text-danger">{errorInput.cvs}</span>
                </div>
                <div className="form-group mb-3">
                    <button type="submit" id="updatebtn" className="btn btn-primary">Update Student</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default Edit;