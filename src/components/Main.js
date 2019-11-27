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
                    <Col>
                        <Todolist />
                        <ChartsPieLocalisation />
                        <ChartsTooltipCountries />
                        <UsersAndSensorsNumber />
                        <WrapLocalTime />
                        <ChartsAreaTemperature />
                    </Col>
                </Container>
                </main>
            </div>
        )
    }
}

export default Main 