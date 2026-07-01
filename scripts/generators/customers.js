const {
    randomFromArray,
    randomInt,
    writeCsv
} = require("../utils");

const companyPrefixes = [
    "ABC", "Global", "Prime", "NextGen", "Elite",
    "Tech", "Smart", "Future", "United", "Blue",
    "Green", "Vision", "Apex", "Vertex", "Pioneer"
];

const companySuffixes = [
    "Solutions",
    "Technologies",
    "Industries",
    "Retail",
    "Foods",
    "Electronics",
    "Systems",
    "Corporation",
    "Traders",
    "Enterprises"
];

const cities = [
    "Hyderabad",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Dubai",
    "Berlin",
    "New York"
];

function generateCustomers(regions) {

    const customers = [];
    const rows = [];

    for (let i = 1; i <= 500; i++) {

        const id = `C${String(i).padStart(4, "0")}`;

        const company =
            randomFromArray(companyPrefixes) +
            " " +
            randomFromArray(companySuffixes);

        const region = randomFromArray(regions);

        const city = randomFromArray(cities);

        customers.push({
            id,
            region
        });

        rows.push([
            id,
            `CUS${String(i).padStart(5, "0")}`,
            company,
            `customer${i}@gmail.com`,
            `9${randomInt(100000000, 999999999)}`,
            city,
            "Bronze",      // tier
            0,             // lifetimeRevenue
            0,             // totalOrders
            "",            // lastTierUpdate
            region.id
        ]);
    }

    writeCsv(
        "sales.analytics-Customers.csv",
        [
            "ID",
            "customerNo",
            "customerName",
            "email",
            "phone",
            "city",
            "tier",
            "lifetimeRevenue",
            "totalOrders",
            "lastTierUpdate",
            "region_ID"
        ],
        rows
    );

    return customers;
}

module.exports = generateCustomers;