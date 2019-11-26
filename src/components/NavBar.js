import React from "react"
import Home from "../Home"
import Formulaire from "../components/Formulaire"
import Login from "../components/Login"
import { NavLink } from "react-router-dom"
import { Row, Col } from "react-bootstrap"

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <Row>
                        <NavLink to="/Home"
                            activeClassName="active"
                        >Home</NavLink>
                    </Row>
                    <Row>
                        <NavLink to="/Formulaire"
                            activeClassName="active"
                        >Formulaire</NavLink>
                    </Row>
                </nav>
            </div>
        )
    }
}

export default Navbar