import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  //  assigns the object { conn: null, promise: null } to both the cached and global.mongoose variables.
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  try {
    
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = mongoose
        .connect(MONGO_URL, { dbName: process.env.DB_NAME }, opts)
        .then((conn) => {
          console.log('Database connected :' + conn.connection.host);

          return conn;
        })
        .catch((err) => {
          console.log(`Faild to connect with database : ${err}`);
          process.exit(1);
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.log('dbConnection', error);
  }
}

export default dbConnect;
