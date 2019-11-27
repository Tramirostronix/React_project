import React from "react"
import Home from "../Home"
import { NavLink } from "react-router-dom"
import Banniere from "../components/Banniere"
import { Container, Row, Col } from "react-bootstrap"



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: "",
            userName: []
        }
    }

    //permet la saisie au clavier 
    onChange(event) {
        console.log(event.target.value);
        if (event.target.value === "") {
            this.setState({ userInput: '' })

        } else {
            this.setState({ userInput: event.target.value })
        }
    }

    ajouterTache(event) {
        event.preventDefault()
        this.setState({
            userInput: "",
            userName: [...this.state.userName, this.state.userInput],
        })
    }

    render() {
        return (
            <div>

                <Banniere />
                Bienvenu veuillez vous connecter

            <input
                    value={this.state.userInput}
                    type="text"
                    onChange={this.onChange.bind(this)}
                />
                <NavLink to="/Home"><button>Login</button></NavLink>
            </div>
        )
    }
}

export default Login 