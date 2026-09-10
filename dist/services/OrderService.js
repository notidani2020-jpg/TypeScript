export class OrderService {
    orders = [];
    getOrders() {
        return this.orders;
    }
    getOrderById(orderId) {
        return this.orders.find((order) => order.orderId === orderId);
    }
    createOrder(order) {
        this.orders.push(order);
        return order;
    }
    updateOrderStatus(orderId, status) {
        const order = this.getOrderById(orderId);
        if (!order) {
            return undefined;
        }
        order.status = status;
        return order;
    }
    updatePaymentMethod(orderId, paymentMethod) {
        const order = this.getOrderById(orderId);
        if (!order) {
            return undefined;
        }
        order.paymentMethod = paymentMethod;
        return order;
    }
    deleteOrder(orderId) {
        const index = this.orders.findIndex((order) => order.orderId === orderId);
        if (index === -1) {
            return false;
        }
        this.orders.splice(index, 1);
        return true;
    }
}
