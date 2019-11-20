import React from "react"
import Navbar from "./NavBar"
import Banniere from "./Banniere"
import Logout from "./Logout"


class Formulaire extends React.Component {
    render() {
        return (
            <div>
               <div className="row my-row">
                   <div className ="col-11 my-col">
            <Banniere />
                        </div>
                   <div className ="col-1 my-col">
            <Logout />
                        </div>
               </div> 
            <Navbar />
            </div>
        )
    }
}

export default Formulaire