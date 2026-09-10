type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface OrderItem {
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
}

interface Order {
  id: number;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
}

const customer: Customer = {
  id: 1,
  name: "Danilo Moncada",
  email: "danilo@gmail.com",
  phone: "3001234567"
};

const orderItem: OrderItem = {
  productId: 1,
  productName: "Laptop",
  unitPrice: 2800000,
  quantity: 1
};

const order: Order = {
  id: 1,
  customer,
  items: [orderItem],
  status: "pending",
  total: 2800000
};

console.log("Cliente:", customer);
console.log("Pedido:", order);