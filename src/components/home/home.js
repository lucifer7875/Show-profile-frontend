import React from "react";
import { useNavigate } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"


const Home = () => {

    const nav = useNavigate()

    return (
        <div className="Home">
            <Navbar bg="dark" variant="white">
                <Container>

                    <button className="btn btn-primary" onClick={() => nav("/")}>
                        Logout<i class="bi bi-lock-fill"></i>
                    </button>

                    <button className="btn btn-info" onClick={() => nav("/profile")}>
                        Profile  <i className="bi bi-person-square"></i>
                    </button>

                </Container>
            </Navbar>
            <br /><br /> <br /><br /><br /><br /><br /><br /><br />

            <h1><i class="bi bi-emoji-smile-fill"></i></h1>
            <h2>You are at Homepage.</h2>
        </div>
    )
}

export default Home