<?php 
  $db = mysqli_connect('localhost', 'root', '', 'test1');
  $ID = $_POST['entryID'];
  $query = 'DELETE FROM timetable WHERE ID = '. $ID;
  $result = mysqli_query($db, $query);
?>