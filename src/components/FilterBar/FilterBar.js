import React from "react";
import "./FilterBar.css";

const FilterBar = ({ hobbies, selectedHobbies, toggleHobby }) => {
  return (
    <div className="FilterBar">
      <h2>Filter by hobby</h2>

      {hobbies.map((hobby) => (
        <button
          key={hobby}
          onClick={() => toggleHobby(hobby)}
          className={selectedHobbies.includes(hobby) ? "selected" : ""}
        >
          {hobby}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
