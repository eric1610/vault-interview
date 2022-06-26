import { useState, useCallback, useEffect } from 'react';
import Header from './Header';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import { ProductInfoType, CartType } from './Types';

const Store = () => {
  const [cart, setCart] = useState<CartType[]>([]);
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const increaseCart = useCallback((product: ProductInfoType) => {
    setCart((prev) => {
      const prevCopy = [...prev];
      const itemId = product.id;
      const foundItem = prev.find((item: CartType) => item.id === itemId);
      if (foundItem !== undefined) {
        const itemIndex = prevCopy.indexOf(foundItem);
        prevCopy[itemIndex] = {
          ...foundItem,
          quantity: foundItem.quantity + 1,
        };
      } else {
        prevCopy.push({
          ...product,
          quantity: 1,
        });
      }
      return [...prevCopy];
    });
  }, []);
  const decreaseCart = useCallback((product: ProductInfoType) => {
    setCart((prev) => {
      const prevCopy = [...prev];
      const itemId = product.id;
      const foundItem = prev.find((item: CartType) => item.id === itemId);
      if (foundItem !== undefined) {
        const itemIndex = prevCopy.indexOf(foundItem);
        prevCopy[itemIndex] = {
          ...foundItem,
          quantity: foundItem.quantity - 1,
        };
      }
      return [...prevCopy];
    });
  }, []);
  const removeCart = useCallback((product: ProductInfoType) => {
    setCart((prev) => {
      const prevCopy = [...prev];
      const itemId = product.id;
      const foundItem = prev.find((item: CartType) => item.id === itemId);
      if (foundItem !== undefined) {
        const itemIndex = prevCopy.indexOf(foundItem);
        prevCopy.splice(itemIndex, 1);
      }
      return [...prevCopy];
    });
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await (await fetch('/loadCart')).json();
        setCart([...data]);
      } catch (err) {
        setCart([]);
      }
    };
    fetchCart();
  }, []);
  return (
    <div>
      <Header setCartVisible={setCartVisible} />
      <div className="main-content">
        <Products increaseCart={increaseCart} />
        {cartVisible && (
          <ShoppingCart
            cart={cart}
            increaseCart={increaseCart}
            decreaseCart={decreaseCart}
            removeCart={removeCart}
          />
        )}
      </div>
    </div>
  );
};

export default Store;
