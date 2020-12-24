<?php
  include_once 'db.php';

  $price = intval($_POST['entryPrice']);
  $id = intval($_POST['entryID']);

  $query = "UPDATE timetable SET Price = $price WHERE ID = $id";
  mysqli_query($db, $query);
?>