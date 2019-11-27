import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import User from "./User"

class Banniere extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : []
        }
    }
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
                    <Col>
                    <User 
                    userName = {this.props.userName}
                    picture ="france"    
                    />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Banniere