import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Imges/logo.png";
//   import { CgSearch } from "react-icons/cg";
//   import { BsHandbag } from "react-icons/bs";

import { color } from "framer-motion";
import React, { useState } from "react";
export default function Navbar() {
  const localUser = JSON.parse(localStorage.getItem("user")) || {
    name: false,
    isAuth: false,
    token: false,
  };

  const [user, setUser] = useState(localUser);
  const { isAuth, name, token } = user;
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    setUser({
      name: false,
      isAuth: false,
      token: false,
    });
    navigate("/login");
  };

  const links = [


    {
      title: "Our Users",
      path: "/",
    },
    {
      title: "Login",
      path: "/login",
    },

  ];

  return (
    <div >
      <Box >
        <Flex>
          <Box style={{ width: "620px" }}>
            <Tabs size='sm' variant='' width={isAuth ? '227.9%' : '206.2%'} bg='lightgray' color='#fff'>
              <TabList justifyContent='space-around'>
                <Box
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  style={{ width: "100px", cursor: "pointer" }}
                >
                  <img
                    style={{ width: "100px", height: "70px", marginLeft: '-6rem' }}
                    src={logo}
                    alt=''
                  />
                </Box>
                <Box display='flex' height='60px'>


                  <Tab>
                    <Button bg='#beec7f3'
                      border='1px #cccc solid'
                      _hover={{ bg: '#fff' }}><NavLink style={{ fontWeight: '400', fontSize: '15px', color: "cornflowerblue", fontFamily: "serif", fontSize: "20px", }} to='/'> All User</NavLink></Button>
                  </Tab>
                  {!isAuth && (
                    <Tab>
                      <NavLink style={{ fontWeight: '700', fontSize: '25px', color: "red" }} to='/login'>Login</NavLink>
                    </Tab>
                  )}


                </Box>
                {isAuth && (
                  <Button
                    bg='#beec7f3'
                    border='1px #cccc solid'
                    _hover={{ bg: '#fff' }}
                    style={{
                      color: "green",
                      marginTop: "10px",
                      fontWeight: "400",
                    }}
                    onClick={logoutHandler}
                  >
                    LogOut
                  </Button>
                )}{" "}
              </TabList>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
