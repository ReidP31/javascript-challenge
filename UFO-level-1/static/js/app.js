// from data.js
var tableData = data;
console.log('the page is rerendering')
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

// Select the Input Field in the form and save to a variable
var inputField = d3.select("#datetime");

// Prevent page from refreshing when form is submitted
d3.select('#form').on('submit', () => d3.event.preventDefault());

// Create Date Form Listeners
inputField.on("change", function() {
    d3.event.preventDefault()
    var newText = d3.event.target.value;
    
    // Conditional allows for complete table to be displayed with empty string input
    if (newText === "") {
        // Blow away old table
        tbody.html(" ")

        data.forEach((ufoSighting) => {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    } else {
    var filteredData = data.filter(ufoSighting => ufoSighting.datetime === newText);    

    // Blow away old table
    tbody.html(" ")

    // Build Filtered Table
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });    
  };
}); 


