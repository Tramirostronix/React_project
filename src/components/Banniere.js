import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import User from "./User"
import Logout from "./Logout"

class Banniere extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : []
        }
    }
    render() {
        return (
            <div>
                <Row className="my-row">
                    <Col sm="4" className="my-col">
                    <img className="widthComponent" src="logo.png"/>
                    </Col>
                    <Col sm="6" className="my-col">
                    Bienvenue sur la page principale
                    </Col>
                    <Col sm="2" className="my-col">
                    <Logout />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Banniere