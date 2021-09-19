import {Component, React} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect } from 'react-router-dom';
import Home from './components/Home';
import Nav  from './Nav';
import vehicle from './Vehicle';

    class Main extends Component{
     
        constructor(props){
            super(props);
            this.state = {
                authenticated : false
            }
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
                    <Nav/>
                    <Switch>
                        <Route path = '/vehicles/:vehicleId' component = {vehicle}
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
                                <p>Awsome! Plesae login</p>
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
export default Main;