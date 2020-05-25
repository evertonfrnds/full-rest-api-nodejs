const knex = require('../database')
const bcrypt = require('bcryptjs')
module.exports = {
    async create(req, res) {
        try {
            const {
                name,
                email,
                password
            } = req.body;
            const passcrypt = await bcrypt.hash(password, 10)
            await knex('users').insert({
                name,
                email,
                password: passcrypt
            })
            return res.send({ message: 'Usuario cadastrado' })
        } catch (error) {
            return res.status(400).send({ message: 'Erro registration' })
        }
    },
    async auth(req, res) {
        const { email, password } = req.body;

        const user = await knex('users').where({ email })

        if (user.length < 1)
            res.status(400).send({ message: 'usuario nao encrontado' })
        if (!await bcrypt.compare(password, user[0].password))
            res.status(400).send({ message: 'senha invalida' })

        user[0].password = undefined

        return res.send(user)
    }
}