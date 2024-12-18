import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";

// Define the schema
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  images: [{type:String}],
  price: { type: Number, default: 0, required: true },
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: [{type:Object}]

},{
  timestamps: true,
});

// Check if 'Product' model is already defined; if not, define it
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
