import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ChartsTooltipCountries from "./ChartsTooltipCountries"
import ChartsPieLocalisation from "./ChartsPieLocalisation"
import ChartsAreaTemperature from "./ChartsAreaTemperature"
import UsersAndSensorsNumber from "./UsersAndSensorsNumber"
import WrapLocalTime from "./WrapLocalTime"
import Todolist from "./Todolist"

class Main extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <Container className="my-container">
                        <Row>
                            <Row>
                                <Col xs="12" sm="12" md="12" lg="4">
                                    <Row>
                                        <Col xs="12" sm="4" md="12" lg="12">
                                            <UsersAndSensorsNumber />
                                        </Col>
                                        <Col className="d-none d-md-block" sm="8" md="11" lg="11">
                                            <ChartsPieLocalisation />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="12" md="6" lg="4" className="d-none d-md-block">
                                    <WrapLocalTime />
                                </Col>
                                <Col xs="12" sm="12" md="6" lg="4">
                                    <Todolist />
                                </Col>
                            </Row>
                        </Row>
                        <Row>
                            <Col xs="12" sm="12" md="6" lg="12">
                                <ChartsTooltipCountries />
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="12">
                                <ChartsAreaTemperature />
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        )
    }
}

export default Main 