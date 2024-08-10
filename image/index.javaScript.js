
$(document).ready(function() {
    // Function to fetch and display employee details
    function fetchEmployeeDetails() {
        $.ajax({
            url: 'getEmployeeDetails.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Update the UI with employee details
                displayEmployeeDetails(data);
            },
            error: function(error) {
                console.error('Error fetching employee details:', error);
            }
        });
    }

    // Function to display employee details in the UI
    function displayEmployeeDetails(data) {
        var employeeDetailsDiv = $('#employeeDetails');
        employeeDetailsDiv.empty();

        if (data.length > 0) {
            var table = $('<table>').appendTo(employeeDetailsDiv);
            var headerRow = $('<tr>').appendTo(table);
            $('<th>').text('Employee ID').appendTo(headerRow);
            $('<th>').text('Name').appendTo(headerRow);
            $('<th>').text('Department').appendTo(headerRow);

            // Loop through each employee and add a row to the table
            $.each(data, function(index, employee) {
                var row = $('<tr>').appendTo(table);
                $('<td>').text(employee.id).appendTo(row);
                $('<td>').text(employee.name).appendTo(row);
                $('<td>').text(employee.department).appendTo(row);
            });
        } else {
            employeeDetailsDiv.text('No employee details available.');
        }
    }

    // Fetch employee details on page load
    fetchEmployeeDetails();
});
