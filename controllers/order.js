const express = require('express');
const Order = require('../Models/order');
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

//SHOW
router.get('/:orderId', (req, res) => {
    const userId = req.params.id;
    const orderId = req.params.orderId;

    User.findById(userId)
        .then((shirt) => {
            const foundOrder = shirt.orders.find((order) => {
                return order.id === orderId;
            })
            res.json(foundOrder)
        })
        .catch((error) => {
            console.log("Failed to find" + error);
        })
});

module.exports = router;
