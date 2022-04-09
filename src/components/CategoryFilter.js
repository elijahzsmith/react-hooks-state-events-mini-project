import React from "react";

function CategoryFilter({ categories, onCatChange, currCat }) {

  // Creating each category button using the categories array
  // Adding an onClick to each

  const categoryButtons = categories.map(category => {
      const btnClass = category === currCat ? 'selected' : null

    return (
      <button 
        className={btnClass}
        key={category} 
        onClick={(e) => onCatChange(e)}>
        {category}
      </button>
    )
    }
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
