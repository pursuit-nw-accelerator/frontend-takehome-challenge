import { useEffect } from "react";
import "./FilterBar.scss";

const FilterBar = ({
  users = [],
  handleExpandAll,
  handleCollapseAll,
  hobbies,
  setHobbies,
  selectedHobbies,
  setSelectedHobbies,
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

  const toggleSelected = (hobby) => {
    if (!selectedHobbies.includes(hobby)) {
      const newSelectedHobby = [...selectedHobbies, hobby];
      setSelectedHobbies(newSelectedHobby);
      return;
    } else {
      const removeSelectedHobby = selectedHobbies.filter(
        (selectedHobby) => selectedHobby !== hobby
      );
      setSelectedHobbies(removeSelectedHobby);
    }
  };

  return (
    <section className="buttons-container">
      <div className="hobby-buttons">
        {hobbies.map((hobby, index) => {
          return (
            <button
              key={index}
              className={selectedHobbies.includes(hobby) ? "selected" : null}
              onClick={() => {
                toggleSelected(hobby);
              }}
            >
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
