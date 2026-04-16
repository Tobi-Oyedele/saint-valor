import { OrderStatus } from "@/types/adminOrder";

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  size: string;
}

export interface Order {
  _id: string;
  orderId: string;
  items: OrderItem[];
  totalPrice: number;
  orderStatus: OrderStatus;
  createdAt: string;
}

export type Filter = "ongoing" | "past";
