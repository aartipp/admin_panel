import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from './main pages/SignUp'
import {Routes,Route} from "react-router-dom"
import Login from './main pages/Login'
import Layout from './Comp/Layout'
import Enrollment from './Route pages/Enrollment'
import EnrollmentCreate from './Route pages/EnrollmentCreate'
import EnrollmentRead from './Route pages/EnrollmentRead'
import EnrollmentUpdate from './Route pages/EnrollmentUpdate'
import Course from './Route pages/Course'
import CourseCreate from './Route pages/CourseCreate'
import CourseRead from './Route pages/CourseRead'
import CourseUpdate from './Route pages/CourseUpdate'
import Branch from './Route pages/Branch'
import BranchCreate from './Route pages/BranchCreate'
import BranchRead from './Route pages/BranchRead'
import BranchUpdate from './Route pages/BranchUpdate'
import Users from './Route pages/Users'
import UserCreate from './Route pages/UserCreate'
import UserRead from './Route pages/UserRead'
import UserUpdate from './Route pages/UserUpdate'
import Dashboard from './Comp/Dashboard'
import Logout from './main pages/Logout'

function App  () {
  return (
   

  
      <Routes>
        <Route index element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path='/enrollment' element={<Enrollment/>}/>
        <Route path='/enrollmentcreate' element={<EnrollmentCreate/>}/>
        <Route path='/enrollmentread/:id' element={<EnrollmentRead/>}/>
        <Route path='/enrollmentupdate/:id' element={<EnrollmentUpdate/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/coursecreate' element={<CourseCreate/>}/>
        <Route path='/courseread/:id' element={<CourseRead/>}/>
        <Route path='/courseupdate/:id' element={<CourseUpdate/>}/>
        <Route path='/branch' element={<Branch/>}/>
        <Route path='/branchcreate' element={<BranchCreate/>}/>
        <Route path='/branchread/:id' element={<BranchRead/>}/>
        <Route path='/branchupdate/:id' element={<BranchUpdate/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Usercreate' element={<UserCreate/>}/>
        <Route path='/Userread/:id' element={<UserRead/>}/>
        <Route path='/Userupdate/:id' element={<UserUpdate/>}/>
        <Route path='/logout' element={<Logout/>}/>
               {/* json-server --watch db.json --port 8000 */}

        </Route>
        </Routes>
        
     
      

  
  )
}

export default App