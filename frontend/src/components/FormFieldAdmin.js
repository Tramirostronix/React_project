import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import axios from "axios"


class FormFieldAdmin extends React.Component {
    constructor(props) {
        super(props); 
        this.state = { 
            location:"", 
            personsInHouse:"", 
             houseSize:""
        }
        this.handleLocation=this.handleLocation.bind(this)
        this.handlePersonsInHouse=this.handlePersonsInHouse.bind(this)
        this.handleHouseSize=this.handleHouseSize.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
       
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
            location: this.state.location,
            personsInHouse: this.state.personsInHouse, 
            houseSize: this.state.houseSize
        };
        console.log(users);
        axios.post("http://localhost:3030/users/add", users)

    this.setState({location: '', personsInHouse:"", houseSize:"" })

    }

    render() {
        return(
            //le user id est a creer automatiquement par la BDD 
            <div>
                <Container className="my-container">   
                        <form onSubmit={this.handleSubmit}>
                            <Row className="justify-content-center add">
                                <h1>Ajouter un Utilisateur</h1>
                            </Row>  

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Location" value={this.state.location} onChange={this.handleLocation} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="personInHouse" value={this.state.personsInHouse} onChange={this.handlePersonsInHouse} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="SizeHouse" value={this.state.houseSize} onChange={this.handleHouseSize} required /> 
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