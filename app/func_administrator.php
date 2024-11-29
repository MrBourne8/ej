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
// Редактирование специальностей
$edit_number_speciality = $_POST['edit_number_speciality'] ?? null;
$edit_name_speciality = $_POST['edit_name_speciality'] ?? null;
$id_speciality = $_GET['id'] ?? null;

if (isset($_POST['edit_speciality'])) {
	$sqll = "UPDATE specialties SET number_speciality=?, name_speciality=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_number_speciality, $edit_name_speciality, $id_speciality]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Редактирование специальностей
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Удаление специальностей
if (isset($_POST['delete_speciality'])) {
	$sql = "DELETE FROM specialties WHERE id=?";
	$query = $pdo->prepare($sql);
	$query->execute([$id_speciality]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Удаление специальностей
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



	
	// SQL-запрос для создания таблицы
	$createTableQuery = "CREATE TABLE IF NOT EXISTS stydents_$add_name_study_group (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name_student VARCHAR(100) NOT NULL,
        surname_student VARCHAR(100) NOT NULL,
		patronymic_student VARCHAR(100) NOT NULL,
		birth_student VARCHAR(100),
		phone_student VARCHAR(100),
		gender_student VARCHAR(100),
		registration_student VARCHAR(100),
		adress_student VARCHAR(100),
		hobbies_student VARCHAR(100),
		health_group_student VARCHAR(100),
		student_group VARCHAR(100),
		surname_mom VARCHAR(100),
		name_mom VARCHAR(100),
		patronymic_mom VARCHAR(100),
		phone_mom VARCHAR(100),
		job_mom VARCHAR(100),
		surname_father VARCHAR(100),
		name_father VARCHAR(100),
		patronymic_father VARCHAR(100),
		phone_father VARCHAR(100),
		job_father VARCHAR(100)
    )";

	// Выполнение запроса на создание таблицы
	$pdo->exec($createTableQuery);
};
// Создание списка учебных групп
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Редактирование учебных групп
$edit_name_study_group = $_POST['edit_name_study_group'] ?? null;
$edit_speciality_study_group = $_POST['edit_speciality_study_group'] ?? null;
$id_group = $_GET['id'] ?? null;

if (isset($_POST['edit_study_group'])) {
	$sqll = "UPDATE stydy_groups SET name_study_group=?, speciality_study_group=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_name_study_group, $edit_speciality_study_group, $id_group]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Редактирование учебных групп
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Удаление учебных групп
if (isset($_POST['delete_stydy_group'])) {
	$sql = "DELETE FROM stydy_groups WHERE id=?";
	$query = $pdo->prepare($sql);
	$query->execute([$id_speciality]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Удаление учебных групп
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