require("dotenv").config();
const User = require("../Models/User")


module.exports.homepage = async (req, res) => {
    const users = await User.find()
    res.render("home", {
        allUsers: users
    });
};


