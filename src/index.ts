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

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 2800000,
  stock: 5,
  available: true
};

console.log("Producto:", product);
console.log("Producto destacado:", featuredProductId);