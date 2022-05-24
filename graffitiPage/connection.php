<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "rex_db";
$port = 8889;

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname, $port);
// Check connection
if ($conn == false) {
  echo "Connection failed ";
  die();
}
else{
  echo "you did it xo!!!!!!";
}
?>