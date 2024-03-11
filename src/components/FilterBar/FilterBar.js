import "./FilterBar.css";

const FilterBar = ({ users, onClick, hobbySelected, setToggleAbout }) => {
  function getAllHobbies(arr) {
    let set = new Set();

    if (!arr) {
      return
    }

    for (let i = 0; i < arr.length; i++) {
      const hobbies = arr[i].hobbies;
      for (let j = 0; j < hobbies.length; j++) {
        set.add(hobbies[j]);
      }
    }

    return Array.from(set);
  }

  const allHobbies = getAllHobbies(users)?.sort((a, b) =>
    a > b ? 1 : a < b ? -1 : 0
  );

  const handleExpandAll = () => {
    const newExpanded = users.map((user) => user.id);
    setToggleAbout(newExpanded);
  };

  const handleCollapseAll = () => {
    setToggleAbout([]);
  };

  return (
    <div>
      <h3>Filter By Hobby</h3>
      {allHobbies?.map((hobby, i) => {
        return (
          <button
            key={hobby + i}
            onClick={() => onClick(hobby)}
            style={{
              backgroundColor: hobbySelected?.includes(hobby)
                ? "skyblue"
                : "white",
            }}
          >
            {hobby}
          </button>
        );
      })}
      <button onClick={handleExpandAll}>Expand All</button>
      <button onClick={handleCollapseAll}>Collapse All</button>
    </div>
  );
};

export default FilterBar;
