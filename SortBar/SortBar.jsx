import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const sortOptions = [
  "Featured",
  "Newest",
  "Price Low to High",
  "Price High to Low",
  "Highest Rated",
  "Name A-Z",
  "Name Z-A",
];

function SortBar() {
  const { filteredProducts, sortOption, setSortOption } = useContext(ShopContext);

  return (
    <div className="sortBar" style={{ width: "92%", margin: "40px auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
      <h3>Showing {filteredProducts.length} Products</h3>

      <select value={sortOption} onChange={(event) => setSortOption(event.target.value)}>
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
} 

export default SortBar;