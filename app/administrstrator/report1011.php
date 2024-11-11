<?php
require "../func_base.php";
require "../percent.php";
require "../db.php";
require "../config.php";

$user_id = $_SESSION['logged_user']->id;

if ($user_id == 70) {
    $table = 'notes101';
    $result_base = 'students_101';
    $group = 101;
};
if ($user_id == 41) {
    $table = 'notes111';
    $result_base = 'students_111';
    $group = 111;
};
if ($user_id == 68) {
    $table = 'notes121';
    $result_base = '$result_base_predmet_121';
    $group = 121;
};
if ($user_id == 45) {
    $table = 'notes131';
    $result_base = '$result_base_predmet_131';
    $group = 131;
};
if ($user_id == 38) {
    $table = 'notes201';
    $result_base = 'students_201';
    $group = 201;
};
if ($user_id == 28) {
    $table = 'notes202';
    $result_base = 'students_202';
    $group = 202;
};
if ($user_id == 14) {
    $table = 'notes211';
    $result_base = 'students_211';
    $group = 211;
};
if ($user_id == 59) {
    $table = 'notes221';
    $result_base = 'students_221';
    $group = 221;
};
if ($user_id == 71) {
    $table = 'notes231';
    $result_base = 'students_231';
    $group = 231;
};
if ($user_id == 40) {
    $table = 'notes241';
    $result_base = 'students_241';
    $group = 241;
};
if ($user_id == 19) {
    $table = 'notes301';
    $result_base = 'students_301';
    $group = 301;
};
if ($user_id == 63) {
    $table = 'notes302';
    $result_base = 'students_302';
    $group = 302;
};
if ($user_id == 25) {
    $table = 'notes311';
    $result_base = 'students_311';
    $group = 311;
};
if ($user_id == 12) {
    $table = 'notes321';
    $result_base = 'students_321';
    $group = 321;
};
if ($user_id == 69) {
    $table = 'notes331';
    $result_base = 'students_331';
    $group = 331;
};
if ($user_id == 16) {
    $table = 'notes341';
    $result_base = 'students_341';
    $group = 341;
};
if ($user_id == 29) {
    $table = 'notes401';
    $result_base = 'students_401';
    $group = 401;
};
if ($user_id == 23) {
    $table = 'notes402';
    $result_base = 'students_402';
    $group = 402;
};
if ($user_id == 30) {
    $table = 'notes411';
    $result_base = 'students_411';
    $group = 411;
};
if ($user_id == 21) {
    $table = 'notes421';
    $result_base = 'students_421';
    $group = 421;
};
if ($user_id == 24) {
    $table = 'notes431';
    $result_base = 'students_431';
    $group = 431;
};
if ($user_id == 44) {
    $table = 'notes441';
    $result_base = 'students_441';
    $group = 441;
};

// Вывод информации о кураторе
$sqlq = $pdo->prepare("SELECT * FROM `base_info` WHERE group_name=$group");
$sqlq->execute();
$result_group = $sqlq->fetchAll();
// Вывод информации о кураторе

// Вывод предметов
$sql = $pdo->prepare("SELECT * FROM `predmets_$group`");
$sql->execute();
$result_base_predmet = $sql->fetchAll();
// Вывод предметов

// Вывод стдентов
$sql = $pdo->prepare("SELECT * FROM `students_$group`");
$sql->execute();
$result_base_students = $sql->fetchAll();
// Вывод стдентов

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
$st21 = $_POST['pred_21'];
$st22 = $_POST['pred_22'];
$get_id = $_GET['id'];

// Create
if (isset($_POST['submit'])) {
    $sql = ("INSERT INTO `$table`(`students`, `pred_01`, `pred_02`, `pred_03`, `pred_04`, `pred_05`, `pred_06`, `pred_07`, `pred_08`, `pred_09`, `pred_10`, `pred_11`, `pred_12`, `pred_13`, `pred_14`, `pred_15`, `pred_16`, `pred_17`, `pred_18`, `pred_19`, `pred_20`, `pred_21`, `pred_22`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
    $query = $pdo->prepare($sql);
    $query->execute([$students, $st01, $st02, $st03, $st04, $st05, $st06, $st07, $st08, $st09, $st10, $st11, $st12, $st13, $st14, $st15, $st16, $st17, $st18, $st19, $st20, $st21, $st22]);
    $success = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Данные успешно отправлены!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Create

// Read
$sql = $pdo->prepare("SELECT * FROM `$table`");
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
$edit_pred_21 = $_POST['edit_pred_21'];
$edit_pred_22 = $_POST['edit_pred_22'];


if (isset($_POST['edit-submit'])) {
    $sqll = "UPDATE $table SET students=?, pred_01=?, pred_02=?, pred_03=?, pred_04=?, pred_05=?, pred_06=?, pred_07=?, pred_08=?, pred_09=?, pred_10=?, pred_11=?, pred_12=?, pred_13=?, pred_14=?, pred_15=?, pred_16=?, pred_17=?, pred_18=?, pred_19=?, pred_20=?, pred_21=?, pred_22=? WHERE id=?";
    $querys = $pdo->prepare($sqll);
    $querys->execute([$edit_students, $edit_pred_01, $edit_pred_02, $edit_pred_03, $edit_pred_04, $edit_pred_05, $edit_pred_06, $edit_pred_07, $edit_pred_08, $edit_pred_09, $edit_pred_10, $edit_pred_11, $edit_pred_12, $edit_pred_13, $edit_pred_14, $edit_pred_15, $edit_pred_16, $edit_pred_17, $edit_pred_18, $edit_pred_19, $edit_pred_20, $edit_pred_21, $edit_pred_22, $get_id]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}

// Update

// DELETE
if (isset($_POST['delete_submit'])) {
    $sql = "DELETE FROM $table WHERE id=?";
    $query = $pdo->prepare($sql);
    $query->execute([$get_id]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Электронная ведомость</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="../css/app.min.css">
</head>

<body>

    <header>
        <div class="container">
            <?php
            include '../includes/title.php';
            ?>
            <div class="header__wellcome">
                <?php
                if (isset($_SESSION['logged_user'])) : ?>
                    <!-- Приветствие авторизованного пользователя -->
                    <?php
                    include '../includes/wellcome.php';
                    ?>
                    <!-- Приветствие авторизованного пользователя -->
            </div>
        </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <?php foreach ($result_group as $value) { ?>
                    <h4 class="page__title">Отчет куратора <span id="number__group"><?= $value['group_name'] ?></span> группы
                        <br> <?= $value['mentor_name'] ?>
                    <?php } ?>
                    <br>
                    <?php foreach ($result_period as $value) { ?>
                        За контрольную неделю
                        <!-- За <?= $value['semester'] ?> полугодие <?= $value['period'] ?> учебного года -->
                    <?php } ?>
                    </h4>
                    <?= $success ?>
                    <button class="btn btn-success mb-1" data-toggle="modal" data-target="#Modal"><i class="fa fa-user-plus" title="Добавить студента"></i></button>
                    <table class="table shadow table__report" id="myTable" style="border-collapse: collapse;">
                        <thead class="thead-dark thead__fixed">
                            <tr height="50">
                                <th style="font-weight: 200;">№</th>
                                <th style="font-weight: 200;">Студент</th>
                                <?php foreach ($result_base_predmet as $value) { ?>
                                    <th class="pred-table" title="<?= $value['predmets_name'] ?>" value="<?= $value['controle_variant'] ?>">
                                        <p class="predmet__title"><?= $value['predmets_name'] ?><span class="controle_variant" hidden><?= $value['controle_variant'] ?></span></p>
                                    </th>
                                <?php } ?>
                                <th style="font-weight: 200;">Действия</th>
                            </tr>
                        </thead>
                        <tbody data-name="a">
                            <?php foreach ($result as $value) { ?>
                                <tr class="students__row">
                                    <td id="nuber__students"></td>
                                    <td class="table__students"><?= $value['students'] ?></td>
                                    <td class="note" hidden><?= $value['pred_01'] ?></td>
                                    <td class="note" hidden><?= $value['pred_02'] ?></td>
                                    <td class="note" hidden><?= $value['pred_03'] ?></td>
                                    <td class="note" hidden><?= $value['pred_04'] ?></td>
                                    <td class="note" hidden><?= $value['pred_05'] ?></td>
                                    <td class="note" hidden><?= $value['pred_06'] ?></td>
                                    <td class="note" hidden><?= $value['pred_07'] ?></td>
                                    <td class="note" hidden><?= $value['pred_08'] ?></td>
                                    <td class="note" hidden><?= $value['pred_09'] ?></td>
                                    <td class="note" hidden><?= $value['pred_10'] ?></td>
                                    <td class="note" hidden><?= $value['pred_11'] ?></td>
                                    <td class="note" hidden><?= $value['pred_12'] ?></td>
                                    <td class="note" hidden><?= $value['pred_13'] ?></td>
                                    <td class="note" hidden><?= $value['pred_14'] ?></td>
                                    <td class="note" hidden><?= $value['pred_15'] ?></td>
                                    <td class="note" hidden><?= $value['pred_16'] ?></td>
                                    <td class="note" hidden><?= $value['pred_17'] ?></td>
                                    <td class="note" hidden><?= $value['pred_18'] ?></td>
                                    <td class="note" hidden><?= $value['pred_19'] ?></td>
                                    <td class="note" hidden><?= $value['pred_20'] ?></td>
                                    <td class="note" hidden><?= $value['pred_21'] ?></td>
                                    <td class="note" hidden><?= $value['pred_22'] ?></td>
                                    <td class="note" hidden><?= $value['pred_23'] ?></td>
                                    <td class="note" hidden><?= $value['pred_24'] ?></td>
                                    <td class="note" hidden><?= $value['pred_25'] ?></td>
                                    <td class="action">
                                        <a href="?edit=<?= $value['id'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?>"><i class="fa fa-edit"></i></a>
                                        <a href="?delete=<?= $value['id'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>"><i class="fa fa-trash"></i></a>
                                    </td>
                                </tr>

                                <!-- Modal Edit-->
                                <div class="modal fade edit__pred__modal" id="editModal<?= $value['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content shadow">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Редактировать данные студента
                                                    <?= $value['predmet'] ?></h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form action="?id=<?= $value['id'] ?>" method="post" id="qw">
                                                    <div class="form-group">
                                                        <p class="edit__name" name="edit_students" value="<?= $value['students'] ?>"><?= $value['students'] ?></p>
                                                        <input type="text" class="form-control edit__pred" hidden name="edit_students" value="<?= $value['students'] ?>">
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_01">
                                                        <p class="edit__pred__name">Русский язык</p>
                                                        <select class="edit__note__digit" name="edit_pred_01" value="<?= $value['pred_01'] ?>" id="">
                                                            <option value="<?= $value['pred_01'] ?>" selected hidden>
                                                                <?= $value['pred_01'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_02">
                                                        <p class="edit__pred__name">Литература</p>
                                                        <select class="edit__note__digit" name="edit_pred_02" value="<?= $value['pred_02'] ?>" id="">
                                                            <option value="<?= $value['pred_02'] ?>" selected hidden>
                                                                <?= $value['pred_02'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_03">
                                                        <p class="edit__pred__name">Иностранный язык</p>
                                                        <select class="edit__note__digit" name="edit_pred_03" value="<?= $value['pred_03'] ?>" id="">
                                                            <option value="<?= $value['pred_03'] ?>" selected hidden>
                                                                <?= $value['pred_03'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_04">
                                                        <p class="edit__pred__name">Математика</p>
                                                        <select class="edit__note__digit" name="edit_pred_04" value="<?= $value['pred_04'] ?>" id="">
                                                            <option value="<?= $value['pred_04'] ?>" selected hidden>
                                                                <?= $value['pred_04'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_05">
                                                        <p class="edit__pred__name">История</p>
                                                        <select class="edit__note__digit" name="edit_pred_05" value="<?= $value['pred_05'] ?>" id="">
                                                            <option value="<?= $value['pred_05'] ?>" selected hidden>
                                                                <?= $value['pred_05'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_06">
                                                        <p class="edit__pred__name">Физическая культура</p>
                                                        <select class="edit__note__digit" name="edit_pred_06" value="<?= $value['pred_06'] ?>" id="">
                                                            <option value="<?= $value['pred_06'] ?>" selected hidden>
                                                                <?= $value['pred_06'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_07">
                                                        <p class="edit__pred__name">Основы безопасности жизнедеятельности</p>
                                                        <select class="edit__note__digit" name="edit_pred_07" value="<?= $value['pred_07'] ?>" id="">
                                                            <option value="<?= $value['pred_07'] ?>" selected hidden>
                                                                <?= $value['pred_07'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_08">
                                                        <p class="edit__pred__name">Астрономия</p>
                                                        <select class="edit__note__digit" name="edit_pred_08" value="<?= $value['pred_08'] ?>" id="">
                                                            <option value="<?= $value['pred_08'] ?>" selected hidden>
                                                                <?= $value['pred_08'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_09">
                                                        <p class="edit__pred__name">Родной язык</p>
                                                        <select class="edit__note__digit" name="edit_pred_09" value="<?= $value['pred_09'] ?>" id="">
                                                            <option value="<?= $value['pred_09'] ?>" selected hidden>
                                                                <?= $value['pred_09'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_10">
                                                        <p class="edit__pred__name">Биология</p>
                                                        <select class="edit__note__digit" name="edit_pred_10" value="<?= $value['pred_10'] ?>" id="">
                                                            <option value="<?= $value['pred_10'] ?>" selected hidden>
                                                                <?= $value['pred_10'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_11">
                                                        <p class="edit__pred__name">Экономика образовательного учреждения</p>
                                                        <select class="edit__note__digit" name="edit_pred_11" value="<?= $value['pred_11'] ?>" id="">
                                                            <option value="<?= $value['pred_11'] ?>" selected hidden>
                                                                <?= $value['pred_11'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_12">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_12" value="<?= $value['pred_12'] ?>" id="">
                                                            <option value="<?= $value['pred_12'] ?>" selected hidden>
                                                                <?= $value['pred_12'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_13">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_13" value="<?= $value['pred_13'] ?>" id="">
                                                            <option value="<?= $value['pred_13'] ?>" selected hidden>
                                                                <?= $value['pred_13'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_14">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_14" value="<?= $value['pred_14'] ?>" id="">
                                                            <option value="<?= $value['pred_14'] ?>" selected hidden>
                                                                <?= $value['pred_14'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_15">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_15" value="<?= $value['pred_15'] ?>" id="">
                                                            <option value="<?= $value['pred_15'] ?>" selected hidden>
                                                                <?= $value['pred_15'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_16">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_16" value="<?= $value['pred_16'] ?>" id="">
                                                            <option value="<?= $value['pred_16'] ?>" selected hidden>
                                                                <?= $value['pred_16'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_17">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_17" value="<?= $value['pred_17'] ?>" id="">
                                                            <option value="<?= $value['pred_17'] ?>" selected hidden>
                                                                <?= $value['pred_17'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_18">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_18" value="<?= $value['pred_18'] ?>" id="">
                                                            <option value="<?= $value['pred_18'] ?>" selected hidden>
                                                                <?= $value['pred_18'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_19">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_19" value="<?= $value['pred_19'] ?>" id="">
                                                            <option value="<?= $value['pred_19'] ?>" selected hidden>
                                                                <?= $value['pred_19'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_20">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_20" value="<?= $value['pred_20'] ?>" id="">
                                                            <option value="<?= $value['pred_20'] ?>" selected hidden>
                                                                <?= $value['pred_20'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_21">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_21" value="<?= $value['pred_21'] ?>" id="">
                                                            <option value="<?= $value['pred_21'] ?>" selected hidden>
                                                                <?= $value['pred_21'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group edit__notes" id="edit__note_22">
                                                        <p class="edit__pred__name">Теоретические и прикладные аспекты
                                                            методической работы учителя
                                                            физической культуры</p>
                                                        <select class="edit__note__digit" name="edit_pred_22" value="<?= $value['pred_22'] ?>" id="">
                                                            <option value="<?= $value['pred_22'] ?>" selected hidden>
                                                                <?= $value['pred_22'] ?></option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="Зачтено">Зачтено</option>
                                                            <option value="Не зачтено">Не зачтено</option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>

                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                        <button type="submit" name="edit-submit" class="btn btn-primary">Обновить</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- DELETE MODAL -->
                                <div class="modal fade" id="deleteModal<?= $value['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content shadow">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Удалить студента
                                                    <span><?= $value['students'] ?></span>
                                                </h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>После удаления данные студента будут не доступны!</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                <form action="?id=<?= $value['id'] ?>" method="post">
                                                    <button type="submit" name="delete_submit" class="btn btn-danger">Удалить</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal -->
                            <?php } ?>
                        </tbody>
                        <!-- <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot> -->
                    </table>

                    <div class="article" hidden>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <h4>Успеваемость на группу</h4>
                        <div>
                            <p id="but">Абсолютная успеваемость: <span class="absolut__text" id="absolut">0</span></p>
                            <p>Качественная успеваемость: <span class="kach__text" id="kach">0</span></p>
                            <p id="number__group__base" hidden>0</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="copy__link__block" hidden>
                            <p class="copy__link__title">Ссылка на таблицу:</p>
                            <input type="text" id="myInput" value="https://shcnaider.ru/tablegroup/table101.php">
                            <div class="copy__link">
                                <a class="sup" id="copy__link" tabindex="1" href="#">Скопировать ссылку
                                    <span class='tip' id="copy__tip">
                                        Скопировать ссылку
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="print__block">
                            <button class="btn btn-primary print__page" onClick="window.print()">
                                <i class="bi bi-printer-fill"></i> Распечатать страницу
                            </button>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
            <div class="col-md-4">
                <h4 class="title__neud">Неуспевающие</h4>
                <div id="students_neud">
                    <div id="student_neud_00" class="students_2">

                    </div>
                    <div id="student_neud_01" class="students_2">

                    </div>
                    <div id="student_neud_02" class="students_2">

                    </div>
                    <div id="student_neud_03" class="students_2">

                    </div>
                    <div id="student_neud_04" class="students_2">

                    </div>
                    <div id="student_neud_05" class="students_2">

                    </div>
                    <div id="student_neud_06" class="students_2">

                    </div>
                    <div id="student_neud_07" class="students_2">

                    </div>
                    <div id="student_neud_08" class="students_2">

                    </div>
                    <div id="student_neud_09" class="students_2">

                    </div>
                    <div id="student_neud_10" class="students_2">

                    </div>
                    <div id="student_neud_11" class="students_2">

                    </div>
                    <div id="student_neud_12" class="students_2">

                    </div>
                    <div id="student_neud_13" class="students_2">

                    </div>
                    <div id="student_neud_14" class="students_2">

                    </div>
                    <div id="student_neud_15" class="students_2">

                    </div>
                    <div id="student_neud_16" class="students_2">

                    </div>
                    <div id="student_neud_17" class="students_2">

                    </div>
                    <div id="student_neud_18" class="students_2">

                    </div>
                    <div id="student_neud_19" class="students_2">

                    </div>
                    <div id="student_neud_20" class="students_2">

                    </div>
                    <div id="student_neud_21" class="students_2">

                    </div>
                    <div id="student_neud_22" class="students_2">

                    </div>
                    <div id="student_neud_23" class="students_2">

                    </div>
                    <div id="student_neud_24" class="students_2">

                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="title__45">Успевают на 4 и 5</h4>
                <div class="hor" id="hor">
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="title__5">Успевают на 5</h4>
                <div class="otl" id="otl">
                </div>
            </div>
        </div>
        <!-- Modal Добавление студента -->
        <div class="modal fade" tabindex="-1" role="dialog" id="Modal">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content shadow">
                    <div class="modal-header">
                        <h5 class="modal-title">Добавить студента</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <select class="select__students" name="students" id="select__students">
                                    <?php foreach ($result_base_students as $value) { ?>
                                        <option value="<?= $value['students_name'] ?>"><?= $value['students_name'] ?>
                                        </option>
                                    <?php } ?>
                                </select>
                            </div>
                            <hr>
                            <?php foreach ($result_base_predmet as $value) { ?>
                                <div class="form-group add__predmet">
                                    <p><?= $value['predmets_name'] ?></p>
                                    <select name="<?= $value['predmet_code'] ?>" id="">
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="Зачтено">Зачтено</option>
                                        <option value="Не зачтено">Не зачтено</option>
                                        <option value="" selected></option>
                                    </select>
                                </div>
                                <hr>
                            <?php } ?>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="submit" name="submit" class="btn btn-primary">Добавить</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal Добавление студента -->
    </div>
    <?php
                    include '../includes/footer.php';
    ?>

<?php else : ?>
    <?php
                    include '../includes/not_autorise.php';
    ?>
<?php endif; ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>
<script src="../js/app.min.js"></script>

<script>
    var __REPLAIN_ = '7d2c69e9-5e6c-42af-a50b-47dbec7f8564';
    (function(u) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = u;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');
</script>

</body>

</html>