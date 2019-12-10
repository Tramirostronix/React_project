import React from "react"
import axios from "axios"

//source : 
//https://www.youtube.com/watch?v=hzLDsxPGctY

//pour afficher les utilisateurs

import { Table } from "react-bootstrap"


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
                <ul>
                    {this.state.users.map(user => (
                        <li key={user._id}>
                           Id: {user._id} | location : {user.location} | PersonsInHouse ; {user.personsInHouse}| HouseSize : {user.houseSize} 
                        </li>  
                    ))}
                </ul>

            </div>
        )
    }
}

export default ShowUsers