import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Course() {
  const [data, setaData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("  http://localhost:8000/course")
      .then((res) => setaData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id)=> {
    const confirm = window.confirm("Would you like to Delete?");
    if(confirm){
      axios.delete('  http://localhost:8000/course/'+id)
      .then(res => {
        navigate('/course');
      }).catch(err => console.log(err))
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Course </h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/coursecreate" className="btn btn-dark">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>CourseID</th>
              <th>CourseName</th>
              <th>Cfee</th>
              <th>Cduration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.coursename}</td>
                <td>{d.coursefee}</td>
                <td>{d.courseduration}</td>
                <td>
                  <Link to={`/courseread/${d.id}`} className="btn btn-sm btn-secondary me-2">Read</Link>
                  <Link to={`/courseupdate/${d.id}`} className="btn btn-sm btn-success me-2">Edit</Link>
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

export default Course;
