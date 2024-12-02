<?php
require "config.php";

$curator_group = $_SESSION['logged_user']->curator_group;

// -------------------------------------------------------------------------------------------------------
// Создание списка специальностей
$add_surname_student = $_POST['surname_student'] ?? null;
$add_name_student = $_POST['name_student'] ?? null;
$add_patronymic_student = $_POST['patronymic_student'] ?? null;
// $curator_group = $_POST['curator_group'] ?? null;
$id_student = $_GET['id'] ?? null;
// Create
if (isset($_POST['add_student'])) {

	$sql = ("INSERT INTO `stydents_$curator_group`(`surname_student`, `name_student`, `patronymic_student`) VALUES(?,?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_surname_student, $add_name_student, $add_patronymic_student]);
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
$stmt = $pdo->query("SHOW TABLES LIKE 'stydents_$curator_group'");
if ($stmt->rowCount() > 0) {
	$sql = $pdo->prepare("SELECT * FROM `stydents_$curator_group`");
	$sql->execute();
	$result_stydents = $sql->fetchAll();
} else {
}
// Вывод списка специальностей
// -------------------------------------------------------------------------------------------------------