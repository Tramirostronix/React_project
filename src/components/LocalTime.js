import React from "react"
import moment from "moment"
import timezone from "moment-timezone"
import { Container, Row, Col, Image } from "react-bootstrap"
//utilisation de la librairie moment et moment-time-zone pour le temps 
//https://www.npmjs.com/package/react-moment#local
//https://www.zendevs.xyz/trucs-astuces-gestion-dates-moment-js/
//pour la mise à jour du temps : https://fr.reactjs.org/docs/state-and-lifecycle.html


//pour la france l'offset est de 60mn 

class LocalTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: "",
            continent: "",
            city: ""
        }

    }

    //Conversion en valeur UTC 



    //FOnction pour actualiser automatiquement l'heure qu'il est
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            100
        )
    }

    tick() {
        this.setState({ UtcTime: moment().utc() })
    }

    render() {

        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                            <Image src={`${this.props.flag}.png`}
                            alt={this.props.flag} roundedCircle/>                      
                            {moment().tz(`${this.props.continent}/${this.props.city}`).format("DD/MM HH:mm")}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default LocalTime 