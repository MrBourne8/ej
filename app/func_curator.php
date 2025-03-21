<?php
require "config.php";

$curator_group = $_SESSION['logged_user']->curator_group;

// -------------------------------------------------------------------------------------------------------
// Создание списка студентов
$add_surname_student = $_POST['surname_student'] ?? null;
$add_name_student = $_POST['name_student'] ?? null;
$add_patronymic_student = $_POST['patronymic_student'] ?? null;
$add_birth_student = $_POST['add_birth_student'] ?? null;
$add_phone_student = $_POST['add_phone_student'] ?? null;
$add_gender_student = $_POST['add_gender_student'] ?? null;
$add_registration_student = $_POST['add_registration_student'] ?? null;
$add_adress_student = $_POST['add_adress_student'] ?? null;
$add_hobbies_student = $_POST['add_hobbies_student'] ?? null;
$add_health_group_student = $_POST['add_health_group_student'] ?? null;
$add_student_group = $_POST['add_student_group'] ?? null;
$add_surname_mom = $_POST['add_surname_mom'] ?? null;
$add_name_mom = $_POST['add_name_mom'] ?? null;
$add_patronymic_mom = $_POST['add_patronymic_mom'] ?? null;
$add_phone_mom = $_POST['add_phone_mom'] ?? null;
$add_job_mom = $_POST['add_job_mom'] ?? null;
$add_surname_father = $_POST['add_surname_father'] ?? null;
$add_name_father = $_POST['add_name_father'] ?? null;
$add_patronymic_father = $_POST['add_patronymic_father'] ?? null;
$add_phone_father = $_POST['add_phone_father'] ?? null;
$add_job_father = $_POST['add_job_father'] ?? null;
// $curator_group = $_POST['curator_group'] ?? null;
$id_student = $_GET['id'] ?? null;
// Create
if (isset($_POST['add_student'])) {

	$sql = ("INSERT INTO `stydents_$curator_group`(`surname_student`, `name_student`, `patronymic_student`, `birth_student`, `phone_student`, `gender_student`, `registration_student`, `adress_student`, `hobbies_student`, `health_group_student`, `student_group`, `surname_mom`, `name_mom`, `patronymic_mom`, `phone_mom`, `job_mom`, `surname_father`, `name_father`, `patronymic_father`, `phone_father`, `job_father`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_surname_student, $add_name_student, $add_patronymic_student, $add_birth_student, $add_phone_student, $add_gender_student, $add_registration_student, $add_adress_student, $add_hobbies_student, $add_health_group_student, $add_student_group, $add_surname_mom, $add_name_mom, $add_patronymic_mom, $add_phone_mom, $add_job_mom, $add_surname_father, $add_name_father, $add_patronymic_father, $add_phone_father, $add_job_father]);
	$success_student = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Студент успешно добавлен!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Создание списка студентов
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Редактирование списка студентов
$edit_surname_student = $_POST['edit_surname_student'] ?? null;
$edit_name_student = $_POST['edit_name_student'] ?? null;
$edit_patronymic_student = $_POST['edit_patronymic_student'] ?? null;
$edit_birth_student = $_POST['edit_birth_student'] ?? null;
$edit_phone_student = $_POST['edit_phone_student'] ?? null;
$edit_gender_student = $_POST['edit_gender_student'] ?? null;
$edit_registration_student = $_POST['edit_registration_student'] ?? null;
$edit_adress_student = $_POST['edit_adress_student'] ?? null;
$edit_hobbies_student = $_POST['edit_hobbies_student'] ?? null;
$edit_health_group_student = $_POST['edit_health_group_student'] ?? null;
$edit_student_group = $_POST['edit_student_group'] ?? null;
$edit_surname_mom = $_POST['edit_surname_mom'] ?? null;
$edit_name_mom = $_POST['edit_name_mom'] ?? null;
$edit_patronymic_mom = $_POST['edit_patronymic_mom'] ?? null;
$edit_phone_mom = $_POST['edit_phone_mom'] ?? null;
$edit_job_mom = $_POST['edit_job_mom'] ?? null;
$edit_surname_father = $_POST['edit_surname_father'] ?? null;
$edit_name_father = $_POST['edit_name_father'] ?? null;
$edit_patronymic_father = $_POST['edit_patronymic_father'] ?? null;
$edit_phone_father = $_POST['edit_phone_father'] ?? null;
$edit_job_father = $_POST['edit_job_father'] ?? null;
// $curator_group = $_POST['curator_group'] ?? null;
$id_student = $_GET['id'] ?? null;

if (isset($_POST['edit_student'])) {
	$sqll = "UPDATE stydents_$curator_group SET surname_student=?, name_student=?, patronymic_student=?, birth_student=?, phone_student=?, gender_student=?, registration_student=?, adress_student=?, hobbies_student=?, health_group_student=?, student_group=?, surname_mom=?, name_mom=?, patronymic_mom=?, phone_mom=?, job_mom=?, surname_father=?, name_father=?, patronymic_father=?, phone_father=?, job_father=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_surname_student, $edit_name_student, $edit_patronymic_student, $edit_birth_student, $edit_phone_student, $edit_gender_student, $edit_registration_student, $edit_adress_student, $edit_hobbies_student, $edit_health_group_student, $edit_student_group, $edit_surname_mom, $edit_name_mom, $edit_patronymic_mom, $edit_phone_mom, $edit_job_mom, $edit_surname_father, $edit_name_father, $edit_patronymic_father, $edit_phone_father, $edit_job_father, $id_student]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Редактирование списка студентов
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Удаление студентов
if (isset($_POST['delete_student'])) {
	$sql = "DELETE FROM stydents_$curator_group WHERE id=?";
	$query = $pdo->prepare($sql);
	$query->execute([$id_student]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Удаление студентов
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Вывод списка студентов
$stmt = $pdo->query("SHOW TABLES LIKE 'stydents_$curator_group'");
if ($stmt->rowCount() > 0) {
	$sql = $pdo->prepare("SELECT * FROM `stydents_$curator_group`");
	$sql->execute();
	$result_stydents = $sql->fetchAll();
} else {
}
// Вывод списка студентов
// -------------------------------------------------------------------------------------------------------