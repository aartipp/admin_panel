import { useEffect,useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';

function UserUpdate() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setvalues] = useState({
    UserName: "",
    UserPass: "",
    UserContact: "",
    UserAddress: "",
    UserPost: "",
    UserBranch: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/User/`+id)
      .then(res => {
        setvalues(res.data);
      })
      .catch(err => console.log(err));
  }, []);

const handleUpdate = (event) =>{
  event.preventDefault();
  axios
      .put(`http://localhost:8000/User/`+id, values)
      .then((res) => {
        console.log(res);
        navigate("/users");
      })
      .catch((err) => console.log(err));
}
 
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlfor="name">User Name :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter User Name"
              value={values.UserName}  onChange={(e) => setvalues({ ...values, UserName: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="text">User Pass :- </label>
            <input
              type="text"
              name="text"
              classname="form control"
              placeholder="Enter User Pass"
              value={values.UserPass}  onChange={(e) => setvalues({ ...values, UserPass: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="phone">User Contact:- </label>
            <input
              type="phone"
              name="phone"
              classname="form control"
              placeholder="Enter Branch Contact"
              value={values.UserContact}               onChange={(e) => setvalues({ ...values, UserContact: e.target.value })}

            />
          </div>

          <div className="mb-2">
            <label htmlfor="address">User Address :- </label>
            <input
              type="address"
              name="address"
              classname="form control"
              placeholder="Enter User Address"
              value={values.UserAddress}  onChange={(e) => setvalues({ ...values, UserAddress: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="text">User Post :- </label>
            <input
              type="text"
              name="text"
              classname="form control"
              placeholder="Enter User Post"
              value={values.UserPost}  onChange={(e) => setvalues({ ...values, UserPost: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="phone">User Branch:- </label>
            <input
              type="phone"
              name="phone"
              classname="form control"
              placeholder="Enter User Branch"
              value={values.UserBranch}               onChange={(e) => setvalues({ ...values, UserBranch: e.target.value })}

            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/users" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default UserUpdate;