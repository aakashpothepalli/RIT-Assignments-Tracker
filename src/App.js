import React from 'react';
import './App.css';
import Home from './Home';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"
import My404Component from './My404Component';
import ClassSelector from './ClassSelector';

function App() {
  

    return (
      
        <Switch>
          

          <Route path= {'/:classCode'} component={Home}/>
          {/* <Route path= {'/'} component={Home}/> */}
          {/* <Route path='*' exact={true} component={My404Component} /> */}
          <Route path='*' exact={true} component={ClassSelector} />

        </Switch>

    );
}

export default App;
