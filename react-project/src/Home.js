import React from "react"
import NavBar from "./NavBar"
import Todolist from "./Todolist"

class Home extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <Todolist />
            </div>
        )
    }
}

export default Home