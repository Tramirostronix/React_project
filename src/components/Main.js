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
                    <Container>
                        <Row>
                            <Row>
                                <Col xs="12" sm="12" md="12" lg="4">
                                    <Row className="my-row3">
                                        <Col xs="12" sm="12" md="12" lg="12">
                                            <UsersAndSensorsNumber />
                                        </Col>
                                        <Col xs="12" sm="12" md="12" lg="12">
                                            <ChartsPieLocalisation />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col sm="12" md="6" lg="4" className="d-none d-md-block">
                                    <WrapLocalTime />
                                </Col>

                                <Col xs="12" sm="12" md="6" lg="4" className="my-col">
                                    <Todolist />
                                </Col>
                            </Row>
                        </Row>
                        <Row className="my-row">
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