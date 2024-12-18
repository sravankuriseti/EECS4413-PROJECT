import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Layout className="bg-gradient-to-r from-black to-blue-900 rounded-lg px-4 py-2 text-white">
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>ID</th>
            <th>Reciepient</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {Orders.length > 0 &&
            orders.map((order) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td>{order._id}</td>
                <td>
                  {order.name} {order.email}
                  <br />
                  {order.city} {order.postalCode}
                  {order.country}
                  <br />
                  {order.streetAddress}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
