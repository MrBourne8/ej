<?php
require "../func_base.php";
require "../percent.php";
require "../db.php";
require "../config.php";

$user_id = $_SESSION['logged_user']->id;

$teacher_id = $_GET['teacher'];

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id ");
$sql->execute();
$result_teacher_name = $sql->fetch();
// Read




// Вывод уроков преподавателя за ПОНЕДЕЛЬНИК
// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=1 ORDER BY number_lesson");
$sql->execute();
$result_day1_1 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=2 ORDER BY number_lesson");
$sql->execute();
$result_day1_2 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=3 ORDER BY number_lesson");
$sql->execute();
$result_day1_3 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=4 ORDER BY number_lesson");
$sql->execute();
$result_day1_4 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=5 ORDER BY number_lesson");
$sql->execute();
$result_day1_5 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=6 ORDER BY number_lesson");
$sql->execute();
$result_day1_6 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=7 ORDER BY number_lesson");
$sql->execute();
$result_day1_7 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=8 ORDER BY number_lesson");
$sql->execute();
$result_day1_8 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=9 ORDER BY number_lesson");
$sql->execute();
$result_day1_9 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=1 AND number_lesson=10 ORDER BY number_lesson");
$sql->execute();
$result_day1_10 = $sql->fetchAll();
// Read
// Вывод уроков преподавателя за ПОНЕДЕЛЬНИК

// Вывод уроков преподавателя за ВТОРНИК
// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=1 ORDER BY number_lesson");
$sql->execute();
$result_day2_1 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=2 ORDER BY number_lesson");
$sql->execute();
$result_day2_2 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=3 ORDER BY number_lesson");
$sql->execute();
$result_day2_3 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=4 ORDER BY number_lesson");
$sql->execute();
$result_day2_4 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=5 ORDER BY number_lesson");
$sql->execute();
$result_day2_5 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=6 ORDER BY number_lesson");
$sql->execute();
$result_day2_6 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=7 ORDER BY number_lesson");
$sql->execute();
$result_day2_7 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=8 ORDER BY number_lesson");
$sql->execute();
$result_day2_8 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=9 ORDER BY number_lesson");
$sql->execute();
$result_day2_9 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=2 AND number_lesson=10 ORDER BY number_lesson");
$sql->execute();
$result_day2_10 = $sql->fetchAll();
// Read
// Вывод уроков преподавателя за ВТОРНИК

// Вывод уроков преподавателя за СРЕДУ
// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=1 ORDER BY number_lesson");
$sql->execute();
$result_day3_1 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=2 ORDER BY number_lesson");
$sql->execute();
$result_day3_2 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=3 ORDER BY number_lesson");
$sql->execute();
$result_day3_3 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=4 ORDER BY number_lesson");
$sql->execute();
$result_day3_4 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=5 ORDER BY number_lesson");
$sql->execute();
$result_day3_5 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=6 ORDER BY number_lesson");
$sql->execute();
$result_day3_6 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=7 ORDER BY number_lesson");
$sql->execute();
$result_day3_7 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=8 ORDER BY number_lesson");
$sql->execute();
$result_day3_8 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=9 ORDER BY number_lesson");
$sql->execute();
$result_day3_9 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=3 AND number_lesson=10 ORDER BY number_lesson");
$sql->execute();
$result_day3_10 = $sql->fetchAll();
// Read
// Вывод уроков преподавателя за СРЕДУ

// Вывод уроков преподавателя за ЧЕТВЕРГ
// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=1 ORDER BY number_lesson");
$sql->execute();
$result_day4_1 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=2 ORDER BY number_lesson");
$sql->execute();
$result_day4_2 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=3 ORDER BY number_lesson");
$sql->execute();
$result_day4_3 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=4 ORDER BY number_lesson");
$sql->execute();
$result_day4_4 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=5 ORDER BY number_lesson");
$sql->execute();
$result_day4_5 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=6 ORDER BY number_lesson");
$sql->execute();
$result_day4_6 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=7 ORDER BY number_lesson");
$sql->execute();
$result_day4_7 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=8 ORDER BY number_lesson");
$sql->execute();
$result_day4_8 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=9 ORDER BY number_lesson");
$sql->execute();
$result_day4_9 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=4 AND number_lesson=10 ORDER BY number_lesson");
$sql->execute();
$result_day4_10 = $sql->fetchAll();
// Read
// Вывод уроков преподавателя за ЧЕТВЕРГ

// Вывод уроков преподавателя за ПЯТНИЦУ
// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=1 ORDER BY number_lesson");
$sql->execute();
$result_day5_1 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=2 ORDER BY number_lesson");
$sql->execute();
$result_day5_2 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=3 ORDER BY number_lesson");
$sql->execute();
$result_day5_3 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=4 ORDER BY number_lesson");
$sql->execute();
$result_day5_4 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=5 ORDER BY number_lesson");
$sql->execute();
$result_day5_5 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=6 ORDER BY number_lesson");
$sql->execute();
$result_day5_6 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=7 ORDER BY number_lesson");
$sql->execute();
$result_day5_7 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=8 ORDER BY number_lesson");
$sql->execute();
$result_day5_8 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=9 ORDER BY number_lesson");
$sql->execute();
$result_day5_9 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=5 AND number_lesson=10 ORDER BY number_lesson");
$sql->execute();
$result_day5_10 = $sql->fetchAll();
// Read
// Вывод уроков преподавателя за ПЯТНИЦУ

// Вывод уроков преподавателя за СУББОТУ
// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=1 ORDER BY number_lesson");
$sql->execute();
$result_day6_1 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=2 ORDER BY number_lesson");
$sql->execute();
$result_day6_2 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=3 ORDER BY number_lesson");
$sql->execute();
$result_day6_3 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=4 ORDER BY number_lesson");
$sql->execute();
$result_day6_4 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=5 ORDER BY number_lesson");
$sql->execute();
$result_day6_5 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=6 ORDER BY number_lesson");
$sql->execute();
$result_day6_6 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=7 ORDER BY number_lesson");
$sql->execute();
$result_day6_7 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=8 ORDER BY number_lesson");
$sql->execute();
$result_day6_8 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=9 ORDER BY number_lesson");
$sql->execute();
$result_day6_9 = $sql->fetchAll();
// Read

// Read
$sql = $pdo->prepare("SELECT * FROM `schedule_full` WHERE teacher_id=$teacher_id AND day=6 AND number_lesson=10 ORDER BY number_lesson");
$sql->execute();
$result_day6_10 = $sql->fetchAll();
// Read
// Вывод уроков преподавателя за СУББОТУ




?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Электронное расписание занятий преподавателя</title>
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

                <h4 class="page__title">ЭЛЕКТРОННОЕ РАСПИСАНИЕ ЗАНЯТИЙ
                    <?php foreach ($result_period as $value) { ?>
                        <br>
                        На <?= $value['semester'] ?> полугодие <?= $value['period'] ?> учебного года
                    <?php } ?>
                    <br>
                    Преподаватель <? echo $result_teacher_name['teacher']; ?>
                </h4>
                <p>Понедельник</p>
                <table class="table shadow table__schedule_day1" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Номер урока</th>
                            <th style="font-weight: 200; ">Группа</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">

                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">1</td>
                            <?php foreach ($result_day1_1 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">2</td>
                            <?php foreach ($result_day1_2 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">3</td>
                            <?php foreach ($result_day1_3 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">4</td>
                            <?php foreach ($result_day1_4 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">5</td>
                            <?php foreach ($result_day1_5 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">6</td>
                            <?php foreach ($result_day1_6 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">7</td>
                            <?php foreach ($result_day1_7 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">8</td>
                            <?php foreach ($result_day1_8 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">9</td>
                            <?php foreach ($result_day1_9 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">10</td>
                            <?php foreach ($result_day1_10 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>

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

                <p>Вторник</p>
                <table class="table shadow table__schedule_day1" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Номер урока</th>
                            <th style="font-weight: 200; ">Группа</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">

                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">1</td>
                            <?php foreach ($result_day2_1 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">2</td>
                            <?php foreach ($result_day2_2 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">3</td>
                            <?php foreach ($result_day2_3 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">4</td>
                            <?php foreach ($result_day2_4 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">5</td>
                            <?php foreach ($result_day2_5 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">6</td>
                            <?php foreach ($result_day2_6 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">7</td>
                            <?php foreach ($result_day2_7 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">8</td>
                            <?php foreach ($result_day2_8 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">9</td>
                            <?php foreach ($result_day2_9 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">10</td>
                            <?php foreach ($result_day2_10 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>

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

                <p>Среда</p>
                <table class="table shadow table__schedule_day1" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Номер урока</th>
                            <th style="font-weight: 200; ">Группа</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">

                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">1</td>
                            <?php foreach ($result_day3_1 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">2</td>
                            <?php foreach ($result_day3_2 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">3</td>
                            <?php foreach ($result_day3_3 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">4</td>
                            <?php foreach ($result_day3_4 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">5</td>
                            <?php foreach ($result_day3_5 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">6</td>
                            <?php foreach ($result_day3_6 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">7</td>
                            <?php foreach ($result_day3_7 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">8</td>
                            <?php foreach ($result_day3_8 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">9</td>
                            <?php foreach ($result_day3_9 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">10</td>
                            <?php foreach ($result_day3_10 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>

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

                <p>Четверг</p>
                <table class="table shadow table__schedule_day1" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Номер урока</th>
                            <th style="font-weight: 200; ">Группа</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">

                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">1</td>
                            <?php foreach ($result_day4_1 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">2</td>
                            <?php foreach ($result_day4_2 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">3</td>
                            <?php foreach ($result_day4_3 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">4</td>
                            <?php foreach ($result_day4_4 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">5</td>
                            <?php foreach ($result_day4_5 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">6</td>
                            <?php foreach ($result_day4_6 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">7</td>
                            <?php foreach ($result_day4_7 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">8</td>
                            <?php foreach ($result_day4_8 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">9</td>
                            <?php foreach ($result_day4_9 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">10</td>
                            <?php foreach ($result_day4_10 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>

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

                <p>Пятница</p>
                <table class="table shadow table__schedule_day1" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Номер урока</th>
                            <th style="font-weight: 200; ">Группа</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">

                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">1</td>
                            <?php foreach ($result_day5_1 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">2</td>
                            <?php foreach ($result_day5_2 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">3</td>
                            <?php foreach ($result_day5_3 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">4</td>
                            <?php foreach ($result_day5_4 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">5</td>
                            <?php foreach ($result_day5_5 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">6</td>
                            <?php foreach ($result_day5_6 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">7</td>
                            <?php foreach ($result_day5_7 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">8</td>
                            <?php foreach ($result_day5_8 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">9</td>
                            <?php foreach ($result_day5_9 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">10</td>
                            <?php foreach ($result_day5_10 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>

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

                <p>Суббота</p>
                <table class="table shadow table__schedule_day1" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Номер урока</th>
                            <th style="font-weight: 200; ">Группа</th>
                            <th style="font-weight: 200; ">Время</th>
                            <th style="font-weight: 200; ">Предмет</th>
                            <th style="font-weight: 200; ">Аудитория</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">

                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">1</td>
                            <?php foreach ($result_day6_1 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">2</td>
                            <?php foreach ($result_day6_2 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">3</td>
                            <?php foreach ($result_day6_3 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">4</td>
                            <?php foreach ($result_day6_4 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">5</td>
                            <?php foreach ($result_day6_5 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">6</td>
                            <?php foreach ($result_day6_6 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">7</td>
                            <?php foreach ($result_day6_7 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">8</td>
                            <?php foreach ($result_day6_8 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">9</td>
                            <?php foreach ($result_day6_9 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>


                        <tr class="students__row">
                            <td id="nuber__students"></td>
                            <td class="note">10</td>
                            <?php foreach ($result_day6_10 as $value) { ?>
                                <td class="note shedule__group__td"><?= $value['group_kollege'] ?></td>
                                <td class="note shedule__time__td"><?= $value['time'] ?></td>
                                <td class="note shedule__lesson__td"><?= $value['lesson'] ?></td>
                                <td class="note shedule__classroom__td"><?= $value['classroom'] ?></td>
                            <?php } ?>
                        </tr>

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