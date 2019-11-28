import React from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import Main from "./components/Main"
import NavBar from "./components/Navbar"
import Banniere from "./components/Banniere"

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron> 
                <Container>
                <Banniere />                      
                    <Row>
                    <Jumbotron fluid className="nav">
                        <Col xs="12" sm="12" md="12" lg="2">
                            <NavBar />
                        </Col>
                        </Jumbotron>
                        <Col xs="12" sm="12" md="12" lg="10">
                            <Main />
                        </Col>
                    </Row>
          
                </Container>
                </Jumbotron>
                
            </div>
        )
    }
}

export default Home