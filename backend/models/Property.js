import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    address: String,
    price: Number,
    rent: Number,
    expenses: Number,
    documents: [String], // Store file URLs
});

export default mongoose.model("Property", PropertySchema);
