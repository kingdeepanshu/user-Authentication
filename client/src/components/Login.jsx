import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

function Login() {
    const [error, setError] = useState("")
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const handleChange = ({ currentTarget: input}) => {
        setData({...data, [input.name] : input.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const {data: res} = await axios.post("http://localhost:5000/api/auth", data);
            localStorage.setItem("token", res.data)
            window.location = '/';
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 400){
                setError(error.response.data.message)
            }
        }
    }
  return (
    <div>
      <div>
      <Link to="/signup">
      <button>register</button></Link>
        <form action="" onSubmit={handleSubmit}>
            <h1>login</h1>
            <input type="email" name="email" id="email" placeholder='email' value={data.email} onChange={handleChange} required/>
            <input type="text" onChange={handleChange} name="password" id="password" placeholder='password' value={data.password} required/>
            {error && <div>{error}</div>}
            <button type='submit'>sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Login
