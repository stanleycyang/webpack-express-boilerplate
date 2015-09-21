import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load ENV variables
dotenv.load();

const database = process.env.MONGODB || 'mongodb://localhost/webpack-express-template';

// Connect to the database
mongoose.connect(database);

const connection = mongoose.connection;

connection.on('error', (msg) => {
  console.error(msg);
});

connection.once('open', () => {
  console.log('db connection to %s was successful', database);
});

export default mongoose;
