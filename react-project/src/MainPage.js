import React from "react"
import Todolist from "./Todolist"
import Information from "./Information"

class MainPage extends React.Component {
    render() {
        return(
            <div>
                <main>
                    <div className="row my-row">
                   <Todolist /> 
                    </div>
                </main>
            </div>
        )
    }
}

export default MainPage 