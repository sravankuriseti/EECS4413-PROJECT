import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(res, req) {
  await mongooseConnect();
  res.json(await Order.find().sort({ createdAt: -1 }));
}
