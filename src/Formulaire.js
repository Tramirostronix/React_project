import React from "react"
import Navbar from "./NavBar"
import Banniere from "./Banniere"
import Logout from "./Logout"
import { Row, Col } from "react-bootstrap"

class Formulaire extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Banniere />
                    </Col>
                    <Col>
                        <Logout />
                    </Col>
                </Row>
                <Navbar />
            </div>
        )
    }
}

export default Formulaire