import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { useParams, useHistory } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgg from "../Imges/bgg.jpg";

export const EditUser=()=>{
    const { id } = useParams();
 
  const toast = useToast();

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    // Fetch user data by ID when the component mounts
    axios
      .get(`http://localhost:8001/contact/${id}`)
      .then((response) => {
        setUser(response.data.contact);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        toast({
          title: "Error fetching user",
          status: "error",
          position: "top",
          duration: 1500,
          isClosable: true,
        });
      });
  }, [id]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleUpdate = async () => {
    try {
      await axios.patch(`http://localhost:8001/contact/update/${id}`, user);
      toast({
        title: "User updated successfully",
        status: "success",
        position: "top",
        duration: 1500,
        isClosable: true,
      });
      // Redirect to the Users page after successful update
     navigate("/")
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        title: "Error updating user",
        status: "error",
        position: "top",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  

  return (
    <Box style={{ backgroundImage:`url(${bgg})` ,height:"465px" ,paddingTop:"30px"}}>
      <Box
        display={"block"}
        w={["25%", "50%", "25%"]}
        m={"1cm auto"}
      >
        <h2 style={{marginBottom:"40px",color:"darkgreen",fontSize:"30px"}}>Edit User</h2>
        <form>
          <div>
            <label>Name:</label>
            <Input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <Input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Mobile:</label>
            <Input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleInputChange}
            />
          </div>
          <Button style={{margin:"20px",backgroundColor:"lightgreen"}} onClick={handleUpdate}>Update User</Button>
        </form>
      </Box>
    </Box>
  
  );
}