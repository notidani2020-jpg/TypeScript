import { Product } from "./models/Product.js";
import { Customer } from "./models/Customer.js";
import {
  Order,
  OrderItem,
  OrderStatus,
  PaymentMethod
} from "./models/Order.js";

import { ApiService } from "./services/ApiService.js";
import { CustomerService } from "./services/CustomerService.js";
import { OrderService } from "./services/OrderService.js";

// ==========================================
// SERVICIOS
// ==========================================

const apiService = new ApiService();
const customerService = new CustomerService();
const orderService = new OrderService();

// ==========================================
// PRODUCTOS
// ==========================================

console.log("=================================");
console.log("          PRODUCTOS");
console.log("=================================");

const product: Product = {
  productId: 1,
  productName: "Laptop",
  unitPrice: 2800000,
  quantity: 1
};

console.log("Producto principal:");
console.log(product);

console.log("\nTodos los productos:");
console.log(apiService.getProducts());

console.log("\nBuscar producto con ID 2:");
console.log(apiService.getProductById(2));

// ==========================================
// CREAR PRODUCTO
// ==========================================

const nuevoProducto: Product = {
  productId: 4,
  productName: "Monitor",
  unitPrice: 600000,
  quantity: 1
};

console.log("\nCrear producto:");
console.log(apiService.createProduct(nuevoProducto));

console.log("\nProductos después de crear:");
console.log(apiService.getProducts());

// ==========================================
// CLIENTES
// ==========================================

console.log("\n=================================");
console.log("           CLIENTES");
console.log("=================================");

const customer: Customer = {
  customerId: 1,
  customerName: "Danilo Moncada",
  email: "danilo@gmail.com"
};

console.log("Cliente principal:");
console.log(customer);

console.log("\nTodos los clientes:");
console.log(customerService.getCustomers());

console.log("\nBuscar cliente con ID 1:");
console.log(customerService.getCustomerById(1));

// ==========================================
// CREAR CLIENTE
// ==========================================

const nuevoCliente: Customer = {
  customerId: 3,
  customerName: "Carlos Gómez",
  email: "carlos@gmail.com"
};

console.log("\nCrear cliente:");
console.log(customerService.createCustomer(nuevoCliente));

console.log("\nClientes después de crear:");
console.log(customerService.getCustomers());

// ==========================================
// PEDIDO
// ==========================================

console.log("\n=================================");
console.log("            PEDIDO");
console.log("=================================");

const orderItem: OrderItem = {
  productId: product.productId,
  productName: product.productName,
  unitPrice: product.unitPrice,
  quantity: product.quantity
};

const order: Order = {
  orderId: 1,
  customer,
  items: [orderItem],
  status: OrderStatus.PENDING,
  total: product.unitPrice * product.quantity,
  paymentMethod: PaymentMethod.CARD
};

console.log("Crear pedido:");
console.log(orderService.createOrder(order));

console.log("\nTodos los pedidos:");
console.log(orderService.getOrders());

console.log("\nBuscar pedido con ID 1:");
console.log(orderService.getOrderById(1));

// ==========================================
// ACTUALIZAR PEDIDO
// ==========================================

console.log("\n=================================");
console.log("       ACTUALIZAR PEDIDO");
console.log("=================================");

console.log(
  orderService.updateOrderStatus(
    1,
    OrderStatus.PAID
  )
);

console.log("\nPedido después de actualizar estado:");
console.log(orderService.getOrderById(1));

// ==========================================
// CAMBIAR MÉTODO DE PAGO
// ==========================================

console.log("\nCambiar método de pago:");

console.log(
  orderService.updatePaymentMethod(
    1,
    PaymentMethod.TRANSFER
  )
);

console.log("\nPedido final:");
console.log(orderService.getOrderById(1));

// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

console.log("\n=================================");
console.log("       ELIMINAR PRODUCTO");
console.log("=================================");

console.log(
  "Producto eliminado:",
  apiService.deleteProduct(3)
);

console.log("\nProductos finales:");
console.log(apiService.getProducts());
console.log("\n=================================");
console.log("        API EXTERNA");
console.log("=================================");

apiService
  .getProductsFromApi()
  .then((products) => {
    console.log("Productos obtenidos desde la API:");
    console.log(products);
  })
  .catch((error) => {
    console.error("Error al consumir la API:", error.message);
  });