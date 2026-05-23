import { useEffect, useState } from 'react';
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
      <div className='flex justify-center'>
      <div className='grid grid-cols-4 gap-5'>
        {products.map(product => (
          <div className='w-64 h-64 bg-red-500' key={product.id}>
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  )
}

export default App
