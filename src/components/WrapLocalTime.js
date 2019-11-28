import React from "react"
import LocalTime from "../components/LocalTime"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

function WrapLocalTime() {

    return (
        <div>
            <Jumbotron className="widget2">
            <Container className="my-container">
                <Row>
                    <Col md="12" lg="4">
                    <LocalTime
                        continent="Etc"
                        city="GMT+3"
                        flag="argentina"
                    />
                    </Col>
                    <Col md="12" lg="4">
                    <LocalTime
                        continent="Etc"
                        city="GMT+5"
                        flag="colombia"
                    />
                    </Col>
                    <Col md="12" lg="4">
                    <LocalTime
                        continent="Etc"
                        city="GMT-8"
                        flag="china"
                    />
                    </Col>
                    <Col md="12" lg="6">
                    <LocalTime
                        continent="Etc"
                        city="GMT+3"
                        flag="chile"
                    />
                    </Col>
                    <Col md="12" lg="6">
                    <LocalTime
                        continent="Etc"
                        city="GMT-8"
                        flag="indonesia"
                    />
                    </Col>
                </Row>
                <Row>
                    <Col md="12" lg="4">
                    <LocalTime
                        continent="Etc"
                        city="GMT-1"
                        flag="norway"
                    />
                    </Col>
                    <Col md="12" lg="4">
                    <LocalTime
                        continent="Etc"
                        city="GMT-7"
                        flag="thailand"
                    />
                    </Col>
                    <Col md="12" lg="4">
                    <LocalTime
                        continent="Etc"
                        city="GMT-1"
                        flag="spain"
                    />
                    </Col>
                    <Col md="12" lg="6">
                    <LocalTime
                        continent="Etc"
                        city="GMT-3"
                        flag="belarus"
                    />
                    </Col>
                    <Col md="12" lg="6">
                    <LocalTime
                        continent="Etc"
                        city="GMT-1"
                        flag="portugal"
                    />
                    </Col>
                </Row>
                <Row>
                    <Col md="12" lg="4">
                <LocalTime
                    continent="Etc"
                    city="GMT-7"
                    flag="vietnam"
                />
                </Col>
                <Col md="12" lg="4">
                <LocalTime
                    continent="Etc"
                    city="GMT"
                    flag="mali"
                />
                </Col>
                <Col md="12" lg="4">
                <LocalTime
                    continent="Etc"
                    city="GMT-1"
                    flag="france"
                />
                </Col>
                <Col md="12" lg="6">
                <LocalTime
                    continent="Etc"
                    city="GMT-8"
                    flag="malaysia"
                />
                </Col>
                <Col md="12" lg="6">
                <LocalTime
                    continent="Etc"
                    city="GMT-3"
                    flag="russia"
                />
                </Col>
                </Row>
            </Container>
            </Jumbotron>
        </div>
    )
}

export default WrapLocalTime