<?php
require "config.php";


// Создание списка групп и классных руководителей
$add_group = $_POST['add_group_name'];
$add_mentor = $_POST['add_mentor_name'];
$id_group = $_GET['id'];
// Create
if (isset($_POST['add__info__submit'])) {
	$sql = ("INSERT INTO `base_info`(`group_name`, `mentor_name`) VALUES(?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_group, $add_mentor]);
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

// Update
$edit_add_group = $_POST['edit_group_name'];
$edit_add_mentor = $_POST['edit_mentor_name'];

if (isset($_POST['edit__info__submit'])) {
	$sqll = "UPDATE base_info SET group_name=?, mentor_name=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_add_group, $edit_add_mentor, $id_group]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}

// Update

// DELETE
if (isset($_POST['delete_info_submit'])) {
	$sql = "DELETE FROM base_info WHERE id=?";
	$query = $pdo->prepare($sql);
	$query->execute([$id_group]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE
// Создание списка студентов


// Read
$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=101");
$sqlq->execute();
$result_group101 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=111");
$sqlq->execute();
$result_group111 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=121");
$sqlq->execute();
$result_group121 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=131");
$sqlq->execute();
$result_group131 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=201");
$sqlq->execute();
$result_group201 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=202");
$sqlq->execute();
$result_group202 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=211");
$sqlq->execute();
$result_group211 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=221");
$sqlq->execute();
$result_group221 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=231");
$sqlq->execute();
$result_group231 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=241");
$sqlq->execute();
$result_group241 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=301");
$sqlq->execute();
$result_group301 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=302");
$sqlq->execute();
$result_group302 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=311");
$sqlq->execute();
$result_group311 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=321");
$sqlq->execute();
$result_group321 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=331");
$sqlq->execute();
$result_group331 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=341");
$sqlq->execute();
$result_group341 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=401");
$sqlq->execute();
$result_group401 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=402");
$sqlq->execute();
$result_group402 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=411");
$sqlq->execute();
$result_group411 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=421");
$sqlq->execute();
$result_group421 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=431");
$sqlq->execute();
$result_group431 = $sqlq->fetchAll();

$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=441");
$sqlq->execute();
$result_group441 = $sqlq->fetchAll();
// Read


// Чтение данных периода обчения
// Read
$sql = $pdo->prepare("SELECT * FROM `period`");
$sql->execute();
$result_period = $sql->fetchAll();
// Read


// ____________________________________________________
$id_vrem = 3;

if (isset($_POST['group__base__number101'])) {
	$monate1 = 101;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate1, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number111'])) {
	$monate = 111;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number121'])) {
	$monate = 121;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number131'])) {
	$monate = 131;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number201'])) {
	$monate = 201;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number202'])) {
	$monate = 202;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number211'])) {
	$monate = 211;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number221'])) {
	$monate = 221;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number231'])) {
	$monate = 231;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number241'])) {
	$monate = 241;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number301'])) {
	$monate = 301;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number302'])) {
	$monate = 302;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number311'])) {
	$monate = 311;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number321'])) {
	$monate = 321;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number331'])) {
	$monate = 331;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number341'])) {
	$monate = 341;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number401'])) {
	$monate = 401;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number402'])) {
	$monate = 402;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number411'])) {
	$monate = 411;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number421'])) {
	$monate = 421;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
if (isset($_POST['group__base__number431'])) {
	$monate = 431;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}

if (isset($_POST['group__base__number441'])) {
	$monate = 441;
	$sqll = "UPDATE vrem SET group_number=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$monate, $id_vrem]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}

// _______________________________________________

// Read
$sql = $pdo->prepare("SELECT * FROM `students_101`");
$sql->execute();
$result_skip101 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_121`");
$sql->execute();
$result_skip121 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_131`");
$sql->execute();
$result_skip131 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_111`");
$sql->execute();
$result_skip111 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_201`");
$sql->execute();
$result_skip201 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_202`");
$sql->execute();
$result_skip202 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_211`");
$sql->execute();
$result_skip211 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_221`");
$sql->execute();
$result_skip221 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_231`");
$sql->execute();
$result_skip231 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_241`");
$sql->execute();
$result_skip241 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_301`");
$sql->execute();
$result_skip301 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_302`");
$sql->execute();
$result_skip302 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_311`");
$sql->execute();
$result_skip311 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_321`");
$sql->execute();
$result_skip321 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_331`");
$sql->execute();
$result_skip331 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_341`");
$sql->execute();
$result_skip341 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_401`");
$sql->execute();
$result_skip401 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_402`");
$sql->execute();
$result_skip402 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_411`");
$sql->execute();
$result_skip411 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_421`");
$sql->execute();
$result_skip421 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_431`");
$sql->execute();
$result_skip431 = $sql->fetchAll();
// Read
// Read
$sql = $pdo->prepare("SELECT * FROM `students_441`");
$sql->execute();
$result_skip441 = $sql->fetchAll();
// Read


// Отправка в базу количества студентов в группе
$base_lenght__students = $_POST['baseLenghtStudents'];
$base_number_group = $_POST['baseNumberGroup'];

echo $base_lenght__students;
echo $base_number_group;

if ($base_number_group = 441) {
$sqll = "UPDATE neud331 SET leght_st=?, WHERE id=?";
$querys = $pdo->prepare($sqll);
$querys->execute([$base_lenght__students, $base_number_group]);
// header('Location: ' . $_SERVER['HTTP_REFERER']);
};
	
// Отправка в базу количества студентов в группе
