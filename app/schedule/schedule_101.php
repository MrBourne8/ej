<?php
require "../func_base.php";
require "../abs.php";
require "../db.php";
require "../config.php";

$user_id = $_SESSION['logged_user']->id;


$table_local = $_GET['tablesched'];
$schedule_table = 'schedule_full';


// $schedule_table = 'schedule_101';


// Read
$sql = $pdo->prepare("SELECT * FROM `$schedule_table` WHERE day=1 AND group_kollege=$table_local ORDER BY number_lesson");
$sql->execute();
$result_day1 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `$schedule_table` WHERE day=2 AND group_kollege=$table_local ORDER BY number_lesson");
$sql->execute();
$result_day2 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `$schedule_table` WHERE day=3 AND group_kollege=$table_local ORDER BY number_lesson");
$sql->execute();
$result_day3 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `$schedule_table` WHERE day=4 AND group_kollege=$table_local ORDER BY number_lesson");
$sql->execute();
$result_day4 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `$schedule_table` WHERE day=5 AND group_kollege=$table_local ORDER BY number_lesson");
$sql->execute();
$result_day5 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `$schedule_table` WHERE day=6 AND group_kollege=$table_local ORDER BY number_lesson");
$sql->execute();
$result_day6 = $sql->fetchAll();
// Read


$day = $_POST['day'];
$speciality = $_POST['speciality'];
$group_college = $_POST['group_kollege'];
$lessons = $_POST['lessons'];
$teacher_name = $_POST['teacher_name'];
$teacher_id = $_POST['teacher_id'];
$number_lesson = $_POST['number_lesson'];
$time = $_POST['time'];
$classroom = $_POST['classroom'];
$get_id = $_GET['id'];

// Create
if (isset($_POST['submit'])) {
    $sql = ("INSERT INTO `$schedule_table`(`day`, `speciality`, `group_kollege`, `lesson`, `teacher`, `teacher_id`, `number_lesson`, `time`, `classroom`) VALUES(?,?,?,?,?,?,?,?,?)");
    $query = $pdo->prepare($sql);
    $query->execute([$day, $speciality, $group_college, $lessons, $teacher_name, $teacher_id, $number_lesson, $time, $classroom]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    $success = '<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Данные успешно отправлены!</strong> Вы можете закрыть это сообщение.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>';
};
// Create


// Update
$edit_day = $_POST['edit_day'];
$edit_speciality = $_POST['edit_speciality'];
$edit_group_college = $_POST['edit_group_kollege'];
$edit_lessons = $_POST['edit_lessons'];
$edit_teacher_name = $_POST['edit_teacher_name'];
$edit_teacher_id = $_POST['edit_teacher_id'];
$edit_number_lesson = $_POST['edit_number_lesson'];
$edit_time = $_POST['edit_time'];
$edit_classroom = $_POST['edit_classroom'];


if (isset($_POST['edit-submit'])) {
    $sqll = "UPDATE $schedule_table SET day=?, group_kollege=?, lesson=?, teacher=?, teacher_id=?, number_lesson=?, time=?, classroom=? WHERE id=?";
    $querys = $pdo->prepare($sqll);
    $querys->execute([$edit_day, $edit_group_college, $edit_lessons, $edit_teacher_name, $edit_teacher_id, $edit_number_lesson, $edit_time, $edit_classroom, $get_id]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// Update

// DELETE
if (isset($_POST['delete_submit'])) {
    $sql = "DELETE FROM $schedule_table WHERE id=?";
    $query = $pdo->prepare($sql);
    $query->execute([$get_id]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE

// Вывод списка преподавателей
$sql = $pdo->prepare("SELECT * FROM `teachers` ORDER BY teacher_name ASC");
$sql->execute();
$result_teachers = $sql->fetchAll();
// Вывод списка преподавателей

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Электронное расписание занятий группы</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
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

                <h4 class="page__title">ЭЛЕКТРОННОЕ РАСПИСАНИЕ ЗАНЯТИЙ <span class="group__local"></span> ГРУППЫ
                    <?php foreach ($result_period as $value) { ?>
                        <br>
                        На <?= $value['semester'] ?> полугодие <?= $value['period'] ?> учебного года
                    <?php } ?>
                </h4>

                <?php $user_role = $_SESSION['logged_user']->role;
                    if ($user_role == 1 || $user_role == 2 || $user_role == 8 || $user_role == 9) : ?>
                    <button class="btn btn-success mb-1" data-toggle="modal" data-target="#Modal"><i class="fa fa-user-plus" title="Добавить урок"></i></button>
                <?php endif; ?>

                <p class="schedule__day-name">Понедельник</p>
                <table class="table shadow table__schedule_day1" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                            <th style="font-weight: 200; ">Преподаватель</th>
                            <th style="font-weight: 200; ">Редактирование</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_day1 as $value) { ?>
                            <tr class="students__row">
                                <td class="table__schedule__nuber"></td>
                                <td class="table__schedule__time"><?= $value['time'] ?></td>
                                <td class="table__schedule__lesson"><?= $value['lesson'] ?></td>
                                <td class="table__schedule__classroom"><?= $value['classroom'] ?></td>
                                <td class="table__schedule__teacher">
                                    <a href="schedule_teacher.php?teacher=<?= $value['teacher_id'] ?>" class="mylink" name="<?= $value['teacher_id'] ?>" onclick="handleClick(this.getAttribute('name'))">
                                        <?= $value['teacher'] ?>
                                    </a>
                                </td>
                                <?php $user_role = $_SESSION['logged_user']->role;
                                if ($user_role == 1 || $user_role == 2 || $user_role == 8 || $user_role == 9) : ?>
                                    <td class="action">
                                        <a href="?edit=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-edit"></i></a>
                                        <a href="?delete=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-trash"></i></a>
                                    </td>
                            </tr>
                        <?php endif; ?>

                        <!-- Modal Edit-->
                        <div class="modal fade" id="editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content shadow">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
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
                                                <p class="">День недели</p>
                                                <select class="edit__note__digit" name="edit_day" value="<?= $value['day'] ?>" id="">
                                                    <option value="<?= $value['day'] ?>" selected hidden>
                                                        <?= $value['day'] ?></option>
                                                    <option value="1">Понедельник</option>
                                                    <option value="2">Вторник</option>
                                                    <option value="3">Среда</option>
                                                    <option value="4">Четверг</option>
                                                    <option value="5">Пятница</option>
                                                    <option value="6">Суббота</option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_01">
                                                <p class="">Группа</p>
                                                <select class="edit__note__digit" name="edit_group_kollege" value="<?= $value['group_kollege'] ?>" id="">
                                                    <option value="<?= $value['group_kollege'] ?>" selected hidden>
                                                        <?= $value['group_kollege'] ?></option>
                                                    <option value="101">101 группа</option>
                                                    <option value="111">111 группа</option>
                                                    <option value="121">121 группа</option>
                                                    <option value="201">201 группа</option>
                                                    <option value="202">202 группа</option>
                                                    <option value="211">211 группа</option>
                                                    <option value="221">221 группа</option>
                                                    <option value="231">231 группа</option>
                                                    <option value="241">241 группа</option>
                                                    <option value="301">301 группа</option>
                                                    <option value="302">302 группа</option>
                                                    <option value="311">311 группа</option>
                                                    <option value="321">321 группа</option>
                                                    <option value="331">331 группа</option>
                                                    <option value="341">341 группа</option>
                                                    <option value="401">401 группа</option>
                                                    <option value="402">402 группа</option>
                                                    <option value="411">411 группа</option>
                                                    <option value="421">421 группа</option>
                                                    <option value="431">431 группа</option>
                                                    <option value="441">441 группа</option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_02">
                                                <p class="">Нормер урока</p>
                                                <select class="edit__note__digit" name="edit_number_lesson" value="<?= $value['number_lesson'] ?>" id="">
                                                    <option value="<?= $value['number_lesson'] ?>" selected hidden>
                                                        <?= $value['number_lesson'] ?></option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_03">
                                                <p class="edit__pred__name">Время начала - время окончания</p>
                                                <select class="edit__note__digit" name="edit_time" value="<?= $value['time'] ?>" id="">
                                                    <option value="<?= $value['time'] ?>" selected hidden>
                                                        <?= $value['time'] ?></option>
                                                    <option value="8:00 - 8:45">8:00 - 8:45</option>
                                                    <option value="8:50 - 9:35">8:50 - 9:35</option>
                                                    <option value="9:40 - 10:25">9:40 - 10:25</option>
                                                    <option value="10:45 - 11:30">10:45 - 11:30</option>
                                                    <option value="11:50 - 12:35">11:50 - 12:35</option>
                                                    <option value="12:55 - 13:40">12:55 - 13:40</option>
                                                    <option value="13:45 - 14:30">13:45 - 14:30</option>
                                                    <option value="14:40 - 15:25">14:40 - 15:25</option>
                                                    <option value="15:30 - 16:15">15:30 - 16:15</option>
                                                    <option value="16:25 - 17:10">16:25 - 17:10</option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_04">
                                                <p class="">Название предмета</p>
                                                <input type="text" class="edit__note__digit" name="edit_lessons" value="<?= $value['lesson'] ?>">
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_05">
                                                <p class="">Аудитория</p>
                                                <select class="edit__note__digit" name="edit_classroom" value="<?= $value['classroom'] ?>" id="">
                                                    <option value="<?= $value['classroom'] ?>" selected hidden>
                                                        <?= $value['classroom'] ?></option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="106">106</option>
                                                    <option value="107">107</option>
                                                    <option value="110">110</option>
                                                    <option value="112">112</option>
                                                    <option value="114">114</option>
                                                    <option value="115">115</option>
                                                    <option value="201">201</option>
                                                    <option value="202">202</option>
                                                    <option value="204">204</option>
                                                    <option value="205">205</option>
                                                    <option value="206">206</option>
                                                    <option value="208">208</option>
                                                    <option value="301">301</option>
                                                    <option value="302">302</option>
                                                    <option value="305">305</option>
                                                    <option value="306">306</option>
                                                    <option value="307">307</option>
                                                    <option value="309">309</option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_06">
                                                <p class="">Преподаватель</p>
                                                <select class="edit__note__digit edit__teacher__name_1 edit__teacher__select" name="edit_teacher_name" onchange="logSelectedValue(this)">
                                                    <option name="<?= $value['teacher_id'] ?>" value="<?= $value['teacher'] ?>" selected hidden><?= $value['teacher'] ?></option>
                                                    <?php foreach ($result_teachers as $value_teachers) { ?>
                                                        <option class="schedule__teacher__name" name="<?= $value_teachers['teacher_id'] ?>" value="<?= $value_teachers['teacher_name'] ?>"><?= $value_teachers['teacher_name'] ?></option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_06">
                                                <p class="">ID преподавателя</p>
                                                <input class="edit__schedule__teacher__id_1 edit__teacher__input" name="edit_teacher_id" type="text" value="<?= $value['teacher_id'] ?>">
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
                        <div class="modal fade" id="deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content shadow">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Удалить урок</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>После удаления данные будут не доступны!</p>
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
                        </tr>
                    </tfoot> -->
                </table>

                <p class="schedule__day-name">Вторник</p>
                <table class="table shadow table__schedule_day2" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                            <th style="font-weight: 200; ">Преподаватель</th>
                            <th style="font-weight: 200; ">Редактирование</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_day2 as $value) { ?>
                            <tr class="students__row">
                                <td class="table__schedule__nuber"></td>
                                <td class="table__schedule__time"><?= $value['time'] ?></td>
                                <td class="table__schedule__lesson"><?= $value['lesson'] ?></td>
                                <td class="table__schedule__classroom"><?= $value['classroom'] ?></td>
                                <td class="table__schedule__teacher">
                                    <a href="schedule_teacher.php?teacher=<?= $value['teacher_id'] ?>" class="mylink" name="<?= $value['teacher_id'] ?>" onclick="handleClick(this.getAttribute('name'))">
                                        <?= $value['teacher'] ?>
                                    </a>
                                </td>
                                <td class="action">
                                    <a href="?edit=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
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
                                                    <p class="">День недели</p>
                                                    <select class="edit__note__digit" name="edit_day" value="<?= $value['day'] ?>" id="">
                                                        <option value="<?= $value['day'] ?>" selected hidden>
                                                            <?= $value['day'] ?></option>
                                                        <option value="1">Понедельник</option>
                                                        <option value="2">Вторник</option>
                                                        <option value="3">Среда</option>
                                                        <option value="4">Четверг</option>
                                                        <option value="5">Пятница</option>
                                                        <option value="6">Суббота</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_01">
                                                    <p class="">Группа</p>
                                                    <select class="edit__note__digit" name="edit_group_kollege" value="<?= $value['group_kollege'] ?>" id="">
                                                        <option value="<?= $value['group_kollege'] ?>" selected hidden>
                                                            <?= $value['group_kollege'] ?></option>
                                                        <option value="101">101 группа</option>
                                                        <option value="111">111 группа</option>
                                                        <option value="121">121 группа</option>
                                                        <option value="201">201 группа</option>
                                                        <option value="202">202 группа</option>
                                                        <option value="211">211 группа</option>
                                                        <option value="221">221 группа</option>
                                                        <option value="231">231 группа</option>
                                                        <option value="241">241 группа</option>
                                                        <option value="301">301 группа</option>
                                                        <option value="302">302 группа</option>
                                                        <option value="311">311 группа</option>
                                                        <option value="321">321 группа</option>
                                                        <option value="331">331 группа</option>
                                                        <option value="341">341 группа</option>
                                                        <option value="401">401 группа</option>
                                                        <option value="402">402 группа</option>
                                                        <option value="411">411 группа</option>
                                                        <option value="421">421 группа</option>
                                                        <option value="431">431 группа</option>
                                                        <option value="441">441 группа</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_02">
                                                    <p class="">Нормер урока</p>
                                                    <select class="edit__note__digit" name="edit_number_lesson" value="<?= $value['number_lesson'] ?>" id="">
                                                        <option value="<?= $value['number_lesson'] ?>" selected hidden>
                                                            <?= $value['number_lesson'] ?></option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_03">
                                                    <p class="edit__pred__name">Время начала - время окончания</p>
                                                    <select class="edit__note__digit" name="edit_time" value="<?= $value['time'] ?>" id="">
                                                        <option value="<?= $value['time'] ?>" selected hidden>
                                                            <?= $value['time'] ?></option>
                                                        <option value="8:00 - 8:45">8:00 - 8:45</option>
                                                        <option value="8:50 - 9:35">8:50 - 9:35</option>
                                                        <option value="9:40 - 10:25">9:40 - 10:25</option>
                                                        <option value="10:45 - 11:30">10:45 - 11:30</option>
                                                        <option value="11:50 - 12:35">11:50 - 12:35</option>
                                                        <option value="12:55 - 13:40">12:55 - 13:40</option>
                                                        <option value="13:45 - 14:30">13:45 - 14:30</option>
                                                        <option value="14:40 - 15:25">14:40 - 15:25</option>
                                                        <option value="15:30 - 16:15">15:30 - 16:15</option>
                                                        <option value="16:25 - 17:10">16:25 - 17:10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_04">
                                                    <p class="">Название предмета</p>
                                                    <input type="text" class="edit__note__digit" name="edit_lessons" value="<?= $value['lesson'] ?>">
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_05">
                                                    <p class="">Аудитория</p>
                                                    <select class="edit__note__digit" name="edit_classroom" value="<?= $value['classroom'] ?>" id="">
                                                        <option value="<?= $value['classroom'] ?>" selected hidden>
                                                            <?= $value['classroom'] ?></option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="106">106</option>
                                                        <option value="107">107</option>
                                                        <option value="110">110</option>
                                                        <option value="112">112</option>
                                                        <option value="114">114</option>
                                                        <option value="115">115</option>
                                                        <option value="201">201</option>
                                                        <option value="202">202</option>
                                                        <option value="204">204</option>
                                                        <option value="205">205</option>
                                                        <option value="206">206</option>
                                                        <option value="208">208</option>
                                                        <option value="301">301</option>
                                                        <option value="302">302</option>
                                                        <option value="305">305</option>
                                                        <option value="306">306</option>
                                                        <option value="307">307</option>
                                                        <option value="309">309</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">Преподаватель</p>
                                                    <select class="edit__note__digit edit__teacher__name_1 edit__teacher__select" name="edit_teacher_name" onchange="logSelectedValue(this)">
                                                        <option name="<?= $value['teacher_id'] ?>" value="<?= $value['teacher'] ?>" selected hidden><?= $value['teacher'] ?></option>
                                                        <?php foreach ($result_teachers as $value_teachers) { ?>
                                                            <option class="schedule__teacher__name" name="<?= $value_teachers['teacher_id'] ?>" value="<?= $value_teachers['teacher_name'] ?>"><?= $value_teachers['teacher_name'] ?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">ID преподавателя</p>
                                                    <input class="edit__schedule__teacher__id_1 edit__teacher__input" name="edit_teacher_id" type="text" value="<?= $value['teacher_id'] ?>">
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
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить урок</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>После удаления данные будут не доступны!</p>
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
                        </tr>
                    </tfoot> -->
                </table>

                <p class="schedule__day-name">Среда</p>
                <table class="table shadow table__schedule_day3" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                            <th style="font-weight: 200; ">Преподаватель</th>
                            <th style="font-weight: 200; ">Редактирование</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_day3 as $value) { ?>
                            <tr class="students__row">
                                <td class="table__schedule__nuber"></td>
                                <td class="table__schedule__time"><?= $value['time'] ?></td>
                                <td class="table__schedule__lesson"><?= $value['lesson'] ?></td>
                                <td class="table__schedule__classroom"><?= $value['classroom'] ?></td>
                                <td class="table__schedule__teacher">
                                    <a href="schedule_teacher.php?teacher=<?= $value['teacher_id'] ?>" class="mylink" name="<?= $value['teacher_id'] ?>" onclick="handleClick(this.getAttribute('name'))">
                                        <?= $value['teacher'] ?>
                                    </a>
                                </td>
                                <td class="action">
                                    <a href="?edit=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
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
                                                    <p class="">День недели</p>
                                                    <select class="edit__note__digit" name="edit_day" value="<?= $value['day'] ?>" id="">
                                                        <option value="<?= $value['day'] ?>" selected hidden>
                                                            <?= $value['day'] ?></option>
                                                        <option value="1">Понедельник</option>
                                                        <option value="2">Вторник</option>
                                                        <option value="3">Среда</option>
                                                        <option value="4">Четверг</option>
                                                        <option value="5">Пятница</option>
                                                        <option value="6">Суббота</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_01">
                                                    <p class="">Группа</p>
                                                    <select class="edit__note__digit" name="edit_group_kollege" value="<?= $value['group_kollege'] ?>" id="">
                                                        <option value="<?= $value['group_kollege'] ?>" selected hidden>
                                                            <?= $value['group_kollege'] ?></option>
                                                        <option value="101">101 группа</option>
                                                        <option value="111">111 группа</option>
                                                        <option value="121">121 группа</option>
                                                        <option value="201">201 группа</option>
                                                        <option value="202">202 группа</option>
                                                        <option value="211">211 группа</option>
                                                        <option value="221">221 группа</option>
                                                        <option value="231">231 группа</option>
                                                        <option value="241">241 группа</option>
                                                        <option value="301">301 группа</option>
                                                        <option value="302">302 группа</option>
                                                        <option value="311">311 группа</option>
                                                        <option value="321">321 группа</option>
                                                        <option value="331">331 группа</option>
                                                        <option value="341">341 группа</option>
                                                        <option value="401">401 группа</option>
                                                        <option value="402">402 группа</option>
                                                        <option value="411">411 группа</option>
                                                        <option value="421">421 группа</option>
                                                        <option value="431">431 группа</option>
                                                        <option value="441">441 группа</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_02">
                                                    <p class="">Нормер урока</p>
                                                    <select class="edit__note__digit" name="edit_number_lesson" value="<?= $value['number_lesson'] ?>" id="">
                                                        <option value="<?= $value['number_lesson'] ?>" selected hidden>
                                                            <?= $value['number_lesson'] ?></option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_03">
                                                    <p class="edit__pred__name">Время начала - время окончания</p>
                                                    <select class="edit__note__digit" name="edit_time" value="<?= $value['time'] ?>" id="">
                                                        <option value="<?= $value['time'] ?>" selected hidden>
                                                            <?= $value['time'] ?></option>
                                                        <option value="8:00 - 8:45">8:00 - 8:45</option>
                                                        <option value="8:50 - 9:35">8:50 - 9:35</option>
                                                        <option value="9:40 - 10:25">9:40 - 10:25</option>
                                                        <option value="10:45 - 11:30">10:45 - 11:30</option>
                                                        <option value="11:50 - 12:35">11:50 - 12:35</option>
                                                        <option value="12:55 - 13:40">12:55 - 13:40</option>
                                                        <option value="13:45 - 14:30">13:45 - 14:30</option>
                                                        <option value="14:40 - 15:25">14:40 - 15:25</option>
                                                        <option value="15:30 - 16:15">15:30 - 16:15</option>
                                                        <option value="16:25 - 17:10">16:25 - 17:10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_04">
                                                    <p class="">Название предмета</p>
                                                    <input type="text" class="edit__note__digit" name="edit_lessons" value="<?= $value['lesson'] ?>">
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_05">
                                                    <p class="">Аудитория</p>
                                                    <select class="edit__note__digit" name="edit_classroom" value="<?= $value['classroom'] ?>" id="">
                                                        <option value="<?= $value['classroom'] ?>" selected hidden>
                                                            <?= $value['classroom'] ?></option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="106">106</option>
                                                        <option value="107">107</option>
                                                        <option value="110">110</option>
                                                        <option value="112">112</option>
                                                        <option value="114">114</option>
                                                        <option value="115">115</option>
                                                        <option value="201">201</option>
                                                        <option value="202">202</option>
                                                        <option value="204">204</option>
                                                        <option value="205">205</option>
                                                        <option value="206">206</option>
                                                        <option value="208">208</option>
                                                        <option value="301">301</option>
                                                        <option value="302">302</option>
                                                        <option value="305">305</option>
                                                        <option value="306">306</option>
                                                        <option value="307">307</option>
                                                        <option value="309">309</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">Преподаватель</p>
                                                    <select class="edit__note__digit edit__teacher__name_1 edit__teacher__select" name="edit_teacher_name" onchange="logSelectedValue(this)">
                                                        <option name="<?= $value['teacher_id'] ?>" value="<?= $value['teacher'] ?>" selected hidden><?= $value['teacher'] ?></option>
                                                        <?php foreach ($result_teachers as $value_teachers) { ?>
                                                            <option class="schedule__teacher__name" name="<?= $value_teachers['teacher_id'] ?>" value="<?= $value_teachers['teacher_name'] ?>"><?= $value_teachers['teacher_name'] ?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">ID преподавателя</p>
                                                    <input class="edit__schedule__teacher__id_1 edit__teacher__input" name="edit_teacher_id" type="text" value="<?= $value['teacher_id'] ?>">
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
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить урок</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>После удаления данные будут не доступны!</p>
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
                        </tr>
                    </tfoot> -->
                </table>

                <p class="schedule__day-name">Четверг</p>
                <table class="table shadow table__schedule_day4" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                            <th style="font-weight: 200; ">Преподаватель</th>
                            <th style="font-weight: 200; ">Редактирование</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_day4 as $value) { ?>
                            <tr class="students__row">
                                <td class="table__schedule__nuber"></td>
                                <td class="table__schedule__time"><?= $value['time'] ?></td>
                                <td class="table__schedule__lesson"><?= $value['lesson'] ?></td>
                                <td class="table__schedule__classroom"><?= $value['classroom'] ?></td>
                                <td class="table__schedule__teacher">
                                    <a href="schedule_teacher.php?teacher=<?= $value['teacher_id'] ?>" class="mylink" name="<?= $value['teacher_id'] ?>" onclick="handleClick(this.getAttribute('name'))">
                                        <?= $value['teacher'] ?>
                                    </a>
                                </td>
                                <td class="action">
                                    <a href="?edit=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
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
                                                    <p class="">День недели</p>
                                                    <select class="edit__note__digit" name="edit_day" value="<?= $value['day'] ?>" id="">
                                                        <option value="<?= $value['day'] ?>" selected hidden>
                                                            <?= $value['day'] ?></option>
                                                        <option value="1">Понедельник</option>
                                                        <option value="2">Вторник</option>
                                                        <option value="3">Среда</option>
                                                        <option value="4">Четверг</option>
                                                        <option value="5">Пятница</option>
                                                        <option value="6">Суббота</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_01">
                                                    <p class="">Группа</p>
                                                    <select class="edit__note__digit" name="edit_group_kollege" value="<?= $value['group_kollege'] ?>" id="">
                                                        <option value="<?= $value['group_kollege'] ?>" selected hidden>
                                                            <?= $value['group_kollege'] ?></option>
                                                        <option value="101">101 группа</option>
                                                        <option value="111">111 группа</option>
                                                        <option value="121">121 группа</option>
                                                        <option value="201">201 группа</option>
                                                        <option value="202">202 группа</option>
                                                        <option value="211">211 группа</option>
                                                        <option value="221">221 группа</option>
                                                        <option value="231">231 группа</option>
                                                        <option value="241">241 группа</option>
                                                        <option value="301">301 группа</option>
                                                        <option value="302">302 группа</option>
                                                        <option value="311">311 группа</option>
                                                        <option value="321">321 группа</option>
                                                        <option value="331">331 группа</option>
                                                        <option value="341">341 группа</option>
                                                        <option value="401">401 группа</option>
                                                        <option value="402">402 группа</option>
                                                        <option value="411">411 группа</option>
                                                        <option value="421">421 группа</option>
                                                        <option value="431">431 группа</option>
                                                        <option value="441">441 группа</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_02">
                                                    <p class="">Нормер урока</p>
                                                    <select class="edit__note__digit" name="edit_number_lesson" value="<?= $value['number_lesson'] ?>" id="">
                                                        <option value="<?= $value['number_lesson'] ?>" selected hidden>
                                                            <?= $value['number_lesson'] ?></option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_03">
                                                    <p class="edit__pred__name">Время начала - время окончания</p>
                                                    <select class="edit__note__digit" name="edit_time" value="<?= $value['time'] ?>" id="">
                                                        <option value="<?= $value['time'] ?>" selected hidden>
                                                            <?= $value['time'] ?></option>
                                                        <option value="8:00 - 8:45">8:00 - 8:45</option>
                                                        <option value="8:50 - 9:35">8:50 - 9:35</option>
                                                        <option value="9:40 - 10:25">9:40 - 10:25</option>
                                                        <option value="10:45 - 11:30">10:45 - 11:30</option>
                                                        <option value="11:50 - 12:35">11:50 - 12:35</option>
                                                        <option value="12:55 - 13:40">12:55 - 13:40</option>
                                                        <option value="13:45 - 14:30">13:45 - 14:30</option>
                                                        <option value="14:40 - 15:25">14:40 - 15:25</option>
                                                        <option value="15:30 - 16:15">15:30 - 16:15</option>
                                                        <option value="16:25 - 17:10">16:25 - 17:10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_04">
                                                    <p class="">Название предмета</p>
                                                    <input type="text" class="edit__note__digit" name="edit_lessons" value="<?= $value['lesson'] ?>">
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_05">
                                                    <p class="">Аудитория</p>
                                                    <select class="edit__note__digit" name="edit_classroom" value="<?= $value['classroom'] ?>" id="">
                                                        <option value="<?= $value['classroom'] ?>" selected hidden>
                                                            <?= $value['classroom'] ?></option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="106">106</option>
                                                        <option value="107">107</option>
                                                        <option value="110">110</option>
                                                        <option value="112">112</option>
                                                        <option value="114">114</option>
                                                        <option value="115">115</option>
                                                        <option value="201">201</option>
                                                        <option value="202">202</option>
                                                        <option value="204">204</option>
                                                        <option value="205">205</option>
                                                        <option value="206">206</option>
                                                        <option value="208">208</option>
                                                        <option value="301">301</option>
                                                        <option value="302">302</option>
                                                        <option value="305">305</option>
                                                        <option value="306">306</option>
                                                        <option value="307">307</option>
                                                        <option value="309">309</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">Преподаватель</p>
                                                    <select class="edit__note__digit edit__teacher__name_1 edit__teacher__select" name="edit_teacher_name" onchange="logSelectedValue(this)">
                                                        <option name="<?= $value['teacher_id'] ?>" value="<?= $value['teacher'] ?>" selected hidden><?= $value['teacher'] ?></option>
                                                        <?php foreach ($result_teachers as $value_teachers) { ?>
                                                            <option class="schedule__teacher__name" name="<?= $value_teachers['teacher_id'] ?>" value="<?= $value_teachers['teacher_name'] ?>"><?= $value_teachers['teacher_name'] ?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">ID преподавателя</p>
                                                    <input class="edit__schedule__teacher__id_1 edit__teacher__input" name="edit_teacher_id" type="text" value="<?= $value['teacher_id'] ?>">
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
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить урок</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>После удаления данные будут не доступны!</p>
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
                        </tr>
                    </tfoot> -->
                </table>

                <p class="schedule__day-name">Пятница</p>
                <table class="table shadow table__schedule_day5" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                            <th style="font-weight: 200; ">Преподаватель</th>
                            <th style="font-weight: 200; ">Редактирование</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_day5 as $value) { ?>
                            <tr class="students__row">
                                <td class="table__schedule__nuber"></td>
                                <td class="table__schedule__time"><?= $value['time'] ?></td>
                                <td class="table__schedule__lesson"><?= $value['lesson'] ?></td>
                                <td class="table__schedule__classroom"><?= $value['classroom'] ?></td>
                                <td class="table__schedule__teacher">
                                    <a href="schedule_teacher.php?teacher=<?= $value['teacher_id'] ?>" class="mylink" name="<?= $value['teacher_id'] ?>" onclick="handleClick(this.getAttribute('name'))">
                                        <?= $value['teacher'] ?>
                                    </a>
                                </td>
                                <td class="action">
                                    <a href="?edit=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
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
                                                    <p class="">День недели</p>
                                                    <select class="edit__note__digit" name="edit_day" value="<?= $value['day'] ?>" id="">
                                                        <option value="<?= $value['day'] ?>" selected hidden>
                                                            <?= $value['day'] ?></option>
                                                        <option value="1">Понедельник</option>
                                                        <option value="2">Вторник</option>
                                                        <option value="3">Среда</option>
                                                        <option value="4">Четверг</option>
                                                        <option value="5">Пятница</option>
                                                        <option value="6">Суббота</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_01">
                                                    <p class="">Группа</p>
                                                    <select class="edit__note__digit" name="edit_group_kollege" value="<?= $value['group_kollege'] ?>" id="">
                                                        <option value="<?= $value['group_kollege'] ?>" selected hidden>
                                                            <?= $value['group_kollege'] ?></option>
                                                        <option value="101">101 группа</option>
                                                        <option value="111">111 группа</option>
                                                        <option value="121">121 группа</option>
                                                        <option value="201">201 группа</option>
                                                        <option value="202">202 группа</option>
                                                        <option value="211">211 группа</option>
                                                        <option value="221">221 группа</option>
                                                        <option value="231">231 группа</option>
                                                        <option value="241">241 группа</option>
                                                        <option value="301">301 группа</option>
                                                        <option value="302">302 группа</option>
                                                        <option value="311">311 группа</option>
                                                        <option value="321">321 группа</option>
                                                        <option value="331">331 группа</option>
                                                        <option value="341">341 группа</option>
                                                        <option value="401">401 группа</option>
                                                        <option value="402">402 группа</option>
                                                        <option value="411">411 группа</option>
                                                        <option value="421">421 группа</option>
                                                        <option value="431">431 группа</option>
                                                        <option value="441">441 группа</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_02">
                                                    <p class="">Нормер урока</p>
                                                    <select class="edit__note__digit" name="edit_number_lesson" value="<?= $value['number_lesson'] ?>" id="">
                                                        <option value="<?= $value['number_lesson'] ?>" selected hidden>
                                                            <?= $value['number_lesson'] ?></option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_03">
                                                    <p class="edit__pred__name">Время начала - время окончания</p>
                                                    <select class="edit__note__digit" name="edit_time" value="<?= $value['time'] ?>" id="">
                                                        <option value="<?= $value['time'] ?>" selected hidden>
                                                            <?= $value['time'] ?></option>
                                                        <option value="8:00 - 8:45">8:00 - 8:45</option>
                                                        <option value="8:50 - 9:35">8:50 - 9:35</option>
                                                        <option value="9:40 - 10:25">9:40 - 10:25</option>
                                                        <option value="10:45 - 11:30">10:45 - 11:30</option>
                                                        <option value="11:50 - 12:35">11:50 - 12:35</option>
                                                        <option value="12:55 - 13:40">12:55 - 13:40</option>
                                                        <option value="13:45 - 14:30">13:45 - 14:30</option>
                                                        <option value="14:40 - 15:25">14:40 - 15:25</option>
                                                        <option value="15:30 - 16:15">15:30 - 16:15</option>
                                                        <option value="16:25 - 17:10">16:25 - 17:10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_04">
                                                    <p class="">Название предмета</p>
                                                    <input type="text" class="edit__note__digit" name="edit_lessons" value="<?= $value['lesson'] ?>">
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_05">
                                                    <p class="">Аудитория</p>
                                                    <select class="edit__note__digit" name="edit_classroom" value="<?= $value['classroom'] ?>" id="">
                                                        <option value="<?= $value['classroom'] ?>" selected hidden>
                                                            <?= $value['classroom'] ?></option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="106">106</option>
                                                        <option value="107">107</option>
                                                        <option value="110">110</option>
                                                        <option value="112">112</option>
                                                        <option value="114">114</option>
                                                        <option value="115">115</option>
                                                        <option value="201">201</option>
                                                        <option value="202">202</option>
                                                        <option value="204">204</option>
                                                        <option value="205">205</option>
                                                        <option value="206">206</option>
                                                        <option value="208">208</option>
                                                        <option value="301">301</option>
                                                        <option value="302">302</option>
                                                        <option value="305">305</option>
                                                        <option value="306">306</option>
                                                        <option value="307">307</option>
                                                        <option value="309">309</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">Преподаватель</p>
                                                    <select class="edit__note__digit edit__teacher__name_1 edit__teacher__select" name="edit_teacher_name" onchange="logSelectedValue(this)">
                                                        <option name="<?= $value['teacher_id'] ?>" value="<?= $value['teacher'] ?>" selected hidden><?= $value['teacher'] ?></option>
                                                        <?php foreach ($result_teachers as $value_teachers) { ?>
                                                            <option class="schedule__teacher__name" name="<?= $value_teachers['teacher_id'] ?>" value="<?= $value_teachers['teacher_name'] ?>"><?= $value_teachers['teacher_name'] ?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">ID преподавателя</p>
                                                    <input class="edit__schedule__teacher__id_1 edit__teacher__input" name="edit_teacher_id" type="text" value="<?= $value['teacher_id'] ?>">
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
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить урок</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>После удаления данные будут не доступны!</p>
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
                        </tr>
                    </tfoot> -->
                </table>
                <p class="schedule__day-name">Суббота</p>
                <table class="table shadow table__schedule_day6" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                            <th style="font-weight: 200; ">Преподаватель</th>
                            <th style="font-weight: 200; ">Редактирование</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_day6 as $value) { ?>
                            <tr class="students__row">
                                <td class="table__schedule__nuber"></td>
                                <td class="table__schedule__time"><?= $value['time'] ?></td>
                                <td class="table__schedule__lesson"><?= $value['lesson'] ?></td>
                                <td class="table__schedule__classroom"><?= $value['classroom'] ?></td>
                                <td class="table__schedule__teacher">
                                    <a href="schedule_teacher.php?teacher=<?= $value['teacher_id'] ?>" class="mylink" name="<?= $value['teacher_id'] ?>" onclick="handleClick(this.getAttribute('name'))">
                                        <?= $value['teacher'] ?>
                                    </a>
                                </td>
                                <td class="action">
                                    <a href="?edit=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?><?= $value['group_kollege'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
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
                                                    <p class="">День недели</p>
                                                    <select class="edit__note__digit" name="edit_day" value="<?= $value['day'] ?>" id="">
                                                        <option value="<?= $value['day'] ?>" selected hidden>
                                                            <?= $value['day'] ?></option>
                                                        <option value="1">Понедельник</option>
                                                        <option value="2">Вторник</option>
                                                        <option value="3">Среда</option>
                                                        <option value="4">Четверг</option>
                                                        <option value="5">Пятница</option>
                                                        <option value="6">Суббота</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_01">
                                                    <p class="">Группа</p>
                                                    <select class="edit__note__digit" name="edit_group_kollege" value="<?= $value['group_kollege'] ?>" id="">
                                                        <option value="<?= $value['group_kollege'] ?>" selected hidden>
                                                            <?= $value['group_kollege'] ?></option>
                                                        <option value="101">101 группа</option>
                                                        <option value="111">111 группа</option>
                                                        <option value="121">121 группа</option>
                                                        <option value="201">201 группа</option>
                                                        <option value="202">202 группа</option>
                                                        <option value="211">211 группа</option>
                                                        <option value="221">221 группа</option>
                                                        <option value="231">231 группа</option>
                                                        <option value="241">241 группа</option>
                                                        <option value="301">301 группа</option>
                                                        <option value="302">302 группа</option>
                                                        <option value="311">311 группа</option>
                                                        <option value="321">321 группа</option>
                                                        <option value="331">331 группа</option>
                                                        <option value="341">341 группа</option>
                                                        <option value="401">401 группа</option>
                                                        <option value="402">402 группа</option>
                                                        <option value="411">411 группа</option>
                                                        <option value="421">421 группа</option>
                                                        <option value="431">431 группа</option>
                                                        <option value="441">441 группа</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_02">
                                                    <p class="">Нормер урока</p>
                                                    <select class="edit__note__digit" name="edit_number_lesson" value="<?= $value['number_lesson'] ?>" id="">
                                                        <option value="<?= $value['number_lesson'] ?>" selected hidden>
                                                            <?= $value['number_lesson'] ?></option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_03">
                                                    <p class="edit__pred__name">Время начала - время окончания</p>
                                                    <select class="edit__note__digit" name="edit_time" value="<?= $value['time'] ?>" id="">
                                                        <option value="<?= $value['time'] ?>" selected hidden>
                                                            <?= $value['time'] ?></option>
                                                        <option value="8:00 - 8:45">8:00 - 8:45</option>
                                                        <option value="8:50 - 9:35">8:50 - 9:35</option>
                                                        <option value="9:40 - 10:25">9:40 - 10:25</option>
                                                        <option value="10:45 - 11:30">10:45 - 11:30</option>
                                                        <option value="11:50 - 12:35">11:50 - 12:35</option>
                                                        <option value="12:55 - 13:40">12:55 - 13:40</option>
                                                        <option value="13:45 - 14:30">13:45 - 14:30</option>
                                                        <option value="14:40 - 15:25">14:40 - 15:25</option>
                                                        <option value="15:30 - 16:15">15:30 - 16:15</option>
                                                        <option value="16:25 - 17:10">16:25 - 17:10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_04">
                                                    <p class="">Название предмета</p>
                                                    <input type="text" class="edit__note__digit" name="edit_lessons" value="<?= $value['lesson'] ?>">
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_05">
                                                    <p class="">Аудитория</p>
                                                    <select class="edit__note__digit" name="edit_classroom" value="<?= $value['classroom'] ?>" id="">
                                                        <option value="<?= $value['classroom'] ?>" selected hidden>
                                                            <?= $value['classroom'] ?></option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="31">31</option>
                                                        <option value="32">32</option>
                                                        <option value="106">106</option>
                                                        <option value="107">107</option>
                                                        <option value="110">110</option>
                                                        <option value="112">112</option>
                                                        <option value="114">114</option>
                                                        <option value="115">115</option>
                                                        <option value="201">201</option>
                                                        <option value="202">202</option>
                                                        <option value="204">204</option>
                                                        <option value="205">205</option>
                                                        <option value="206">206</option>
                                                        <option value="208">208</option>
                                                        <option value="301">301</option>
                                                        <option value="302">302</option>
                                                        <option value="305">305</option>
                                                        <option value="306">306</option>
                                                        <option value="307">307</option>
                                                        <option value="309">309</option>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">Преподаватель</p>
                                                    <select class="edit__note__digit edit__teacher__name_1 edit__teacher__select" name="edit_teacher_name" onchange="logSelectedValue(this)">
                                                        <option name="<?= $value['teacher_id'] ?>" value="<?= $value['teacher'] ?>" selected hidden><?= $value['teacher'] ?></option>
                                                        <?php foreach ($result_teachers as $value_teachers) { ?>
                                                            <option class="schedule__teacher__name" name="<?= $value_teachers['teacher_id'] ?>" value="<?= $value_teachers['teacher_name'] ?>"><?= $value_teachers['teacher_name'] ?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                                <div class="form-group edit__notes" id="edit__note_06">
                                                    <p class="">ID преподавателя</p>
                                                    <input class="edit__schedule__teacher__id_1 edit__teacher__input" name="edit_teacher_id" type="text" value="<?= $value['teacher_id'] ?>">
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
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?><?= $value['group_kollege'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить урок</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>После удаления данные будут не доступны!</p>
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
                        </tr>
                    </tfoot> -->
                </table>

                <div class="article" hidden>
                </div>
            </div>
        </div>

        <!-- Modal Добавление студента -->
        <div class="modal fade" tabindex="-1" role="dialog" id="Modal">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content shadow">
                    <div class="modal-header">
                        <h5 class="modal-title">Добавить урок в расписание</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <select class="select__students" name="day" id="select__students">
                                    <option value="1">Понедельник</option>
                                    <option value="2">Вторник</option>
                                    <option value="3">Среда</option>
                                    <option value="4">Четверг</option>
                                    <option value="5">Пятница</option>
                                    <option value="6">Суббота</option>
                                    <option value="0" selected hidden>Выберите день недели</option>
                                </select>
                            </div>
                            <hr>
                            <div class="form-group">
                                <select class="select__students" name="speciality" id="schedule__edit__select__speciality">
                                    <option value="sp_pnk">Преподавание в начальных классах</option>
                                    <option value="sp_do">Дошкольное образование</option>
                                    <option value="sp_fk">Физическая культура</option>
                                    <option value="sp_pdo">Педагогика дополнительного образования</option>
                                    <option value="sp_pvs">Компьютерные системы и программирвание</option>
                                    <option value="0" selected hidden>Выберите специальность</option>
                                </select>
                            </div>
                            <hr>
                            <div class="form-group">
                                <select class="group_kollege select__students" name="group_kollege" id="schedule__edit__select__groups" style="display: none;">
                                </select>
                            </div>
                            <hr>
                            <!-- Второй idcat, всплывающий -->
                            <div class="form-group">
                                <select class="select__students" name="lessons" id="schedule__edit__select__lessons" style="display: none;">
                                </select>
                            </div>
                            <hr>
                            <div class="form-group">
                                <select class="select__students teacher__name" name="teacher_name">
                                    <option value="" selected hidden>Преподаватель</option>
                                    <?php foreach ($result_teachers as $value) { ?>
                                        <option class="schedule__teacher__name" name="<?= $value['teacher_id'] ?>" value="<?= $value['teacher_name'] ?>"><?= $value['teacher_name'] ?></option>
                                    <?php } ?>
                                </select>
                                <input class="schedule__teacher__id" name="teacher_id" type="text" hidden>
                            </div>
                            <hr>
                            <div class="form-group">
                                <select class="select__students number_lesson" name="number_lesson">
                                    <option value="1" name="8:00 - 8:45">1</option>
                                    <option value="2" name="8:50 - 9:35">2</option>
                                    <option value="3" name="9:40 - 10:25">3</option>
                                    <option value="4" name="10:45 - 11:30">4</option>
                                    <option value="5" name="11:50 - 12:35">5</option>
                                    <option value="6" name="12:55 - 13:40">6</option>
                                    <option value="7" name="13:45 - 14:30">7</option>
                                    <option value="8" name="14:40 - 15:25">8</option>
                                    <option value="9" name="15:30 - 16:15">9</option>
                                    <option value="10" name="16:25 - 17:10">10</option>
                                    <option value="0" selected hidden>Выберите номер урока</option>
                                </select>
                            </div>
                            <div class="form-group" hidden>
                                <!-- <select class="select__students" name="time">
                                    <option value="8:00 - 8:45">8:00 - 8:45</option>
                                    <option value="8:50 - 9:35">8:50 - 9:35</option>
                                    <option value="9:40 - 10:25">9:40 - 10:25</option>
                                    <option value="10:45 - 11:30">10:45 - 11:30</option>
                                    <option value="11:50 - 12:35">11:50 - 12:35</option>
                                    <option value="12:55 - 13:40">12:55 - 13:40</option>
                                    <option value="13:45 - 14:30">13:45 - 14:30</option>
                                    <option value="14:40 - 15:25">14:40 - 15:25</option>
                                    <option value="15:30 - 16:15">15:30 - 16:15</option>
                                    <option value="16:25 - 17:10">16:25 - 17:10</option>
                                    <option value="" selected hidden>Выберите время начала и окончания урока</option>
                                </select> -->

                                <input type="text" class="time__lesson" name="time" value="">
                            </div>
                            <hr>
                            <div class="form-group">
                                <select class="select__students" name="classroom">
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="106">106</option>
                                    <option value="107">107</option>
                                    <option value="110">110</option>
                                    <option value="112">112</option>
                                    <option value="114">114</option>
                                    <option value="115">115</option>
                                    <option value="201">201</option>
                                    <option value="202">202</option>
                                    <option value="204">204</option>
                                    <option value="205">205</option>
                                    <option value="206">206</option>
                                    <option value="208">208</option>
                                    <option value="Спортивный зал">Спортивный зал</option>
                                    <option value="301">301</option>
                                    <option value="302">302</option>
                                    <option value="305">305</option>
                                    <option value="306">306</option>
                                    <option value="307">307</option>
                                    <option value="309">309</option>
                                    <option value="" selected hidden>Выберите аудиторию</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                <button type="submit" name="submit" class="btn btn-primary add__lesson">Добавить</button>
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
    <script>
        function handleClick(name) {
            console.log(name);
        }
    </script>

    <script script type="text/javascript">
        $('#schedule__edit__select__groups').change(function() {
            var val = $(this).val();
            $('#schedule__edit__select__lessons').show();
            $('#schedule__edit__select__lessons').html('');
            $.ajax({
                type: 'POST',
                url: './sched.php',
                data: {
                    'model': val
                },
                success: function(data) {
                    var obj = JSON.parse(data);
                    obj.forEach(function(item) {
                        // $('#idcat2').append(new Option(item, item));
                        // либо так
                        $('#schedule__edit__select__lessons').append($("<option></option>")
                            .attr("value", item).text(item));
                    });
                }
            });
            let selectLessons = document.querySelector('#schedule__edit__select__lessons')

            let newOption = new Option("Классный час", "Классный час");
            selectLessons.appendChild(newOption)
            let lessonWindow = new Option("Окно", "");
            selectLessons.appendChild(lessonWindow)
        });
    </script>

    <script script type="text/javascript">
        $('#schedule__edit__select__speciality').change(function() {
            var val = $(this).val();
            $('#schedule__edit__select__groups').show();
            $('#schedule__edit__select__groups').html('');
            $.ajax({
                type: 'POST',
                url: './sched.php',
                data: {
                    'groups': val
                },
                success: function(data) {
                    var obj = JSON.parse(data);
                    obj.forEach(function(item) {
                        // $('#idcat2').append(new Option(item, item));
                        // либо так
                        $('#schedule__edit__select__groups').append($("<option></option>")
                            .attr("value", item).text(item));
                    });
                }
            });
        });
    </script>

    <script>
        function logSelectedValue(select) {
            var selectedOption = select.options[select.selectedIndex];
            var selectedValue = selectedOption.value;
            console.log(selectedValue);
        }
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