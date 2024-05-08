const Products = require("../models/products");

module.exports.getProduct = (req, res, next) => {
    Products.findOne({ _id: req.params.id })
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }
            return res.json({ success: true, product: product });
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                message: "Server Error"
            });
        });
}