"use client";

import { useState, useEffect } from "react";
import { db } from "@/app/context/configFirebase";
import AdminClientOrders from "@/components/layouts/adminDashboard/AdminClientOrders";
import { collection, getDocs } from "firebase/firestore";

export default function ClientOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      let ref = collection(db, "orders");
      const querySnapshot = await getDocs(ref);
      const ordersData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date:
            data.date instanceof Object && "seconds" in data.date
              ? new Date(data.date.seconds * 1000)
              : null,
        };
      });
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <AdminClientOrders orders={orders} onUpdate={fetchOrders} />
    </div>
  );
}
