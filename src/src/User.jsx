import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
       .then(res=>{
        window.location.reload()
       })
       .catch(err=>console.log(err))
    }
    return(
        <div className = "d-flex vh-100 bg-info justify-content-center align-items-center">
            <div className = "w-50 bg-white rounded p-3">
            <Link to = "/create" className = "btn btn-success">Add  +</Link>
            <table className = "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Namae</th>
                        <th>Email</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.department}</td>
                                <td>
                                <div className = "d-flex flex-row">
                                <Link to = {`/update/${user._id}`} className = "btn btn-dark m-1">Update</Link>
                                <button className = "btn btn-danger" onClick={(e)=>handleDelete(user._id)} >Delete</button>
                                </div>
                                </td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Users;