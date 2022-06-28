const fs = require('fs');

const getProducts = async (_, res) => {
  try {
    const rawData = fs.readFileSync('./database/products.json');
    const products = JSON.parse(rawData);
    res.json(products);
  } catch (err) {
    res
      .status(503)
      .setHeader('Retry-After', 60)
      .send({ message: 'Unable to load products.' });
  }
};

const saveCart = async (req, _) => {
  console.log(req.body);
  fs.writeFileSync('./database/user_cart.json', JSON.stringify(req.body));
};

const getCart = async (_, res) => {
  try {
    const rawData = fs.readFileSync('./database/user_cart.json');
    const cart = JSON.parse(rawData);
    res.json(cart);
  } catch (err) {
    res
      .status(503)
      .setHeader('Retry-After', 60)
      .send({ message: 'Unable to load cart' });
  }
};

module.exports = { getProducts, saveCart, getCart };
