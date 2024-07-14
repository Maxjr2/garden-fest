import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import GardenDesignerPage from './pages/GardenDesignerPage';
import GardenBedEditorPage from './pages/GardenBedEditorPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Garden Planner</h1>
          <Navigation />
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/designer" element={<GardenDesignerPage />} />
            <Route path="/bed-editor/:bedId" element={<GardenBedEditorPage />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Garden Planner. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
