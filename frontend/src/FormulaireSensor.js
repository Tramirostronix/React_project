import React from "react"
import Navbar from "./components/Navbar"
import BanniereFormulaire from "./components/BanniereFormulaire"
import { Container,Row, Col, Jumbotron } from "react-bootstrap"
import FormFieldAdmin from "./components/FormFieldAdmin"
import FooterPage from "./components/FooterPage"

//
class Formulaire extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron> 
                 <Container className="main-container">
                        <BanniereFormulaire />
                    <Row>
                        <Col xs="12" sm="12" md="2" lg="2">
                         <Navbar />
                        </Col>
                        <Col xs="12" sm="12" md="10" lg="10">
                            <FormFieldSensor />
                        </Col>
                    </Row>
                    <FooterPage />
                </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Formulaire