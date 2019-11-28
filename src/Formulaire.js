import React from "react"
import NavBar from "./components/Navbar"
import BanniereFormulaire from "./components/BanniereFormulaire"
import { Container,Row, Col } from "react-bootstrap"
import FormField from "./components/FormField"
class Formulaire extends React.Component {
    render() {
        return (
            <div>
                 <Container>
                            <BanniereFormulaire />
                    <Row>
                        <Col xs="12" sm="12" md="2" lg="2">
                            <NavBar />
                        </Col>
                        <Col xs="12" sm="12" md="10" lg="10">
                            <FormField />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Formulaire