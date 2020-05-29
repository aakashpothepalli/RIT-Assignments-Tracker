import React from 'react';
import './App.css';
import Home from './Home';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"

function App() {
  

    return (
      
        <Switch>
          

          <Route path= {'/:classCode'} component={Home}/>
          <Route path= {'/'} component={Home}/>

        </Switch>

    );
}

export default App;
