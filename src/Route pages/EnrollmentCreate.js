import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8000/Enrollment`, values)
      .then((res) => {
        console.log(res);
        navigate("/enrollment");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>New Enrollment</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlfor="name">Name :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter Name"
              onChange={(e) => setvalues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="email">Email :- </label>
            <input
              type="email"
              name="email"
              classname="form control"
              placeholder="Enter Email"
              onChange={(e) => setvalues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="phone">phone :- </label>
            <input
              type="text"
              name="phone"
              classname="form control"
              placeholder="Enter Phone"
              onChange={(e) => setvalues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/enrollment" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
