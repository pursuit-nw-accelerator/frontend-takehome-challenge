import './FilterBar.css';

const FilterBar = ({ allUsersAboutStatus }) => {
  return <div className='filterBar_container'>
    <div></div>
    <div className='about_status_buttons'>
      <button onClick={allUsersAboutStatus.expand}>Expand All</button>
      <button onClick={allUsersAboutStatus.collapse}>Collapse All</button>
    </div>
  </div>;
};

export default FilterBar;
