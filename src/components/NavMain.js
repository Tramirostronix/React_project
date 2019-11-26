import React from "react"
import Navbar from "../components/NavBar"
import Todolist from "../components/Todolist"
import { Container, Row, Col } from "react-bootstrap"
import ChartsTooltipCountries from "../components/ChartsTooltipCountries"
import ChartsPieLocalisation from "../components/ChartsPieLocalisation"
class NavMain extends React.Component {
    render() {
        return (
            <div>
                <Container className="my-container">
                    <Row className="my-row">
                        <Col>
                            <Row>
                                <Navbar />
                            </Row>
                        </Col>
                        <Col className="my-col">
                            <Todolist />
                            <ChartsPieLocalisation />
                            <ChartsTooltipCountries />
                            
                        </Col>
                        
                    </Row>
                    </Container>
            </div>
        )
    }
}

export default NavMain 