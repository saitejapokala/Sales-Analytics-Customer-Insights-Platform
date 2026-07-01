const {
    randomFromArray,
    randomInt,
    writeCsv
} = require("../utils");

const categories = [
    "Laptop",
    "Monitor",
    "Printer",
    "Storage",
    "Networking",
    "Software",
    "Accessories"
];

const adjectives = [
    "Ultra",
    "Pro",
    "Smart",
    "Business",
    "Enterprise",
    "Advanced",
    "Premium"
];

function generateProducts() {

    const products = [];
    const rows = [];

    for (let i = 1; i <= 100; i++) {

        const id = `P${String(i).padStart(4, "0")}`;

        const category = randomFromArray(categories);

        const productName =
            randomFromArray(adjectives) +
            " " +
            category +
            " " +
            i;

        const cost = randomInt(500, 50000);
        const selling = cost + randomInt(500, 15000);

        products.push({
            id,
            selling,
            cost
        });

        rows.push([
            id,
            `PRD${String(i).padStart(4, "0")}`,
            productName,
            category,
            selling,
            cost,
            randomInt(50, 1000)
        ]);
    }

    writeCsv(
        "sales.analytics-Products.csv",
        [
            "ID",
            "productCode",
            "productName",
            "category",
            "unitPrice",
            "costPrice",
            "stock"
        ],
        rows
    );

    return products;
}

module.exports = generateProducts;