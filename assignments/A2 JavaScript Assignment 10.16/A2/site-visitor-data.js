// Create an object to store site visitor data
const siteVisitors = {
    'April': 1200,
    'May': 1500,
    'June': 1800,
    'July': 2100,
    'August': 2400,
    'September': 2700
};

// Function to create and populate the table
function createVisitorsTable() {
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Month</th>
            <th>Visitors</th>
        </tr>
    `;

    for (const [month, visitors] of Object.entries(siteVisitors)) {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${month}</td>
            <td>${visitors}</td>
        `;
    }

    // Append the table to the body (you might want to append it to a specific container instead)
    document.body.appendChild(table);
}

// Call the function to create the table
createVisitorsTable();