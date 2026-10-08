import React from 'react';

const FilterBar = ({ filters = [], activeFilter = 'all', onSelectFilter }) => {
  return (
    <div className="filter-bar" data-reveal>
      {filters.map((f) => (
        <button
          key={f.id}
          className={`f-btn ${activeFilter === f.id ? 'active' : ''}`}
          data-filter={f.id}
          data-testid={f.testId}
          type="button"
          onClick={() => onSelectFilter(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
