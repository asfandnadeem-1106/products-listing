// Provide all routes to application
const express = require('express');
const router = express.Router();

const productRoutes = require('../routes/products');
router.get('/products/:id', productRoutes.getProduct);

module.exports = router;