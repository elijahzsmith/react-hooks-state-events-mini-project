import React from "react";

function CategoryFilter({ categories, onCatChange, currCat }) {
  const categoryButtons = categories.map((category) => {
    const btnClass = category === currCat ? "selected" : null;

    return (
      <button
        className={btnClass}
        key={category}
        onClick={(e) => onCatChange(e)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
