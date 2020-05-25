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
            return res.status(400).send({message: 'Erro registration'})
        }
    },
}