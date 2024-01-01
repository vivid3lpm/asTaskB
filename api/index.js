const express = require('express');
const router = express.Router();

const {User, List, Task} = require('../models');

router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
});

// Other API routes

module.exports = router;