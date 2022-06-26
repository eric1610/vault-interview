import { useCallback } from 'react';
import { CartType, ProductInfoType } from './Types';
import './assets/productStyles.css';

type ShoppingCartType = {
  cart: CartType[];
  increaseCart: (product: ProductInfoType) => void;
  decreaseCart: (product: ProductInfoType) => void;
  removeCart: (product: ProductInfoType) => void;
};
const ShoppingCart = ({
  cart,
  increaseCart,
  decreaseCart,
  removeCart,
}: ShoppingCartType) => {
  const saveCart = useCallback(() => {
    const saveData = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart),
      };
      try {
        await fetch('/saveCart', requestOptions);
      } catch (err) {
        console.log('Error because of: ', err);
      }
    };
    saveData();
  }, [cart]);

  return (
    <div className="shopping-cart">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <h4>Empty Cart</h4>
      ) : (
        cart.map(({ title, src, quantity, details, id }) => {
          return (
            <div key={id} className="cart-item">
              <div>
                <img src={src} className="cart-image" alt="shoe" />
              </div>
              <div className="cart-item-display">
                <h5>{title}</h5>
                <p>Quantity: {quantity}</p>
                <div className="action-buttons">
                  <button
                    onClick={() => {
                      increaseCart({ title, src, id, details });
                    }}
                  >
                    +
                  </button>
                  <button
                    disabled={quantity <= 1}
                    onClick={() => {
                      decreaseCart({ title, src, id, details });
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      removeCart({ title, src, id, details });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
      <button onClick={saveCart}>Save cart</button>
    </div>
  );
};

export default ShoppingCart;
