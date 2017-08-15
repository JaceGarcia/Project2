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
router.post("/", (req, res) => {
    const newUser = new User();
    console.log(req.body);
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.save();

});
module.exports = router;
