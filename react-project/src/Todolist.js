import React from "react"

//classe du Wiget Todolist

class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            nomTache:"",
            taches: [] 
        }
    }
    
    //permet la saisie au clavier 
    onChange(event) {
        this.setState({
            nomTache: event.target.value
        })
    }

    //permet d'ajouter une tache dans le tableau
    //sans recharger la page
    //en vidant le champs à chaque ajout
    ajouterTache(event) { 
        event.preventDefault()
        this.setState({
            nomTache: "",
            taches: [...this.state.taches, this.state.nomTache]
        })
        
    }

    supprimerTaches(event) {
        event.preventDefault() 
        const array= this.state.taches
        const index= array.indexOf(event.target.value)
        array.splice(index, 1)
        this.setState({
            taches: array 
        })       
    }

    //affichage des taches de la TODO
    afficherTaches() {
        return this.state.taches.map((tache) => {
            return(
                <div className="list-group-item" key={tache}>
                    {tache} | <button className="btn btn-danger" onClick={this.supprimerTaches.bind(this)}>X</button>
                </div>
            )
        })
    }

  
    
    render() {
        return(
            <div className>
                <h3>Todolist</h3>
                <form className="form-row align-items-center">
                    <input
                    className="form-control mb-1"
                    value={this.state.nomTache} 
                    type="text" 
                    placeholder="Ajout tache"
                    onChange={this.onChange.bind(this)} 
                    />
                    <button className="btn btn-primary" onClick={this.ajouterTache.bind(this)}>Add</button>
                </form>
                <div className="List-group">
                   {this.afficherTaches()} 
                </div>
            </div>
        )
    }
}

export default Todolist 