import Home from './Home'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
