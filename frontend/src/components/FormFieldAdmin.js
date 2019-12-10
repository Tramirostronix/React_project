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
            //le user id est a automatiquement par la BDD 
            <div>
                <Container className="my-container">   
                        <form onSubmit={this.handleSubmit}>
                            <Row className="justify-content-center add">
                                <h1>Ajouter un Utilisateur</h1>
                            </Row>  
                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Country (France)" value={this.state.location} onChange={this.handleLocation} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Nbperson (3)" value={this.state.personsInHouse} onChange={this.handlePersonsInHouse} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Size (small/medium/big)" value={this.state.houseSize} onChange={this.handleHouseSize} required /> 
                            </Row>

                            <Row className="justify-content-center form_login">
                                   <button type="submit"  className="btn btn-primary btn-lg">Submit</button>
                            
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