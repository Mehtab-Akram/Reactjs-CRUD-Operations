import {React,Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
            vehicles :[]
        }
    }
    componentDidMount(){
        const SavedMenu = localStorage.getItem(`Vehicles-Menu`)
        if(SavedMenu){ 
            this.setState({
                vehicles : JSON.parse(SavedMenu)
            })
            return;
        }
        fetch('https://swapi.dev/api/vehicles/')
        .then(response => response.json())
        .then(json => {
            localStorage.setItem(`Vehicles-Menu`,JSON.stringify(json.results))
            this.setState({vehicles: json.results})})
        }
    render(){
        return (
            <div>
                 <ul>
                <li><Link to = "/">Home</Link></li>
                {this.state.vehicles.map((vehicle,index)=>{
                    const id = vehicle.url.split('/')[5];
                    return (
                        <li key = {index}>
                            <NavLink activeStyle = {{fontWeight:'bold'}} to ={`/vehicles/${id}`}>{vehicle.name}</NavLink>
                        </li>

                    )
                })}
            </ul>
            </div>
        )
    }
}