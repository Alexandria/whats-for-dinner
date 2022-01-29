import mongoose from 'mongoose';
require('dotenv').config()

const uri = `mongodb+srv://lex:${process.env.DB_PASSWORD}@cluster0.makg9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectToMongo = async () => {
  try {
    await mongoose.connect(uri);
    //logger.info(chalk.inverse.cyan.bgBlack('Connected to mongodb: ' + process.env.MONGO_DB_NAME));
  } catch (err) {
    console.log(err);
  }
};