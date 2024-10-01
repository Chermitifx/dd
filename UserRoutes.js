const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

// Route for registering a new user
router.post('/register', UserController.registerUser);

// Route for user login
router.post('/login', UserController.loginUser);

// Route for getting user by ID
// router.get('/:id', UserController.getUserById);

// // Optionally, add a route for getting user by email
// router.get('/email/:email', UserController.getUserByEmail);

module.exports = router;



