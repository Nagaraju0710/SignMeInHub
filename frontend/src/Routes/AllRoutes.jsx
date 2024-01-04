

import { Route, Routes } from "react-router-dom"
// import Home from "../Pages/Home"
// import Hire from "../Pages/Hire"
// import Story from "../Pages/Story"
import LogIn from "../Pages/LogIn"
import SignUp from "../Pages/SignUp"

import Private from "../Pages/Private"
import { Contact } from "../Pages/Contact"
import { Users } from "../Pages/Users"
import { EditUser } from "../Pages/Edituser"








export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                 <Route path="/" element={<Private><Users/></Private> }/>
           
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/edit-user/:id" element={<EditUser/>}/>
                 <Route path="/contact" element={ <Private><Contact/></Private>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </div>
    )
}