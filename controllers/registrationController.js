const User = require('../Models/User.js')



module.exports.registrationForm = function (req, res) {
    res.render('registration', {
        error: ""
    })
}

module.exports.registration = async (req, res) => {
    const { name, email, role } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
        res.render('registration', {
            error: "User already exists"
        })
    } else {
        await User.create({ name, email, role })
    }
    res.redirect('/')
}
