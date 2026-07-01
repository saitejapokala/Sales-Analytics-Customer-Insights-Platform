const { writeCsv } = require("../utils");

const REGIONS = [

{
id: "R001",
name: "South India",
country: "India"
},

{
id: "R002",
name: "North India",
country: "India"
},

{
id: "R003",
name: "West India",
country: "India"
},

{
id: "R004",
name: "East India",
country: "India"
},

{
id: "R005",
name: "Central India",
country: "India"
},

{
id: "R006",
name: "Germany",
country: "Germany"
},

{
id: "R007",
name: "USA",
country: "USA"
},

{
id: "R008",
name: "UAE",
country: "UAE"
}

];

function generateRegions(){

const rows = REGIONS.map(r=>[
r.id,
r.name,
r.country
]);

writeCsv(
"sales.analytics-Regions.csv",
["ID","regionName","country"],
rows
);

return REGIONS;

}

module.exports = generateRegions;