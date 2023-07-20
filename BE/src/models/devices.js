import mongoose from "mongoose";
const { Schema } = mongoose


const Device = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: {
        type: String,
        required: true
    },
    
    
})

export default mongoose.model("Device",Device) 