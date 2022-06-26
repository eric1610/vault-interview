import './assets/productStyles.css';
import { ProductCardType } from './Types';

const ProductCard = ({ product, increaseCart }: ProductCardType) => {
  const { title, src, details } = product;
  const addToCart = () => {
    increaseCart(product);
  };

  return (
    <div className="card">
      <h4 className="text-center">{title}</h4>
      <img src={src} className="product-picture" alt="shoe" />
      <p>{details}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
