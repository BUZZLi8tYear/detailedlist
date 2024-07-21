import mongoose from "mongoose";

// username = nitish2bodkhe
// password of mongodb used here = jyKHrywPeYlfb8ft
// const uri = "the link mongo_srv.......";


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected successfully');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
      }
};

export default connectDB ;