import React from "react"
import { NavLink } from "react-router-dom"
import {Container, Row} from "react-bootstrap"
//
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Container className="paddingBar">
                <nav>
                    <Row className="justify-content-center">
                        <NavLink to="/Home"
                            activeClassName="active"
                            className="sizeBar"  
                        >Home</NavLink>
                    </Row>
                    <Row className="justify-content-center">
                        <NavLink to="/Formulaire"
                            activeClassName="active"
                            className="sizeBar"
                        >Formulaire</NavLink>
                    </Row>
                </nav>
                </Container>
            </div>
        )
    }
}
export default Navbar