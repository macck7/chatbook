const express = require('express');
const { registerUser, authUser } = require('../controller/userController');

const router = express.Router()

// Note : registerUser , authUser are two controller

//we can write end points in 2 ways these are as follow
//#1 we can add tailing endpoint like .post().get()
router.route('/').post(registerUser)

//#2 we can't add tailing endpoints
router.get('/login' , authUser)

module.exports = router;