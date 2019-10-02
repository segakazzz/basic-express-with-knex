
exports.up = function(knex) {
  return knex.schema.createTable('Cohorts', (table)=>{
      table.increments('id') // SERIAL PRIMARY KEY
      table.string('title')
      table.string('slug')
      table.integer('isActive')
      table.datetime('startDate')
      table.datetime('endDate')
  })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE Cohorts')
  
};
