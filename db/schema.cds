namespace sales.analytics;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Regions : cuid, managed {
    regionName : String(100);
    country    : String(100);
    employees  : Association to many Employees
                     on employees.region = $self;
    customers  : Association to many Customers
                     on customers.region = $self;
}

entity Employees : cuid, managed {
    employeeId  : String(10);
    firstName   : String(100);
    lastName    : String(100);
    email       : String(120);
    designation : String(60);
    salary      : Decimal(15, 2);
    joiningDate : Date;
    region      : Association to Regions;
    orders      : Association to many Orders
                      on orders.salesEmployee = $self;
}

entity Customers : cuid, managed {
    customerNo      : String(15);
    customerName    : String(120);
    email           : String(120);
    phone           : String(20);
    city            : String(60);
    tier            : String(20) default 'Bronze';
    lifetimeRevenue : Decimal(15,2) default 0;
    totalOrders     : Integer default 0;
    lastTierUpdate  : Timestamp;
    region          : Association to Regions;
    orders          : Composition of many Orders
                        on orders.customer = $self;
}

entity Products : cuid, managed {
    productCode : String(20);
    productName : String(120);
    category    : String(60);
    unitPrice   : Decimal(15, 2);
    costPrice   : Decimal(15, 2);
    stock       : Integer;
    items       : Association to many OrderItems
                      on items.product = $self;
}

entity Orders : cuid, managed {
    orderNumber      : String(20);
    orderDate        : Date;
    status           : String(30);
    totalAmount      : Decimal(15,2);
    discountAmount   : Decimal(15,2);
    netAmount        : Decimal(15,2);
    customer         : Association to Customers;
    salesEmployee    : Association to Employees;
    items            : Composition of many OrderItems
                        on items.order = $self;
}

entity OrderItems : cuid {
    order          : Association to Orders;
    product        : Association to Products;
    quantity       : Integer;
    sellingPrice   : Decimal(15,2);
    discount       : Decimal(5,2);
    lineAmount     : Decimal(15,2);
}
