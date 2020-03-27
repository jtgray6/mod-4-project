
exports.up = function(knex) {
  return knex.schema.createTable('favorites', table => {
      table.increments()
      table.integer('team_id').references('id').inTable('teams')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('favorites')
};
