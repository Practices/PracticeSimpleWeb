<?php
  $page_id = 1;// Уникальный идентификатор страницы (статьи или поста)
  $mysqli = new mysqli("localhost", "root", "admin", "comm");// Подключается к базе данных
  $result = $mysqli->query("SELECT * FROM `comments` WHERE `page_id`='$page_id'"); //Вытаскиваем все комментарии для данной страницы
  // while ($row = mysqli_fetch_array($result)) {
  //   // print_r($row); //Вывод комментариев
  //   echo json_encode($row);
  // }

  // $row = $result->fetch_assoc();
  $data = array();
  // var_dump($result->fetch_assoc());
  while($row = $result->fetch_assoc()) {
    array_push($data, $row);
  }

  $json = json_encode($data);
  echo $json;
?>
