import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

class Logout extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className=" vertical-center-row justify-content-center my-row">
                        <Link to="/"><button className="btn btn-danger">Logout</button></Link>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Logout 