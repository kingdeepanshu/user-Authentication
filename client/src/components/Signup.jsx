import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name] : input.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const {data: res} = await axios.post("http://localhost:5000/api/users", data);
            navigate("/login")
            console.log(res.message)
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 400){
                setError(error.response.data.message)
            }
        }
    }
  return (
    <div>
      <Link to="/login">
      <button>sign in</button></Link>
      <div>
        <form action="" onSubmit={handleSubmit}>
            <h1>create account</h1>
            <input type="text" name="username" id="username" placeholder='username' value={data.username} required onChange={handleChange}/>
            <input type="email" name="email" id="email" placeholder='email' value={data.email} onChange={handleChange} required/>
            <input type="text" name="password" id="password" placeholder='password' onChange={handleChange} value={data.password} required/>
            {error && <div>{error}</div>}
            <button type='submit'>sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
