const express = require('express');
const products = require('../database/products.json');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/saveCart', (req, res) => {
  fs.writeFileSync('./database/user_cart.json', JSON.stringify(req.body));
});

app.get('/loadCart', (req, res) => {
  const cart = require('../database/user_cart.json');
  res.json(cart);
});

app.listen(PORT, () => {});
