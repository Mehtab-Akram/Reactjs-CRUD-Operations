import './App.css';
import { 
  BrowserRouter as Router,
   Route,
   Link,
   Switch,
  Redirect } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import './Default.css'
import FormValidation from './FormValidation.js'
import error from './components/Error';
import LogInLogOut from './LoginLogOut';
import Main from './Main';
function App() {
  return (
    <div className="App">
     <Main/>
    </div>
  );
}

export default App;
