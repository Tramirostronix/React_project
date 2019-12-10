import React from "react"
import { NavLink } from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"

class FormField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            

        }
    }
    render() {
        return(
            <div>
                <Container className="my-container">   
                        <form>
                            <Row className="justify-content-center add">
                                <h1>Ajouter un objet connecté</h1>
                            </Row>  
                            <Row className="justify-content-center nom_objet">
                                <input id="center" type="text" placeholder="Object ID" required />
                            </Row>
                            <Row className="justify-content-center nom_objet">
                                <input id="center" type="text" placeholder="Object Date of Creation" required /> 
                            </Row>
                            <Row className="justify-content-center nom_objet">
                                <input id="center" type="text" placeholder="User ID" required /> 
                            </Row>
                            <Row className="justify-content-center nom_objet">
                                <input id="center" type="text" placeholder="Object Location" required /> 
                            </Row>
                            <Row className="justify-content-center form_login">
                                    <NavLink to="/Home"><button className="btn btn-primary btn-lg">Submit</button></NavLink>
                                </Row>
                        </form>

                    
                </Container>
                   
            </div>
        )
    }
}

export default FormField