
const express = require('express');
const router = express.Router();

const { registerUser, loginUser, logout, getUserProfile } = require('../controllers/authController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/me', isAuthenticatedUser, getUserProfile); // Protected route

module.exports = router;