import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signup from "../Imges/signup.gif";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
    const [SignUpStatus, setSignUpStatus] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        sources: [],
        city: '',
        state: '',
        password: '',
      });
      const location = useLocation();
      const navigate = useNavigate();

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSignup = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://carmine-termite-wear.cyclic.app/users/register', formData);
          console.log(response.data);
          // Handle success (redirect, show a message, etc.)
          alert("successful done")
         navigate("/login")
        } catch (error) {
          console.error('Signup Error:', error.response?.data);
          // Handle error (show an error message, etc.)
        }
      };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                marginTop: "3rem",
                flexWrap: "wrap",
            }}
        >
            <div>
                <img
                    className='signup-img'
                    style={{ width: "350px", margin: "3rem", opacity: "0.9" }}
                    src={signup}
                    alt=''
                />
            </div>
            <DIV>
                {SignUpStatus ? <h3> SignUp Successful</h3> : <h2>SignUp Page</h2>}
                <form onSubmit={handleSignup}>
                    <div className='box'>
                        {/* <label>Name:</label> */}
                        <input
                            style={{ margin: "7px 0" }}
                            type='text'
                            name='name'
                            placeholder='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        {/* <label>Email:</label> */}
                        <input
                            style={{ margin: "7px 0" }}
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        {/* <label>Phone :</label> */}
                        <input
                            style={{ margin: "7px 0" }}
                            type='phone'
                            name='phone'
                            placeholder='Phone Number'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ display: "flex" ,gap:"30px"}}>
                        <label style={{ margin: "10px" }}>Gender:</label>
                        {/* <label>gender-Card:</label> */}
                        {/* <select style={{ margin: "7px 0" }}  onChange={handleChange} name="gender" id="" value={formData.gender}>
                <option type="radio" value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select> */}
                        <div >
                            <input
                                style={{ margin: "5px 0" }}
                                type='radio'
                                name='gender'
                                placeholder='Male'
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                required
                            />
                            <label for="css">Male</label><br></br>
                        </div>
                        <div>
                            <input
                                style={{ margin: "5px 0" }}
                                type='radio'
                                name='gender'
                                placeholder='Female'
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                required
                            />
                            <label for="css">Female</label><br></br>
                        </div>
                        <div>
                            <input
                                style={{ margin: "5px 0" }}
                                type='radio'
                                name='gender'
                                placeholder='Others'
                                value="Others"
                                checked={formData.gender === 'Others'}
                                onChange={handleChange}
                                required
                            />
                            <label for="css">Others</label><br></br>
                        </div>
                    </div>
                    {/* source data */}
                    <div style={{ display: "flex", margin: "20px" }}>
                        <label>Sources:</label>
                        <div>
                            <input
                                type="checkbox"
                                id="soures"
                                placeholder="sources"
                                name="sources"
                                value="LinkedIn"
                                checked={formData.sources.includes('LinkedIn')}
                                onChange={handleChange}
                            />
                            <label htmlFor="linkedin">LinkedIn</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="friends"
                                name="sources"
                                value="Friends"
                                checked={formData.sources.includes('Friends')}
                                onChange={handleChange}
                            />
                            <label htmlFor="friends">Friends</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="Job Portal"
                                name="sources"
                                value="Job Portal"
                                checked={formData.sources.includes('Job Portal')}
                                onChange={handleChange}
                            />
                            <label htmlFor="friends">Job Portal</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="Others"
                                name="sources"
                                value="Others"
                                checked={formData.sources.includes('Others')}
                                onChange={handleChange}
                            />
                            <label htmlFor="friends">Others</label>
                        </div>
                    </div>
                    <div>
                        {/* <label>gender-Card:</label> */}
                        <select style={{ margin: "7px 0" }} onChange={handleChange} name="city" id="" value={formData.city}>
                        <option value="">Select City</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="ahmedabad">Ahmedabad</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        {/* <label>State:</label> */}
                        <input
                            style={{ margin: "7px 0" }}
                            type='state'
                            name='state'
                            placeholder='State'
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        {/* <label>Password:</label> */}

                        <input
                            style={{ margin: "7px 0" }}
                            type='password'
                            name='pass'
                            placeholder='Password'
                            value={formData.pass}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button style={{ padding: "10px 0" }} type='submit'>
                        Submit
                    </button>
                </form>
                <Link to='/login'>
                    <p>
                        Already have an account{" "}
                        <span style={{ color: "#A0CE5F" }}>login here</span>
                    </p>
                </Link>
            </DIV>
        </div>
    );
};

export default SignUp;

const DIV = styled.div`
  /* width: 400px; */
  color: #333;
  padding: 20px;
  /* margin: 40px auto; */
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  align-items: center;

  /* .boxx{
    display: flex;
  } */

  input {
    width: 100%;
    margin-bottom: 10px;
    height: 30px;
    font-size: 1rem;
    border: solid 1px #ccc;
    padding: 20px 15px;
    border-radius: 6px;
    color: #333;
    /* border: ${({ err }) =>
        err === "true" ? "2px solid red" : "1px solid grey"}; */
  }
  button {
    width: 100%;
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    background-color: #a0ce5f;
    font-size: 18px;
    font-weight: 400;
    border: none;
  }
  h3 {
    color: #00bc00;
    font-weight: 500;
    font-size: 24px;
  }
`;
