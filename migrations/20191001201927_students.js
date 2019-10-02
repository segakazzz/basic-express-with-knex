
exports.up = function(knex) {
    return knex.schema.createTable('Students', (table)=>{
        table.increments('id') // SERIAL PRIMARY KEY
        table.string('name')
        table.integer('isActive')
        table.integer('cohortId')
        table.foreign('cohortId').references('Cohorts.id')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.raw('DROP TABLE Students')
  };
  