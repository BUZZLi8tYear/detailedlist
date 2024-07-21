import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type:Number , 
        required:true ,
    },
    first_name: {
        type : String,
        required : [true , "first_name must be provided"],
    },
    email: {
        type :String ,
        required : true ,
    },
    gender: {
        type : String,
        required : true ,
        
    },
    country: {
        type : String,
        required : true ,
    }
})

export default mongoose.model("Product" , productSchema);