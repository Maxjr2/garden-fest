import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import GardenPlannerPage from './pages/GardenPlannerPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/planner" component={GardenPlannerPage} />
      </Switch>
    </div>
  );
};

export default App;
