<?php
  include_once 'db.php';
  $db = mysqli_connect('localhost', 'root', '', 'test1');
  $query = 'INSERT INTO students SET StudentName = "Новый ученик", Cours = "", StudentPhone = "", More = ""';
  $result = mysqli_query($db, $query);

  $last_id = mysqli_insert_id($db);
  $query = 'SELECT * FROM students WHERE StudentID = '. $last_id;
  $result = mysqli_query($db, $query);
  $student = mysqli_fetch_array($result);

  echo '<div class="student" id="'.$student["StudentID"].'">';
  echo '<div class="student__header" draggable="true">';
  echo '<div class="student__name center">'.$student["StudentName"].'</div>';
  echo '<div class="student__info center">Больше</div>';
  echo '</div>';
  echo '<div class="student__settings">';
  echo '<p class="student__name-label label hide">Имя</p>';
  echo '<input  type="text" class="student__name-changer changer hide" value="'.$student["StudentName"].'"></input>';
  echo '<p class="student__phone-label label hide">Телефон</p>';
  echo '<input  type="text" class="student__phone-changer changer hide" value="'.$student["StudentPhone"].'"></input>';
  echo '<p class="student__cours-label label hide">Курс</p>';
  echo '<input   type="text" class="student__cours-changer changer hide" value="'.$student["Cours"].'"></input>';
  echo '<p class="student__more-label label hide">Комментарий</p>';
  echo '<input type="text" class="student__more-changer changer hide" value="'.$student["More"].'"></input>';
  echo '</div>';
  echo '</div>';
?>