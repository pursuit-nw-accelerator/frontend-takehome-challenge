//STYLING
import './FilterBar.css';

const FilterBar = ({ uniqueHobbies, onClick, selected }) => {
  return( 
    <div>
      {
        uniqueHobbies.map((hobby) => {
        return <button
          key = { hobby }
          onClick = {() => onClick(hobby)}
          className={selected.includes(hobby) ? "selected" : " " }> {hobby}
        </button>})
      }
    </div>
  )
}
export default FilterBar;
