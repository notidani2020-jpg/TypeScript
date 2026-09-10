import axios from "axios";
import { Product } from "../models/Product.js";

export class ApiService {
  private products: Product[] = [
    {
      productId: 1,
      productName: "Laptop",
      unitPrice: 2800000,
      quantity: 1
    },
    {
      productId: 2,
      productName: "Mouse",
      unitPrice: 80000,
      quantity: 2
    },
    {
      productId: 3,
      productName: "Teclado",
      unitPrice: 150000,
      quantity: 1
    }
  ];

  // Obtener productos locales
  getProducts(): Product[] {
    return this.products;
  }

  // Buscar producto por ID
  getProductById(productId: number): Product | undefined {
    return this.products.find(
      (product) => product.productId === productId
    );
  }

  // Crear producto
  createProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  // Actualizar producto
  updateProduct(
    productId: number,
    updatedProduct: Product
  ): Product | undefined {
    const index = this.products.findIndex(
      (product) => product.productId === productId
    );

    if (index === -1) {
      return undefined;
    }

    this.products[index] = updatedProduct;

    return this.products[index];
  }

  // Eliminar producto
  deleteProduct(productId: number): boolean {
    const index = this.products.findIndex(
      (product) => product.productId === productId
    );

    if (index === -1) {
      return false;
    }

    this.products.splice(index, 1);

    return true;
  }

  // Consumir una API externa
  async getProductsFromApi(): Promise<Product[]> {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );

    return response.data.map((item: any) => ({
      productId: item.id,
      productName: item.title,
      unitPrice: item.price,
      quantity: 1
    }));
  }
}