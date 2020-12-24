<?php include_once 'scripts/php/db.php'; ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Расписание</title>

  <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/4db442da0e.js" crossorigin="anonymous"></script>

  <link href="css/index.css" rel="stylesheet">
  <script src="scripts/js/scripts.js"></script>
</head>
<body>
  <div class="container">
    <div class="pop-modifier" id="pop-modifier">
      <p id="entry__delete__btn">Удалить</p> 
      <label for="entry__price__input" id="entry__price__label">Изменить цену</label>
      <input type="text" id="entry__price__input">
      <label for="entry__repeatness__input" id="entry__repeatness__label">Повторяемость</label>
      <input type="text" id="entry__repeatness__input">
    </div>
    <div class="timetable">
      
      <?php
        //Получение текущей даты и создание ячеек с датами в расписании
        $date = date('Y-m-d',time());
        $dates[] = date("Y-m-d", strtotime('monday this week', strtotime($date)));   
        $dates[] = date("Y-m-d", strtotime('tuesday this week', strtotime($date)));
        $dates[] = date("Y-m-d", strtotime('wednesday this week', strtotime($date)));   
        $dates[] = date("Y-m-d", strtotime('thursday this week', strtotime($date)));  
        $dates[] = date("Y-m-d", strtotime('friday this week', strtotime($date)));  
        $dates[] = date("Y-m-d", strtotime('saturday this week', strtotime($date)));
        $dates[] = date("Y-m-d", strtotime('sunday this week', strtotime($date)));
        echo '<div class="time"></div>';
        foreach ($dates as $day) {
          $d = date("d/m/Y", strtotime($day));
          echo '<div class="time"><p>'.$d.'</p></div>';
        }

        // Получение данных из БД
        mysqli_set_charset($db, "utf8");
        $query = 'SELECT * FROM timetable';
        $result = mysqli_query($db, $query);
        $hours = mysqli_fetch_all($result, MYSQLI_ASSOC);

        // Переменные для работы с таблицей
        $rows = 9;
        $workTime = 12;
        $userID = 1;
        $row = $workTime - 1;
        
        // Создание таблицы времени
        for ($i = 0; $i < $rows; $i++) {
          $hourTime = $workTime;
          echo '<div class="time">'.$workTime.':00-'.++$workTime.':00</div>';
          foreach ($dates as $day) {
            $hourID = $day.'-'.$hourTime;
            echo '<div class="time hour" id="'.$hourID.'">';
            echo '<ul>';
            foreach ($hours as $hour) {
              if ($hour['Date'] == $day && $hour['Hour'] == $hourTime) {
                $query = 'SELECT StudentName FROM students WHERE StudentID = '. $hour['StudentID'];
                $result = mysqli_query($db, $query);
                $row = mysqli_fetch_array($result);
                $StudentName = $row['StudentName'];
                
                $ID = $hour['ID'];
                $Price = $hour['Price'];
                $Repeatness = $hour['Repeatness'];

                echo '<li value="'. $ID .' '. $Price .' '. $Repeatness .'">'.$StudentName.'</li>';
              }
            }
            echo '</ul>';
            echo '</div>';
          }
        }
      ?>
      
    </div>
    <div class="students">
      
      <?php
        // Запрос на студентов
        $query = 'SELECT * FROM students';
        $result = mysqli_query($db, $query);
        $Students = mysqli_fetch_all($result, MYSQLI_ASSOC);
        // Показываем студентов на экране
        foreach ($Students as $Student) {
          echo '<div class="student" value="'.$Student["StudentID"].'">';
          echo '<div class="student__header" draggable="true">';
          echo '<div class="student__name center">'.$Student["StudentName"].'</div>';
          echo '<div class="student__info center">Больше</div>';
          echo '</div>';
          echo '<div class="student__settings">';
          echo '<p class="student__name-label label hide">Имя</p>';
          echo '<input  type="text" class="student__name-changer changer hide" value="'.$Student["StudentName"].'"></input>';
          echo '<p class="student__phone-label label hide">Телефон</p>';
          echo '<input  type="text" class="student__phone-changer changer hide" value="'.$Student["StudentPhone"].'"></input>';
          echo '<p class="student__cours-label label hide">Курс</p>';
          echo '<input   type="text" class="student__cours-changer changer hide" value="'.$Student["Cours"].'"></input>';
          echo '<p class="student__more-label label hide">Комментарий</p>';
          echo '<input type="text" class="student__more-changer changer hide" value="'.$Student["More"].'"></input>';
          echo '</div>';
          echo '</div>';
        }
      ?>

      <div class="student__new">
        <p>Новый ученик</p>
      </div>
      
    </div>
  </div>
</body>
</html>