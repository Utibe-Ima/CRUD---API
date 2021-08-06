const User = require('../Models/User')


module.exports.editForm = async (req, res) => {
    const selectUser = await User.findById(req.params.id)
    res.render('edit', {
        user: selectUser
    })
}


module.exports.edit = async (req, res) => {
    const selectedUser = await User.findByIdAndUpdate(req.params.id)
    Object.assign(selectedUser, req.body)
    selectedUser.save()
    res.redirect('/')
}