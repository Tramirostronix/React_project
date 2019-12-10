import React from "react"
import {Image, Container, Row, Col} from "react-bootstrap"

class User extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        name: [], 
        picture: ""
    }
}
render() {
    return(
        <div>
            <Image src={`${this.props.picture}.png`} />
            {this.props.name}
        </div>
    )
}

}


export default User