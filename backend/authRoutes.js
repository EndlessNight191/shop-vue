const Router = require('express');
const router = new Router();
const controller = require('./authControler');
const {check} = require('express-validator')
const authMiddleware = require('./middlewear/authMiddlewear')

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', "Пароль должен быть длинее 4 и меньше 10").isLength({min: 4, max: 5})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.getUsers)
router.get('/use', check('what'))

module.exports = router