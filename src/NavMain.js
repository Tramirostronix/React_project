import React from "react"
import Navbar from "./NavBar"
import Todolist from "./Todolist"
import Search from "./Search"
import { Container, Row, Col } from "react-bootstrap"

class NavMain extends React.Component {
    render() {
        return (
            <div>
                    <Row>
                        <Col>
                            <Row>
                                <Navbar />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Search />
                            </Row>
                            <Todolist />
                        </Col>
                        
                    </Row>
                
            </div>
        )
    }
}

export default NavMain 