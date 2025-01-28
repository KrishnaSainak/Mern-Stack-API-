import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function CreateUser() {
    const [firstname, setfirstname]= useState()
    const [lastname, setlastname]= useState()
    const [email, setemail]= useState()
    const [department, setdepartment]= useState()
    const navigate = useNavigate()

    const Submit = (e)=> {
        e.preventDefault();
        axios.post("http://localhost:3001/CreateUser",{firstname,lastname,email,department})
        .then(result=>{
            console.log(result)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    return(
        <div className = "d-flex vh-100 bg-info justify-content-center align-items-center">
        <div className =  "w-50 bg-white rounded p-3">
        <form onSubmit = {Submit}>
            <h2>Add User</h2>
            <div className = 'mb-2'>
            <label htmlFor="">First-Name</label>
            <input type="text" placeholder = "Enter Your First Name" className="form-control"
                onChange={(e) => setfirstname(e.target.value)}/>
            </div>
            <div className = 'mb-2'>
            <label htmlFor="">Last-Name</label>
            <input type="text" placeholder = "Enter Your Last Name" className="form-control"
                onChange={(e) => setlastname(e.target.value)}/>

            </div><div className = 'mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder = "Enter Your Email" className="form-control"
            onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className = 'mb-2'>
            <label htmlFor="">Department</label>
            <input type="text" placeholder = "Enter Your Department" className="form-control"
                onChange={(e) => setdepartment(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
        </div>
        
        </div>
    )
}

export default CreateUser;