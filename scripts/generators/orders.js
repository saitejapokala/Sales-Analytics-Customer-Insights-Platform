const {
    randomFromArray,
    randomInt,
    randomDate,
    formatDate,
    writeCsv
} = require("../utils");

function generateOrders(customers, employees, products) {

    const statuses = [
        "Completed",
        "Completed",
        "Completed",
        "Completed",
        "Delivered",
        "Pending",
        "Cancelled"
    ];

    const orders = [];
    const orderItems = [];

    const orderRows = [];
    const itemRows = [];

    let itemCounter = 1;

    for (let i = 1; i <= 5000; i++) {

        const orderId = `O${String(i).padStart(5, "0")}`;

        const customer = randomFromArray(customers);

        const employee = randomFromArray(employees);

        const orderDate = randomDate(
            new Date(2025, 0, 1),
            new Date(2026, 5, 30)
        );

        const status = randomFromArray(statuses);

        let gross = 0;
        let discountAmount = 0;
        let netAmount = 0;

        const noOfItems = randomInt(1, 5);

        for (let j = 0; j < noOfItems; j++) {

            const product = randomFromArray(products);

            const quantity = randomInt(1, 10);

            const price = product.selling;

            const discountPercent =
                randomFromArray([0, 5, 10, 15, 20]);

            const lineGross = quantity * price;

            const lineDiscount =
                lineGross * discountPercent / 100;

            const lineNet =
                lineGross - lineDiscount;

            gross += lineGross;

            discountAmount += lineDiscount;

            netAmount += lineNet;

            itemRows.push([
                `I${String(itemCounter).padStart(6, "0")}`,
                orderId,
                product.id,
                quantity,
                price,
                discountPercent,
                lineNet.toFixed(2)
            ]);

            itemCounter++;
        }

        orderRows.push([
            orderId,
            `SO${String(i).padStart(6, "0")}`,
            formatDate(orderDate),
            status,
            gross.toFixed(2),
            discountAmount.toFixed(2),
            netAmount.toFixed(2),
            customer.id,
            employee.id
        ]);

        orders.push({
            id: orderId,
            customer,
            employee,
            netAmount
        });

    }

    writeCsv(
        "sales.analytics-Orders.csv",
        [
            "ID",
            "orderNumber",
            "orderDate",
            "status",
            "totalAmount",
            "discountAmount",
            "netAmount",
            "customer_ID",
            "salesEmployee_ID"
        ],
        orderRows
    );

    writeCsv(
        "sales.analytics-OrderItems.csv",
        [
            "ID",
            "order_ID",
            "product_ID",
            "quantity",
            "sellingPrice",
            "discount",
            "lineAmount"
        ],
        itemRows
    );

    return {
        orders,
        orderItems
    };

}

module.exports = generateOrders;