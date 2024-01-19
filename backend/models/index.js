const mongoose = require('mongoose');
const config = require("../config/db.config.js");

mongoose.connect(`mongodb://${config.HOST}:${config.PORT}/${config.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit();
  });

const db = {};

db.mongoose = mongoose;

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const roleSchema = new mongoose.Schema({
  name: String
});

db.user = mongoose.model('User', userSchema);
db.role = mongoose.model('Role', roleSchema);

db.role.belongsToMany = () => {}; // MongoDB doesn't have "belongsToMany" like SQL databases

db.user.roles = [{
  name: 'user'
}, {
  name: 'admin'
}, {
  name: 'moderator'
}];

module.exports = db;
