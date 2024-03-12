// FilterBar.js  TODO: Add your filter buttons here

import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filterBar = [], onFilterChange, allHobbies }) => {
  return (
    
    <div className="FilterBar">
      {/* Ensure allHobbies is defined before mapping to prevent errors during asynchronous data fetching */}
      {allHobbies && allHobbies.map((hobby) => (
        <button
          key={hobby}
          className={filterBar.includes(hobby) ? 'selected' : ''}
          onClick={() => onFilterChange(hobby)}
        >
          {hobby}
        </button>
      ))}
    </div>
    
  );
  
};

export default FilterBar;