<?php
require "config.php";

// -------------------------------------------------------------------------------------------------------
// Создание списка специальностей
$add_number_speciality = $_POST['add_number_speciality'] ?? null;
$add_name_speciality = $_POST['add_name_speciality'] ?? null;
$id_speciality = $_GET['id'] ?? null;
// Create
if (isset($_POST['add_speciality'])) {

	// SQL-запрос для создания таблицы
	$createTableQuery = "CREATE TABLE IF NOT EXISTS specialties (
        id INT AUTO_INCREMENT PRIMARY KEY,
        number_speciality VARCHAR(100) NOT NULL,
        name_speciality VARCHAR(100) NOT NULL
    )";

	// Выполнение запроса на создание таблицы
	$pdo->exec($createTableQuery);

	$sql = ("INSERT INTO `specialties`(`number_speciality`, `name_speciality`) VALUES(?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_number_speciality, $add_name_speciality]);
	$success_speciality = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Специальность успешно добавлена!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Создание списка специальностей
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Вывод списка специальностей

$tableNameSpecialties = "specialties";
$stmt = $pdo->query("SHOW TABLES LIKE '$tableNameSpecialties'");
if ($stmt->rowCount() > 0) {
	$sql = $pdo->prepare("SELECT * FROM `specialties`");
	$sql->execute();
	$result_speciality_info = $sql->fetchAll();
} else {
}
// Вывод списка специальностей
// -------------------------------------------------------------------------------------------------------





// -------------------------------------------------------------------------------------------------------
// Создание списка учебных групп
$add_name_study_group = $_POST['add_name_study_group'] ?? null;
$speciality_study_group = $_POST['speciality_study_group'] ?? null;
$id_group = $_GET['id'] ?? null;
// Create
if (isset($_POST['add_study_group'])) {

	// SQL-запрос для создания таблицы
	$createTableQuery = "CREATE TABLE IF NOT EXISTS stydy_groups (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name_study_group VARCHAR(100) NOT NULL,
        speciality_study_group VARCHAR(100) NOT NULL
    )";

	// Выполнение запроса на создание таблицы
	$pdo->exec($createTableQuery);

	$sql = ("INSERT INTO `stydy_groups`(`name_study_group`, `speciality_study_group`) VALUES(?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_name_study_group, $speciality_study_group]);
	$success_stud = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Учебная группа успешно добавлена!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Создание списка учебных групп
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Вывод списка учебных групп
$tableNameStydy_groups = "stydy_groups";
$stmt = $pdo->query("SHOW TABLES LIKE '$tableNameStydy_groups'");
if ($stmt->rowCount() > 0) {
	$sql = $pdo->prepare("SELECT * FROM `stydy_groups`");
	$sql->execute();
	$result_group_info = $sql->fetchAll();
} else {
	
}
// Вывод списка учебных групп
// -------------------------------------------------------------------------------------------------------