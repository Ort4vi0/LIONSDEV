import mongoose from "mongoose";

const ProdutSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 0 },
    }, { timestamps: true });

export default mongoose.model("Product", ProdutSchema);