// from data.js
var tableData = data;

// Grab reference to the table body
var tbody = d3.select("tbody");

// Add rows and cells to the table, text to the cells
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

