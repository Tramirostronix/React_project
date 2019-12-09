import React from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

//classe du Wiget Todolist

//sources 
//https://www.youtube.com/watch?v=7Smm9pfr828
//https://codesandbox.io/s/pkqrj851nq
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


    supprimerTaches(tache) {
        const array = this.state.taches
        const index = array.indexOf(tache)
        array.splice(index, 1)
        this.setState({
            taches: array
        })
    }

    //affichage des taches de la TODO
    afficherTaches() {
        return this.state.taches.map((tache) => {
            return (
                    <div className="form-control" key={tache}>
                        <Row>
                    <Col md="10">
                        {tache}
                        </Col>
                        <Col md="2">
                        <button className="btn btn-danger" onClick={this.supprimerTaches.bind(this, tache)}>X</button>
                        </Col>
                        </Row>
                    </div>
                

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