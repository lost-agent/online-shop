import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://shop.hasanhuseyin.tr/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className="app-root min-h-screen min-w-screen">
        <Header />
        <div className="flex justify-center">
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-5">
            {products.map((product) => (
              <ListItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
