import React from "react"
import Home from "../Home"
import {NavLink} from "react-router-dom"
import Banniere from "../components/Banniere"
import {Container, Row, Col} from "react-bootstrap"
import ChartsTooltipCountries from "./ChartsTooltipCountries"
import WrapLocalTime from "./WrapLocalTime"


class Login extends React.Component {
    render() {
        return (
            /*
            <div> 
                
            <Banniere />
                Bienvenu veuillez vous connecter
            <NavLink to="/Home"><button>Login</button></NavLink>
        
            </div> 
*/
           

            <div>
                <WrapLocalTime />
            </div>

            
            
        )
    }
}

export default Login 