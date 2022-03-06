// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select('tbody'); // tell JS to look for <tbody> in HTML

// create function 
function buildTable(data) {
    // clear data to prevent duplicates
    tbody.html(''); // create a blank canvas when creating the table

    // loop through each object in the data 
   // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append('tr'); // append a row to the table body

        // loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td'); // append data to the table data tag
            cell.text(val);  // add each value 
        }
        );
    });
}

function handleClick() {
    let date = d3.select('#datetime').property('value');  // find and store the value of datetime id
    let filteredData = tableData;   // set filtered data to our original data

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);  // show only rows where the date is equal to the date filter we created above
    };

    buildTable(filteredData); // rebuild the table using the filtered data
};

// listen for the event
d3.selectAll('#filter-btn').on('click', handleClick);


// build the table when the page loads
buildTable(tableData);