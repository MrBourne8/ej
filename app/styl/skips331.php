<?php
require "../func101.php";
require "../func_base.php";
require "../db.php";
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Пропуски занятий 331 группа</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
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
                <h4 class="page__title">Пропуски занятий 331 группы
                    <?php foreach ($result_group331 as $value) { ?>
                    <br> <?= $value['mentor_name'] ?>
                    <?php } ?>
                </h4>
                <?= $success ?>
                <button class="btn btn-success mb-1" data-toggle="modal" data-target="#Modal"><i class="fa fa-user-plus"
                        title="Добавить студента"></i></button>
                <table class="table shadow table__report" style="border-collapse: collapse;" id="table">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Дата</th>
                            <?php foreach ($result_base_101 as $value) { ?>
                            <th title="<?= $value['students_name'] ?>">
                                <p class="predmet__title"><?= $value['students_name'] ?></p>
                            </th>
                            <?php } ?>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_skips as $value) { ?>
                        <tr>
                            <td id="nuber__students"></td>
                            <td class="table__students"><?= $value['date'] ?></td>
                            <td class="note" hidden><?= $value['st1_u'] ?></td>
                            <td class="note" hidden><?= $value['st1_n'] ?></td>
                            <td class="note" hidden><?= $value['st2_u'] ?></td>
                            <td class="note" hidden><?= $value['st2_n'] ?></td>
                            <td class="note" hidden><?= $value['st3_u'] ?></td>
                            <td class="note" hidden><?= $value['st3_n'] ?></td>
                            <td class="note" hidden><?= $value['st4_u'] ?></td>
                            <td class="note" hidden><?= $value['st4_n'] ?></td>
                            <td class="note" hidden><?= $value['st5_u'] ?></td>
                            <td class="note" hidden><?= $value['st5_n'] ?></td>
                            <td class="note" hidden><?= $value['st6_u'] ?></td>
                            <td class="note" hidden><?= $value['st6_n'] ?></td>
                            <td class="note" hidden><?= $value['st7_u'] ?></td>
                            <td class="note" hidden><?= $value['st7_n'] ?></td>
                            <td class="note" hidden><?= $value['st8_u'] ?></td>
                            <td class="note" hidden><?= $value['st8_n'] ?></td>
                            <td class="note" hidden><?= $value['st9_u'] ?></td>
                            <td class="note" hidden><?= $value['st9_n'] ?></td>
                            <td class="note" hidden><?= $value['st10_u'] ?></td>
                            <td class="note" hidden><?= $value['st10_n'] ?></td>
                            <td class="note" hidden><?= $value['st11_u'] ?></td>
                            <td class="note" hidden><?= $value['st11_n'] ?></td>
                            <td class="note" hidden><?= $value['st12_u'] ?></td>
                            <td class="note" hidden><?= $value['st12_n'] ?></td>
                            <td class="note" hidden><?= $value['st13_u'] ?></td>
                            <td class="note" hidden><?= $value['st13_n'] ?></td>
                            <td class="note" hidden><?= $value['st14_u'] ?></td>
                            <td class="note" hidden><?= $value['st14_n'] ?></td
                            <td class="note" hidden><?= $value['st15_u'] ?></td>
                            <td class="note" hidden><?= $value['st15_n'] ?></td>
                            <td class="note" hidden><?= $value['st16_u'] ?></td>
                            <td class="note" hidden><?= $value['st16_n'] ?></td>
                            <td class="note" hidden><?= $value['st17_u'] ?></td>
                            <td class="note" hidden><?= $value['st17_n'] ?></td>
                            <td class="note" hidden><?= $value['st18_u'] ?></td>
                            <td class="note" hidden><?= $value['st18_n'] ?></td>
                            <td class="note" hidden><?= $value['st19_u'] ?></td>
                            <td class="note" hidden><?= $value['st19_n'] ?></td>
                            <td class="note" hidden><?= $value['st20_u'] ?></td>
                            <td class="note" hidden><?= $value['st20_n'] ?></td>
                            <td class="note" hidden><?= $value['st21_u'] ?></td>
                            <td class="note" hidden><?= $value['st21_n'] ?></td>
                            <td class="note" hidden><?= $value['st22_u'] ?></td>
                            <td class="note" hidden><?= $value['st22_n'] ?></td>
                            <td class="note" hidden><?= $value['st23_u'] ?></td>
                            <td class="note" hidden><?= $value['st23_n'] ?></td>
                            <td class="note" hidden><?= $value['st24_u'] ?></td>
                            <td class="note" hidden><?= $value['st24_n'] ?></td>
                            <td class="note" hidden><?= $value['st25_u'] ?></td>
                            <td class="note" hidden><?= $value['st25_n'] ?></td>
                            <td class="note" hidden><?= $value['st26_u'] ?></td>
                            <td class="note" hidden><?= $value['st26_n'] ?></td>
                            <td class="note" hidden><?= $value['st27_u'] ?></td>
                            <td class="note" hidden><?= $value['st27_n'] ?></td>
                            <td class="note" hidden><?= $value['st28_u'] ?></td>
                            <td class="note" hidden><?= $value['st28_n'] ?></td>
                            <td class="note" hidden><?= $value['st29_u'] ?></td>
                            <td class="note" hidden><?= $value['st29_n'] ?></td>
                            <td class="note" hidden><?= $value['st30_u'] ?></td>
                            <td class="note" hidden><?= $value['st30_n'] ?></td>
                            <td class="note" hidden><?= $value['st31_u'] ?></td>
                            <td class="note" hidden><?= $value['st31_n'] ?></td>
                            <td class="note" hidden><?= $value['st32_u'] ?></td>
                            <td class="note" hidden><?= $value['st32_n'] ?></td>
                            
                            <td>
                                <a href="?edit=<?= $value['id'] ?>" class="btn btn-success btn-sm btn_ed"
                                    title="Редактировать" data-toggle="modal"
                                    data-target="#editModal<?= $value['id'] ?>"><i class="fa fa-edit"></i></a>
                                <a href="?delete=<?= $value['id'] ?>" class="btn btn-danger btn-sm" title="Удалить"
                                    data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>"><i
                                        class="fa fa-trash"></i></a>
                            </td>
                        </tr>
                        <!-- Modal Edit-->
                        <div class="modal fade" id="editModal<?= $value['id'] ?>" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <p class="edit__name" name="edit_students"
                                                    value="<?= $value['students'] ?>"><?= $value['students'] ?></p>
                                                <input type="text" class="form-control edit__pred" hidden
                                                    name="edit_students" value="<?= $value['students'] ?>">
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_01">
                                                <p>Иностранный язык</p>
                                                <select class="edit__note__digit" name="edit_pred_01"
                                                    value="<?= $value['pred_01'] ?>" id="">
                                                    <option value="<?= $value['pred_01'] ?>" selected hidden>
                                                        <?= $value['pred_01'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_02">
                                                <p>Физическая культура</p>
                                                <select class="edit__note__digit" name="edit_pred_02"
                                                    value="<?= $value['pred_02'] ?>" id="">
                                                    <option value="<?= $value['pred_02'] ?>" selected hidden>
                                                        <?= $value['pred_02'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_03">
                                                <p>Психология общения</p>
                                                <select class="edit__note__digit" name="edit_pred_03"
                                                    value="<?= $value['pred_03'] ?>" id="">
                                                    <option value="<?= $value['pred_03'] ?>" selected hidden>
                                                        <?= $value['pred_03'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_04">
                                                <p>Элементы высшей математики</p>
                                                <select class="edit__note__digit" name="edit_pred_04"
                                                    value="<?= $value['pred_04'] ?>" id="">
                                                    <option value="<?= $value['pred_04'] ?>" selected hidden>
                                                        <?= $value['pred_04'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_05">
                                                <p>Теория вероятностей и математическая статистика</p>
                                                <select class="edit__note__digit" name="edit_pred_05"
                                                    value="<?= $value['pred_05'] ?>" id="">
                                                    <option value="<?= $value['pred_05'] ?>" selected hidden>
                                                        <?= $value['pred_05'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_06">
                                                <p>Архитектура компьютерных систем</p>
                                                <select class="edit__note__digit" name="edit_pred_06"
                                                    value="<?= $value['pred_06'] ?>" id="">
                                                    <option value="<?= $value['pred_06'] ?>" selected hidden>
                                                        <?= $value['pred_06'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_07">
                                                <p>Основы исследовательской и проектной деятельности</p>
                                                <select class="edit__note__digit" name="edit_pred_07"
                                                    value="<?= $value['pred_07'] ?>" id="">
                                                    <option value="<?= $value['pred_07'] ?>" selected hidden>
                                                        <?= $value['pred_07'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_08">
                                                <p>МДК.01.01 Системное программирование</p>
                                                <select class="edit__note__digit" name="edit_pred_08"
                                                    value="<?= $value['pred_08'] ?>" id="">
                                                    <option value="<?= $value['pred_08'] ?>" selected hidden>
                                                        <?= $value['pred_08'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_09">
                                                <p>МДК.01.02 Прикладное программирование</p>
                                                <select class="edit__note__digit" name="edit_pred_09"
                                                    value="<?= $value['pred_09'] ?>" id="">
                                                    <option value="<?= $value['pred_09'] ?>" selected hidden>
                                                        <?= $value['pred_09'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_10">
                                                <p>МДК.02.01 Технология разработки и защиты БД</p>
                                                <select class="edit__note__digit" name="edit_pred_10"
                                                    value="<?= $value['pred_010'] ?>" id="">
                                                    <option value="<?= $value['pred_10'] ?>" selected hidden>
                                                        <?= $value['pred_10'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_11">
                                                <p>Технология разработки ПО</p>
                                                <select class="edit__note__digit" name="edit_pred_11"
                                                    value="<?= $value['pred_011'] ?>" id="">
                                                    <option value="<?= $value['pred_11'] ?>" selected hidden>
                                                        <?= $value['pred_11'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_12">
                                                <p>Инструментальные средства разработки ПО</p>
                                                <select class="edit__note__digit" name="edit_pred_12"
                                                    value="<?= $value['pred_012'] ?>" id="">
                                                    <option value="<?= $value['pred_12'] ?>" selected hidden>
                                                        <?= $value['pred_12'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_13">
                                                <p>Документирование и сертификация</p>
                                                <select class="edit__note__digit" name="edit_pred_13"
                                                    value="<?= $value['pred_013'] ?>" id="">
                                                    <option value="<?= $value['pred_13'] ?>" selected hidden>
                                                        <?= $value['pred_13'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_14">
                                                <p>ПМ.02 Разработка и администрирование БД</p>
                                                <select class="edit__note__digit" name="edit_pred_14"
                                                    value="<?= $value['pred_014'] ?>" id="">
                                                    <option value="<?= $value['pred_14'] ?>" selected hidden>
                                                        <?= $value['pred_14'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-dismiss="modal">Отмена</button>
                                                <button type="submit" name="edit-submit"
                                                    class="btn btn-primary">Обновить</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- DELETE MODAL -->
                        <div class="modal fade" id="deleteModal<?= $value['id'] ?>" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Отмена</button>
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <button type="submit" name="delete_submit"
                                                class="btn btn-danger">Удалить</button>
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
                            <p id="number__group" hidden>331</p>
                            <p id="leght_st" hidden></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="copy__link__block">
                            <p class="copy__link__title">Ссылка на таблицу:</p>
                            <input type="text" id="myInput" value="https://shcnaider.ru/tablegroup/table331.php">
                            <div class="copy__link">
                                <a class="sup" id="copy__link" tabindex="1" href="#">Скопировать ссылку
                                    <span class='tip' id="copy__tip">
                                        Скопировать ссылку
                                    </span></a>
                            </div>
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
                        <h5 class="modal-title">Добавить дату</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <input type="date" placeholder="Дата" name="date">
                            </div>
                            <hr>
                            <?php foreach ($result_base_101 as $value) { ?>
                            <div class="form-group add__predmet">
                                <p><?= $value['students_name'] ?></p>
                                <div>
                                    <label>УВ</label>
                                    <input type="number" class="skip_u" min="0" max="12" value="0">
                                    <label>НУ</label>
                                    <input type="number" class="skip_n" min="0" max="12" value="0">
                                </div>
                            </div>
                            <hr>
                            <?php } ?>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="submit" name="submit_enter_skips" class="btn btn-primary">Добавить</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal Добавление студента -->



        <?php
                    include '../includes/footer.php';
        ?>

        <?php else : ?>
        <?php
                    include '../includes/not_autorise.php';
        ?>
        <?php endif; ?>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>

        <script src="../js/app.min.js"></script>
</body>

</html>