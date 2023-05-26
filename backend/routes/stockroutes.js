const express = require('express');
const router = express.Router();

// Define routes
router.get('/:id/add', (req, res) => {
    //
    res.send("add"); 
});

router.get('/login', (req, res) => {
    //create functionality for login
    res.send("login func");
});

router.get('/register', (req, res) => {
    //create functionality for register
    res.send("register func");
});

module.exports = router
