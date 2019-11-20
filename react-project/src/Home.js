import React from "react"
import NavMain from "./NavMain"
import Banniere from "./Banniere"
import Logout from "./Logout"

class Home extends React.Component {
    render(){
        return(
            <div>
                 <div className="row my-row">
                   <div className ="col-11 my-col">
            <Banniere />
                        </div>
                   <div className ="col-1 my-col">
            <Logout />
                        </div>
               </div> 
                <NavMain />
            </div>
        )
    }
}

export default Home