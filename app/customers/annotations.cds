
using CatalogService as service from '../../srv/cat-service';

// ─── Customer List Report ────────────────────────────────────────────────────

annotate service.Customers with @(

    UI.SelectionFields: [
        tier,
        region_ID
    ],

    UI.LineItem: [
        {Value: customerNo,      Label: 'Customer No'},
        {Value: customerName,    Label: 'Customer Name'},
        {Value: city,            Label: 'City'},
        {Value: region.regionName, Label: 'Region'},
        {Value: tier,            Label: 'Tier'},
        {Value: lifetimeRevenue, Label: 'Lifetime Revenue'},
        {Value: totalOrders,     Label: 'Total Orders'},
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'CatalogService.EntityContainer/updateCustomerTier',
            Label : 'Update Customer Tier',
        },
    ]
);

// ─── Customer Object Page annotations removed ───

// ─── Tier Value Help (Filter Dropdown) ──────────────────────────────────────

annotate service.Customers with {
    tier @(
        Common.ValueListWithFixedValues: true,
        Common.ValueList: {
            CollectionPath: 'Customers',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'tier'
            }]
        },
        Common.Label : 'Tier',
    );
    region @(
        Common.Text: region.regionName,
        Common.Label : 'Region',
    );
};