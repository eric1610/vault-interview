const express = require('express');
const router = express.Router();
const {
  getProducts,
  getCart,
  saveCart,
} = require('../controllers/cartController');

router.get('/products', getProducts);
router.get('/getCart', getCart);
router.post('/saveCart', saveCart);

module.exports = router;
