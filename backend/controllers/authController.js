
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const ErrorHandler = require('../utils/errorHandler');

// Helper function to send JWT token
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
};

// Register a user => /api/v1/register
exports.registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password
    });

    sendToken(user, 201, res);
});

// Login User => /api/v1/login
exports.loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password entered
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400));
    }

    // Find user in database
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Check if password is correct
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res);
});

// Logout User => /api/v1/logout
exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: 'Logged out successfully.'
    });
});

// Get currently logged in user details => /api/v1/me
exports.getUserProfile = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    });
});

// Other controllers for user management (update, forgot password, reset password) can be added here.