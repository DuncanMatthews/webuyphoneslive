import mongoose, { Connection } from 'mongoose';

interface CachedMongoose {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

declare const global: {
  mongoose: CachedMongoose;
};

let cached: CachedMongoose = global.mongoose || { conn: null, promise: null };

async function connectToDB(): Promise<Connection> {
  if (cached.conn) {
    console.log('Cached mongodb is called!');
    return cached.conn;
  }

  if (!cached.promise) {
    mongoose.set('strictQuery', true);
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = mongoose.connect(process.env.MONGODB_URI!).then(() => mongoose.connection);
    console.log('connected to mongoDB!');
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
