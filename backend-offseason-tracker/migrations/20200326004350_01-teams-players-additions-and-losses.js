exports.up = function(knex) {
  return knex.schema.createTable("teams", table => {
      table.increments()
      table.string("name")
      table.string("needs")
      table.string("logo_url")
  }).then(() => {
      return knex.schema.createTable("players", table => {
          table.increments()
          table.string("name")
          table.string("position")
      })
  }).then(() => {
      return knex.schema.createTable("additions", table => {
          table.increments()
          table.integer("team_id").references("id").inTable("teams")
          table.integer("player_id").references("id").inTable("players")
          table.string("details")
      })
  }).then(() => {
      return knex.schema.createTable("losses", table => {
          table.increments()
          table.integer("team_id").references("id").inTable("teams")
          table.integer("player_id").references("id").inTable("players")
      })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("additions")
    .then(() => {
        return knex.schema.dropTableIfExists("losses")
    })
    .then(() => {
        return knex.schema.dropTableIfExists("players")
    })
    .then(() => {
        return knex.schema.dropTableIfExists("teams")
    })
};
