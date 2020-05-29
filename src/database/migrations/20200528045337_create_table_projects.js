
exports.up = knex =>
    knex.schema.createTable('projects', function(table){
        table.increments('id')
        table.string('name')
        table.boolean('concluded')
        table.date('date')

        table.integer('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE')
    })

exports.down = knex => 
    knex.schema.dropTable('projects')