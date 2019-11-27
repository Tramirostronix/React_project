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
                        <Row className="my-row">
                            <Row className="my-row2">
                                <Col sm="4" className="my-col">
                                    <Row className="my-row3">
                                        <Col sm="12">
                                            <UsersAndSensorsNumber />
                                        </Col>
                                        <Col sm="12">
                                            <ChartsPieLocalisation />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="4" className="my-col">
                                    <WrapLocalTime />
                                </Col>
                                <Col sm="4" className="my-col">
                                    <Todolist />
                                </Col>
                            </Row>
                        </Row>
                        <Row className="my-row">
                            <Col sm="8">
                                <ChartsTooltipCountries />
                            </Col>
                            <Col sm="4">
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