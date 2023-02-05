import 'dotenv/config';
import mongoose from 'mongoose';

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.MONGO_URI;
    mongoose.set('strictQuery', true);
    await mongoose.connect(DB_URI);
    console.log('DB is connected');
}

export default dbConnect;