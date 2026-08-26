import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./FilterSidebar.css";

const availabilityOptions = ["In Stock", "Out Of Stock"];
const priceOptions = [
  { label: "Under ₹2,000", value: "under-2000" },
  { label: "₹2,000 - ₹5,000", value: "2000-5000" },
  { label: "Above ₹5,000", value: "above-5000" },
];
const colorOptions = ["Black", "White", "Brown", "Blue"];
const sizeOptions = ["6", "7", "8", "9", "10", "11"];

function FilterSidebar() {
  const {
    selectedAvailability,
    setSelectedAvailability,
    selectedPrice,
    setSelectedPrice,
    selectedColors,
    setSelectedColors,
    selectedSizes,
    setSelectedSizes,
    clearFilters,
  } = useContext(ShopContext);

  const toggleSelection = (value, selectedValues, setter) => {
    if (selectedValues.includes(value)) {
      setter(selectedValues.filter((item) => item !== value));
    } else {
      setter([...selectedValues, value]);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSizes((prev) => (prev.includes(size) ? [] : [size]));
  };

  return (
    <aside className="filterSidebar">
      <div className="filterSidebar__header">
        <h2 className="filterTitle">Filter</h2>
        <button type="button" className="clearFiltersBtn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <div className="filterSection">
        <h3>Availability</h3>

        {availabilityOptions.map((option) => (
          <label
            key={option}
            className={selectedAvailability.includes(option) ? "filterOption active" : "filterOption"}
          >
            <input
              type="checkbox"
              checked={selectedAvailability.includes(option)}
              onChange={() => toggleSelection(option, selectedAvailability, setSelectedAvailability)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="filterSection">
        <h3>Price</h3>

        {priceOptions.map((option) => (
          <label
            key={option.value}
            className={selectedPrice === option.value ? "filterOption active" : "filterOption"}
          >
            <input
              type="radio"
              name="price"
              checked={selectedPrice === option.value}
              onChange={() => setSelectedPrice(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      <div className="filterSection">
        <h3>Color</h3>

        {colorOptions.map((color) => (
          <label
            key={color}
            className={selectedColors.includes(color) ? "filterOption active" : "filterOption"}
          >
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => toggleSelection(color, selectedColors, setSelectedColors)}
            />
            <span>{color}</span>
          </label>
        ))}
      </div>

      <div className="filterSection">
        <h3>Size</h3>

        <div className="sizeGrid">
          {sizeOptions.map((size) => (
            <button
              key={size}
              type="button"
              className={selectedSizes.includes(size) ? "sizeButton active" : "sizeButton"}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;