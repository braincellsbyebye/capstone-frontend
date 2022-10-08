import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function AddStudent() {

    const history = useHistory();
    const [studentInput, setStudent] = useState({
        name: '',
        bday: '',
        sex: '',
        phone: '',
        address: '',
        religion: '',
        cvs:'',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setStudent({...studentInput, [e.target.name]: e.target.value })
    }

    const saveStudent = (e) => {
        e.preventDefault();
        
        const data = {
            name:studentInput.name,
            bday:studentInput.bday,
            sex:studentInput.sex,
            phone:studentInput.phone,
            address:studentInput.address,
            religion:studentInput.religion,
            cvs:studentInput.cvs,
        }

        axios.post(`/api/add-student`, data).then(res => {

            if(res.data.status === 200)
            {
                swal("Success!",res.data.message,"success");
                setStudent({
                    name: '',
                    bday: '',
                    sex: '',
                    phone: '',
                    address: '',
                    religion:'',
                    cvs:'',
                    error_list: [],
                });
                history.push('/students');
            }
            else if(res.data.status === 422)
            {
                setStudent({...studentInput, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Students 
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={saveStudent} >
                                    <div className="form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={studentInput.name} className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.name}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Birthdate</label>
                                        <input type="date" name="bday" onChange={handleInput} value={studentInput.bday}  className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.bday}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Sex</label>
                                        <input type="text" name="sex" onChange={handleInput} value={studentInput.sex}  className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.sex}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Phone</label>
                                        <input type="text" name="phone" onChange={handleInput} value={studentInput.phone}  className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.phone}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="text" name="address" onChange={handleInput} value={studentInput.address}  className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.address}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Religion</label>
                                        <input type="text" name="religion" onChange={handleInput} value={studentInput.religion}  className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.religion}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Civil Status</label>
                                        <input type="text" name="cvs" onChange={handleInput} value={studentInput.cvs}  className="form-control" />
                                        <span className="text-danger">{studentInput.error_list.cvs}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Student</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddStudent;