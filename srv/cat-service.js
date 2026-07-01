const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {
    async init() {
        const {
            Customers,
            Products,
            Orders,
            OrderItems
        } = this.entities;

        this.on('getTopCustomers', async (req) => {
            const tx = cds.tx(req);
            const result = await tx.run(
                SELECT.from(Customers)
                    .limit(5)
            );
            return result;
        });

        this.on('getTopProducts', async (req) => {
            const tx = cds.tx(req);
            return await tx.run(
                SELECT.from(Products)
                    .limit(5)
            );
        });

        this.on('refreshAnalytics', async () => {
            console.log("Analytics Refresh Triggered");
            return {
                message: "Analytics refreshed successfully."
            };
        });

        this.on('updateCustomerTier', async (req) => {
            const tx = cds.tx(req);
            const customers = await tx.run(
                SELECT.from(Customers)
            );

            for (const customer of customers) {
                const orders = await tx.run(
                    SELECT.from(Orders)
                        .where({
                            customer_ID: customer.ID
                        })
                );

                if (orders.length >= 10) {
                    await tx.run(
                        UPDATE(Customers)
                            .set({
                                tier: "Gold"
                            })
                            .where({
                                ID: customer.ID
                            })
                    );
                } else if (orders.length >= 5) {
                    await tx.run(
                        UPDATE(Customers)
                            .set({
                                tier: "Silver"
                            })
                            .where({
                                ID: customer.ID
                            })
                    );
                } else {
                    await tx.run(
                        UPDATE(Customers)
                            .set({
                                tier: "Bronze"
                            })
                            .where({
                                ID: customer.ID
                            })
                    );
                }
            }

            return "Customer Tier Updated";
        });

        return super.init();
    }
}

module.exports = CatalogService;