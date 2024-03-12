import React, { useState, useEffect } from "react";
import "./FilterBar.css";

const FilterBar = ({ users: originalUsers, setFilteredUsers, fetchUsers, expandAllUsers, collapseAllUsers }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [filteredUsers, setFilteredUsersLocally] = useState(originalUsers);
  const [noUsersMessage, setNoUsersMessage] = useState(null);

  useEffect(() => {
    if (selectedHobbies.length === 0) {
      setFilteredUsers(filteredUsers);
      setNoUsersMessage(null);
    } else {
      const filtered = originalUsers.filter((user) =>
        selectedHobbies.every((hobby) => user.hobbies.includes(hobby))
      );
      setFilteredUsersLocally(filtered);
      setFilteredUsers(filtered); 

      if (filtered.length === 0) {
        const selectedFilters = selectedHobbies.join(", ");
        setNoUsersMessage(`No users match the filters: ${selectedFilters}`);
      } else {
        setNoUsersMessage(null);
      }
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
          <button
            key={hobby}
            className={selectedHobbies.includes(hobby) ? "selected" : ""}
            onClick={() => toggleHobby(hobby)}
          >
            {hobby}
          </button>
        ))}
        {noUsersMessage && <div className="no-users">{noUsersMessage}</div>}
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
