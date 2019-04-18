// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);


tableData.forEach((alien_report) => {
  var row = tbody.append("tr");
  Object.entries(alien_report).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
