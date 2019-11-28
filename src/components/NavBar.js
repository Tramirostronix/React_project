import React from "react"
import Home from "../Home"
import Formulaire from "../components/Formulaire"
import Login from "../components/Login"
import { NavLink } from "react-router-dom"
import {Container, Row, Col } from "react-bootstrap"

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Container className="my-container">
                <nav>
                    <Row className="justify-content-center">
                        <NavLink to="/Home"
                            activeClassName="active"
                        >Home</NavLink>
                    </Row>
                    <Row className="justify-content-center">
                        <NavLink to="/Formulaire"
                            activeClassName="active"
                        >Formulaire</NavLink>
                    </Row>
                </nav>
                </Container>
            </div>
        )
    }
}

export default Navbar