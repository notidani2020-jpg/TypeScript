import { Customer } from "./Customer.js";
import { Product } from "./Product.js";

export enum OrderStatus {
  PENDING = "pending",
  PAID = "paid",
  CANCELLED = "cancelled"
}

export enum PaymentMethod {
  CARD = "CARD",
  CASH = "CASH",
  TRANSFER = "TRANSFER"
}

export interface OrderItem {
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
}

export interface Order {
  orderId: number;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  paymentMethod: PaymentMethod;
}