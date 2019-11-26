import React from "react"
import {Container, Row, Col} from "react-bootstrap"

class UsersAndSensorsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfUser: 3, 
            numberOfSensor: 18
        }
    }

    render() {
        return (
            <div>
                <Container className= "my-container">
                coucou
                </Container>
            </div>
        )
    }
}

export default UsersAndSensorsNumber 