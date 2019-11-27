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
                    <Row className="my-row">
                        <Col>
                            <Banniere />
                        </Col>
                        <Col>
                            <Logout />
                        </Col>
                    </Row>
                    <Row className="my-row2">
                        <Col className="my-col">
                            <NavBar />
                        </Col>
                        <Col className="my-col">
                            <Main />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home