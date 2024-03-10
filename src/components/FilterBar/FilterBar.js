import "./FilterBar.css";

const FilterBar = ({ users, onClick, hobbySelected }) => {
  function getAllHobbies(arr) {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
      const hobbies = arr[i].hobbies;
      for (let j = 0; j < hobbies.length; j++) {
        set.add(hobbies[j]);
      }
    }

    return Array.from(set);
  }

  const allHobbies = getAllHobbies(users).sort((a, b) =>
    a > b ? 1 : a < b ? -1 : 0
  );

  return (
    <div>
      <h3>Filter By Hobby</h3>
      {allHobbies.map((hobby, i) => {
        return (
          <button
            key={hobby + i}
            onClick={() => onClick(hobby)}
            style={{
              backgroundColor: hobbySelected.includes(hobby)
                ? "skyblue"
                : "white",
            }}
          >
            {hobby}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
