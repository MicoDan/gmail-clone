import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    try {
        mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;