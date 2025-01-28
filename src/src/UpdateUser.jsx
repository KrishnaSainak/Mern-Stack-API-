import React ,{useState,useEffect} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
function UpdateUser() {
    const {id} = useParams()
    const [firstname, setfirstname]= useState()
    const [lastname, setlastname]= useState()
    const [email, setemail]= useState()
    const [department, setdepartment]= useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            setfirstname(result.data.firstname)
            setlastname(result.data.lastname)
            setemail(result.data.email)
            setdepartment(result.data.department)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/UpdateUser/"+id,{firstname,lastname,email,department})
                .then(result=>{
                    console.log(result)
                    navigate('/')
                })
                .catch(error=>console.log(error))
    }
    return(
        <div className = "d-flex vh-100 bg-info justify-content-center align-items-center">
        <div className =  "w-50 bg-white rounded p-3">
        <form>
            <h2>Update User-Details</h2>
            <div className = 'mb-2'>
            <label htmlFor="">First-Name</label>
            <input type="text" placeholder = "Enter Your First Name" className="form-control"
                value={firstname}
                onChange={(e)=> setfirstname(e.target.value)}
            />
            </div>
            <div className = 'mb-2'>
            <label htmlFor="">Last-Name</label>
            <input type="text" placeholder = "Enter Your Last Name" className="form-control"
                value={lastname}
                onChange={(e)=> setlastname(e.target.value)}
            />
            </div>
            <div className = 'mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder = "Enter Your Email" className="form-control"
                value={email}
                onChange={(e)=> setemail(e.target.value)}
            />
            </div>
            <div className = 'mb-2'>
            <label htmlFor="">Department</label>
            <input type="text" placeholder = "Enter Your Department" className="form-control"
                value={department}
                onChange={(e)=> setdepartment(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-success">Update</button>
        </form>
        </div>
        
        </div>
    )
}

export default UpdateUser;