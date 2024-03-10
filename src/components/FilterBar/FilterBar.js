import React, { useState, useEffect } from "react";
import "./FilterBar.css";

const FilterBar = ({ users: originalUsers, setFilteredUsers, fetchUsers, expandAllUsers, collapseAllUsers }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [filteredUsers, setFilteredUsersLocally] = useState(originalUsers);

  useEffect(() => {
    if (selectedHobbies.length === 0) {
      setFilteredUsers(filteredUsers);
    } else {
      const filtered = originalUsers.filter((user) =>
        selectedHobbies.every((hobby) => user.hobbies.includes(hobby))
      );
      setFilteredUsersLocally(filtered);
      setFilteredUsers(filtered); 
    }
  }, [selectedHobbies, originalUsers, filteredUsers, setFilteredUsers]);

  const allHobbies = Array.from(
    new Set(originalUsers.flatMap((user) => user.hobbies))
  );

  const toggleHobby = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const clearAllHobbies = async () => {
    setSelectedHobbies([]);
    await fetchUsers(); 
  };

  return (
<div className="FilterBar">
  <div className="hobby-buttons">
    {allHobbies.sort().map((hobby) => (
      <button key={hobby} className={selectedHobbies.includes(hobby) ? "selected" : ""} onClick={() => toggleHobby(hobby)} >
        {hobby}
      </button>
    ))}
  </div>
  <div className="action-buttons">
    <button className="expand" onClick={expandAllUsers}>
      Expand All
    </button>
    <button className="collapse" onClick={collapseAllUsers}>
      Collapse All
    </button>
    <button className="clear" onClick={clearAllHobbies}>
      Clear All
    </button>
  </div>
</div>


  );
};

export default FilterBar;
