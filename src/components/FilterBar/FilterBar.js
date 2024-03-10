import "./FilterBar.css";

const FilterBar = ({ hobbyList, handleByExpand, handleByCollapse, selectedHobby,  handleFilterBtnClick}) => {
 
  return (
    <>
      <h2>Filter by hobby</h2>
        <div className="hobby__container">
          <div className="hobby__right">
          {hobbyList.map((hobby, i) => (
            <button
              key={i}
              onClick={handleFilterBtnClick}
              className={`hobby ${selectedHobby.includes(hobby) ? 'active' : ''}`}
              value={hobby}>
              {hobby}
            </button>
          ))}
          </div>
            <div className="hobby__left">
              <button className="hobby" onClick={handleByExpand}>Expand All</button>
              <button className="hobby" onClick={handleByCollapse}>Collapse All</button>
            </div>
        </div>
    </>
  );
};

export default FilterBar;
