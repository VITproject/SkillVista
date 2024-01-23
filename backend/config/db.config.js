module.exports = {
  db: {
    production: "your_production_connection_string",
    development: "mongodb://localhost:27017/your_development_database",
    test: "mongodb://localhost:27017/SkillVista",
  },
  pool: {
    max: 10
  }
};
