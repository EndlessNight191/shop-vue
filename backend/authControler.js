const User = require('./models/User')
const Role = require('./models/Role')
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('./config')
const { validationResult } = require('express-validator')

const generateAcessToken = (id, roles) => {
    const payload = {
        id,
        roles,
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class authControler{
    async registration(req, res){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Ошибка при регистрации', errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate){
                return res.status(400).json({message: "Пользователь с таким именем уже есть"})
            }
            var hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: 'user'})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()
            return res.json({message: "Пользователь успешно зарегестрирован"}
            )
        } catch(e){
            console.log(e)
            res.status(400).json({message: 'Registretion error'})
        }
    }

    async login(req, res){
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: `Пользователь с ${username} не найден`})
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message: `Введене неверный пароль`})
            }
            const token = generateAcessToken(user._id, user.roles)
            return res.json({token})
        } catch(e){
            console.log(e)
            res.status(400).json({message: 'login error'})
        }
    }

    async getUsers(req, res){
        try{
            // const userRole = new Role();
            // const adminRole = new Role({value: 'admin'});
            // await userRole.save();
            // await adminRole.save();
            const users = await User.find()
            res.json(users)
            res.json('server work');
        } catch(e){
            console.log(e)
            res.status(400).json({message: 'getUsers error'})
        }
    }
}

module.exports = new authControler()