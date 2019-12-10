import React from "react"

class DataUser extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                    <tr>
                        <td>{this.props.userID}</td>
                        <td>{this.props.location}</td>
                        <td>{this.props.personsInHouse}</td>
                        <td>{this.props.houseSize}</td>
                    </tr>
            </div>
        )
    }

}

export default DataUser