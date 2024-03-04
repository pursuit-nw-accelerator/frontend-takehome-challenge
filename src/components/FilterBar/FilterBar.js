import "./FilterBar.css";
import { useState } from "react";

const FilterBar = ({ setFilter, filter }) => {
  return (
    <div>
      {filter?.length > 0 ? (
        <ul
          style={{
            listStyle: "none",
          }}
        >
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
