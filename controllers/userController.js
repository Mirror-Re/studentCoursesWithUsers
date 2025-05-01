const {User} = require('../models')

//render student registration form
module.exports.renderStudentRegistrationForm = function(req, res){
    res.render('user/register');
}