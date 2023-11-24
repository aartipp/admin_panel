
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import JsonData from '../src/Components/shared/database/db.json';


function Enrollment() {
  const [data, setaData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = ()=>{
    axios
    .get("http://localhost:8000/Enrollment")
    .then((res) => setaData(res.data))
    .catch((err) => console.log(err));
  }

  const handleDelete = (id)=> {
    const confirm = window.confirm("Would you like to Delete?");
    if(confirm){
      axios.delete('http://localhost:8000/Enrollment/'+ id)
      .then(res => {
        navigate('/enrollment');
        fetchData();
      }).catch(err => console.log(err))
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Enrollment </h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/enrollmentcreate" className="btn btn-dark">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/enrollmentread/${d.id}`} className="btn btn-sm btn-secondary me-2">Read</Link>
                  <Link to={`/enrollmentupdate/${d.id}`} className="btn btn-sm btn-success me-2">Edit</Link>
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

export default Enrollment;