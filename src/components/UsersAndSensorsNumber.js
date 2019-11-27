import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class UsersAndSensorsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfUser: 3,
            numberOfSensor: 18
        }
    }
    //conception a l'envers il faut faire un row general 2 colonne et des row dedans 
    render() {
        return (
            <div>
                <Container className="my-container">
                    <Row className="my-row">
                        <Col>
                            <Row className="justify-content-center my-row2">
                                <h2>Users</h2>
                            </Row>
                            <Row className="justify-content-center my-row2">
                                <h3>{this.state.numberOfUser}</h3>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-center my-row2">
                                <h2>sensors</h2>
                            </Row>
                            <Row className="justify-content-center my-row2">
                                <h3>{this.state.numberOfSensor}</h3>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UsersAndSensorsNumber 