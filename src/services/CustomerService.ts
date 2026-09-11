import { Customer } from "../models/Customer.js";

export class CustomerService {
  private customers: Customer[] = [
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

  getCustomers(): Customer[] {
    return this.customers;
  }

  getCustomerById(customerId: number): Customer | undefined {
    return this.customers.find(
      (customer) => customer.customerId === customerId
    );
  }

  createCustomer(customer: Customer): Customer {
    this.customers.push(customer);
    return customer;
  }

  deleteCustomer(customerId: number): boolean {
    const index = this.customers.findIndex(
      (customer) => customer.customerId === customerId
    );

    if (index === -1) {
      return false;
    }

    this.customers.splice(index, 1);

    return true;
  }
}