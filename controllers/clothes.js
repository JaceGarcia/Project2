const express = require('express');
const Clothes = require('../Models/clothes');
const router = express.Router();

router.get("/", (req,res) => {
    Clothes.find().then(clothes => {
        res.json(clothes);
    })
})
router.get("/:id", (req,res) => {
    Clothes.findById(req.params.id).then((clothes) => {
        res.json(clothes);
    })
})

module.exports = router;
