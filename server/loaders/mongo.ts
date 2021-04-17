import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  const connection = await mongoose.connect(config.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  return connection.connection.db;
};