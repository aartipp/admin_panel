import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Users() {
  const [data, setaData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/User")
      .then((res) => setaData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id)=> {
    const confirm = window.confirm("Would you like to Delete?");
    if(confirm){
      axios.delete('http://localhost:8000/User/'+id)
      .then(res => {
        navigate('/users');
      }).catch(err => console.log(err))
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of User </h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/Usercreate" className="btn btn-dark">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>UserID</th>
              <th>UserName</th>
              <th>UserPass</th>
              <th>UserContact</th>
             <th> UserAddress</th>
             <th>UserPost</th>
             <th>UserBranch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.UserName}</td>
                <td>{d.UserPass}</td>
                <td>{d.UserContact}</td>
                <td>{d.UserAddress}</td>
                <td>{d.UserPost}</td>
                <td>{d.UserBranch}</td>
                <td>
                  <Link to={`/Userread/${d.id}`} className="btn btn-sm btn-secondary me-2">Read</Link>
                  <Link to={`/Userupdate/${d.id}`} className="btn btn-sm btn-success me-2">Edit</Link>
                  <button  onClick={ e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Users;
