const express = require('express');
const User = require('../models/users');
const router = express.Router();

router.get("/", (req,res) => {
    User.find().then(users => {
    res.json(users);
    })
})
router.get("/:id", (req,res) => {
    User.findById(req.params.id).then((users) => {
    res.json(users);
    })
})
module.exports = router;