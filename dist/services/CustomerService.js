export class CustomerService {
    customers = [
        {
            customerId: 1,
            customerName: "Danilo Moncada",
            email: "danilo@gmail.com"
        },
        {
            customerId: 2,
            customerName: "Cristian Diaz",
            email: "cristian@gmail.com"
        }
    ];
    getCustomers() {
        return this.customers;
    }
    getCustomerById(customerId) {
        return this.customers.find((customer) => customer.customerId === customerId);
    }
    createCustomer(customer) {
        this.customers.push(customer);
        return customer;
    }
    deleteCustomer(customerId) {
        const index = this.customers.findIndex((customer) => customer.customerId === customerId);
        if (index === -1) {
            return false;
        }
        this.customers.splice(index, 1);
        return true;
    }
}
