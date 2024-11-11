<?php
require "config.php";

$number_group_brs = $_POST['numberGroupBrs'];
echo $number_group_brs;

$local = $_POST['local'];
echo $local;


$add_pred = $_POST['add_name_predm'];
$add_student_brs331 = $_POST['add_student_brs331'];
$add_id_predm = $_POST['add_id_predm'];
$average__current_1 = $_POST['average__current_1'];
$average__current_2 = $_POST['average__current_2'];
$average__control_1 = $_POST['average__control_1'];
$average__control_2 = $_POST['average__control_2'];
$all_1 = $_POST['hour_1'];
$all_2 = $_POST['hour_2'];
$visited_1 = $_POST['visited_1'];
$visited_2 = $_POST['visited_2'];
$not_delay_1 = $_POST['not_delay_1'];
$not_delay_2 = $_POST['not_delay_2'];
$active_1 = $_POST['active_1'];
$active_2 = $_POST['active_2'];
$controle = $_POST['controle'];
$final_grade = $_POST['final__note'];

// $hour_1 = $_POST['hour_1_v'];
// $hour_2 = $_POST['hour_2_v'];

$summ__all1 = $_POST['summ__all1'];
$summ__all2 = $_POST['summ__all2'];
$summ__note1 = $_POST['summ__note1'];
$summ__note2 = $_POST['summ__note2'];
$summ__full__balls = $_POST['summ__full__balls'];
// Create
$sql = ("INSERT INTO `brs$local`(`pred_name`, `pred_id`, `student_name`, `average__current_1`, `average__current_2`, `average__control_1`, `average__control_2`, `all_1`, `all_2`, `visited_1`, `visited_2`, `not_delay_1`, `not_delay_2`, `active_1`, `active_2`, `controle`, `summ__all1`, `summ__all2`, `summ__note1`, `summ__note2`, `summ__full__balls`, `final_grade`, `hour_1`, `hour_2`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
$query = $pdo->prepare($sql);
$query->execute([$add_pred, $add_id_predm, $add_student_brs331, $average__current_1, $average__current_2, $average__control_1, $average__control_2, $all_1, $all_2, $visited_1, $visited_2, $not_delay_1, $not_delay_2, $active_1, $active_2, $controle, $summ__all1, $summ__all2, $summ__note1, $summ__note2, $summ__full__balls, $final_grade, $hour_1, $hour_2]);
// Create





$edit_predmet = $_POST['edit_predmet'];
$edit_students = $_POST['edit_students'];
$edit_id_predm = $_POST['edit_id_predm'];
$edit_average__current_1 = $_POST['edit_average__current_1'];
$edit_average__current_2 = $_POST['edit_average__current_2'];
$edit_average__control_1 = $_POST['edit_average__control_1'];
$edit_average__control_2 = $_POST['edit_average__control_2'];
$edit_hour_1 = $_POST['edit_hour_1'];
$edit_hour_2 = $_POST['edit_hour_2'];
$edit_visited_1 = $_POST['edit_visited_1'];
$edit_visited_2 = $_POST['edit_visited_2'];
$edit_not_delay_1 = $_POST['edit_not_delay_1'];
$edit_not_delay_2 = $_POST['edit_not_delay_2'];
$edit_active_1 = $_POST['edit_active_1'];
$edit_active_2 = $_POST['edit_active_2'];
$edit_controle = $_POST['edit_controle'];
$edit_final_grade = $_POST['edit_final__note'];

$edit_summ__all1 = $_POST['edit_summ__all1'];
$edit_summ__all2 = $_POST['edit_summ__all2'];
$edit_summ__note1 = $_POST['edit_summ__note1'];
$edit_summ__note2 = $_POST['edit_summ__note2'];
$edit_summ__full__balls = $_POST['edit_summ__full__balls'];
$id = $_POST['id'];
$id_get = $_GET['id'];

// Update
$sql = "UPDATE brs$local SET average__current_1=?,average__current_2=?,average__control_1=?,average__control_2=?, all_1=?, all_2=?, visited_1=?,visited_2=?, not_delay_1=?,not_delay_2=?,active_1=?,active_2=?, controle=?, summ__all1=?, summ__all2=?, summ__note1=?, summ__note2=?, summ__full__balls=?, final_grade=? WHERE id=?";
$query = $pdo->prepare($sql);
$query->execute([$edit_average__current_1, $edit_average__current_2, $edit_average__control_1, $edit_average__control_2, $edit_hour_1, $edit_hour_2, $edit_visited_1, $edit_visited_2, $edit_not_delay_1, $edit_not_delay_2, $edit_active_1, $edit_active_2, $edit_controle, $edit_summ__all1, $edit_summ__all2, $edit_summ__note1, $edit_summ__note2, $edit_summ__full__balls, $edit_final_grade, $id]);







$group_brs = $_POST['brs__group'];

if ($group_brs == 101) {
    $table_pred = 'predmets_101';
    $table_brs = 'brs101';
    $table_stud = 'students_101';
};

if ($group_brs == 111) {
    $table_pred = 'predmets_111';
    $table_brs = 'brs111';
    $table_stud = 'students_111';
};

if ($group_brs == 121) {
    $table_pred = 'predmets_121';
    $table_brs = 'brs121';
    $table_stud = 'students_121';
};

if ($group_brs == 131) {
    $table_pred = 'predmets_131';
    $table_brs = 'brs131';
    $table_stud = 'students_131';
};

if ($group_brs == 201) {
    $table_pred = 'predmets_201';
    $table_brs = 'brs201';
    $table_stud = 'students_201';
};

if ($group_brs == 202) {
    $table_pred = 'predmets_202';
    $table_brs = 'brs202';
    $table_stud = 'students_202';
};

if ($group_brs == 211) {
    $table_pred = 'predmets_211';
    $table_brs = 'brs211';
    $table_stud = 'students_211';
};

if ($group_brs == 221) {
    $table_pred = 'predmets_221';
    $table_brs = 'brs221';
    $table_stud = 'students_221';
};

if ($group_brs == 231) {
    $table_pred = 'predmets_231';
    $table_brs = 'brs231';
    $table_stud = 'students_231';
};

if ($group_brs == 241) {
    $table_pred = 'predmets_241';
    $table_brs = 'brs241';
    $table_stud = 'students_241';
};

if ($group_brs == 301) {
    $table_pred = 'predmets_301';
    $table_brs = 'brs301';
    $table_stud = 'students_301';
};

if ($group_brs == 302) {
    $table_pred = 'predmets_302';
    $table_brs = 'brs302';
    $table_stud = 'students_302';
};

if ($group_brs == 311) {
    $table_pred = 'predmets_311';
    $table_brs = 'brs311';
    $table_stud = 'students_311';
};

if ($group_brs == 321) {
    $table_pred = 'predmets_321';
    $table_brs = 'brs321';
    $table_stud = 'students_321';
};

if ($group_brs == 331) {
    $table_pred = 'predmets_331';
    $table_brs = 'brs331';
    $table_stud = 'students_331';
};

if ($group_brs == 341) {
    $table_pred = 'predmets_341';
    $table_brs = 'brs341';
    $table_stud = 'students_341';
};

if ($group_brs == 401) {
    $table_pred = 'predmets_401';
    $table_brs = 'brs401';
    $table_stud = 'students_401';
};

if ($group_brs == 402) {
    $table_pred = 'predmets_402';
    $table_brs = 'brs402';
    $table_stud = 'students_402';
};

if ($group_brs == 411) {
    $table_pred = 'predmets_411';
    $table_brs = 'brs411';
    $table_stud = 'students_411';
};

if ($group_brs == 421) {
    $table_pred = 'predmets_421';
    $table_brs = 'brs421';
    $table_stud = 'students_421';
};

if ($group_brs == 431) {
    $table_pred = 'predmets_431';
    $table_brs = 'brs431';
    $table_stud = 'students_431';
};

if ($group_brs == 441) {
    $table_pred = 'predmets_441';
    $table_brs = 'brs441';
    $table_stud = 'students_441';
};


$userId = $_POST['userId1'];


if (isset($_POST['local101'])) {
    $table_pred = 'predmets_101';
    $table_brs = 'brs101';
    $table_stud = 'students_101';
};

if (isset($_POST['local111'])) {
    $table_pred = 'predmets_111';
    $table_brs = 'brs111';
    $table_stud = 'students_111';
};

if (isset($_POST['local121'])) {
    $table_pred = 'predmets_121';
    $table_brs = 'brs121';
    $table_stud = 'students_121';
    $brs_number = 121;
    // Update
    $sql = "UPDATE brs_user SET brs_number_group=? WHERE id_user=?";
    $query = $pdo->prepare($sql);
    $query->execute([$brs_number, $userId]);
};

if (isset($_POST['local131'])) {
    $table_pred = 'predmets_131';
    $table_brs = 'brs131';
    $table_stud = 'students_131';
    $brs_number = 131;
    // Update
    $sql = "UPDATE brs_user SET brs_number_group=? WHERE id_user=?";
    $query = $pdo->prepare($sql);
    $query->execute([$brs_number, $userId]);
};

if (isset($_POST['local201'])) {
    $table_pred = 'predmets_201';
    $table_brs = 'brs201';
    $table_stud = 'students_201';
};

if (isset($_POST['local202'])) {
    $table_pred = 'predmets_202';
    $table_brs = 'brs202';
    $table_stud = 'students_202';
};

if (isset($_POST['local211'])) {
    $table_pred = 'predmets_211';
    $table_brs = 'brs211';
    $table_stud = 'students_211';
};
if (isset($_POST['local221'])) {
    $table_pred = 'predmets_221';
    $table_brs = 'brs221';
    $table_stud = 'students_221';
};

if (isset($_POST['local231'])) {
    $table_pred = 'predmets_231';
    $table_brs = 'brs231';
    $table_stud = 'students_231';
};

if (isset($_POST['local241'])) {
    $table_pred = 'predmets_241';
    $table_brs = 'brs241';
    $table_stud = 'students_241';
};

if (isset($_POST['local301'])) {
    $table_pred = 'predmets_301';
    $table_brs = 'brs301';
    $table_stud = 'students_301';
};

if (isset($_POST['local302'])) {
    $table_pred = 'predmets_302';
    $table_brs = 'brs302';
    $table_stud = 'students_302';
};

if (isset($_POST['local311'])) {
    $table_pred = 'predmets_311';
    $table_brs = 'brs311';
    $table_stud = 'students_311';
};

if (isset($_POST['local321'])) {
    $table_pred = 'predmets_321';
    $table_brs = 'brs321';
    $table_stud = 'students_321';
};

if (isset($_POST['local331'])) {
    $table_pred = 'predmets_331';
    $table_brs = 'brs331';
    $table_stud = 'students_331';
};

if (isset($_POST['local341'])) {
    $table_pred = 'predmets_341';
    $table_brs = 'brs341';
    $table_stud = 'students_341';
};

if (isset($_POST['local401'])) {
    $table_pred = 'predmets_401';
    $table_brs = 'brs401';
    $table_stud = 'students_401';
};

if (isset($_POST['local402'])) {
    $table_pred = 'predmets_402';
    $table_brs = 'brs402';
    $table_stud = 'students_402';
};

if (isset($_POST['local411'])) {
    $table_pred = 'predmets_411';
    $table_brs = 'brs411';
    $table_stud = 'students_411';
};

if (isset($_POST['local421'])) {
    $table_pred = 'predmets_421';
    $table_brs = 'brs421';
    $table_stud = 'students_421';
};


if (isset($_POST['local431'])) {
    $table_pred = 'predmets_431';
    $table_brs = 'br431';
    $table_stud = 'students_431';
};

if (isset($_POST['local441'])) {
    $table_pred = 'predmets_441';
    $table_brs = 'brs441';
    $table_stud = 'students_441';
};



$delite__group = $_POST['delite__group'];


// DELETE
if (isset($_POST['delete_submit'])) {
    $sql = "DELETE FROM brs$delite__group WHERE id=?";
    $query = $pdo->prepare($sql);
    $query->execute([$id_get]);
}
// DELETE

$opt = $_POST['opt'];

$sqlq = $pdo->prepare("SELECT * FROM `$table_brs` WHERE pred_id=$opt");
$sqlq->execute();
$result_brs = $sqlq->fetchAll();

// Read
$sql = $pdo->prepare("SELECT * FROM `$table_stud`");
$sql->execute();
$result_base_stud = $sql->fetchAll();
// Read


// Read
$sql = $pdo->prepare("SELECT * FROM `$table_pred`");
$sql->execute();
$result_base_predmet_brs = $sql->fetchAll();
// Read