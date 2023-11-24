import { useEffect,useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';

function Bupdate() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setvalues] = useState({
    Bname: "",
    Baddress: "",
    Bcontact: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/branch/`+id)
      .then(res => {
        setvalues(res.data);
      })
      .catch(err => console.log(err));
  }, []);

const handleUpdate = (event) =>{
  event.preventDefault();
  axios
      .put(`http://localhost:8000/branch/`+id, values)
      .then((res) => {
        console.log(res);
        navigate("/branch");
      })
      .catch((err) => console.log(err));
}
 
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Branch</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlfor="name">Branch Name :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter Branch Name"
              value={values.Bname}  onChange={(e) => setvalues({ ...values, Bname: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="address">Branch Address :- </label>
            <input
              type="address"
              name="address"
              classname="form control"
              placeholder="Enter Branch Address"
              value={values.Baddress}  onChange={(e) => setvalues({ ...values, Baddress: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="phone">Branch Contact:- </label>
            <input
              type="phone"
              name="phone"
              classname="form control"
              placeholder="Enter Branch Contact"
              value={values.Bcontact}               onChange={(e) => setvalues({ ...values, Bcontact: e.target.value })}

            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/branch" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Bupdate;