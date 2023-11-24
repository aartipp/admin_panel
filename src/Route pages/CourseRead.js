import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function CRead() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`  http://localhost:8000/course/`+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of Course</h3>
        <div className="mb-2">
          <strong>CourseName : {data.coursename}</strong>
        </div>
        <div className="mb-2">
          <strong>CourseFee : {data.coursefee}</strong>
        </div>
        <div className="mb-2">
          <strong>CourseDuration : {data.courseduration}</strong>
        </div>
        <Link to={`/courseupdate/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/course" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default CRead;
