import React from "react"
import {Image, Container, Row, Col } from "react-bootstrap"
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
                <Row>
                    <Col xs="12" sm="12" md="6" lg="5">
                    <Image src="logo.png"/>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="5">
                    Bienvenue sur la page principale
                    </Col>
                    <Col xs="12" sm="12" md="2" lg="2">
                    <Logout />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Banniere