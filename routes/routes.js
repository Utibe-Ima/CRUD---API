const express = require('express')
const router = express.Router()


const register = require('../controllers/registrationController').registration
const regForm = require('../controllers/registrationController').registrationForm
const home = require('../controllers/homeController').homepage
const edit = require('../controllers/editController').edit
const editForm = require('../controllers/editController').editForm
const del = require('../controllers/deleteController').delete


// routes goes below this line

// displays the home page
router.get('/', home)

// adds new user to the database
router.get('/register', regForm)
router.post('/register', register);

// edits user info in the database
router.get('/edit/:id', editForm)
router.patch('/edit/:id', edit)

// removes a user
router.delete('/delete/:id', del)

module.exports = router
