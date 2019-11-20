import React from "react"
import Todolist from "./Todolist"
class MainPage extends React.Component {
    render() {
        return(
            <div>
                <main>
                   <Todolist /> 
                   <Todolist /> 
                   <Todolist /> 
                </main>
            </div>
        )
    }
}

export default MainPage 