import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    name : String,
    imgUrl: String,
    category: String,
    seating: Array,
    seatind1:Array,
    seatind2:Array,
    seatind3:Array,
    
    schedule: String,
    price: Number
},{
    timestamps:true,
    versionKey: false
})

export default model('Movie',movieSchema);