import React from "react"
import Home from "../Home"
import Formulaire from "../Formulaire"
import { NavLink } from "react-router-dom"
import {Container, Row, Col } from "react-bootstrap"

class NavbarLogin extends React.Component {
    render() {
        return (
            <div>
                <Container className="my-container paddingBar">
                <nav>
                    <Row className="justify-content-center">
                        <NavLink to=""
                            activeClassName="active"
                            className="sizeBar"  
                        >About Us</NavLink>
                    </Row>
                    <Row className="justify-content-center">
                        <NavLink to=""
                            activeClassName="active"
                            className="sizeBar"
                        >Contact Us</NavLink>
                    </Row>
                </nav>
                </Container>
            </div>
        )
    }
}
export default NavbarLogin