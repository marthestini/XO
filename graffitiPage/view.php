<?php include "connection.php"; ?>
<!DOCTYPE html>
<html>
<head>
	<title>View</title>
	<style>
		body {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			min-height: 100vh;
		}
		.alb {
			width: 200px;
			height: 200px;
			padding: 5px;
		}
		.alb img {
			width: 100%;
			height: 100%;
		}
		a {
			text-decoration: none;
			color: black;
		}
	</style>
</head>
<body>
     <a href="graffiti.php">&#8592;</a>
     <?php 
          $sql = "SELECT * FROM pictures ORDER BY id DESC";
          $res = mysqli_query($conn,  $sql);

          if (mysqli_num_rows($res) > 0) {
          	while ($pictures = mysqli_fetch_assoc($res)) {  ?>
             
             <div class="alb">
             	<img src="UPLOADS/<?=$pictures['pic_link']?>">
             </div>
          		
    <?php } }?>
</body>
</html>