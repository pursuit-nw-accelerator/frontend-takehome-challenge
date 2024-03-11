// FilterBar.js

import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filterBar, onFilterChange, allHobbies }) => {

  return (
    <div className="FilterBar">
      {allHobbies.map((hobby) => (
        <button
          key={hobby}
          className={filterBar.includes(hobby) ? 'selected' : ''}
          // style={{ backgroundColor: filterBar.includes(hobby) ? '#4caf50' : '' }}
          onClick={() => onFilterChange(hobby)}
        >
          {hobby}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;