import React from "react"
import Navbar from "./NavBar"
import MainPage from "./MainPage"

class NavMain extends React.Component {
    render(){
        return(
            <div className="row my-row">
            <div className="col-2 my-col"><Navbar /></div>
            <div className="col-10 my-col"><MainPage /></div>
            </div>
        )
    }
}

export default NavMain 