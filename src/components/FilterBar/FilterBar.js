import "./FilterBar.css";

const FilterBar = ({ eventHandler, filter = [] }) => {
  return (
    <ul className="grid-list">
      {filter.map((item, idx) => (
        <li key={idx}>
          <button
            type="button"
            onClick={eventHandler}
            style={{
              color: item.enabled ? "blue" : "gray",
            }}
            value={item.item}
          >
            {item.item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterBar;
