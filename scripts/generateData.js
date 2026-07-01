const fs = require("fs");
const path = require("path");

const generateRegions = require("./generators/regions");
const generateEmployees = require("./generators/employees");
const generateCustomers = require("./generators/customers");
const generateProducts = require("./generators/products");
const generateOrders = require("./generators/orders");

// Ensure db/data folder exists
const dataFolder = path.join(__dirname, "..", "db", "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder, { recursive: true });
}

console.log("==================================");
console.log("Generating Sample Data...");
console.log("==================================");


const regions = generateRegions();
console.log(`Generated ${regions.length} Regions`);

const employees = generateEmployees(regions);
console.log(`Generated ${employees.length} Employees`);

const customers = generateCustomers(regions);
console.log(`Generated ${customers.length} Customers`);

const products = generateProducts();
console.log(`Generated ${products.length} Products`);

const { orders, orderItems } =
    generateOrders(customers, employees, products);

console.log(`Generated ${orders.length} Orders`);

console.log(`Generated ${orderItems.length} Order Items`);

console.log("==================================");
console.log("Data Generation Completed");
console.log("==================================");