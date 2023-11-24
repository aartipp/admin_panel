import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function UserCreate() {
  const [values, setvalues] = useState({
    UserName: "",
    UserPass: "",
    UserContact: "",
    UserAddress: "",
    UserPost: "",
    UserBranch: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(` http://localhost:8000/User`, values)
      .then((res) => {
        console.log(res);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add A Branch</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlfor="name">User Name :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter User Name"
              onChange={(e) => setvalues({ ...values, UserName: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="text">Branch Pass :- </label>
            <input
              type="text"
              name="text"
              classname="form control"
              placeholder="Enter User  Pass"
              onChange={(e) => setvalues({ ...values, UserPass: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="phone"> User Contact:- </label>
            <input
              type="phone"
              name="phone"
              classname="form control"
              placeholder="Enter User contact"
              onChange={(e) => setvalues({ ...values, UserContact: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label htmlfor="address"> User Address:- </label>
            <input
              type="address"
              name="address"
              classname="form control"
              placeholder="Enter User Address"
              onChange={(e) => setvalues({ ...values, UserAddress: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="text"> User Post:- </label>
            <input
              type="text"
              name="text"
              classname="form control"
              placeholder="Enter User Post"
              onChange={(e) => setvalues({ ...values, UserPost: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="text"> User Branch:- </label>
            <input
              type="text"
              name="text"
              classname="form control"
              placeholder="Enter User Branch"
              onChange={(e) => setvalues({ ...values, UserBranch: e.target.value })}
            />
          </div>

          
          <button className="btn btn-success">Submit</button>
          <Link to="/users" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default UserCreate;
