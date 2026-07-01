const fs = require("fs");
const path = require("path");

const DATA_FOLDER = path.join(__dirname, "..", "db", "data");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDecimal(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function randomFromArray(arr) {
    return arr[randomInt(0, arr.length - 1)];
}

function randomDate(start, end) {
    return new Date(
        start.getTime() +
        Math.random() * (end.getTime() - start.getTime())
    );
}

function formatDate(date) {
    return date.toISOString().split("T")[0];
}

function writeCsv(fileName, header, rows) {

    const csv = [
        header.join(","),
        ...rows.map(r => r.join(","))
    ].join("\n");

    fs.writeFileSync(
        path.join(DATA_FOLDER, fileName),
        csv
    );

    console.log(`✔ ${fileName}`);
}

module.exports = {
    randomInt,
    randomDecimal,
    randomFromArray,
    randomDate,
    formatDate,
    writeCsv
};