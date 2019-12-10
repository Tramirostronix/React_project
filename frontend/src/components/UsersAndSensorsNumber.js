import React from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import axios from "axios"

class UsersAndSensorsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [], 
            sensors: [], 
        }
    }

    componentDidMount() {
        this.countUsers();
        this.countSensors(); 
    }

    countUsers() {

        axios.get("http://localhost:5000/users/")
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }

    countSensors() {

        axios.get("http://localhost:5000/Sensors/")
            .then(response => {
                this.setState({
                    sensors: response.data
                })
            })
    }

    //conception a l'envers il faut faire un row general 2 colonne et des row dedans 
    render() {
        return (
            <div>
                <Jumbotron className="widget">
                <Container className="my-container">
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="6">
                            <Row className="justify-content-center">
                                <h2>Users</h2>
                            </Row>
                            <Row className="justify-content-center">
                                <h3>{this.state.users.length}</h3>
                            </Row>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="6">
                            <Row className="justify-content-center">
                                <h2>Sensors</h2>
                            </Row>
                            <Row className="justify-content-center">
                                <h3>{this.state.sensors.length}</h3>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                </Jumbotron>
                
            </div>
        )
    }
}

export default UsersAndSensorsNumber 