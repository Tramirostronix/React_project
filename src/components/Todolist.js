import React from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

//classe du Wiget Todolist

class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomTache: "",
            taches: [],
            isFieldEmpty: true
        }
    }

    //permet la saisie au clavier 
    onChange(event) {
        console.log(event.target.value);
        if (event.target.value === "") {
            this.setState({ isFieldEmpty: true, nomTache: '' })

        } else {
            this.setState({ isFieldEmpty: false, nomTache: event.target.value })
        }
    }

    //permet d'ajouter une tache dans le tableau
    //sans recharger la page
    //en vidant le champs à chaque ajout
    ajouterTache(event) {
        event.preventDefault()
        this.setState({
            nomTache: "",
            taches: [...this.state.taches, this.state.nomTache],
            isFieldEmpty: true,
            nomTache: ""
        })
    }


    supprimerTaches(event) {
        event.preventDefault()
        const array = this.state.taches
        const index = array.indexOf(event.target.value)
        array.splice(index, 1)
        this.setState({
            taches: array
        })
    }

    //affichage des taches de la TODO
    afficherTaches() {
        return this.state.taches.map((tache) => {
            return (

                <Col md="12">
                    <div className="form-control" key={tache}>
                        {tache}<button className="btn btn-danger" onClick={this.supprimerTaches.bind(this)}>X</button>
                    </div>
                </Col>

            )
        })
    }



    render() {
        return (
            <div>
                <Jumbotron className="widget3">
                <Container className="my-container">
                    <Row>
                        <Col>
                            <h3 id='center'>Todolist</h3>
                        </Col>
                    </Row>
                    <Row>
                        <form>
                            <Col>
                                <input
                                    className="form-control"
                                    value={this.state.nomTache}
                                    type="text"
                                    placeholder="My tasks ..."
                                    onChange={this.onChange.bind(this)}
                                />
                            </Col>
                            <Col>
                                {!this.state.isFieldEmpty && <button className="btn btn-primary" onClick={this.ajouterTache.bind(this)}>Ajouter</button>}
                            </Col>
                        </form>
                    </Row>
                    <div className="List-group">
                        {this.afficherTaches()}
                    </div>
                </Container>
                </Jumbotron>
            </div >
        )
    }
}

export default Todolist 