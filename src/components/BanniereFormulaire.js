import React from "react"
import { Image, Container, Row, Col } from "react-bootstrap"

import Logout from "./Logout"

class BanniereFormulaire extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: []
        }
    }
    render() {
        return (
            <div className="text-white bg-secondary">
                <Row>
                    <Col xs="12" sm="12" md="6" lg="5">
                        <Image src="logo.png" />
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="5">
                        <Row className="dashBoard">
                            <Col sm="4"  lg="1" className="d-none d-xs-block"></Col>
                            <Col xs="12" sm="8" md="9" lg="8" className="dashboard">
                            <h2>Formulaire</h2>
                            </Col>
                            <Col md="3" lg="3"></Col>                          
                        </Row> 
                    
                    </Col>
                    <Row className="my-row">
                    <Col xs="12" sm="12" md="2" lg="2" className="dashboard">
                        <Logout />
                    </Col>
                    </Row> 
                </Row>

            </div>
        )
    }
}

export default BanniereFormulaire