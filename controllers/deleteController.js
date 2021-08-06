const User = require('../Models/User')


module.exports.delete = async (req, res) => {
    const selectedUser = await User.findByIdAndDelete(req.params.id)
    res.redirect('/')
}
