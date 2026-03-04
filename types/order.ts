export interface RecentOrder {
  _id: string;
  orderId: string;
  firstName: string;
  lastName: string;
  totalPrice: number;
  orderStatus: "ongoing" | "pending" | "completed" | "cancelled";
  createdAt: string;
}
