import { db } from "@/app/context/configFirebase";
import AdminClientOrders from "@/components/layouts/adminDashboard/AdminClientOrders";
import { collection, getDocs } from "firebase/firestore";
export default async function ClientOrders() {
  let ref = collection(db, "orders");
  const querySnapshot = await getDocs(ref);
  const orders = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const sortedOrders = orders.sort((a, b) => b.date.seconds - a.date.seconds);

  return (
    <div>
      <AdminClientOrders orders={sortedOrders} />
    </div>
  );
}
