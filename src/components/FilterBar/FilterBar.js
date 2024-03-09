import "./FilterBar.css";

const FilterBar = ({ users }) => {
  function getAllHobbies(arr) {
    let tempArr = [];

    for (let i = 0; i < arr.length; i++) {
      const hobbies = arr[i].hobbies;
      for (let j = 0; j < hobbies.length; j++) {
        if (!tempArr.includes(hobbies[j])) {
          tempArr.push(hobbies[j]);
        }
      }
    }

    return tempArr;
  }

  const allHobbies = getAllHobbies(users).sort((a, b) =>
    a > b ? 1 : a < b ? -1 : 0
  );

  return (
    <div>
      <h3>Filter By Hobby</h3>
      {allHobbies.map((hobby) => {
        return <button>{hobby}</button>;
      })}
    </div>
  );
};

export default FilterBar;
