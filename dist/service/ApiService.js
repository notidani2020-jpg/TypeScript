export class ApiService {
    products = [
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
    getProducts() {
        console.log("Productos disponibles:");
        console.log(this.products);
        return this.products;
    }
    getProductById(productId) {
        return this.products.find((product) => product.productId === productId);
    }
}
