import React from 'react'

function Filter({ selectedCategories, onCategoryChange }) {
      const categories = [
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Jewellery", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
  ];

  return (
    <div>
        <div className="mt-5">
          <p className="text-center">Filter by categories</p>
          <form>
          {categories.map((cat) => (
          <div className="form-check" key={cat.value}>
            <input
              type="checkbox"
              value={cat.value}
              id={cat.value}
              className="form-check-input"
              checked={selectedCategories.includes(cat.value)}
              onChange={onCategoryChange}
            />
            <label htmlFor={cat.value} className="form-check-label">
              {cat.label}
            </label>
          </div>
        ))}
          </form>
        </div>
        </div>
  )
}

export default Filter