import React from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Banniere from "./components/Banniere"
import FooterPage from "./components/FooterPage"

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron> 
                <Container className="main-container">
                <Banniere />                      
                    <Row>
                    
                        <Col xs="12" sm="12" md="12" lg="2">
                            <Navbar />
                        </Col>
                       
                        <Col xs="12" sm="12" md="12" lg="10">
                            <Main />
                        </Col>
                    </Row>
                    <FooterPage />
                </Container>
                </Jumbotron>
                
            </div>
        )
    }
}

export default Home