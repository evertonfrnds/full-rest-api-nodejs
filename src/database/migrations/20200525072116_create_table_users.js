
exports.up = (knex) => 
    knex.schema.createTable('users', function(table){
        table.increments('id')
        table.string('name').notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable()

        table.timestamps(true, true)
    })
exports.down = (knex) => 
    knex.schema.dropTable('users')