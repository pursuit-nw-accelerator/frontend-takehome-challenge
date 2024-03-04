import "./FilterBar.css";

const FilterBar = ({ setFilter, filter }) => {
  return (
    <div>
      {filter?.length > 0 ? (
        <ul className="grid-list">
          {filter.map((item, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => {
                  setFilter((prevFilter) =>
                    prevFilter.map((filterItem) =>
                      filterItem.item === item.item
                        ? { ...filterItem, enabled: !filterItem.enabled }
                        : filterItem,
                    ),
                  );
                }}
                style={{
                  color: item.enabled ? "blue" : "gray",
                }}
              >
                {item.item}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <>filter by hobbies</>
      )}
    </div>
  );
};

export default FilterBar;