import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Branch() {
  const [data, setaData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/branch")
      .then((res) => setaData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id)=> {
    const confirm = window.confirm("Would you like to Delete?");
    if(confirm){
      axios.delete('http://localhost:8000/branch/'+id)
      .then(res => {
        navigate('/branch');
      }).catch(err => console.log(err))
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Branch </h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/branchcreate" className="btn btn-dark">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>BranchID</th>
              <th>BranchName</th>
              <th>BranchAddress</th>
              <th>BranchContact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.Bname}</td>
                <td>{d.Baddress}</td>
                <td>{d.Bcontact}</td>
                <td>
                  <Link to={`/branchread/${d.id}`} className="btn btn-sm btn-secondary me-2">Read</Link>
                  <Link to={`/branchupdate/${d.id}`} className="btn btn-sm btn-success me-2">Edit</Link>
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

export default Branch;
