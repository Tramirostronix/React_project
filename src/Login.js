import React from "react"
import { NavLink } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import BanniereLogout from "./components/BanniereLogOut"
import NavbarLogin from "./components/NavbarLogin"


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Container className="main-container">
                    <BanniereLogout />
                    <Row>
                        <Col xs="12" sm="12" md="2" lg="2">
                            <NavbarLogin />
                        </Col>
                        <Col className="my-col" xs="12" sm="12" md="10" lg="10">
                            <form>
                            <Row className="justify-content-center login">
                                <h1>Login</h1>
                                </Row>  
                                <Row className="justify-content-center passwordLogin">
                                    <input id="center" type="text" placeholder="Username" required />
                                </Row>
                                <Row className="justify-content-center passwordLogin">
                                    <input id="center" type="password" placeholder="Password" required />
                                </Row>
                                <Row className="justify-content-center passwordLogin">
                                    <NavLink to="/Home"><button className="btn btn-primary btn-lg">Login</button></NavLink>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login 