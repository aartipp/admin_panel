import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Bcreate() {
  const [values, setvalues] = useState({
    Bname: "",
    Baddress: "",
    Bcontact: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8000/branch`, values)
      .then((res) => {
        console.log(res);
        navigate("/branch");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add A Branch</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlfor="name">Branch Name :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter Branch Name"
              onChange={(e) => setvalues({ ...values, Bname: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="fee">Branch Address :- </label>
            <input
              type="fee"
              name="fee"
              classname="form control"
              placeholder="Enter Branch Address"
              onChange={(e) => setvalues({ ...values, Baddress: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="Duration"> Branch Contact:- </label>
            <input
              type="duration"
              name="duration"
              classname="form control"
              placeholder="Enter Branch contact"
              onChange={(e) => setvalues({ ...values, Bcontact: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/branch" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Bcreate;
