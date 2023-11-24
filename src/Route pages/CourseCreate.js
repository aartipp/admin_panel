import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Ccreate() {
  const [values, setvalues] = useState({
    coursename: "",
    coursefee: "",
    courseduration: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(` http://localhost:8000/course`, values)
      .then((res) => {
        console.log(res);
        navigate("/course");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add A Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlfor="name">Course Name :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter Name"
              onChange={(e) => setvalues({ ...values, coursename: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="fee">CourseFee :- </label>
            <input
              type="fee"
              name="fee"
              classname="form control"
              placeholder="Enter fee"
              onChange={(e) => setvalues({ ...values, coursefee: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlfor="Duration"> CourseDuration:- </label>
            <input
              type="duration"
              name="duration"
              classname="form control"
              placeholder="Enter duration"
              onChange={(e) => setvalues({ ...values, courseduration: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/course" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Ccreate;
