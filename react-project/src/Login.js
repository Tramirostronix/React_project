import React from "react"
import Home from "./Home"

class Login extends React.Component {
    render() {
        return (
            <div>
                Bienvenu veuillez vous connecter
                <button tag={Home}>Connexion</button>
            </div>
        )
    }
}

export default Login 