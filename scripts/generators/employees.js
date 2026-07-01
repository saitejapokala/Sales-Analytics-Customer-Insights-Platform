const {
randomInt,
randomFromArray,
formatDate,
randomDate,
writeCsv
} = require("../utils");

const firstNames=[
"Rahul","Priya","Amit","Sneha","Kiran",
"Rohit","Arjun","Anjali","Meera","Vijay"
];

const lastNames=[
"Sharma","Reddy","Patel","Singh",
"Gupta","Kumar","Joshi","Nair"
];

const designations=[
"Sales Executive",
"Senior Sales Executive",
"Area Manager",
"Regional Manager"
];

function generateEmployees(regions){

const employees=[];

const rows=[];

for(let i=1;i<=50;i++){

const id=`E${String(i).padStart(3,"0")}`;

const region=randomFromArray(regions);

const first=randomFromArray(firstNames);

const last=randomFromArray(lastNames);

employees.push({
id,
region
});

rows.push([
id,
`EMP${String(i).padStart(3,"0")}`,
first,
last,
`${first.toLowerCase()}.${last.toLowerCase()}@sales.com`,
randomFromArray(designations),
randomInt(50000,150000),
formatDate(randomDate(
new Date(2020,0,1),
new Date(2025,0,1)
)),
region.id
]);

}

writeCsv(
"sales.analytics-Employees.csv",
[
"ID",
"employeeId",
"firstName",
"lastName",
"email",
"designation",
"salary",
"joiningDate",
"region_ID"
],
rows
);

return employees;

}

module.exports=generateEmployees;