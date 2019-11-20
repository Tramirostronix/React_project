import React from "react"
import {Link} from "react-router-dom"

class Logout extends React.Component {
    render() {
        return(
            <div>
              <Link to="/"><button className="btn btn-danger">Logout</button></Link> 
            </div>
        )
    }
}

export default Logout 