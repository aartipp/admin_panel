import { useEffect,useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';

function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setvalues] = useState({
    coursename: "",
    coursefee: "",
    courseduration: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`  http://localhost:8000/course/`+id)
      .then(res => {
        setvalues(res.data);
      })
      .catch(err => console.log(err));
  }, []);

const handleUpdate = (event) =>{
  event.preventDefault();
  axios
      .put(`  http://localhost:8000/course/`+id, values)
      .then((res) => {
        console.log(res);
        navigate("/course");
      })
      .catch((err) => console.log(err));
}
 
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Courses</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlfor="name">CourseName :- </label>
            <input
              type="text"
              name="name"
              classname="form control"
              placeholder="Enter Name"
              value={values.coursename}  onChange={(e) => setvalues({ ...values, coursename: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="fee">CourseFee :- </label>
            <input
              type="fee"
              name="fee"
              classname="form control"
              placeholder="Enter fee"
              value={values.coursefee}  onChange={(e) => setvalues({ ...values, coursefee: e.target.value })}

            />
          </div>
          <div className="mb-2">
            <label htmlfor="phone">CourseDuration :- </label>
            <input
              type="duration"
              name="duration"
              classname="form control"
              placeholder="Enter duration"
              value={values.courseduration}               onChange={(e) => setvalues({ ...values, courseduration: e.target.value })}

            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/course" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Update