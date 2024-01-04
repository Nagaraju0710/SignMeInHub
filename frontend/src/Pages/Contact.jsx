import { Box, Input, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios'
import Navbar from '../Components/Navbar';
import { Link, useLocation, useNavigate } from "react-router-dom";
import bggg from "../Imges/bggg.jpg";


export const Contact = () => {
    const toast = useToast()
    // const currentDate = new Date()
    // const date = `${currentDate.getMonth()}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('')
    // const [massage, setMassage] = useState('');

    let obj = { name, email, mobile }

    const handleSubmit = () => {
        if (name == '' && email == '' && mobile == '') {
            toast({ title: 'Fill all the box', status: 'error', position: 'top', duration: 1500, isClosable: true, })
        } else {
            axios.post(`https://carmine-termite-wear.cyclic.app/contact/add`, obj)
                .then((data) => {
                    // console.log(data.data)
                    toast({ title: 'Thank You', description: data.data.msg, status: 'success', position: 'top', duration: 1500, isClosable: true, })
                })
                .catch((err) => {
                    toast({ title: 'Try Again!!', status: 'error', position: 'top', duration: 1500, isClosable: true, })
                })
            setName('')
            setEmail('')
            setMobile('')
           
        }
    }
    const navigate = useNavigate();
    const handlecancel=()=>{
        navigate("/")
    }

    return (
   <div style={{backgroundColor:"whitesmoke", height:"450px",paddingTop:"20px"}}>
            <Box w={'30%'} m={'1cm auto'} style={{ boxShadow:" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" ,borderRadius:"20px"}}>
                <h2 style={{fontSize:"30px", margin:"30px",fontFamily:"sans-serif" , color:"blueviolet"}}>ADD NEW USER</h2>
                <Box  w={'100%'} >
                    <Box w={'100%'} marginBottom={"20px"} >
                        <Input value={name} p={'25px 15px'} onChange={(e) => setName(e.target.value)} type="text" placeholder={'Name'} border={'1px solid grey'} />
                    </Box>
                    <Box w={'100%'} marginBottom={"20px"}>
                        <Input value={email} p={'25px 15px'} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={'Email'} border={'1px solid grey'} />
                    </Box>
                    <Box w={'100%'} marginBottom={"20px"}>
                        <Input value={mobile} p={'25px 15px'} onChange={(e) => setMobile(e.target.value)} type="text" placeholder={'Mobile'} border={'1px solid grey'} />
                    </Box>
                </Box>
               
                
                <Box display={'flex'} >
                    <Box>
                    <Button onClick={handleSubmit} w={'100px'} m={'10px 0'} bg={'#A0CE5F'} color={'white'}>Add</Button>
                    </Box>
                   <Box>
                   <Button onClick={handlecancel} w={'100px'} m={'10px 0'} bg={'red'} color={'white'}  marginLeft={"180px"}>Cancel</Button>
                   </Box>
                    
                </Box>

            </Box>
            </div>
    )
}