import React from "react"
import {Container, Row, Col} from "react-bootstrap"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchArtist: [],
            isSearchFieldEmpty: true
        }
    }
    render() {
        return (
               
            <div>
                    <Row>
                 <form>
                     <Col>
                        <input
                                type="search"
                                placeholder="Search Artist"
                            />
                   </Col>  
                   <Col>
                            <button className="btn btn-primary">Search</button>
                            </Col>      
                    </form>
                    </Row>
            </div>
        )
    }
}


export default Search 