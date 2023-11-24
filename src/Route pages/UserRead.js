import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function UserRead() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`  http://localhost:8000/User/`+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of User</h3>
        <div className="mb-2">
          <strong>User Name : {data.UserName}</strong>
        </div>
        <div className="mb-2">
          <strong>User Pass : {data.UserPass}</strong>
        </div>
        <div className="mb-2">
          <strong>User Contact : {data.UserContact}</strong>
        </div>
        <div className="mb-2">
          <strong>User Address : {data.UserAddress}</strong>
        </div>
        <div className="mb-2">
          <strong>User Post : {data.UserPost}</strong>
        </div>
        <div className="mb-2">
          <strong>User Branch : {data.UserBranch}</strong>
        </div>
        <Link to={`/Userupdate/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/users" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default UserRead;
