import React from "react"
import Home from "./Home"
import {Link} from "react-router-dom"

class Login extends React.Component {
    render() {
        return (
            <div>
                Bienvenu veuillez vous connecter
            <Link to="/Home"><button>Login</button></Link>
            </div>
        )
    }
}

export default Login 