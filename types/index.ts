import { OrderStatus } from "./adminOrder";

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
  paymentStatus: string;
  createdAt: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  memberSince: string;
}

export interface UserDetails {
  user: User;
  ongoingOrders: Order[];
  pastOrders: Order[];
}
