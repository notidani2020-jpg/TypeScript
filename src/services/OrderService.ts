import {
  Order,
  OrderStatus,
  PaymentMethod
} from "../models/Order.js";

export class OrderService {
  private orders: Order[] = [];

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(orderId: number): Order | undefined {
    return this.orders.find(
      (order) => order.orderId === orderId
    );
  }

  createOrder(order: Order): Order {
    this.orders.push(order);
    return order;
  }

  updateOrderStatus(
    orderId: number,
    status: OrderStatus
  ): Order | undefined {
    const order = this.getOrderById(orderId);

    if (!order) {
      return undefined;
    }

    order.status = status;

    return order;
  }

  updatePaymentMethod(
    orderId: number,
    paymentMethod: PaymentMethod
  ): Order | undefined {
    const order = this.getOrderById(orderId);

    if (!order) {
      return undefined;
    }

    order.paymentMethod = paymentMethod;

    return order;
  }

  deleteOrder(orderId: number): boolean {
    const index = this.orders.findIndex(
      (order) => order.orderId === orderId
    );

    if (index === -1) {
      return false;
    }

    this.orders.splice(index, 1);

    return true;
  }
}