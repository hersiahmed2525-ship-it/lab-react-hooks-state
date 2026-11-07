import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  return (
    <div>
      <DarkModeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode(!darkMode)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        onAddToCart={(name) => setCart([...cart, name])}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;
