import React from "react"
import NavBar from "./components/NavBar"
import BanniereFormulaire from "./components/BanniereFormulaire"
import { Container,Row, Col, Jumbotron } from "react-bootstrap"
import FormField from "./components/FormField"
import FooterPage from "./components/FooterPage"


class Formulaire extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron> 
                 <Container className="main-container">
                        <BanniereFormulaire />
                    <Row>
                        <Col xs="12" sm="12" md="2" lg="2">
                         <NavBar />
                        </Col>
                        <Col xs="12" sm="12" md="10" lg="10">
                            <FormField />
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