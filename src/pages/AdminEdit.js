import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";

const AdminEdit = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [doctorInput, setUsers] = useState(state);


    const handleInput = (e) => {
        e.persist();
        setUsers({...doctorInput, [e.target.name]: e.target.value });
    }


    const updateUser = (e) => {
        e.preventDefault();
        
        const user_id = state.id;
        const data = {
            name: doctorInput.name || state.name,
            email: doctorInput.email || state.email,
            verified: doctorInput.verified || state.verified,
        }
        axios.put(`/api/verifyuser/${user_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/adminview');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandatory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/adminview');
            }
        });
    }
    return(
        <>
        <div className="col-sm-6 offset-sm-3">
            <h4>Edit User
                <Link to={'/adminview'} className="btn btn-danger btn-sm float-end"> BACK</Link>
             </h4>
            <form onSubmit={(e) => updateUser(e)} >
                <div className="form-group mb-3">
                    <label>Name</label>
                    <input style={{ height:50 }} type="text" name="name" onChange={(e) => handleInput(e)} value={doctorInput.name} className="form-control" />
                    <span className="text-danger">{errorInput.name}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="text" style={{ height:50 }} name="email" onChange={(e) => handleInput(e)} value={doctorInput.email}  className="form-control" />
                    <span className="text-danger">{errorInput.email}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Verify User</label>
                    <select type="text" name="verified" onChange={(e) => handleInput(e)} value={doctorInput.verified} className="form-control">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                <div className="form-group mb-3">
                    <button type="submit" id="updatebtn" className="btn btn-primary">Update User</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default AdminEdit;