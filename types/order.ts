export interface RecentOrder {
  _id: string;
  orderId: string;
  firstName: string;
  lastName: string;
  totalPrice: number;
  orderStatus: "ongoing" | "pending" | "completed" | "cancelled";
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

export interface OrderDetail {
  _id: string;
  orderId: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  city: string;
  shippingMethod: string;
  items: OrderItem[];
  totalPrice: number;
  user: string | null;
  paymentStatus: string;
  paystackReference: string;
  orderStatus: "ongoing" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}
