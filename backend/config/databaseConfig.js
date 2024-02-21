// config/databaseConfig.js

const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect(process.env.DATABASE_STRING);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Successfully ! Connected to MongoDB');
  });
};

module.exports = connectToDatabase;
