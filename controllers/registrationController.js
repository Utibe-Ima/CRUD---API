const User = require('../Models/User.js')


module.exports.registrationForm = function(req, res) {
    res.render('registration')
}

module.exports.registration =  async(req, res) => {
    const {name, email, role} = req.body;

    const userExists = await User.findOne({email: email});
    if (userExists) {
        throw new Error('User Already Exists')
    } else {
        await User.create({name, email, role})
    }
    res.redirect('/')
}