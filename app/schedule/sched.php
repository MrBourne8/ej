<?php
// require "func_base.php";
// require "db.php";
require "../config.php";

$MODEL = $_POST['model'];

if (isset($MODEL) && !empty($MODEL)) {

    $sql = $pdo->prepare("SELECT * FROM `predmets_$MODEL`");
    $sql->execute();
    $result_skip421 = $sql->fetchAll();

    $DB = array_column($result_skip421, 'predmets_name');
   
    echo json_encode($DB);
} else {
    // echo '[]';
}

$GROUPS = $_POST['groups'];

if (isset($GROUPS) && !empty($GROUPS)) {

    $sql = $pdo->prepare("SELECT * FROM `$GROUPS`");
    $sql->execute();
    $result_groups = $sql->fetchAll();

    $DB = array_column($result_groups, 'number_group');

    echo json_encode($DB);
} else {
    // echo '[]';
}



?>