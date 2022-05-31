import React, { useState } from "react";
import "./login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";
import { connect } from 'react-redux';



const Login = (props) => {

    const { setLoginUser } = props
    console.log(props)
    const nav = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "",

    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                localStorage.setItem("user_values", JSON.stringify(res.data.user))
                // setLoginUser(res.data.user)
                nav("/home")
            })

    }

    return (
        <div className="Login">
            {console.log("User", user)}
            <br />

            <h1> <i class="bi bi-box-arrow-in-right"></i></h1>



            <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handlechange}
            /><br></br><br></br>
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handlechange}
            />
            <br></br>  <br></br>
            <button onClick={Login} >Login</button>
            <br></br>
            or
            <br></br>
            <button onClick={() => nav("/register")} >Register</button><br></br>(New User First Register)

        </div>
    )
}

export default connect(state => { return state }, null)(Login)
