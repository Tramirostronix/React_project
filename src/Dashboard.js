import React from "react"
import ReactDOM from "react-dom"
import Routes from "./routes"
import {Container} from "react-bootstrap"

class Dashboard extends React.Component{
    render() {
        return(
            <div>             
                <Routes />

            </div>
        )
    }
}

export default Dashboard