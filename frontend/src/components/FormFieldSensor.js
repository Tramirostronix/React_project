import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import axios from 'axios'

import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

class FormFieldAdmin extends React.Component {
    constructor(props) {
        super(props)

        this.handleUserID=this.handleUserID.bind(this)
        this.handleLocation=this.handleLocation.bind(this)
        this.handleCreationDate=this.handleCreationDate.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

        this.state = {
            //sensorID:'',
            userID: 0, 
            location: '', 
            creationDate: new Date(),
            sensors: []
        }
    }
    //link users
    componentDidMount() {
        this.setState({
            users: ['test user'],
            userID: 'test user'
        })
    }

    /*handleSensorID(event) {
        this.setState({sensorID: event.target.value})
    }*/

    handleLocation(event) {
        this.setState({location: event.target.value})
    }

    handleCreationDate(date) {
        this.setState({creationDate: date})
    }

    handleUserID(event) {
        this.setState({userID: event.target.value})
    }

    handleSubmit (event){
        event.preventDefault()
        
        const sensor = {
            userID: this.state.userID,
            location: this.state.location,
            creationDate: this.state.creationDate, 
            sensorID: this.state.sensorID
        }

        console.log(sensor)
        window.location = '/'

        axios.post('http://localhost:5000/sensors/add', sensor)
            .then(res => console.log(res.data));  

    }

    render() {
        return(
            //le user id est a creer automatiquement apres 
            <div>
                <Container className="my-container">   
                        <form onSubmit={this.handleSubmit}>
                            <Row className="justify-content-center add">
                                <h1>Ajouter un capteur</h1>
                            </Row>  
                            
                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="Location" value={this.state.location} 
                                onChange={this.handleLocation} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <Datepicker id="center"  type="date" placeholder="Creation Date" selected={this.state.creationDate} onChange={this.handleCreationDate} required /> 
                            </Row>

                            <Row className="justify-content-center nom_objet">
                                <input id="center"  type="text" placeholder="User ID" value={this.state.userID} onChange={this.handleUserID} required /> 
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