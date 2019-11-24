import React from "react"
import Home from "./Home"
import {NavLink} from "react-router-dom"
import Banniere from "./Banniere"
import Search from "./Search"
import {Container, Row, Col} from "react-bootstrap"

class Login extends React.Component {
    render() {
        return (
            <div>
            <Banniere />
                Bienvenu veuillez vous connecter
            <NavLink to="/Home"><button>Login</button></NavLink>
            <Search />
        
            </div> 
            
            
            
        )
    }
}

export default Login 