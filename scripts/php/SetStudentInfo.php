<?php
  include_once 'db.php';
  
  $option = $_POST['option'];
  $value = $_POST['value'];
  $id = intval($_POST['id']);

  $query = "UPDATE students SET ". $option ." = '". $value ."' WHERE StudentID = ". $id;
  mysqli_query($db, $query);
?>