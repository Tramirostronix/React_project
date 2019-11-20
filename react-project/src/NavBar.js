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
                    <div className="col-12 my-col nav">
                <NavLink to = "/Home"
                activeClassName="active"
                >Home</NavLink>
                    </div>
                    <div className="col-12 my-col nav">
                <NavLink to= "/Formulaire"
                activeClassName="active"
                >Formulaire</NavLink>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar