const express = require('express');
const Orders = require('../models/order');
const router = express.Router();

router.get("/", (req,res) => {
    Orders.find().then(order => {
        res.json(order);
    })
})
router.get("/:id", (req,res) => {
    Orders.findById(req.params.id).then((order) => {
        res.json(order);
    })
})
module.exports = router;
