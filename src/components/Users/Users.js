// Users.js

import React, { useEffect, useState } from 'react';
import User from '../User/User';
import FilterBar from '../FilterBar/FilterBar';
import './Users.css';

const Users = ({ users = [] }) => {
  const [expanded, setExpanded] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [allHobbies, setAllHobbies] = useState([]);


// Function to get all unique hobbies from the users
const getUniqueHobbies = () => {
  const uniqueHobbies = [];
  users.forEach((user) => {
    user.hobbies.forEach((hobby) => {
      if (!uniqueHobbies.includes(hobby)) {
        uniqueHobbies.push(hobby);
      }
    });
  });
  setAllHobbies(uniqueHobbies);
};



  // Call the function to get unique hobbies when users change
  useEffect(() => {
    getUniqueHobbies();
  }, [users]);

  const handleExpandAll = () => {
    setExpanded(users.map((user) => user.id));
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

  const toggleExpanded = (id) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded.includes(id)) {
        return prevExpanded.filter((currId) => currId !== id);
      } else {
        return [...prevExpanded, id];
      }
    });
  };

  const handleFilterChange = (hobby) => {
    setSelectedHobbies((prevSelectedHobbies) => {
      if (prevSelectedHobbies.includes(hobby)) {
        return prevSelectedHobbies.filter((selected) => selected !== hobby);
      } else {
        return [...prevSelectedHobbies, hobby];
      }
    });
  };

  // Filter users based on selected hobbies
  const filteredUsers = users.filter((user) =>
    selectedHobbies.every((hobby) => user.hobbies.includes(hobby))
  );

  return (
    <div>
      <FilterBar
        filterBar={selectedHobbies}
        onFilterChange={handleFilterChange}
        allHobbies={allHobbies}
      />

      <button onClick={handleExpandAll}>Expand All</button>
      <button onClick={handleCollapseAll}>Collapse All</button>

      <article className="Users">
        {filteredUsers.map((user) => {
          const { id } = user;
          return (
            <User
              key={id}
              user={user}
              expanded={expanded.includes(id)}
              onClick={() => toggleExpanded(id)}
            />
          );
        })}
      </article>
    </div>
  );
};

export default Users;

