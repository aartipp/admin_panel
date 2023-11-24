import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";

const SignUp = () => {

  const [inpval,setInpval]= useState({
name:"",
email:"",
date:"",
password:""
  })
  const [data,setData] = useState([]);
  console.log(inpval);

  const getdata=(e)=>{
// console.log(e.target.value);


const {value,name} = e.target;
// console.log(value,name)

setInpval(()=>{
  return {
       ...inpval,
 [name]: value
  }
})


  }

  const addData =(e)=>{
      e.preventDefault();


const{name, email, date, password} = inpval;

if(name === ""){
  alert("name field is required")
}else if(email === ""){
alert("email field is required")
}else if(!email.includes("@")){
  alert("plz enter valid email address")
}else if(date === ""){
  alert("date field is required")
}else if(password === ""){
  alert("password field is required")
}else if(password.length < 5){
  alert("password length greater five")
}else{
  console.log("data added succesfully")

localStorage.setItem("users",JSON.stringify([...data,inpval]));

}

  }



  return (
    <>
      <div className="container mt-5" >
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlled="formBasicname">
                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter your Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlled="formBasicEmail">
                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlled="formBasicEmail">
                <Form.Control name='date' onChange={getdata} type="date"  />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlled="formBasicpassword">
                <Form.Control type="password" name='password'  onChange={getdata} placeholder="password" />
              </Form.Group>

              <Button varient="primary" className="mb-3 col-lg-6" 
              onClick={addData}
              style={{background:"rgb(67,185,127)"}} type="submit">Submit</Button>
            </Form>
            <p className="mt-3"> Already Have an Account <span><NavLink to="/login"> SignIn</NavLink></span></p>
          </div>
          <Sign_img/>
        </section>
      </div>
    </>
  );
};

export default SignUp;
