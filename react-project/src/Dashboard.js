import React from "react"
import ReactDOM from "react-dom"
import Routes from "./routes"
import Banniere from "./Banniere"

class Dashboard extends React.Component{
    render() {
        return(
            <div>
                <Banniere />
                <Routes />
                
            </div>
        )
    }
}

export default Dashboard