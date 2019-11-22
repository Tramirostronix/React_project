import React from "react"


class Banniere extends React.Component {
    render() {
        return(
            <div className="row my-row">
                <div className="col-2 my-col2"><img className="img-responsive" src="logo.png" className="img-fluid"/></div>
                <div className="col-9 my-col2">Bienvenue sur la page principale</div>
            </div>
        )
    }
}

export default Banniere