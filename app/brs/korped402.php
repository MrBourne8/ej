<?php
// require "../func341.php";
require "../db.php";
require "../config.php";

$students = $_POST['student_name'];
$sem_3 = $_POST['sem_3'];
$sem_4 = $_POST['sem_4'];
$sem_5 = $_POST['sem_5'];
$sem_6 = $_POST['sem_6'];
$sem_7 = $_POST['sem_7'];
$ekz = $_POST['ekz'];
$final = $_POST['final__mark__pm03__341'];

$get_id = $_GET['id'];

// Create
if (isset($_POST['submit'])) {
    $sql = ("INSERT INTO `korped_402`(`student_name`, `sem_3`, `sem_4`, `sem_5`, `sem_6`, `sem_7`, `ekz`, `final`) VALUES(?,?,?,?,?,?,?,?)");
    $query = $pdo->prepare($sql);
    $query->execute([$students, $sem_3, $sem_4, $sem_5, $sem_6, $sem_7, $ekz, $final]);
    $success = '<div class="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>Данные успешно отправлены!</strong> Вы можете закрыть это сообщение.
	  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    <span aria-hidden="true">&times;</span>
	  </button>
	</div>';
};
// Create

// Read
$sql = $pdo->prepare("SELECT * FROM `korped_402`");
$sql->execute();
$result_rus_341 = $sql->fetchAll();
// Read



// Update
$edit_sem_3 = $_POST['edit_sem_3'];
$edit_sem_4 = $_POST['edit_sem_4'];
$edit_sem_5 = $_POST['edit_sem_5'];
$edit_sem_6 = $_POST['edit_sem_6'];
$edit_sem_7 = $_POST['edit_sem_7'];
$edit_ekz = $_POST['edit_ekz'];
$edit_final = $_POST['edit__final__mark__pm03__341'];


if (isset($_POST['edit-submit'])) {
    $sqll = "UPDATE korped_402 SET sem_3=?, sem_4=?, sem_5=?, sem_6=?, sem_7=?, ekz=?, final=? WHERE id=?";
    $querys = $pdo->prepare($sqll);
    $querys->execute([$edit_sem_3, $edit_sem_4, $edit_sem_5, $edit_sem_6, $edit_sem_7, $edit_ekz, $edit_final, $get_id]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}

// Update

// DELETE
if (isset($_POST['delete_submit_pm03_341'])) {
    $sql = "DELETE FROM korped_402 WHERE id=?";
    $query = $pdo->prepare($sql);
    $query->execute([$get_id]);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
// DELETE

// Read
$sql = $pdo->prepare("SELECT * FROM `students_402`");
$sql->execute();
$result_base_401 = $sql->fetchAll();
// Read



$user_id = $_SESSION['logged_user']->id;


?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Коррекционная и специальная педагогика</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="../css/app.min.css">

    <style>
        @media print {

            /* Стиль для печати */
            .container {
                width: 1700px !important;
            }

            .table__modules {
                width: 1200px;
            }

            .brs__butons-block {
                display: none;
            }

            .print__hidden {
                display: none;
            }

            table {
                width: 1100px !important;
            }

            tr {
                height: 20px;
            }

            body {
                font-size: 10px !important;
            }

            footer {
                display: none;
            }

            h1,
            h2,
            p {
                color: #000;
                /* Черный цвет текста */
            }

            .max {
                display: none;
            }
        }

        @page :left {
            margin: 0.2cm;
            /* Отступы для всех левых страниц */
        }

        @page :right {
            margin: 0.2cm;
            /* Отступы для всех правых страниц */
        }
    </style>
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
                <h4 class="page__title">Коррекционная и специальная педагогика 402 группа
                    <br>
                    2022 - 2023 учебный год
                </h4>
                <?= $success ?>
                <button class="btn btn-success mb-1 brs__add__student" data-toggle="modal" data-target="#Modal"><i class="fa fa-user-plus" title="Добавить студента"></i></button>
                <table class="table shadow mehtod_rus_341 table__modules" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr>
                            <td style="width: 60px;"></td>
                            <td>ФИ</td>
                            <!-- <td style="width: 100px;">МДК 04.01 VII семестр</td> -->
                            <!-- <td style="width: 100px;">МДК 04.01 VIII семестр</td> -->
                            <td style="width: 100px;">VII семестр</td>
                            <td style="width: 100px;">VIII семестр</td>
                            <td style="width: 100px;">ЭКЗАМЕН</td>
                            <td style="width: 100px;">ИТОГ</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_rus_341 as $value) { ?>
                            <tr>
                                <td class="nuber__students" id="nuber__students"></td>
                                <td class="table__students">
                                    <p class="table__students__name">
                                        <?= $value['student_name'] ?>
                                    </p>
                                </td>
                                <!-- <td class="sem_3 ">
                                    <p class="mark_rus_341"><?= $value['sem_3'] ?></p>
                                </td> -->
                                <!-- <td class="sem_4 ">
                                    <p class="mark_rus_341"><?= $value['sem_4'] ?></p>
                                </td>
                                <td class="sem_5">
                                    <p class="mark_rus_341"><?= $value['sem_5'] ?></p>
                                </td> -->
                                <td class="sem_6">
                                    <p class="mark_rus_341"><?= $value['sem_6'] ?></p>
                                </td>
                                <td class="sem_7">
                                    <p class="mark_rus_341"><?= $value['sem_7'] ?></p>
                                </td>
                                <td class="ekz">
                                    <p class="mark_rus_341"><?= $value['ekz'] ?></p>
                                </td>
                                <td>
                                    <p class="final_rus_341 final__mark"><?= $value['final'] ?></p>
                                </td>
                                <td class="print__hidden">
                                    <a href="?edit=<?= $value['id'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?>"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?>" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные
                                                <?= $value['predmet'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <hr>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>" id="?id=<?= $value['id'] ?>" method="post">
                                                <div class="form-group">
                                                    <p class="edit__name" name="edit_students" value="<?= $value['student_name'] ?>"><?= $value['student_name'] ?>
                                                    </p>
                                                    <input type="text" id="edit_students" hidden name="edit_students" value="<?= $value['student_name'] ?>">
                                                    <input type="text" id="edit_predmet" hidden name="edit_predmet" value="<?= $value['pred_name'] ?>">
                                                    <input type="text" id="edit_id_predm" hidden name="edit_id_predm" value="<?= $value['pred_id'] ?>">
                                                </div>
                                                <!-- <div class="form-group edit__brs">
                                                    <p>IV СЕМЕСТР 2021-2022г <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Отметка за 3 семестр
                                                            </span></a></p>
                                                    <input class="form-control edit_sem_3_341 mark__sem__3" name="edit_sem_3" value="<?= $value['sem_3'] ?>" type="number" step="1" placeholder="0" min="2" max="5" title="Отметка за 3 семестр">
                                                </div> -->
                                                <!-- <hr>
                                                <div class="form-group edit__brs">
                                                    <p>МДК 04.01 VII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Отметка за 4 семестр
                                                            </span></a></p>
                                                    <input class="form-control edit_sem_4_341 edit__mark__pm03__341" name="edit_sem_4" value="<?= $value['sem_4'] ?>" type="number" step="1" placeholder="0" min="2" max="5" title="Отметка за 4 семестр">
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>МДК 04.01 VIII семестр<a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Отметка за 5 семестр
                                                            </span></a></p>
                                                    <input class="form-control edit_sem_5_341 edit__mark__pm03__341" name="edit_sem_5" type="number" value="<?= $value['sem_5'] ?>" step="1" placeholder="0" min="2" max="5" title="Отметка за 5 семестр">
                                                </div>
                                                <hr> -->
                                                <div class="form-group edit__brs">
                                                    <p>VII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Отметка за 6 семестр
                                                            </span></a></p>
                                                    <input class="form-control edit_sem_6_401 edit__mark__pm03__341" name="edit_sem_6" value="<?= $value['sem_6'] ?>" type="number" step="1" placeholder="0" min="2" max="5" title="Отметка за 6 семестр">
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>VIII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Отметка за 7 семестр
                                                            </span></a></p>
                                                    <input class="form-control edit_sem_7_401 edit__mark__pm03__341" name="edit_sem_7" value="<?= $value['sem_7'] ?>" type="number" step="1" placeholder="0" min="2" max="5" title="Отметка за 7 семестр">
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>ЭКЗАМЕН <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Отметка за экзамен
                                                            </span></a></p>
                                                    <input class="form-control edit_exam_401 edit__mark__pm03__341" name="edit_ekz" value="<?= $value['ekz'] ?>" type="number" step="1" placeholder="0" min="2" max="5" title="Отметка за экзамен">
                                                </div>
                                                <input type="text" class="edit__final__mark__pm03__401" name="edit__final__mark__pm03__341" value="" hidden>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="submit" name="edit-submit" class="btn btn-primary edit__student__final edit__student__final__401__pm03">Обновить</button>
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
                                            <p>ВНИМАНИЕ! После удаления данные будут не доступны</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                            <form action="?id=<?= $value['id'] ?>" method="post">
                                                <button type="submit" name="delete_submit_pm03_341" class="btn btn-danger brs__delete">Удалить</button>
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
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div>
                    <button class="max hidden" id="print" onclick="print()">Распечатать
                        таблицу</button>
                </div>
            </div>
        </div>

        <div class="row" hidden>
            <div class="article" hidden>
            </div>
            <p id="but"><span class="absolut__text" id="absolut">0</span></p>
            <p><span class="kach__text" id="kach">0</span></p>
            <p id="number__group" hidden>331</p>
            <p id="leght_st" hidden></p>
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
            </div>
            <div class="hor" id="hor">
            </div>
            <div class="otl" id="otl">
            </div>
        </div>

        <!-- Modal -->
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
                            <div class="form-group add__student__brs">
                                <p>Студент:</p>
                                <select class="select__students__final__mark select__rus" name="student_name" id="add_student_brs331">
                                    <?php foreach ($result_base_401 as $value) { ?>
                                        <option value="0" select="selected" hidden>Выберите стдента</option>
                                        <option class="add__student__name" value="<?= $value['students_name'] ?>"><?= $value['students_name'] ?>
                                        </option>
                                    <?php } ?>
                                </select>
                                <p class="brs__warning" hidden>
                                    ВНИМАНИЕ! Данный студент уже есть в таблице.
                                </p>
                                <input type="text" hidden id="add_id_predm" name="add_id_predm" value="0">
                                <input type="text" hidden id="add_name_predm" name="add_name_predm" value="0">
                            </div>
                            <hr>
                            <!-- <div class="form-group edit__brs">
                                <p>МДК 04.01 VII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                        <span class='tip'>
                                            Отметка за 3 семестр
                                        </span></a></p>
                                <input class="form-control sem__3__pm03__341 semestr__mark" id="average__current_1" name="sem_3" value="2" type="number" step="1" placeholder="0" min="2" max="5" title="Результат КН">
                                <input type="text" class="summ__average__current_1" id="summ__average__current_1" value="0" hidden>
                            </div> -->
                            <!-- <hr>
                            <div class="form-group edit__brs">
                                <p>МДК 04.01 VII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                        <span class='tip'>
                                            Отметка за 4 семестр
                                        </span></a></p>
                                <input class="form-control sem__4__pm03__341 semestr__mark" id="average__current_1" name="sem_4" value="2" type="number" step="1" placeholder="0" min="2" max="5" title="Результат КН">
                                <input type="text" class="summ__average__current_1" id="summ__average__current_1" value="0" hidden>
                            </div>
                            <hr>
                            <div>
                                <div class="form-group edit__brs">
                                    <p>МДК 04.01 VIII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                            <span class='tip'>
                                                Отметка за 5 семестр
                                            </span></a></p>
                                    <input class="form-control sem__5__pm03__341 semestr__mark" id="average__current_1" name="sem_5" value="2" type="number" step="1" placeholder="0" min="2" max="5" title="Результат КН">
                                    <input type="text" class="summ__average__current_1" id="summ__average__current_1" value="0" hidden>
                                </div> -->
                                <hr>
                                <div>
                                    <div class="form-group edit__brs">
                                        <p>VII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                <span class='tip'>
                                                    Отметка за 7 семестр
                                                </span></a></p>
                                        <input class="form-control sem__6__pm03__341 semestr__mark" id="average__current_1" name="sem_6" value="2" type="number" step="1" placeholder="0" min="2" max="5" title="Результат КН">
                                        <input type="text" class="summ__average__current_1" id="summ__average__current_1" value="0" hidden>
                                    </div>
                                    <hr>
                                    <div class="form-group edit__brs">
                                        <p>VIII семестр <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                <span class='tip'>
                                                    Отметка за 8 семестр
                                                </span></a></p>
                                        <input class="form-control sem__7__pm03__341 semestr__mark" id="average__current_1" name="sem_7" value="2" type="number" step="1" placeholder="0" min="2" max="5" title="Результат КН">
                                        <input type="text" class="summ__average__current_1" id="summ__average__current_1" value="0" hidden>
                                    </div>
                                    <hr>
                                    <div class="form-group edit__brs">
                                        <p>ЭКЗАМЕН <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                <span class='tip'>
                                                    Отметка за экзамен
                                                </span></a></p>
                                        <input class="form-control ekz__pm03__341 exam__mark" id="average__current_1" name="ekz" value="2" type="number" step="1" placeholder="0" min="2" max="5" title="Результат КН">
                                        <input type="text" class="summ__average__current_1" id="summ__average__current_1" value="0" hidden>
                                    </div>
                                    <hr>

                                    <input type="text" class="final__mark__pm03__401 form__final__mark" name="final__mark__pm03__341" value="" hidden>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                    <button type="submit" name="submit" class="btn btn-primary add__student__final" disabled>Добавить</button>
                                </div>
                            </div>
                        </form>

                        <!-- Блоки с нужными классами -->
                        <div class="pred_neud"></div>
                        <!-- Блоки с нужными классами -->

                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <!-- Modal -->
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