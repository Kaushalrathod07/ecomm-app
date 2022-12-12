var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController')


router.post('/register', function(req, res, next) {
    UserController.UserRegister(req, res, next)
});



router.post('/login', function(req, res, next) {
    UserController.UserLogin(req, res, next)
});

//router.get('/public', function(req, res, next) {
//  res.json({ status: true, message: 'user public route' })
//});



/*router.get('/create-super-admin', function(req, res, next) {
    UserController.CreateSuperAdmin(req, res, next)
});
*/



module.exports = router;









//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5MDE4ODk4MGNhNGJjZDZiZmI0NzY4IiwiaWF0IjoxNjcwMzg4NzE1LCJleHAiOjE2NzA4MjA3MTV9.OKlLlLHXc3v7fg4zMSwGnTY1dKuWNOoOIURetrca3iE