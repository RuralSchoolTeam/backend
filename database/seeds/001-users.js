exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          username: "Josh Disney",
          password: "password",
          authLevel: "Admin",
          organization: "Disney School of Stuff and Things"
        },
        {
          username: "Boogie Man",
          password: "password123",
          authLevel: "Board Memeber",
          organization: "Halloweentown"
        }
      ]);
    });
};
