const knex = require('../../database')

module.exports = {
    async index(req, res) {
        const projects = await knex('projects').where({
            user_id: req.userId
        })
        return res.send(projects)
    },
    async create(req, res) {
        const {
            name,
            concluded,
            date,
        } = req.body
        await knex('projects')
            .insert({
                name,
                concluded,
                date,
                user_id: req.userId
            })
        return res.send({ message: 'Cadastrado' })
    },
    async update(req, res) {
        const { id } = req.params

        await knex('projects')
            .update(req.body)
            .where({ id })

        return res.send({message: 'Projeto editado'})
    },
    async delete(req, res) {
        const { id } = req.params

        await knex('projects')        
            .where({ id })
            .del()

        return res.send({message: 'Projeto deletado'})
    }
}