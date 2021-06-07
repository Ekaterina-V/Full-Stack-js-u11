module.exports = (app) => {
  const product = require('../controllers/product.controller');

  const router = require('express').Router();

  // Create a new product
  router.post('/create', product.create);

  // Show all products
  router.get('/', product.getAll);

  app.use('/api/bakery/product', router);
};
