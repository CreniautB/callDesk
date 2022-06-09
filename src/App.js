import React, {useState} from 'react'
import HomePage from './component/HomePage/homePage.jsx'
import Auth from './component/Auth/auth.jsx';
import './app.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [log, setLog] = useState(false)
   
  return (
    
    <Router>
    <Switch>
      <Route path="/homePage">
        <HomePage log={log} setLog={setLog} />
      </Route>
      <Route path="/">
        <Auth  log={log} setLog={setLog} />
      </Route>
    </Switch>
  </Router>

  );

}

export default App;

