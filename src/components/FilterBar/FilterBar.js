import "./FilterBar.css";

const FilterBar = ({
  getAllHobbies,
  onClick,
  handleCollapseAll,
  handleExpandAll,
  hobbySelected,
}) => {
  const allHobbies = getAllHobbies?.sort((a, b) =>
    a > b ? 1 : a < b ? -1 : 0
  );

  return (
    <div>
      <h3>Filter By Hobby</h3>
      <div className="hobbies">
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
    </div>
  );
};

export default FilterBar;
