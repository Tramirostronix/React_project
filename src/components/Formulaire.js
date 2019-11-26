import React from "react"
import Navbar from "../components/NavBar"
import Banniere from "../components/Banniere"
import Logout from "../components/Logout"
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