import { useEffect } from "react";
import "./FilterBar.scss";

const FilterBar = ({
  users = [],
  handleExpandAll,
  handleCollapseAll,
  hobbies,
  setHobbies,
}) => {
  useEffect(() => {
    addHobbyList();
  }, []); // eslint-disable-line

  const addHobbyList = () => {
    const hobbySet = new Set();

    users.forEach((user) => {
      const { hobbies } = user;
      hobbies.forEach((hobby) => {
        hobbySet.add(hobby);
      });
    });

    const sortedHobbies = [...hobbySet].sort();

    setHobbies(sortedHobbies);
  };

  return (
    <section className="buttons-container">
      <div className="hobby-buttons">
        {hobbies.map((hobby, index) => {
          return (
            <button key={index} className="hobby-button">
              {hobby}
            </button>
          );
        })}
      </div>

      <div className="expand-buttons">
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>
    </section>
  );
};

export default FilterBar;
