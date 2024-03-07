import './FilterBar.css';

const FilterBar = ({users, setExpanded}) => {

  const toggleAll = () =>{
    setExpanded(users.map((user) => user.id))
  }
  const toggleCollapseAll = () =>{
    setExpanded([])
  }

  return(
  <div>
    <div>
      s
    </div>
    <div>
      <button onClick={toggleAll}>Expand All</button>
      <button onClick={toggleCollapseAll}>Collapse All</button>
    </div>
  </div>);
};

export default FilterBar;
