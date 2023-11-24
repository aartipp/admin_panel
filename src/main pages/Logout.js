import React from "react";
import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Logout() {
   const navigate= useNavigate()
    const handlelogout=()=>{
        sessionStorage.clear()
        navigate('/')
    }
  return <div>
    <Button onClick={handlelogout}>Logout</Button>
    </div>;
}

export default Logout;
