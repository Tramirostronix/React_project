import React from "react"
import NavMain from "./components/NavMain"
import Banniere from "./components/Banniere"
import Logout from "./components/Logout"
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