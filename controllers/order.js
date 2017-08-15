const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.get("/", (req,res) => {
    Order.find().then(order => {
        res.json(order);
    })
})
router.get("/:id", (req,res) => {
    Order.findById(req.params.id).then((order) => {
        res.json(order);
    })
})
router.post("/", (req, res) => {
    const newOrder = new Order();
    console.log(req.body);
    newOrder.name = req.body.name;
    newOrder.imgUrl = req.body.imgUrl;
    newOrder.color = req.body.color;
    newOrder.size = req.body.size;
    newOrder.gender = req.body.gender;
    newOrder.save();

});
module.exports = router;
