import React from 'react';

type HeaderType = {
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ setCartVisible }: HeaderType) => {
  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <nav className="header">
      <a href="#">Home</a>
      <button onClick={toggleCart}>Cart</button>
    </nav>
  );
};

export default Header;
