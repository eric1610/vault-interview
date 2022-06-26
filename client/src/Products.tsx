import { useEffect, useState } from 'react';
import { ProductInfoType, ProductsType } from './Types';
import ProductCard from './ProductCard';
import './assets/productStyles.css';

const Products = ({ increaseCart }: ProductsType) => {
  const [products, setProducts] = useState<ProductInfoType[]>([]);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await (await fetch('/products')).json();
        setProducts([...data]);
      } catch (err) {
        setError(true);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-display">
      {error ? (
        <h1>
          Unable to fetch data! Did you check if backend server is running
        </h1>
      ) : products.length < 1 ? (
        <h1>Loading list of products...</h1>
      ) : (
        products.map((product: ProductInfoType) => (
          <ProductCard
            product={product}
            increaseCart={increaseCart}
            key={product.id}
          />
        ))
      )}
    </div>
  );
};

export default Products;
