import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
  <div className='navbar'>
      <nav>
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/create-exercise">
              <a>Add Exercise</a>
          </Link>

      </nav>
  </div>
  );
};

export default Navigation;
