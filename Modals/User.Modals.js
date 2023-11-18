import mongoose, { Schema, model } from "mongoose";

const customer = new Schema({
    name: String,
    email: String,
    password: String,
    number: Number
})

export default mongoose.model("Customers",customer)