import { useEffect } from 'react';
import './App.css'
import { Header } from './components/Header'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
    <div className='app-root min-h-screen min-w-screen'>
      <Header />
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
