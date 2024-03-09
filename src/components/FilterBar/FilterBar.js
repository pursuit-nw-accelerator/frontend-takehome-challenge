import React, { useState, useEffect } from "react";
import "./FilterBar.css";

const FilterBar = ({ users: originalUsers, setFilteredUsers, fetchUsers  }) => {
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

  const expandAll = () => {
    const updatedUsers = originalUsers.map((user) => ({
      ...user,
      expanded: true,
    }));
    setFilteredUsers(updatedUsers);
  };

  const collapseAll = () => {
    const updatedUsers = originalUsers.map((user) => ({
      ...user,
      expanded: false,
    }));
    setFilteredUsers(updatedUsers);
  };

  const noUsersMessage =
    filteredUsers.length === 0 && selectedHobbies.length > 0 ? (
      <div className="no-users">
        No users match the filters: {selectedHobbies.join(", ")}
      </div>
    ) : null;

  return (
    <div className="FilterBar">
      {allHobbies.sort().map((hobby) => (
        <button
          key={hobby}
          className={selectedHobbies.includes(hobby) ? "selected" : ""}
          onClick={() => toggleHobby(hobby)}
        >
          {hobby}
        </button>
      ))}
      <button className="clear" onClick={clearAllHobbies}>
        Clear All
      </button>
      <button className="expand" onClick={expandAll}>
        Expand All
      </button>
      <button className="collapse" onClick={collapseAll}>
        Collapse All
      </button>
      {noUsersMessage}
    </div>
  );
};

export default FilterBar;
