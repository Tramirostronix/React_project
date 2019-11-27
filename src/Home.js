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
                    <Row className="my-row2">
                        <Col sm="2" className="my-col">
                            <NavBar />
                        </Col>
                        <Col sm="10" className="my-col">
                            <Main />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home