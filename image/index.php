<?php
// Assuming you have a MySQL database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch employee details from the database
$sql = "SELECT id, name, department FROM employees";
$result = $conn->query($sql);

// Convert result to JSON
$employeeDetails = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $employeeDetails[] = $row;
    }
}

// Close the database connection
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($employeeDetails);
?>
