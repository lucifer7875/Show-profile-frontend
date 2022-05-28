import React from "react";
import { useNavigate } from "react-router-dom"

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"


const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="Home">
            <Navbar bg="dark" variant="white">
                <Container>

                    <button className="btn btn-primary" onClick={() => navigate("/")}>Logout</button>

                    <button className="btn btn-info" onClick={() => navigate("/profile")}>Profile</button>

                </Container>
            </Navbar>
        </div>
    )
}

export default Home