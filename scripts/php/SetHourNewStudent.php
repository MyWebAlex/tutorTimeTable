<?php
  include_once 'db.php';
  $userID = intval($_POST['userID']);
  $studentID = intval($_POST['studentID']);
  $price = intval($_POST['price']);
  $hour = intval($_POST['hour']);
  $date = $_POST['date'];
  $query = 'INSERT INTO timetable SET UserID = '. $userID .', StudentID = '. $studentID .', Price = '. $price .', Date = '. $date .', Hour = '. $hour;
  $result = mysqli_query($db, $query);
  echo mysqli_insert_id($db);
?>