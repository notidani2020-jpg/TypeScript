// ==========================================
// STAGE 1 - TYPES
// ==========================================

const productName: string = "Laptop";
const price: number = 2800000;
const stock: number = 5;
const available: boolean = stock > 0;

console.log("Producto:", productName);
console.log("Precio:", price);
console.log("Stock:", stock);
console.log("Disponible:", available);


// ==========================================
// STAGE 3 Y 4 - PRODUCT
// ==========================================

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  available: boolean;
}

type ProductId = number;

const featuredProductId: ProductId = 1;


// ==========================================
// STAGE 2 - PRODUCTOS
// ==========================================

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop para trabajo y estudio",
    price: 2800000,
    stock: 5,
    available: true
  },
  {
    id: 2,
    name: "Monitor",
    description: "Monitor Full HD",
    price: 850000,
    stock: 8,
    available: true
  },
  {
    id: 3,
    name: "Mouse",
    description: "Mouse inalámbrico",
    price: 80000,
    stock: 0,
    available: false
  }
];

console.table(products);


// ==========================================
// STAGE 5 - CUSTOMER Y ORDER
// ==========================================

type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "cancelled";

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


// ==========================================
// STAGE 8 - ENUM
// ==========================================

enum PaymentMethod {
  CASH = "CASH",
  CARD = "CARD",
  TRANSFER = "TRANSFER"
}


// ==========================================
// ORDER
// ==========================================

interface Order {
  id: number;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  paymentMethod: PaymentMethod;
}


// ==========================================
// STAGE 6 - FUNCIONES
// ==========================================

function calculateSubtotal(
  unitPrice: number,
  quantity: number
): number {
  return unitPrice * quantity;
}

function calculateOrderTotal(
  items: OrderItem[]
): number {
  return items.reduce(
    (total, item) =>
      total + item.unitPrice * item.quantity,
    0
  );
}

function findProductById(
  products: Product[],
  id: number
): Product | undefined {
  return products.find(
    (product) => product.id === id
  );
}

function updateStock(
  product: Product,
  quantity: number
): Product {
  if (quantity <= 0) {
    throw new Error(
      "Quantity must be greater than zero"
    );
  }

  if (quantity > product.stock) {
    throw new Error("Insufficient stock");
  }

  const newStock = product.stock - quantity;

  return {
    ...product,
    stock: newStock,
    available: newStock > 0
  };
}


// ==========================================
// STAGE 7 - NARROWING
// ==========================================

const selectedProduct =
  findProductById(products, 2);

if (selectedProduct) {
  console.log(
    "Producto encontrado:",
    selectedProduct.name
  );
} else {
  console.log("Producto no encontrado");
}


type Identifier = number | string;

function printIdentifier(
  id: Identifier
): void {
  if (typeof id === "number") {
    console.log(`ID numérico: ${id}`);
    return;
  }

  console.log(
    `ID textual: ${id.toUpperCase()}`
  );
}

printIdentifier(123);
printIdentifier("producto-001");


// ==========================================
// CLIENTE Y PEDIDO
// ==========================================

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
  customer: customer,
  items: [orderItem],
  status: "pending",
  total: calculateOrderTotal([orderItem]),
  paymentMethod: PaymentMethod.CARD
};


// ==========================================
// STAGE 9 - GENERICS
// ==========================================

interface ServiceResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const productResponse: ServiceResponse<Product> = {
  success: true,
  message: "Producto encontrado",
  data: products[0]!
};

const catalogResponse: ServiceResponse<Product[]> = {
  success: true,
  message: "Catálogo obtenido",
  data: products
};

function getFirstItem<T>(
  items: T[]
): T | undefined {
  return items[0];
}


// ==========================================
// PRUEBAS DE GENERICS
// ==========================================

console.log("Respuesta de producto:");
console.log(productResponse);

console.log("Respuesta del catálogo:");
console.log(catalogResponse);

console.log(
  "Primer producto:",
  getFirstItem(products)
);

console.log("Cliente:", customer);

console.log("Pedido:", order);

console.log(
  "Método de pago:",
  order.paymentMethod
);

console.log(
  "Total del pedido:",
  order.total
);