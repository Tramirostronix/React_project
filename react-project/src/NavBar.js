import React from "react"
import Home from "./Home"
import Formulaire from "./Formulaire"
import Login from "./Login"
import {NavLink} from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <nav>
                <NavLink to = "/Home"
                activeClassName="active"
                >Home</NavLink>
                <NavLink to= "/Formulaire"
                activeClassName="active"
                >Formulaire</NavLink>
                </nav>
            </div>
        )
    }
}

export default Navbar