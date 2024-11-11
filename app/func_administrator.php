<?php
require "config.php";


// Создание списка групп
$add_name_study_group = $_POST['add_name_study_group'] ?? null;
$speciality_study_group = $_POST['speciality_study_group'] ?? null;
$id_group = $_GET['id'] ?? null;
// Create
if (isset($_POST['add_study_group'])) {

	// SQL-запрос для создания таблицы
	$createTableQuery = "CREATE TABLE IF NOT EXISTS stydy_group_$add_name_study_group (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name_study_group VARCHAR(100) NOT NULL,
        speciality_study_group VARCHAR(100) NOT NULL UNIQUE
    )";

	// Выполнение запроса на создание таблицы
	$pdo->exec($createTableQuery);
	echo "Таблица создана или уже существует.<br>";

	$sql = ("INSERT INTO `stydy_group_$add_name_study_group`(`name_study_group`, `speciality_study_group`) VALUES(?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_name_study_group, $speciality_study_group]);
	$success_stud = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Студент успешно добавлен!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Create

// Read
$sql = $pdo->prepare("SELECT * FROM `base_info`");
$sql->execute();
$result_group_info = $sql->fetchAll();
// Read
