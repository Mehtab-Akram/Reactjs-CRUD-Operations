import {Component, React} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import error from './components/Error';

    class logInLogOut extends Component{
     
        constructor(props){
            super(props);
            this.state = {
                authenticated : false,
                vehicles: []
            }
        }
        componentDidMount(){
        fetch('https://swapi.dev/api/vehicles/')
        .then(response => response.json())
        .then(json => this.setState({vehicles: json.results}))
        }
        doLogin = ()=>{
            this.setState({
                authenticated : true
            })
        }
        doLogout=()=>{
            this.setState({
                authenticated : false
            })
        }
        render(){
            return (
                <Router>
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/about">About</Link></li>
                        <li><Link to = "/about/123">About Jhon</Link></li>
                        <li><Link to = "/contact">Contact</Link></li>
                        {this.state.vehicles.map((vehicle,index)=>{
                            const id = vehicle.url.split('/')[5];
                            return (
                                <li key = {index}>
                                    <Link to ={`/vehicles/${id}`}>{vehicle.name}</Link>
                                </li>

                            )
                        })}
                    </ul>
                    <Switch>
                        <Route path = '/vehicles/:vehicleId' render = {({match})=>{
                            return (
                                <h2> Vehicle ID: {match.params.vehicleId}</h2>
                            )
                        }}
                        />
                    <Route exact path = "/" render ={ ()=>{
                        if(this.state.authenticated)
                        {
                            return (
                                <Redirect to="/account"/>
                            )
                        }
                        else{
                            return (
                                <>
                                <Home/>
                                <p>Plesae login</p>
                                <button onClick={this.doLogin}>Login</button>
                                </>
                            )
                        }
                        }}/>
                        <Route path = "/account" render={()=>{
                            if(this.state.authenticated){
                                return (
                                    <>
                                    <Home/>
                                    <p>Welcome!</p>
                                    <button onClick = {this.doLogout}>Logout</button>
                                    </>
                                )   
                            }
                            else{
                                return(
                                    <Redirect to="/"/>
                                )
                            }
                        }}/>
                        </Switch>
                        
                </Router>
                
                
            )
        }
       
    }
export default logInLogOut;