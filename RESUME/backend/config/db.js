import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rohitsi2252:rohit%40123@cluster0.uvvvp4w.mongodb.net/Resume')

    .then(() => console.log('DB CONNECTED'))
}