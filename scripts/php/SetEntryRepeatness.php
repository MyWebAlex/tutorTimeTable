<?php
  include_once 'db.php';

  $repeatness = intval($_POST['entryrepeatness']);
  $id = intval($_POST['entryID']);

  $query = "UPDATE timetable SET Repeatness = $repeatness WHERE ID = $id";
  mysqli_query($db, $query);
?>