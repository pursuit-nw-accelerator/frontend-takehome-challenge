import "./FilterBar.css";
import { useState } from "react";
const FilterBar = ({ users, buttonTextFromFilterBar }) => {
  const [buttonSelected, setButtonSelected] = useState({});

  const allUsersHobbies = [];

  users.forEach((user) => {
    for (let hobby of user.hobbies) {
      if (!allUsersHobbies.includes(hobby)) {
        allUsersHobbies.push(hobby);
      }
    }
  });
  allUsersHobbies.sort((a, b) => a.localeCompare(b));

  const handleButtonClick = (hobby) => {
    setButtonSelected((prevSelected) => ({
      ...prevSelected,

      [hobby]: !prevSelected[hobby],
    }));
    buttonTextFromFilterBar(hobby);
  };

  return (
    <div className="allHobbies">
      {allUsersHobbies.map((hobby, index) => {
        return (
          <button
            key={index}
            onClick={() => handleButtonClick(hobby)}
            className={buttonSelected[hobby] ? "active-button" : ""}
          >
            {hobby}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
