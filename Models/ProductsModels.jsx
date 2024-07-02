import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    images: [{ type: String }],
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("products", ProductsSchema);
