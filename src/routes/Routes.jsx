import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../paginas/App'
import EditorCv from '../paginas/EditorCv'

function Routes() {
  return (
    <BrowserRouter >
     <Switch>
     <Route exact path="/" component={App}/>
     <Route exact path="/EditorCv" component={EditorCv}/>
     </Switch>
    </BrowserRouter>
  );
}

export default Routes;
