// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logo from './logo.png';
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import Publish from './components/Publish';
import { useState } from 'react';
import {Link} from 'react-router-dom';



function App() {
  const [squestion,setSquestion] = useState([]);


  return (
    <>
<div className="col-md-10 offset-md-1 col-12 text-center">
  
  
  <Router>
  <Link to="/">
    <img className="cold-md-6" alt='logo' src={Logo}/>
  </Link>
    <Switch>
    <Route path="/" component={Menu} exact/>
      <Route path="/create" exact>
        <CreateSurvey squestion={squestion} setSquestion={setSquestion}></CreateSurvey>
        </Route>
      <Route path="/publish">
          <Publish questions={squestion}/>
      </Route>
      
    </Switch>
  </Router>
</div>
    </>
  );
}

export default App;
