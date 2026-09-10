interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  available: boolean;
}

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

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 2800000,
    stock: 5,
    available: true
  },
  {
    id: 2,
    name: "Monitor",
    price: 850000,
    stock: 8,
    available: true
  },
  {
    id: 3,
    name: "Mouse",
    price: 80000,
    stock: 0,
    available: false
  }
];

function calculateSubtotal(
  unitPrice: number,
  quantity: number
): number {
  return unitPrice * quantity;
}

function calculateOrderTotal(items: OrderItem[]): number {
  return items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );
}

function findProductById(
  products: Product[],
  id: number
): Product | undefined {
  return products.find((product) => product.id === id);
}

function updateStock(
  product: Product,
  quantity: number
): Product {
  if (quantity <= 0) {
    throw new Error("Quantity must be greater than zero");
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

// Stage 7 - Narrowing

const selectedProduct = findProductById(products, 2);

if (selectedProduct) {
  console.log("Producto encontrado:", selectedProduct.name);
} else {
  console.log("Producto no encontrado");
}

type Identifier = number | string;

function printIdentifier(id: Identifier): void {
  if (typeof id === "number") {
    console.log(`ID numérico: ${id}`);
    return;
  }

  console.log(`ID textual: ${id.toUpperCase()}`);
}

printIdentifier(123);
printIdentifier("producto-001");