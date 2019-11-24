import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class Banniere extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                    <img className="widthComponent" src="logo.png"/>
                    </Col>
                    <Col>
                    Bienvenue sur la page principale
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Banniere