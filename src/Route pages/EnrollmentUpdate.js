import { useEffect,useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';

function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Enrollment/`+id)
      .then(res => {
        setvalues(res.data);
      })
      .catch(err => console.log(err));
  }, []);

const handleUpdate = (event) =>{
  event.preventDefault();
  axios
      .put(`http://localhost:8000/Enrollment/`+id, values)
      .then((res) => {
        console.log(res);
        navigate("/enrollment");
      })
      .catch((err) => console.log(err));
}
 
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Enrollment form</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlfor="name">Name :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter Name"
              value={values.name}  onChange={(e) => setvalues({ ...values, name: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="email">Email :- </label>
            <input
              type="email"
              name="email"
              classname="form control"
              placeholder="Enter Email"
              value={values.email}  onChange={(e) => setvalues({ ...values, email: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="phone">phone :- </label>
            <input
              type="text"
              name="phone"
              classname="form control"
              placeholder="Enter Phone"
              value={values.phone}  onChange={(e) => setvalues({ ...values, phone: e.target.value })}

            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/enrollment" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Update