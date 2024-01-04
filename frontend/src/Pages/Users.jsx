import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, useToast, Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../Imges/bg.jpg";



export const Users = () => {
    const toast = useToast()
    const [data, setData] = useState([])
    const [filterName, setFilterName] = useState('');

    console.log('data', data)
    useEffect(() => {
        axios.get(`http://localhost:8001/contact${filterName ? `?name=${filterName}` : ''}`)
            .then((data) => {
                setData(data.data.contact)
                console.log(data.data.contact)
            })
            .catch((err) => {
                toast({ title: 'Try Again!!', status: 'error', position: 'top', duration: 1500, isClosable: true, })
            })
    }, [filterName])

    // delete the data


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8001/contact/delete/${id}`);
            // Update the state or fetch the updated data from the server
            setData((prevData) => prevData.filter((user) => user._id !== id));
            toast({
                title: "User deleted successfully",
                status: "success",
                position: "top",
                duration: 1500,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error deleting user:", error);
            toast({
                title: "Error deleting user",
                status: "error",
                position: "top",
                duration: 1500,
                isClosable: true,
            });
        }
    };

    // patch the data



    const navigate = useNavigate();
    const handleadd = () => {
        navigate("/contact")
    }


    const handleEdit = (id) => {
        // Redirect to the EditUser component with the specific user's ID
        navigate(`/edit-user/${id}`);
    };


    return (
        <Box style={{ backgroundImage: `url(${bg})`, height: "465px", paddingTop: "30px" }}>

            <Input style={{width:"500px",border:"3px solid green"}}
                type="text"
                placeholder="Filter by name"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
            />
            <Box display={'block'} w={['95%', '80%', '85%']} m={'1cm auto'} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} borderRadius={"20px"}>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption style={{ fontSize: "20px", fontFamily: "revert-layer" }}>All  Users Data</TableCaption>

                        <Thead>
                            <Tr>
                                <Th w={'4%'}>No.</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Mobile</Th>

                            </Tr>

                        </Thead>
                        <Tbody >


                            {data &&
                                data.length !== 0 &&
                                data.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>
                                            <Button
                                                style={{ backgroundColor: "lightgreen", color: "black", margin: "10px" }}
                                                onClick={() => handleEdit(user._id)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                style={{ backgroundColor: "red", color: "white" }}
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}

                        </Tbody>

                    </Table>
                    <div style={{ margin: "30px" }}>
                        <Button onClick={handleadd} style={{ backgroundColor: "cornsilk" }}>Add New User</Button>
                    </div>

                </TableContainer>
            </Box>
        </Box>
    )
}