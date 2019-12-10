import React from "react"
import axios from "axios"
//pour afficher les utilisateurs

import DataUsers from "./DataUsers"
import { Table } from "react-bootstrap"

const Users = props => (
    <tr>
        <td>{this.props.userID}</td>
        <td>{this.props.location}</td>
        <td>{this.props.personsInHouse}</td>
        <td>{this.props.houseSize}</td>
    </tr>
)


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

        axios.get("http://localhost:3030/users/")
            .then(response => {
                this.setState({
                    users: response.data
                })
                console.log(this.state.users);
            })
    }


    render() {
        return (
            <div>
                <h1>Liste des Utilisateurs</h1>
                <Table striped bordered hover>
                    <thead className="thead-dark">
                        <tr>
                            <td>userID</td>
                            <td>Location</td>
                            <td>PersonsInHouse</td>
                            <td>sizeHouse</td>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>

                </Table>

            </div>
        )
    }
}

export default ShowUsers