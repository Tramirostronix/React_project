import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import Banniere from "./components/Banniere"
import Logout from "./components/Logout"

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container className="my-container">
                            <Banniere />
                    <Row>
                        <Col xs="12" sm="12" md="2" lg="2">
                            <NavBar />
                        </Col>
                        <Col xs="12" sm="12" md="10" lg="10">
                            <Main />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home