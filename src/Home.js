import React from "react"
import NavMain from "./NavMain"
import Banniere from "./Banniere"
import Logout from "./Logout"
import { Row, Col } from "react-bootstrap"

class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Banniere />
                    </Col>
                    <Col>
                        <Logout />
                    </Col>
                </Row>
                <NavMain />
            </div>
        )
    }
}

export default Home