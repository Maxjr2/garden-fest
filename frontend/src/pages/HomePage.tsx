import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Welcome to Garden Planner</h2>
      <p>Plan and manage your garden with ease using our intuitive tools.</p>
      <Link to="/planner" className="cta-button">Start Planning Your Garden</Link>
    </div>
  );
};

export default HomePage;
