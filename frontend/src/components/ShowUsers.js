import React from "react"
import axios from "axios"
import { Table, Container, Row, Col } from "react-bootstrap"

//source : 
//https://www.youtube.com/watch?v=hzLDsxPGctY

//pour afficher les utilisateurs




class ShowUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }


    componentDidMount() {
        this.afficherUsers();
    }

    afficherUsers() {

        axios.get("http://localhost:5000/users/")
            .then(response => {
                this.setState({
                    users: response.data
                })
                console.log(this.state.users);
            })
    }


    render() {
        return (

            <div className="table-responsive">
                <Container className="my-container">
                    <Row className="justify-content-center">
                        <h1>Liste des Utilisateurs</h1>
                    </Row>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>userId</th>
                                    <th>Location</th>
                                    <th>PersonsInHouse</th>
                                    <th>HouseSize</th>
                                </tr>
                            </thead>
                            {this.state.users.map(user => (
                                <tbody key={user._id}>
                                    <tr>
                                        <td>{user._id}</td>
                                        <td>{user.location}</td>
                                        <td>{user.personsInHouse}</td>
                                        <td>{user.houseSize}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                </Container>
            </div>

        )
    }
}

export default ShowUsers