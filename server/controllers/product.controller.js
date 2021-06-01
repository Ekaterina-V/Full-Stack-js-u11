const db = require('../models');
const Product = db.product;

// Create new product
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });

  // Save product in the db
  product
    .save(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the product.',
      });
    });
};
