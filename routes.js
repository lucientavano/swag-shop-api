var express = require('express');
var router = express.Router();
var Product = require('./model/product');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next()
})

//// Define the home route
//router.get('/', function(req, res) {
//  res.send('home');
//});
//
//// Define the product route
//router.get('/product', function(req, res) {
//  res.send('product');
//});

//app.post('/product', function(request, response) {
//    var product = new Product();
//    product.title = request.body.title;
//    product.price = request.body.price;
//    product.save(function(err, savedProduct) {
//        if (err) {
//            response.status(500).send({error: "Could not save product"});
//        } else {
//            response.status(200).send(savedProduct);
//        }
//    });
//});

// Define the product route
router.get('/product', function(request, response) {
    
    Product.find({}, function(err, products) {
        if (err) {
            response.status(500).send({error: "Could not fetch products"});
            } else {
                 response.send('products');
                 }
    });
    
});

module.exports = router;