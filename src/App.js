// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import CreateProject from './components/CreateProject';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProjectList} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


