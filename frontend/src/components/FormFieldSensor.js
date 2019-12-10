import React from "react"
import {Container, Row, Col} from "react-bootstrap"

class FormFieldSensor extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            sensorID: "", 
            creationDate:"", 
            location:"", 
            userID:""
        }
        this.handleUserID=this.handleUserID.bind(this)
        this.handleLocation=this.handleLocation.bind(this)
        this.handlePersonsInHouse=this.handlePersonsInHouse.bind(this)
        this.handleHouseSize=this.handleHouseSize.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
       
    }

    handleUserID(event) {
        this.setState({userID: event.target.value})
    }

    handleLocation(event) {
        this.setState({location: event.target.value})
    }


    handlePersonsInHouse(event) {
        this.setState({personsInHouse: event.target.value})
    }

    handleHouseSize(event) {
        this.setState({houseSize: event.target.value})
    }

    handleSubmit (event){
        event.preventDefault()
        
        let users = {
            userID: this.state.userID,
            location: this.state.location,
            personsInHouse: this.state.personsInHouse, 
            houseSize: this.state.houseSize
        }; 

    }

    render() {
        return(
            //le user id est a creer automatiquement apres 
            <div>
                <Container className="my-container">   
                        <form onSubmit={this.handleSubmit}>
                            <Row className="justify-content-center add">
                                <h1>Ajouter un Utilisateur</h1>
                            </Row>  
                            
                            <Row className="justify-content-center nom_objet">
                                 <input id="center" type="text" placeholder="User ID" value={this.state.userID} onChange={this.handleUserID} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocation} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Number person in the House" value={this.state.personsInHouse} onChange={this.handlePersonsInHouse} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Size of the House" value={this.state.houseSize} onChange={this.handleHouseSize} required /> 
                            </Row>

                            <Row className="justify-content-center form_login">
                                    <button type="submit"  className="btn btn-primary btn-lg">Submit</button>
                                </Row>
                        </form>

                    
                </Container>
                   
            </div>
        )
    }
}

export default FormFieldAdmin