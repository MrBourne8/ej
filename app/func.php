<?php
require "config.php";

$students = $_POST['students'];
$st01 = $_POST['pred_01'];
$st02 = $_POST['pred_02'];
$st03 = $_POST['pred_03'];
$st04 = $_POST['pred_04'];
$st05 = $_POST['pred_05'];
$st06 = $_POST['pred_06'];
$st07 = $_POST['pred_07'];
$st08 = $_POST['pred_08'];
$st09 = $_POST['pred_09'];
$st10 = $_POST['pred_10'];
$st11 = $_POST['pred_11'];
$st12 = $_POST['pred_12'];
$st13 = $_POST['pred_13'];
$st14 = $_POST['pred_14'];
$st15 = $_POST['pred_15'];
$st16 = $_POST['pred_16'];
$st17 = $_POST['pred_17'];
$st18 = $_POST['pred_18'];
$st19 = $_POST['pred_19'];
$st20 = $_POST['pred_20'];
$get_id = $_GET['id'];

// Create
if (isset($_POST['submit'])) {
	$sql = ("INSERT INTO `notes331`(`students`, `pred_01`, `pred_02`, `pred_03`, `pred_04`, `pred_05`, `pred_06`, `pred_07`, `pred_08`, `pred_09`, `pred_10`, `pred_11`, `pred_12`, `pred_13`, `pred_14`, `pred_15`, `pred_16`, `pred_17`,`pred_18`, `pred_19`, `pred_20`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$students, $st01, $st02, $st03, $st04, $st05, $st06, $st07, $st08, $st09, $st10, $st11, $st12, $st13, $st14, $st15, $st16, $st17, $st18, $st19, $st20]);
	$success = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Данные успешно отправлены!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Create

// Read
$sql = $pdo->prepare("SELECT * FROM `notes331`");
$sql->execute();
$result = $sql->fetchAll();
// Read


// Update
$edit_students = $_POST['edit_students'];
$edit_pred_01 = $_POST['edit_pred_01'];
$edit_pred_02 = $_POST['edit_pred_02'];
$edit_pred_03 = $_POST['edit_pred_03'];
$edit_pred_04 = $_POST['edit_pred_04'];
$edit_pred_05 = $_POST['edit_pred_05'];
$edit_pred_06 = $_POST['edit_pred_06'];
$edit_pred_07 = $_POST['edit_pred_07'];
$edit_pred_08 = $_POST['edit_pred_08'];
$edit_pred_09 = $_POST['edit_pred_09'];
$edit_pred_10 = $_POST['edit_pred_10'];
$edit_pred_11 = $_POST['edit_pred_11'];
$edit_pred_12 = $_POST['edit_pred_12'];
$edit_pred_13 = $_POST['edit_pred_13'];
$edit_pred_14 = $_POST['edit_pred_14'];
$edit_pred_15 = $_POST['edit_pred_15'];
$edit_pred_16 = $_POST['edit_pred_16'];
$edit_pred_17 = $_POST['edit_pred_17'];
$edit_pred_18 = $_POST['edit_pred_18'];
$edit_pred_19 = $_POST['edit_pred_19'];
$edit_pred_20 = $_POST['edit_pred_20'];


if (isset($_POST['edit-submit'])) {
	$sqll = "UPDATE notes331 SET students=?, pred_01=?, pred_02=?, pred_03=?, pred_04=?, pred_05=?, pred_06=?, pred_07=?, pred_08=?, pred_09=?, pred_10=?, pred_11=?, pred_12=?, pred_13=?, pred_14=?, pred_15=?, pred_16=?, pred_17=?, pred_18=?, pred_19=?, pred_20=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_students, $edit_pred_01, $edit_pred_02, $edit_pred_03, $edit_pred_04, $edit_pred_05, $edit_pred_06, $edit_pred_07, $edit_pred_08, $edit_pred_09, $edit_pred_10, $edit_pred_11, $edit_pred_12, $edit_pred_13, $edit_pred_14, $edit_pred_15, $edit_pred_16, $edit_pred_17, $edit_pred_18, $edit_pred_19, $edit_pred_20, $get_id]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}

// Update

// DELETE
if (isset($_POST['delete_submit'])) {
	$sql = "DELETE FROM notes331 WHERE id=?";
	$query = $pdo->prepare($sql);
	$query->execute([$get_id]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE




// Создание списка студентов
$add_student = $_POST['add_info'];
$id_student = $_GET['id'];
// Create
if (isset($_POST['add__student__submit'])) {
	$sql = ("INSERT INTO `students_331`(`students_name`) VALUES(?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_student]);
	$success_stud = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Студент успешно добавлен!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Create

// Read
$sql = $pdo->prepare("SELECT * FROM `students_331`");
$sql->execute();
$result_base_331 = $sql->fetchAll();
// Read

// Update
$edit_base_student_331 = $_POST['edit__base__student__331'];

if (isset($_POST['edit__base331__submit'])) {
	$sqll = "UPDATE students_331 SET students_name=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_base_student_331, $id_student]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}

// Update

// DELETE
if (isset($_POST['delete_submit_base_student'])) {
	$sql = "DELETE FROM students_331 WHERE id=?";
	$query = $pdo->prepare($sql);
	$query->execute([$id_student]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE
// Создание списка студентов



// Создание списка предметов
$add_pred = $_POST['add_pred'];
$predmet_code = $_POST['predmet_code'];
$controle_variant = $_POST['controle_variant'];
$id_pred = $_GET['id'];

// Create
if (isset($_POST['add__predmet__submit'])) {
	$sql = ("INSERT INTO `predmets_331`(`predmets_name`, `controle_variant`, `predmet_code`) VALUES(?,?,?)");
	$query = $pdo->prepare($sql);
	$query->execute([$add_pred, $controle_variant, $predmet_code]);
	$success_pred = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Предмет успешно добавлен!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Create

// Read
$sql = $pdo->prepare("SELECT * FROM `predmets_331`");
$sql->execute();
$result_base_predmet_331 = $sql->fetchAll();
// Read

// Update
$edit__base__predmet__331 = $_POST['edit__base__predmet__331'];
$edit__predmet__controle__331 = $_POST['edit_controle_variant'];
$edit__predmet_code = $_POST['edit__predmet_code'];

if (isset($_POST['edit__base331_pred__submit'])) {
	$sqll = "UPDATE predmets_331 SET predmets_name=?, controle_variant=?, predmet_code=? WHERE id_pred=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit__base__predmet__331, $edit__predmet__controle__331, $edit__predmet_code, $id_pred, ]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}

// Update

// DELETE
if (isset($_POST['delete_submit_base_predmet'])) {
	$sql = "DELETE FROM predmets_331 WHERE id_pred=?";
	$query = $pdo->prepare($sql);
	$query->execute([$id_pred]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE
// Создание списка студентов

// Обновление БД отчет по классному руководству
$edit_kr_monthe = $_POST['edit_kr_monthe_enter'];
$edit_kr_to_do = $_POST['edit_kr_to_do'];

$edit_kr_group_activities = $_POST['edit_kr_group_activities'];
$edit_kr_activities_name_1 = $_POST['edit_kr_activities_name_1'];
$edit_kr_activities_name_2 = $_POST['edit_kr_activities_name_2'];
$edit_kr_activities_name_3 = $_POST['edit_kr_activities_name_3'];
$edit_kr_activities_name_4 = $_POST['edit_kr_activities_name_4'];

$edit_kr_section = $_POST['edit_kr_section'];
$edit_kr_academic_debt = $_POST['edit_kr_academic_debt'];

$edit_kr_skipping = $_POST['edit_kr_skipping'];
$skipping_name_1 = $_POST['skipping_name_1'];
$skipping_name_2 = $_POST['skipping_name_2'];
$skipping_name_3 = $_POST['skipping_name_3'];
$skipping_name_4 = $_POST['skipping_name_4'];
$skipping_name_5 = $_POST['skipping_name_5'];
$skipping_name_6 = $_POST['skipping_name_6'];
$skipping_name_7 = $_POST['skipping_name_7'];
$skipping_name_8 = $_POST['skipping_name_8'];
$skipping_name_9 = $_POST['skipping_name_9'];
$skipping_name_10 = $_POST['skipping_name_10'];
$skipping_name_11 = $_POST['skipping_name_11'];
$skipping_name_12 = $_POST['skipping_name_12'];
$skipping_name_13 = $_POST['skipping_name_13'];
$skipping_name_14 = $_POST['skipping_name_14'];
$skipping_name_15 = $_POST['skipping_name_15'];

$edit_kr_breaking_rules = $_POST['edit_kr_breaking_rules'];
$edit_kr_rules_name_1 = $_POST['rules_name_1'];
$edit_kr_rules_name_2 = $_POST['rules_name_2'];
$edit_kr_rules_name_3 = $_POST['rules_name_3'];
$edit_kr_rules_name_4 = $_POST['rules_name_4'];
$edit_kr_rules_name_5 = $_POST['rules_name_5'];
$edit_kr_rules_name_6 = $_POST['rules_name_6'];
$edit_kr_rules_name_7 = $_POST['rules_name_7'];
$edit_kr_rules_name_8 = $_POST['rules_name_8'];
$edit_kr_rules_name_9 = $_POST['rules_name_9'];
$edit_kr_rules_name_10 = $_POST['rules_name_10'];
$edit_kr_rules_name_11 = $_POST['rules_name_11'];
$edit_kr_rules_name_12 = $_POST['rules_name_12'];
$edit_kr_rules_name_13 = $_POST['rules_name_13'];
$edit_kr_rules_name_14 = $_POST['rules_name_14'];
$edit_kr_rules_name_15 = $_POST['rules_name_15'];
$edit_kr_rules_name_16 = $_POST['rules_name_16'];
$edit_kr_rules_name_17 = $_POST['rules_name_17'];
$edit_kr_rules_name_18 = $_POST['rules_name_18'];
$edit_kr_rules_name_19 = $_POST['rules_name_19'];
$edit_kr_rules_name_20 = $_POST['rules_name_20'];
$edit_kr_rules_name_21 = $_POST['rules_name_21'];

$edit_kr_dress_code = $_POST['edit_kr_dress_code'];
$edit_dress_code_name_1 = $_POST['dress_code_name_1'];
$edit_dress_code_name_2 = $_POST['dress_code_name_2'];
$edit_dress_code_name_3 = $_POST['dress_code_name_3'];
$edit_dress_code_name_4 = $_POST['dress_code_name_4'];
$edit_dress_code_name_5 = $_POST['dress_code_name_5'];
$edit_dress_code_name_6 = $_POST['dress_code_name_6'];
$edit_dress_code_name_7 = $_POST['dress_code_name_7'];
$edit_dress_code_name_8 = $_POST['dress_code_name_8'];
$edit_dress_code_name_9 = $_POST['dress_code_name_9'];
$edit_dress_code_name_10 = $_POST['dress_code_name_10'];

$edit_kr_smoking = $_POST['edit_kr_smoking'];
$edit_kr_smoking_name_1 = $_POST['smoking_name_1'];
$edit_kr_smoking_name_2 = $_POST['smoking_name_2'];
$edit_kr_smoking_name_3 = $_POST['smoking_name_3'];
$edit_kr_smoking_name_4 = $_POST['smoking_name_4'];
$edit_kr_smoking_name_5 = $_POST['smoking_name_5'];
$edit_kr_smoking_name_6 = $_POST['smoking_name_6'];
$edit_kr_smoking_name_7 = $_POST['smoking_name_7'];
$edit_kr_smoking_name_8 = $_POST['smoking_name_8'];
$edit_kr_smoking_name_9 = $_POST['smoking_name_9'];
$edit_kr_smoking_name_10 = $_POST['smoking_name_10'];
$edit_kr_smoking_name_11 = $_POST['smoking_name_11'];
$edit_kr_smoking_name_12 = $_POST['smoking_name_12'];
$edit_kr_smoking_name_13 = $_POST['smoking_name_13'];
$edit_kr_smoking_name_14 = $_POST['smoking_name_14'];
$edit_kr_smoking_name_15 = $_POST['smoking_name_15'];

$edit_kr_volunteers = $_POST['edit_kr_volunteers'];

$edit_kr_food = $_POST['edit_kr_food'];
$edit_food_name_1 = $_POST['food_name_1'];
$edit_food_name_2 = $_POST['food_name_2'];
$edit_food_name_3 = $_POST['food_name_3'];
$edit_food_name_4 = $_POST['food_name_4'];
$edit_food_name_5 = $_POST['food_name_5'];
$edit_food_name_6 = $_POST['food_name_6'];
$edit_food_name_7 = $_POST['food_name_7'];
$edit_food_name_8 = $_POST['food_name_8'];
$edit_food_name_9 = $_POST['food_name_9'];
$edit_food_name_10 = $_POST['food_name_10'];

$edit_kr_stable_food = $_POST['edit_kr_stable_food'];
$edit_stable_food_name_1 = $_POST['stable_food_name_1'];
$edit_stable_food_name_2 = $_POST['stable_food_name_2'];
$edit_stable_food_name_3 = $_POST['stable_food_name_3'];
$edit_stable_food_name_4 = $_POST['stable_food_name_4'];
$edit_stable_food_name_5 = $_POST['stable_food_name_5'];
$edit_stable_food_name_6 = $_POST['stable_food_name_6'];
$edit_stable_food_name_7 = $_POST['stable_food_name_7'];
$edit_stable_food_name_8 = $_POST['stable_food_name_8'];
$edit_stable_food_name_9 = $_POST['stable_food_name_9'];
$edit_stable_food_name_10 = $_POST['stable_food_name_10'];
$edit_stable_food_name_10 = $_POST['stable_food_name_11'];
$edit_stable_food_name_10 = $_POST['stable_food_name_12'];
$edit_stable_food_name_10 = $_POST['stable_food_name_13'];
$edit_stable_food_name_10 = $_POST['stable_food_name_14'];
$edit_stable_food_name_10 = $_POST['stable_food_name_15'];

$edit_kr_characteristics = $_POST['edit_kr_characteristics'];
$points = $_POST['points'];

$id_monate = $_POST['edit_kr_monthe'];
$id_fix = 15;




if (isset($_POST['edit_kr_report'])) {
	$sqll = "UPDATE krreport331 SET monthe=?, to_do=?, group_activities=?, activities_name_1=?, activities_name_2=?, activities_name_3=?, activities_name_4=?, section=?, academic_debt=?, skipping_classes=?, skipping_name_1=?, skipping_name_2=?, skipping_name_3=?, skipping_name_4=?, skipping_name_5=?, skipping_name_6=?, skipping_name_7=?, skipping_name_8=?, skipping_name_9=?, skipping_name_10=?, skipping_name_11=?, skipping_name_12=?, skipping_name_13=?, skipping_name_14=?, skipping_name_15=?, breaking_rules=?, rules_name_1=?, rules_name_2=?, rules_name_3=?, rules_name_4=?, rules_name_5=?, rules_name_6=?, rules_name_7=?, rules_name_8=?, rules_name_9=?, rules_name_10=?, rules_name_11=?, rules_name_12=?, rules_name_13=?, rules_name_14=?, rules_name_15=?, rules_name_16=?, rules_name_17=?, rules_name_18=?, rules_name_19=?, rules_name_20=?, rules_name_21=?, dress_code=?, dress_code_name_1=?, 
	dress_code_name_2=?, 
	dress_code_name_3=?, 
	dress_code_name_4=?, 
	dress_code_name_5=?, 
	dress_code_name_6=?, 
	dress_code_name_7=?, 
	dress_code_name_8=?, 
	dress_code_name_9=?, 
	dress_code_name_10=?, smoking=?, smoking_name_1=?, smoking_name_2=?, smoking_name_3=?, smoking_name_4=?, smoking_name_5=?, smoking_name_6=?, smoking_name_7=?, smoking_name_8=?, smoking_name_9=?, smoking_name_10=?, smoking_name_11=?, smoking_name_12=?, smoking_name_13=?, smoking_name_14=?,smoking_name_15=?, volunteers=?, food=?, food_name_1=?, 
	food_name_2=?, 
	food_name_3=?, 
	food_name_4=?, 
	food_name_5=?, 
	food_name_6=?, 
	food_name_7=?, 
	food_name_8=?, 
	food_name_9=?, 
	food_name_10=?,
	edit_kr_stable_food=?,
	stable_food_name_1=?, 
	stable_food_name_2=?, 
	stable_food_name_3=?, 
	stable_food_name_4=?, 
	stable_food_name_5=?, 
	stable_food_name_6=?, 
	stable_food_name_7=?, 
	stable_food_name_8=?, 
	stable_food_name_9=?, 
	stable_food_name_10=?, 
	stable_food_name_11=?, 
	stable_food_name_12=?, 
	stable_food_name_13=?, 
	stable_food_name_14=?, 
	stable_food_name_15=?, 
	characteristics=?, points=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_kr_monthe, $edit_kr_to_do, $edit_kr_group_activities, $edit_kr_activities_name_1, $edit_kr_activities_name_2, $edit_kr_activities_name_3, $edit_kr_activities_name_4, $edit_kr_section, $edit_kr_academic_debt, $edit_kr_skipping, $skipping_name_1, $skipping_name_2, $skipping_name_3, $skipping_name_4, $skipping_name_5, $skipping_name_6, $skipping_name_7, $skipping_name_8, $skipping_name_9, $skipping_name_10, $skipping_name_11, $skipping_name_12, $skipping_name_13, $skipping_name_14, $skipping_name_15, $edit_kr_breaking_rules, $edit_kr_rules_name_1, $edit_kr_rules_name_2, $edit_kr_rules_name_3, $edit_kr_rules_name_4, $edit_kr_rules_name_5, $edit_kr_rules_name_6, $edit_kr_rules_name_7, $edit_kr_rules_name_8, $edit_kr_rules_name_9, $edit_kr_rules_name_10, $edit_kr_rules_name_11, $edit_kr_rules_name_12, $edit_kr_rules_name_13, $edit_kr_rules_name_14, $edit_kr_rules_name_15, $edit_kr_rules_name_16, $edit_kr_rules_name_17, $edit_kr_rules_name_18, $edit_kr_rules_name_19, $edit_kr_rules_name_20, $edit_kr_rules_name_21, $edit_kr_dress_code, $edit_dress_code_name_1, 
	$edit_dress_code_name_2, 
	$edit_dress_code_name_3, 
	$edit_dress_code_name_4, 
	$edit_dress_code_name_5, 
	$edit_dress_code_name_6, 
	$edit_dress_code_name_7, 
	$edit_dress_code_name_8, 
	$edit_dress_code_name_9, 
	$edit_dress_code_name_10, $edit_kr_smoking, $edit_kr_smoking_name_1, $edit_kr_smoking_name_2, $edit_kr_smoking_name_3, $edit_kr_smoking_name_4, $edit_kr_smoking_name_5, $edit_kr_smoking_name_6, $edit_kr_smoking_name_7, $edit_kr_smoking_name_8, $edit_kr_smoking_name_9, $edit_kr_smoking_name_10, $edit_kr_smoking_name_11, $edit_kr_smoking_name_12, $edit_kr_smoking_name_13, $edit_kr_smoking_name_14, $edit_kr_smoking_name_15, $edit_kr_volunteers, $edit_kr_food, $edit_food_name_1, 
	$edit_food_name_2, 
	$edit_food_name_3, 
	$edit_food_name_4, 
	$edit_food_name_5, 
	$edit_food_name_6, 
	$edit_food_name_7, 
	$edit_food_name_8, 
	$edit_food_name_9, 
	$edit_food_name_10, 
	$edit_kr_stable_food, 
	$edit_stable_food_name_1, 
	$edit_stable_food_name_2, 
	$edit_stable_food_name_3, 
	$edit_stable_food_name_4, 
	$edit_stable_food_name_5, 
	$edit_stable_food_name_6, 
	$edit_stable_food_name_7, 
	$edit_stable_food_name_8, 
	$edit_stable_food_name_9, 
	$edit_stable_food_name_10, 
	$edit_stable_food_name_11, 
	$edit_stable_food_name_12, 
	$edit_stable_food_name_13, 
	$edit_stable_food_name_14, 
	$edit_stable_food_name_15, 
	$edit_kr_characteristics, $points, $id_monate]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
};


if (isset($_POST['edit_kr_report'])) {
	$sqll = "UPDATE krreport331 SET monthe=?, 
	to_do=?, 
	group_activities=?, 
	activities_name_1=?, 
	activities_name_2=?, 
	activities_name_3=?, 
	activities_name_4=?, 
	section=?, 
	academic_debt=?, 
	skipping_classes=?, 
	skipping_name_1=?, 
	skipping_name_2=?, 
	skipping_name_3=?, 
	skipping_name_4=?, 
	skipping_name_5=?, 
	skipping_name_6=?, 
	skipping_name_7=?, 
	skipping_name_8=?, 
	skipping_name_9=?, 
	skipping_name_10=?, 
	skipping_name_11=?, 
	skipping_name_12=?, 
	skipping_name_13=?, 
	skipping_name_14=?, 
	skipping_name_15=?, 
	breaking_rules=?, 
	rules_name_1=?, 
	rules_name_2=?, 
	rules_name_3=?, 
	rules_name_4=?, 
	rules_name_5=?, 
	rules_name_6=?, 
	rules_name_7=?, 
	rules_name_8=?, 
	rules_name_9=?,
	rules_name_10=?, 
	rules_name_11=?, 
	rules_name_12=?, 
	rules_name_13=?, 
	rules_name_14=?, 
	rules_name_15=?, 
	rules_name_16=?, 
	rules_name_17=?, 
	rules_name_18=?, 
	rules_name_19=?, 
	rules_name_20=?, 
	rules_name_21=?, 
	dress_code=?, 
	dress_code_name_1=?, 
	dress_code_name_2=?, 
	dress_code_name_3=?, 
	dress_code_name_4=?, 
	dress_code_name_5=?, 
	dress_code_name_6=?, 
	dress_code_name_7=?, 
	dress_code_name_8=?, 
	dress_code_name_9=?, 
	dress_code_name_10=?, 
	smoking=?, 
	smoking_name_1=?, 
	smoking_name_2=?, 
	smoking_name_3=?, 
	smoking_name_4=?, 
	smoking_name_5=?, 
	smoking_name_6=?, 
	smoking_name_7=?, 
	smoking_name_8=?, 
	smoking_name_9=?, 
	smoking_name_10=?, 
	smoking_name_11=?, 
	smoking_name_12=?, 
	smoking_name_13=?, 
	smoking_name_14=?, 
	smoking_name_15=?, 
	volunteers=?, 
	food=?, 
	food_name_1=?, 
	food_name_2=?, 
	food_name_3=?, 
	food_name_4=?, 
	food_name_5=?, 
	food_name_6=?, 
	food_name_7=?, 
	food_name_8=?, 
	food_name_9=?, 
	food_name_10=?, 
	edit_kr_stable_food=?,
	stable_food_name_1=?, 
	stable_food_name_2=?, 
	stable_food_name_3=?, 
	stable_food_name_4=?, 
	stable_food_name_5=?, 
	stable_food_name_6=?, 
	stable_food_name_7=?, 
	stable_food_name_8=?, 
	stable_food_name_9=?, 
	stable_food_name_10=?, 
	stable_food_name_11=?, 
	stable_food_name_12=?, 
	stable_food_name_13=?, 
	stable_food_name_14=?, 
	stable_food_name_15=?, 
	characteristics=?, 
	points=? WHERE id=?";
	$querys = $pdo->prepare($sqll);
	$querys->execute([$edit_kr_monthe, 
	$edit_kr_to_do,
	$edit_kr_group_activities, 
	$edit_kr_activities_name_1, 
	$edit_kr_activities_name_2, 
	$edit_kr_activities_name_3, 
	$edit_kr_activities_name_4, 
	$edit_kr_section, 
	$edit_kr_academic_debt, 
	$edit_kr_skipping, 
	$skipping_name_1, 
	$skipping_name_2, 
	$skipping_name_3, 
	$skipping_name_4, 
	$skipping_name_5, 
	$skipping_name_6,
	$skipping_name_7, 
	$skipping_name_8, 
	$skipping_name_9, 
	$skipping_name_10, 
	$skipping_name_11, 
	$skipping_name_12, 
	$skipping_name_13, 
	$skipping_name_14, 
	$skipping_name_15, 
	$edit_kr_breaking_rules, 
	$edit_kr_rules_name_1, 
	$edit_kr_rules_name_2, 
	$edit_kr_rules_name_3,
	$edit_kr_rules_name_4, 
	$edit_kr_rules_name_5, 
	$edit_kr_rules_name_6, 
	$edit_kr_rules_name_7, 
	$edit_kr_rules_name_8, 
	$edit_kr_rules_name_9, 
	$edit_kr_rules_name_10, 
	$edit_kr_rules_name_11, 
	$edit_kr_rules_name_12,
	$edit_kr_rules_name_13, 
	$edit_kr_rules_name_14, 
	$edit_kr_rules_name_15, 
	$edit_kr_rules_name_16, 
	$edit_kr_rules_name_17, 
	$edit_kr_rules_name_18, 
	$edit_kr_rules_name_19, 
	$edit_kr_rules_name_20, 
	$edit_kr_rules_name_21, 
	$edit_kr_dress_code, 
	$edit_dress_code_name_1, 
	$edit_dress_code_name_2, 
	$edit_dress_code_name_3, 
	$edit_dress_code_name_4, 
	$edit_dress_code_name_5, 
	$edit_dress_code_name_6, 
	$edit_dress_code_name_7, 
	$edit_dress_code_name_8, 
	$edit_dress_code_name_9, 
	$edit_dress_code_name_10, 
	$edit_kr_smoking, 
	$edit_kr_smoking_name_1, 
	$edit_kr_smoking_name_2, 
	$edit_kr_smoking_name_3, 
	$edit_kr_smoking_name_4, 
	$edit_kr_smoking_name_5, 
	$edit_kr_smoking_name_6, 
	$edit_kr_smoking_name_7, 
	$edit_kr_smoking_name_8, 
	$edit_kr_smoking_name_9, 
	$edit_kr_smoking_name_10, 
	$edit_kr_smoking_name_11, 
	$edit_kr_smoking_name_12, 
	$edit_kr_smoking_name_13, 
	$edit_kr_smoking_name_14, 
	$edit_kr_smoking_name_15, 
	$edit_kr_volunteers, 
	$edit_kr_food, 
	$edit_food_name_1, 
	$edit_food_name_2, 
	$edit_food_name_3, 
	$edit_food_name_4, 
	$edit_food_name_5, 
	$edit_food_name_6, 
	$edit_food_name_7, 
	$edit_food_name_8, 
	$edit_food_name_9, 
	$edit_food_name_10, 
	$edit_kr_stable_food, 
	$edit_stable_food_name_1, 
	$edit_stable_food_name_2, 
	$edit_stable_food_name_3, 
	$edit_stable_food_name_4, 
	$edit_stable_food_name_5, 
	$edit_stable_food_name_6, 
	$edit_stable_food_name_7, 
	$edit_stable_food_name_8, 
	$edit_stable_food_name_9, 
	$edit_stable_food_name_10, 
	$edit_stable_food_name_11, 
	$edit_stable_food_name_12, 
	$edit_stable_food_name_13, 
	$edit_stable_food_name_14, 
	$edit_stable_food_name_15, 
	$edit_kr_characteristics, 
	$points, $id_fix]);
	header('Location: ' . $_SERVER['HTTP_REFERER']);
};

// Обновление БД отчет по классному руководству
// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=15");
$sql->execute();
$result_krreport331 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=1");
$sql->execute();
$result_krreport331_1 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=2");
$sql->execute();
$result_krreport331_2 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=3");
$sql->execute();
$result_krreport331_3 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=4");
$sql->execute();
$result_krreport331_4 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=5");
$sql->execute();
$result_krreport331_5 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=6");
$sql->execute();
$result_krreport331_6 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=7");
$sql->execute();
$result_krreport331_7 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=8");
$sql->execute();
$result_krreport331_8 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=9");
$sql->execute();
$result_krreport331_9 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству

// Чтение из БД отчет по классному руководству
$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id=10");
$sql->execute();
$result_krreport331_10 = $sql->fetchAll();
// Чтение из БД отчет по классному руководству


$sql = $pdo->prepare("SELECT * FROM `krreport331` WHERE id BETWEEN 1 AND 10");
$sql->execute();
$result_krreport331_point = $sql->fetchAll();