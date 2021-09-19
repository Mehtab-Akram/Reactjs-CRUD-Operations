import React,{Component} from "react";

export default class vehicle extends Component{
    constructor(props) {
        super(props);
        this.state ={
            vehicle : {}
        }
    }
    componentDidMount(){
        const id = this.props.match.params.vehicleId;
        const savedVehicle = localStorage.getItem(`Vehicle-${id}`);
        if(savedVehicle){
            this.setState({
                vehicle : savedVehicle
            });
            return;
        }
        fetch(`https://swapi.dev/api/vehicles/${id}/`)
        .then(response => response.json())
        .then(json => {
            this.setState({vehicle: json})
        localStorage.setItem(`Vehicle-${id}`,JSON.stringify(json))
        })
        }
        componentDidUpdate(prevProps,prevState){
            
            const prevStateString =JSON.stringify(prevProps.match.params.vehicleId);
            const updatedPropsString = JSON.stringify(this.props.match.params.vehicleId)

            if(prevStateString !==updatedPropsString){
                const id = this.props.match.params.vehicleId;
                const savedVehicle = localStorage.getItem(`Vehicle-${id}`);
                if(savedVehicle){
                    this.setState({
                        vehicle : JSON.parse(savedVehicle)
                    });
                    return;
                }
                fetch(`https://swapi.dev/api/vehicles/${id}/`)
                .then(response => response.json())
                .then(json => {
                    this.setState({vehicle: json})
                    localStorage.setItem(`Vehicle-${id}`,JSON.stringify(json))
                })
            }

        }
    render(){
        const {vehicle} = this.state
        return (
            <>
            <h2>Name: {vehicle.name}</h2>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>URL: {vehicle.url}</p>
            </>
        )
    }
}