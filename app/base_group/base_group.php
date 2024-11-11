<?php
require "../func_base.php";
require "../db.php";

$user_id = $_SESSION['logged_user']->id;
$user_group = $_SESSION['logged_user']->group;

$sqlq = $pdo->prepare("SELECT * FROM `vrem` WHERE id=3");
$sqlq->execute();
$result_number_group = $sqlq->fetchAll();

foreach ($result_number_group as $value)
    $value['group_number'];
$basegroup = $value['group_number'];


if ($user_id == 12) {
    $group = $basegroup;
    $tablestudents = 'students_' . $basegroup;
    $tablepredmets = 'predmets_' . $basegroup;

    $tablestudents_skips = 'students_skip_' . $basegroup;
};
if ($user_id == 70) {
    $group = 101;
    $tablestudents = 'students_101';
    $tablepredmets = 'predmets_101';

    $tablestudents_skips = 'students_skip_101';
};
if ($user_id == 41) {
    $group = 111;
    $tablestudents = 'students_111';
    $tablepredmets = 'predmets_111';

    $tablestudents_skips = 'students_skip_111';
};
if ($user_id == 68) {
    $group = 121;
    $tablestudents = 'students_121';
    $tablepredmets = 'predmets_121';

    $tablestudents_skips = 'students_skip_121';
};
if ($user_id == 45) {
    $group = 131;
    $tablestudents = 'students_131';
    $tablepredmets = 'predmets_131';

    $tablestudents_skips = 'students_skip_131';
};
if ($user_id == 38) {
    $group = 201;
    $tablestudents = 'students_201';
    $tablepredmets = 'predmets_201';

    $tablestudents_skips = 'students_skip_201';
};
if ($user_id == 28) {
    $group = 202;
    $tablestudents = 'students_202';
    $tablepredmets = 'predmets_202';

    $tablestudents_skips = 'students_skip_202';
};
if ($user_id == 14) {
    $group = 211;
    $tablestudents = 'students_211';
    $tablepredmets = 'predmets_211';

    $tablestudents_skips = 'students_skip_211';
};
if ($user_id == 59) {
    $group = 221;
    $tablestudents = 'students_221';
    $tablepredmets = 'predmets_221';

    $tablestudents_skips = 'students_skip_221';
};
if ($user_id == 71) {
    $group = 231;
    $tablestudents = 'students_231';
    $tablepredmets = 'predmets_231';

    $tablestudents_skips = 'students_skip_231';
};
if ($user_id == 40) {
    $group = 241;
    $tablestudents = 'students_241';
    $tablepredmets = 'predmets_241';

    $tablestudents_skips = 'students_skip_241';
};
if ($user_id == 19) {
    $group = 301;
    $tablestudents = 'students_301';
    $tablepredmets = 'predmets_301';

    $tablestudents_skips = 'students_skip_301';
};
if ($user_id == 63) {
    $group = 302;
    $tablestudents = 'students_302';
    $tablepredmets = 'predmets_302';

    $tablestudents_skips = 'students_skip_302';
};
if ($user_id == 25) {
    $group = 311;
    $tablestudents = 'students_311';
    $tablepredmets = 'predmets_311';

    $tablestudents_skips = 'students_skip_311';
};
// if ($user_id == 12) {
//     $group = 321;
//     $tablestudents = 'students_321';
//     $tablepredmets = 'predmets_321';

//     $tablestudents_skips = 'students_skip_321';
// };
if ($user_id == 69) {
    $group = 331;
    $tablestudents = 'students_331';
    $tablepredmets = 'predmets_331';

    $tablestudents_skips = 'students_skip_331';
};
if ($user_id == 16) {
    $group = 341;
    $tablestudents = 'students_341';
    $tablepredmets = 'predmets_341';

    $tablestudents_skips = 'students_skip_341';
};
if ($user_id == 29) {
    $group = 401;
    $tablestudents = 'students_401';
    $tablepredmets = 'predmets_401';

    $tablestudents_skips = 'students_skip_401';
};
if ($user_id == 23) {
    $group = 402;
    $tablestudents = 'students_402';
    $tablepredmets = 'predmets_402';

    $tablestudents_skips = 'students_skip_402';
};
if ($user_id == 30) {
    $group = 411;
    $tablestudents = 'students_411';
    $tablepredmets = 'predmets_411';

    $tablestudents_skips = 'students_skip_411';
};
if ($user_id == 21) {
    $group = 421;
    $tablestudents = 'students_421';
    $tablepredmets = 'predmets_421';

    $tablestudents_skips = 'students_skip_421';
};
if ($user_id == 24) {
    $group = 431;
    $tablestudents = 'students_431';
    $tablepredmets = 'predmets_431';

    $tablestudents_skips = 'students_skip_431';
};
if ($user_id == 44) {
    $group = 441;
    $tablestudents = 'students_441';
    $tablepredmets = 'predmets_441';

    $tablestudents_skips = 'students_skip_441';
};



// Создание списка студентов
$add_student = $_POST['add_info'];
$id_student = $_GET['id'];
// Create
if (isset($_POST['add__student__submit'])) {
    $sql = ("INSERT INTO `$tablestudents`(`students_name`) VALUES(?)");
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

// Update
$edit_base_student_431 = $_POST['edit__base__student__431'];

if (isset($_POST['edit__base431__submit'])) {
    $sqll = "UPDATE $tablestudents SET students_name=? WHERE id=?";
    $querys = $pdo->prepare($sqll);
    $querys->execute([$edit_base_student_431, $id_student]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Update

// DELETE
if (isset($_POST['delete_submit_base_student'])) {
    $sql = "DELETE FROM $tablestudents WHERE id=?";
    $query = $pdo->prepare($sql);
    $query->execute([$id_student]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE
// Создание списка студентов


// Создание списка студентов для пропусков
$add_student_skip = $_POST['add_info_skip'];
$id_student_skip = $_GET['id'];
// Create
if (isset($_POST['add__student__submit_skip'])) {
    $sql = ("INSERT INTO `$tablestudents_skips`(`students_name`) VALUES(?)");
    $query = $pdo->prepare($sql);
    $query->execute([$add_student_skip]);
    $success_stud = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Студент успешно добавлен!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Create

// Update
$edit_base_student_skip = $_POST['edit__base__student__skip'];

if (isset($_POST['edit__base__submit__skip'])) {
    $sqll = "UPDATE $tablestudents_skips SET students_name=? WHERE id=?";
    $querys = $pdo->prepare($sqll);
    $querys->execute([$edit_base_student_skip, $id_student_skip]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Update

// DELETE
if (isset($_POST['delete_submit_base_student'])) {
    $sql = "DELETE FROM $tablestudents_skips WHERE id=?";
    $query = $pdo->prepare($sql);
    $query->execute([$id_student_skip]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE
// Создание списка студентов для пропусков


// Создание списка предметов
$add_pred = $_POST['add_pred'];
$predmet_code = $_POST['predmet_code'];
$controle_variant = $_POST['controle_variant'];
$id_pred = $_GET['id'];

// Create
if (isset($_POST['add__predmet__submit'])) {
    $sql = ("INSERT INTO `$tablepredmets`(`predmets_name`, `controle_variant`, `predmet_code`) VALUES(?,?,?)");
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

// Update
$edit__base__predmet__431 = $_POST['edit__base__predmet__431'];
$edit__predmet__controle__431 = $_POST['edit_controle_variant'];
$edit__predmet_code = $_POST['edit__predmet_code'];

if (isset($_POST['edit__base431_pred__submit'])) {
    $sqll = "UPDATE $tablepredmets SET predmets_name=?, controle_variant=?, predmet_code=? WHERE id_pred=?";
    $querys = $pdo->prepare($sqll);
    $querys->execute([$edit__base__predmet__431, $edit__predmet__controle__431, $edit__predmet_code, $id_pred,]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Update

// DELETE
if (isset($_POST['delete_submit_base_predmet'])) {
    $sql = "DELETE FROM $tablepredmets WHERE id_pred=?";
    $query = $pdo->prepare($sql);
    $query->execute([$id_pred]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE
// Создание списка студентов



// Вывод списка студентов
$sql = $pdo->prepare("SELECT * FROM `$tablestudents`");
$sql->execute();
$result_base_students = $sql->fetchAll();
// Вывод списка студентов

// Вывод списка студентов для пропусков
$sql = $pdo->prepare("SELECT * FROM `$tablestudents_skips`");
$sql->execute();
$result_base_students_skips = $sql->fetchAll();
// Вывод списка студентов для пропусков

// Вывод списка предметов
$sql = $pdo->prepare("SELECT * FROM `$tablepredmets`");
$sql->execute();
$result_base_predmets = $sql->fetchAll();
// Вывод списка предметов

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Список группы</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
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
            <div class="button__wrap" id="skips__buttons__groups" hidden>
                <form method="POST">
                    <button class="button__monate group__base__number" id="group__base__number101" title="101" name="group__base__number101">101</button>

                    <button class="button__monate group__base__number" id="group__base__number111" title="111" name="group__base__number111">111</button>

                    <button class="button__monate group__base__number" id="group__base__number121" title="121" name="group__base__number121">121</button>

                    <button class="button__monate group__base__number" id="group__base__number131" title="131" name="group__base__number131">131</button>

                    <button class="button__monate group__base__number" id="group__base__number201" title="201" name="group__base__number201">201</button>

                    <button class="button__monate group__base__number" id="group__base__number202" title="202" name="group__base__number202">202</button>

                    <button class="button__monate group__base__number" id="group__base__number211" title="211" name="group__base__number211">211</button>

                    <button class="button__monate group__base__number" id="group__base__number221" title="221" name="group__base__number221">221</button>

                    <button class="button__monate group__base__number" id="group__base__number231" title="231" name="group__base__number231">231</button>

                    <button class="button__monate group__base__number" id="group__base__number241" title="241" name="group__base__number241">241</button>

                    <button class="button__monate group__base__number" id="group__base__number301" title="301" name="group__base__number301">301</button>

                    <button class="button__monate group__base__number" id="group__base__number302" title="302" name="group__base__number302">302</button>

                    <button class="button__monate group__base__number" id="group__base__number311" title="311" name="group__base__number311">311</button>

                    <button class="button__monate group__base__number" id="group__base__number321" title="321" name="group__base__number321">321</button>

                    <button class="button__monate group__base__number" id="group__base__number331" title="331" name="group__base__number331">331</button>

                    <button class="button__monate group__base__number" id="group__base__number341" title="341" name="group__base__number341">341</button>

                    <button class="button__monate group__base__number" id="group__base__number401" title="401" name="group__base__number401">401</button>

                    <button class="button__monate group__base__number" id="group__base__number402" title="402" name="group__base__number402">402</button>

                    <button class="button__monate group__base__number" id="group__base__number411" title="411" name="group__base__number411">411</button>

                    <button class="button__monate group__base__number" id="group__base__number421" title="421" name="group__base__number421">421</button>

                    <button class="button__monate group__base__number" id="group__base__number431" title="431" name="group__base__number431">431</button>

                    <button class="button__monate group__base__number" id="group__base__number441" title="441" name="group__base__number441">441</button>
                </form>
            </div>
        </div>
        <div class="row base__group__wrap">
            <?php foreach ($result_period as $value) { ?>
                <? foreach ($result_number_group as $value) { ?>

                    <h4 class="base__grop__title">Информация по <span class="number__group" id="number_group" hidden><?= $value['group_number'] ?></span> <?php } ?> группе на <?= $value['semester'] ?> полугодие
                    <?= $value['period'] ?> учебного года</h4>
                <?php } ?>
        </div>
        <hr>
        <div class="row base__group__content">
            <div class="col-md-6">
                <h5 class="page__title">Список студентов</h5>
                <br>
                <p id="st_number" hidden>0</p>
                <p id="number__group__base" hidden><?php echo $group ?></p>
                <?= $success_stud ?>
                <table class="table shadow base__table__students" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Студент</th>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody id="tb_base">
                        <?php foreach ($result_base_students as $value) { ?>
                            <tr class="base__students__table">
                                <td id="nuber__students"></td>
                                <td class="table__students"><?= $value['students_name'] ?></td>
                                <td>
                                    <a href="?edit=<?= $value['id'] ?>base" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?>base"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?>base" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>base"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?>base" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные студента
                                                <?= $value['students_name'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>base" method="post">
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit__base__student__431" value="<?= $value['students_name'] ?>">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="submit" name="edit__base431__submit" class="btn btn-primary">Обновить</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- DELETE MODAL -->
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?>base" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить студента
                                                <span><?= $value['students_name'] ?></span> из списка
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
                                            <form action="?id=<?= $value['id'] ?>base" method="post">
                                                <button type="submit" name="delete_submit_base_student" class="btn btn-danger">Удалить</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal -->
                        <?php } ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div class="add__student">
                    <p class="add__student__title">Добавить студента <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_info" value="" placeholder="Фамилия Имя">
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add__student__submit" class="btn btn-primary" id="add__student__submit" disabled>Добавить</button>
                        </div>
                    </form>
                </div>
            </div>


            <div class="col-md-6">
                <h5 class="page__title">Список студентов для пропусков</h5>
                <br>
                <p id="st_number" hidden>0</p>
                <!-- <p id="number__group__base">431-0</p> -->
                <?= $success_stud ?>
                <table class="table shadow table__skips__students" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Студент</th>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody id="tb_base">
                        <?php foreach ($result_base_students_skips as $value) { ?>
                            <tr>
                                <td id="nuber__students"></td>
                                <td class="table__students"><?= $value['students_name'] ?></td>
                                <td>
                                    <a href="?edit=<?= $value['id'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>" hidden><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные студента
                                                <?= $value['students_name'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>" method="post">
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit__base__student__skip" value="<?= $value['students_name'] ?>">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="submit" name="edit__base__submit__skip" class="btn btn-primary">Обновить</button>
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
                                                <span><?= $value['students_name'] ?></span> из списка
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
                                                <button type="submit" name="delete_submit_base_student" class="btn btn-danger">Удалить</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal -->
                        <?php } ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div class="add__student">
                    <p class="add__student__title">Добавить студента <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input_skip" name="add_info_skip" value="" placeholder="Фамилия Имя">
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add__student__submit_skip" class="btn btn-primary" id="add__student__submit_skip" disabled>Добавить</button>
                        </div>
                    </form>
                </div>
            </div>






            <div class="col-md-6" id="predmets_list" hidden>
                <h5 class="page__title">Список предметов</h5>
                <br>
                <?= $success_pred ?>
                <table class="table shadow table__base__predmers" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Предмет</th>
                            <th style="font-weight: 200;">Вид контроля</th>
                            <th style="font-weight: 200;">Код предмета</th>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_base_predmets as $value) { ?>
                            <tr>
                                <td id="nuber__predmetsts"></td>
                                <td class="table__predmets"><?= $value['predmets_name'] ?></td>
                                <td><?= $value['controle_variant'] ?></td>
                                <td><?= $value['predmet_code'] ?></td>
                                <td>
                                    <a href="?edit=<?= $value['id_pred'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModalPred<?= $value['id_pred'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id_pred'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModalPred<?= $value['id_pred'] ?>"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModalPred<?= $value['id_pred'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать предмет
                                                <?= $value['predmets_name'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id_pred'] ?>" method="post">
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit__base__predmet__431" value="<?= $value['predmets_name'] ?>">
                                                    <select class="add__predmet__controle" name="edit_controle_variant" value="<?= $value['controle_variant'] ?>">
                                                        <option value="<?= $value['controle_variant'] ?>" selected hidden>
                                                            <?= $value['controle_variant'] ?></option>
                                                        <option value="0">Вид контроля</option>
                                                        <option value="Зачет">Зачет</option>
                                                        <option value="Дифференцированный зачет">Дифференцированный зачет
                                                        </option>
                                                        <option value="Контрольные работы">Контрольные работы</option>
                                                        <option value="Экзамен">Экзамен</option>
                                                        <option value="Семестровая отметка">Семестровая отметка</option>
                                                    </select>
                                                    <select class="add__predmet__controle" name="edit__predmet_code" value="<?= $value['predmet_code'] ?>">
                                                        <option value="<?= $value['predmet_code'] ?>" selected hidden>
                                                            <?= $value['predmet_code'] ?></option>
                                                        <option value="pred_01">pred_01</option>
                                                        <option value="pred_02">pred_02</option>
                                                        <option value="pred_03">pred_03</option>
                                                        <option value="pred_04">pred_04</option>
                                                        <option value="pred_05">pred_05</option>
                                                        <option value="pred_06">pred_06</option>
                                                        <option value="pred_07">pred_07</option>
                                                        <option value="pred_08">pred_08</option>
                                                        <option value="pred_09">pred_09</option>
                                                        <option value="pred_10">pred_10</option>
                                                        <option value="pred_11">pred_11</option>
                                                        <option value="pred_12">pred_12</option>
                                                        <option value="pred_13">pred_13</option>
                                                        <option value="pred_14">pred_14</option>
                                                        <option value="pred_15">pred_15</option>
                                                        <option value="pred_16">pred_16</option>
                                                        <option value="pred_17">pred_17</option>
                                                        <option value="pred_18">pred_18</option>
                                                        <option value="pred_19">pred_19</option>
                                                        <option value="pred_20">pred_20</option>
                                                        <option value="pred_21">pred_21</option>
                                                        <option value="pred_22">pred_22</option>
                                                        <option value="pred_23">pred_23</option>
                                                    </select>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="submit" name="edit__base431_pred__submit" class="btn btn-primary">Обновить</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- DELETE MODAL -->
                            <div class="modal fade" id="deleteModalPred<?= $value['id_pred'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить предмет
                                                <span><?= $value['predmets_name'] ?></span> из списка
                                            </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>После удаления данные будут не доступны!</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                            <form action="?id=<?= $value['id_pred'] ?>" method="post">
                                                <button type="submit" name="delete_submit_base_predmet" class="btn btn-danger">Удалить</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal -->
                        <?php } ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div class="add__predmets">
                    <p class="add__predmet__title">Добавить предмет <i class="fas fa-level-down-alt"></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__predmet__input" name="add_pred" value="" placeholder="Название предмета">
                            <select class="add__predmet__controle" id="add__predmet__controle" name="controle_variant">
                                <option value="0">Вид контроля</option>
                                <option value="Зачет">Зачет</option>
                                <option value="Дифференцированный зачет">Дифференцированный зачет</option>
                                <option value="Контрольные работы">Контрольные работы</option>
                                <option value="Экзамен">Экзамен</option>
                                <option value="Семестровая отметка">Семестровая отметка</option>
                            </select>
                            <select class="add__predmet__controle" id="add__predmet__code" name="predmet_code">
                                <option value="0">Код пердмета</option>
                                <option value="pred_01">pred_01</option>
                                <option value="pred_02">pred_02</option>
                                <option value="pred_03">pred_03</option>
                                <option value="pred_04">pred_04</option>
                                <option value="pred_05">pred_05</option>
                                <option value="pred_06">pred_06</option>
                                <option value="pred_07">pred_07</option>
                                <option value="pred_08">pred_08</option>
                                <option value="pred_09">pred_09</option>
                                <option value="pred_10">pred_10</option>
                                <option value="pred_11">pred_11</option>
                                <option value="pred_12">pred_12</option>
                                <option value="pred_13">pred_13</option>
                                <option value="pred_14">pred_14</option>
                                <option value="pred_15">pred_15</option>
                                <option value="pred_16">pred_16</option>
                                <option value="pred_17">pred_17</option>
                                <option value="pred_18">pred_18</option>
                                <option value="pred_19">pred_19</option>
                                <option value="pred_20">pred_20</option>
                                <option value="pred_21">pred_21</option>
                                <option value="pred_22">pred_22</option>
                                <option value="pred_23">pred_23</option>
                            </select>
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add__predmet__submit" id="add__predmet__submit" class="btn btn-primary" disabled>Добавить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->

    <!-- Modal -->
    <!-- Modal -->
    <div hidden>
        <div class="article" hidden></div>
        <div id="otl"></div>
        <div id="hor"></div>
        <div id="absolut"></div>
        <div id="kach"></div>
        <div id="number__group"></div>
        <div id="hand__enter"></div>
        <div id="select"></div>
        <div id="select__students"></div>
        <div id="input__students"></div>
        <div id=""></div>

        <div id="student__hor__1"></div>
        <div id="student__hor__2"></div>
        <div id="student__hor__3"></div>
        <div id="student__hor__4"></div>
        <div id="student__hor__5"></div>
        <div id="student__hor__6"></div>
        <div id="student__hor__7"></div>
        <div id="student__hor__8"></div>
        <div id="student__hor__9"></div>
        <div id="student__hor__10"></div>
        <div id="student__hor__11"></div>
        <div id="student__hor__12"></div>
        <div id="student__hor__13"></div>
        <div id="student__hor__14"></div>
        <div id="student__hor__15"></div>
        <div id="student__hor__16"></div>
        <div id="student__hor__17"></div>
        <div id="student__hor__18"></div>
        <div id="student__hor__19"></div>
        <div id="student__hor__20"></div>
        <div id="student__hor__21"></div>
        <div id="student__hor__22"></div>
        <div id="student__hor__23"></div>
        <div id="student__hor__24"></div>
        <div id="student__hor__25"></div>
        <div id="student__hor__26"></div>
        <div id="student__hor__27"></div>
        <div id="student__hor__28"></div>
        <div id="student__hor__29"></div>
        <div id="student__hor__30"></div>
        <div id="student__hor__31"></div>
        <div id="student__hor__32"></div>
        <div id="student__hor__33"></div>
        <div id="student__hor__34"></div>
        <div id="student__hor__35"></div>
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
</body>

</html>