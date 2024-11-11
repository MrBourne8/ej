<?php
require "../func_base.php";
require "../percent.php";
require "../db.php";
require "../config.php";

$user_id = $_SESSION['logged_user']->id;

$table = 'schedule_full';

// Read
$sql = $pdo->prepare("SELECT * FROM `$table` WHERE day=1 AND group_kollege=101 ORDER BY number_lesson");
$sql->execute();
$result_schedule_day1_101 = $sql->fetchAll();

$sql = $pdo->prepare("SELECT * FROM `$table` WHERE day=1 AND group_kollege=111 ORDER BY number_lesson");
$sql->execute();
$result_schedule_day1_111 = $sql->fetchAll();

$sql = $pdo->prepare("SELECT * FROM `$table` WHERE day=1 AND group_kollege=121 ORDER BY number_lesson");
$sql->execute();
$result_schedule_day1_121 = $sql->fetchAll();

$sql = $pdo->prepare("SELECT * FROM `$table` WHERE day=1 AND group_kollege=201 ORDER BY number_lesson");
$sql->execute();
$result_schedule_day1_201 = $sql->fetchAll();
// Read


// Read
$sql = $pdo->prepare("SELECT * FROM `teachers` ORDER BY teacher_name ASC");
$sql->execute();
$result_teachers = $sql->fetchAll();
// Read


?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Электронное расписание занятий</title>
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
                <h2 class="schedule__title">Для просмотра расписания выберите группу или преподавателя</h2>
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="text-center">Группы</h3>
                        <div>
                            <h4 class="text-center">Преподавание в начальных классах</h4>
                            <div class="schedule__speciality">
                                <a href="schedule_101.php?tablesched=101" class="schеdule__groups__link schеdule__groups__link__101" title="101" target="blank">
                                    101 группа
                                </a>
                                <a href="schedule_101.php?tablesched=201" class="schеdule__groups__link schеdule__groups__link__201" title="101" target="blank">
                                    201 группа
                                </a>
                                <a href="schedule_101.php?tablesched=202" class="schеdule__groups__link schеdule__groups__link__202" title="101" target="blank">
                                    202 группа
                                </a>
                                <a href="schedule_101.php?tablesched=301" class="schеdule__groups__link schеdule__groups__link__301" title="101" target="blank">
                                    301 группа
                                </a>
                                <a href="schedule_101.php?tablesched=302" class="schеdule__groups__link schеdule__groups__link__302" title="101" target="blank">
                                    302 группа
                                </a>
                                <a href="schedule_101.php?tablesched=401" class="schеdule__groups__link schеdule__groups__link__401" title="101" target="blank">
                                    401 группа
                                </a>
                                <a href="schedule_101.php?tablesched=402" class="schеdule__groups__link schеdule__groups__link__402" title="101" target="blank">
                                    402 группа
                                </a>
                            </div>
                            <h4 class="text-center">Дошкольное образование</h4>
                            <div class="schedule__speciality">
                                <a href="schedule_101.php?tablesched=111" class="schеdule__groups__link schеdule__groups__link__111" title="111" target="blank">
                                    111 группа
                                </a>
                                <a href="schedule_101.php?tablesched=211" class="schеdule__groups__link schеdule__groups__link__211" title="101" target="blank">
                                    211 группа
                                </a>
                                <a href="schedule_101.php?tablesched=311" class="schеdule__groups__link schеdule__groups__link__311" title="101" target="blank">
                                    311 группа
                                </a>
                                <a href="schedule_101.php?tablesched=411" class="schеdule__groups__link schеdule__groups__link__411" title="101" target="blank">
                                    411 группа
                                </a>
                            </div>
                            <h4 class="text-center">Физическая культура</h4>
                            <div class="schedule__speciality">
                                <a href="schedule_101.php?tablesched=121" class="schеdule__groups__link schеdule__groups__link__121" title="101" target="blank">
                                    121 группа
                                </a>
                                <a href="schedule_101.php?tablesched=221" class="schеdule__groups__link schеdule__groups__link__221" title="101" target="blank">
                                    221 группа
                                </a>
                                <a href="schedule_101.php?tablesched=321" class="schеdule__groups__link schеdule__groups__link__321" title="101" target="blank">
                                    321 группа
                                </a>
                                <a href="schedule_101.php?tablesched=421" class="schеdule__groups__link schеdule__groups__link__421" title="101" target="blank">
                                    421 группа
                                </a>
                            </div>
                            <h4 class="text-center">Информационные системы и программирование</h4>
                            <div class="schedule__speciality">
                                <a href="schedule_101.php?tablesched=231" class="schеdule__groups__link schеdule__groups__link__231" title="101" target="blank">
                                    231 группа
                                </a>
                                <a href="schedule_101.php?tablesched=331" class="schеdule__groups__link schеdule__groups__link__331" title="101" target="blank">
                                    331 группа
                                </a>
                                <a href="schedule_101.php?tablesched=431" class="schеdule__groups__link schеdule__groups__link__431" title="101" target="blank">
                                    431 группа
                                </a>
                            </div>

                            <h4 class="text-center">Педагогика дополнительного образования</h4>
                            <div class="schedule__speciality">
                                <a href="schedule_101.php?tablesched=241" class="schеdule__groups__link schеdule__groups__link__241" title="101" target="blank">
                                    241 группа
                                </a>
                                <a href="schedule_101.php?tablesched=341" class="schеdule__groups__link schеdule__groups__link__341" title="101" target="blank">
                                    341 группа
                                </a>
                                <a href="schedule_101.php?tablesched=441" class="schеdule__groups__link schеdule__groups__link__441" title="101" target="blank">
                                    441 группа
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="text-center">Преподаватели</h3>
                        <div class="schedule__teachers">
                            <?php foreach ($result_teachers as $value) { ?>
                                <a href="schedule_teacher.php?teacher=<?= $value['teacher_id'] ?>" class="teacher__link" target="blank"><?= $value['teacher_name'] ?></a>
                            <?php } ?>
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