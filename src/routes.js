import React from "react"
import {Switch, Route} from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import Formulaire from "./Formulaire"

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route path = "/" exact component={Login} />
                <Route path = "/Home" exact component={Home} />
                <Route path = "/Formulaire" exact component={Formulaire} /> 
            </Switch>
        )
    }
}

export default Routes 