<?php
// require "../func.php";
require "../brs.php";
require "../db.php";


$user_id = $_SESSION['logged_user']->id;


?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Таблица БРС</title>
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
                <h5 class="text-center print__hidden">Выберите группу</h5>
                <form method="post">
                    <div class="brs__butons-block">
                        <button class="btn local101 brs__button-group" name="local101">101</button>
                        <button class="btn local111 brs__button-group" name="local111">111</button>
                        <button class="btn local121 brs__button-group" name="local121">121</button>
                        <button class="btn local131 brs__button-group" name="local131">131</button>
                        <button class="btn local201 brs__button-group" name="local201">201</button>
                        <button class="btn local202 brs__button-group" name="local202">202</button>
                        <button class="btn local211 brs__button-group" name="local211">211</button>
                        <button class="btn local221 brs__button-group" name="local221">221</button>
                        <button class="btn local231 brs__button-group" name="local231">231</button>
                        <button class="btn local241 brs__button-group" name="local241">241</button>
                        <button class="btn local301 brs__button-group" name="local301">301</button>
                        <button class="btn local302 brs__button-group" name="local302">302</button>
                        <button class="btn local311 brs__button-group" name="local311">311</button>
                        <button class="btn local321 brs__button-group" name="local321">321</button>
                        <button class="btn local331 brs__button-group" name="local331">331</button>
                        <button class="btn local341 brs__button-group" name="local341">341</button>
                        <button class="btn local401 brs__button-group" name="local401">401</button>
                        <button class="btn local402 brs__button-group" name="local402">402</button>
                        <button class="btn local411 brs__button-group" name="local411">411</button>
                        <button class="btn local421 brs__button-group" name="local421">421</button>
                        <button class="btn local431 brs__button-group" name="local431">431</button>
                        <button class="btn local441 brs__button-group" name="local441">441</button>
                    </div>
                </form>
                <h4 class="page__title">Таблица БРС <span class="brs__group-title">331</span> группы</h4>
                <?= $success ?>
                <div>
                    <form class="form__predmet__brs" method="post">
                        <div>
                            <h5>Предмет</h5>
                            <input type="text" class="brs__group" name="brs__group" value="101" hidden>
                            <select class="select__predmet" name="opt" id="vrem_id" onchange="this.form.submit()">
                                <option value="Выберите предмет из списка">Выберите предмет из списка</option>
                                <?php foreach ($result_base_predmet_brs as $value) { ?>
                                    <option value="<?= $value['id_pred'] ?>" <?= isset($_POST) && $_POST["opt"] == $value['id_pred'] ? " selected=\"selected\"" : "" ?>>
                                        <?= $value['predmets_name'] ?></option>
                                <?php } ?>
                            </select>
                        </div>
                        <div class="hours__block">
                        </div>
                    </form>
                </div>
                <button class="btn btn-success mb-1 brs__add__student" data-toggle="modal" data-target="#Modal"><i class="fa fa-user-plus" title="Добавить студента"></i></button>
                <table class="table shadow brs__table" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr>
                            <td></td>
                            <td></td>
                            <td colspan="2" style="width: 100px;">Текущая успеваемость</td>
                            <td colspan="2" style="width: 100px;">Контрольные работы</td>
                            <td colspan="8">Занятия</td>
                            <td rowspan="2" colspan="2">
                                <p style="margin: 0; font-weight: 100;">Всего</p>
                            </td>
                            <td rowspan="2" colspan="2">
                                <p style="margin: 0; font-weight: 100; width: 60px;">Отметка</p>
                            </td>
                            <td rowspan="2" colspan="1">
                                <p style="margin: 0; writing-mode: vertical-rl; font-weight: 100;">Зачет</p>
                                </p>
                            </td>
                            <td rowspan="2" colspan="1">
                                <p style="margin: 0; writing-mode: vertical-rl; font-weight: 100;">Баллы</p>
                            </td>
                            <td rowspan="2" colspan="1">
                                <p style="margin: 0; writing-mode: vertical-rl; font-weight: 100;">Итоговая отметка</p>
                            </td>
                            <td class="print__hidden"></td>
                        </tr>
                        <tr height="50">
                            <td style="font-weight: 200;">№</td>
                            <th style="font-weight: 200; min-width: 200px;">Студент</th>
                            <td colspan="2">СА отметок</td>
                            <td colspan="2">СА отметок</td>
                            <td colspan="2">Всего</td>
                            <td colspan="2">Посещенные</td>
                            <td colspan="2">Без опозданий</td>
                            <td colspan="2">Активные</td>
                            <td style="font-weight: 200;" class="print__hidden">Действия</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_brs as $value) { ?>
                            <tr>
                                <td class="nuber__students" id="nuber__students"></td>
                                <td class="table__students">
                                    <p class="table__students__name">
                                        <?= $value['student_name'] ?>
                                    </p>
                                </td>
                                <td class="average__current_1"><?= $value['average__current_1'] ?></td>
                                <td class="average__current_2"><?= $value['average__current_2'] ?></td>
                                <td class="average__control_1"><?= $value['average__control_1'] ?></td>
                                <td class="average__control_2"><?= $value['average__control_2'] ?></td>
                                <td class="all_1"><?= $value['all_1'] ?></td>
                                <td class="all_2"><?= $value['all_2'] ?></td>
                                <td class="visited_1"><?= $value['visited_1'] ?></td>
                                <td class="visited_2"><?= $value['visited_2'] ?></td>
                                <td class="not_delay_1"><?= $value['not_delay_1'] ?></td>
                                <td class="not_delay_2"><?= $value['not_delay_2'] ?></td>
                                <td class="active_1"><?= $value['active_1'] ?></td>
                                <td class="active_2"><?= $value['active_2'] ?></td>
                                <td class="summ__all1"><?= $value['summ__all1'] ?></td>
                                <td class="summ__all2"><?= $value['summ__all2'] ?></td>
                                <td class="summ__note1"><?= $value['summ__note1'] ?></td>
                                <td class="summ__note2"><?= $value['summ__note2'] ?></td>
                                <td class="controle"><?= $value['controle'] ?></td>
                                <td class="summ__full__balls"><?= $value['summ__full__balls'] ?></td>
                                <td class="final_grade"><?= $value['final_grade'] ?></td>
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
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные БРС
                                                <?= $value['predmet'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="edit__modal__calc">
                                            <p>
                                                Калькулятор среднего арифметического
                                            </p>
                                            <div class="calc__main__block">
                                                <input type="text" class="calc__brs__red" placeholder="Введите отметки без пробелов">
                                                <div class="calc__brs__block">
                                                    <p>Результат: </p>
                                                    <p class="result__calc__red"> 0</p>
                                                </div>
                                            </div>
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
                                                <div class="form-group edit__brs">
                                                    <p>Текущая успеваемость <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Среднее арифметическое текущих отметок по предмету, кроме
                                                                контрольных работ.
                                                            </span></a></p>
                                                    <input class="form-control edit_average__current_1" id="edit_average__current_1" name="average__current_1" value="<?= $value['average__current_1'] ?>" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат КН">
                                                    <input type="text" class="summ__average__current_1" id="edit_summ__average__current_1" value="0" hidden>
                                                    <input class="form-control edit_average__current_2" id="edit_average__current_2" name="average__current_2" value="<?= $value['average__current_2'] ?>" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат семестра">
                                                    <input type="text" class="summ__average__current_2" id="edit_summ__average__current_2" value="0" hidden>
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>Контрольные работы <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Среднее арифметическое отметок за контрольны работы по
                                                                предмету.
                                                            </span></a></p>
                                                    <input class="form-control" id="edit_average__control_1" name="average__control_1" value="<?= $value['average__control_1'] ?>" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат КН">
                                                    <input type="text" class="edit_summ__average__control_1" id="edit_summ__average__control_1" value="0" hidden>
                                                    <input class="form-control" id="edit_average__control_2" name="average__control_2" value="<?= $value['average__control_2'] ?>" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат семестра">
                                                    <input type="text" class="edit_summ__average__control_2" id="edit_summ__average__control_2" value="0" hidden>
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>Всего часов за период <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Количество часов за период.
                                                            </span></a></p>
                                                    <input class="form-control edit_hour_1" name="edit_hour_1" id="edit_hour_1" type="number" value="<?= $value['all_1'] ?>" step="1" min="0" max="99" title="Количество часов за КН">
                                                    <input class="form-control edit_hour_2" name="edit_hour_2" id="edit_hour_2" type="number" value="<?= $value['all_2'] ?>" step="1" min="0" max="99" title="Количество часов после КН">
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>Посещенные <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Количество посещенных занятий за период.
                                                            </span></a></p>
                                                    <input class="form-control" id="edit_visited_1" name="visited_1" value="<?= $value['visited_1'] ?>" type="number" step="1" placeholder="0" min="0" max="99" title="Результат КН">
                                                    <input type="text" class="summ__visited_1" id="edit_summ__visited_1" value="0" hidden>
                                                    <input class="form-control" id="edit_visited_2" name="visited_2" value="<?= $value['visited_2'] ?>" type="number" step="1" placeholder="0" min="0" max="99" title="Результат семестра">
                                                    <input type="text" class="summ__visited_1" id="edit_summ__visited_2" value="0" hidden>
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>Без опозданий <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Количество занятий без опозданий.
                                                            </span></a></p>
                                                    <input class="form-control" id="edit_not_delay_1" name="not_delay_1" value="<?= $value['not_delay_1'] ?>" type="number" step="1" placeholder="0" min="0" max="99" title="Результат КН">
                                                    <input type="text" class="summ__not_delay_1" id="edit_summ__not_delay_1" value="0" hidden>
                                                    <input class="form-control" id="edit_not_delay_2" name="not_delay_2" value="<?= $value['not_delay_2'] ?>" type="number" step="1" placeholder="0" min="0" max="99" title="Результат семестра">
                                                    <input type="text" class="summ__not_delay_1" id="edit_summ__not_delay_2" value="0" hidden>
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>Активные <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Количество занятий, на которых студент проявлял активность.
                                                            </span></a></p>
                                                    <input class="form-control" id="edit_active_1" name="active_1" value="<?= $value['active_1'] ?>" type="number" step="1" placeholder="0" min="0" max="99" title="Результат КН">
                                                    <input type="text" class="summ__not_active_1" id="edit_summ__not_active_1" value="0" hidden>
                                                    <input class="form-control" id="edit_active_2" name="active_2" value="<?= $value['active_2'] ?>" type="number" step="1" placeholder="0" min="0" max="99" title="Результат семестра">
                                                    <input type="text" class="summ__not_active_1" id="edit_summ__not_active_2" value="0" hidden>
                                                </div>
                                                <hr>
                                                <div class="form-group edit__brs">
                                                    <p>Контроль по итогу семестра <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                                            <span class='tip'>
                                                                Количество баллов за контроль по итогу семестра.
                                                                В данную ячейку заносится количество баллов, соответствующее отметке:
                                                                <br>
                                                                "5" - 84-100
                                                                <br>
                                                                "4" - 70-83
                                                                <br>
                                                                "3" - 60-69
                                                                <br>
                                                                "2" - менее 60
                                                            </span></a></p>
                                                    <input type="text" class="form-control" id="edit_controle" name="edit_controle" value="<?= $value['controle'] ?>" placeholder="СА отметок">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="button" id="edit_submit_brs331" class="btn btn-primary">Обновить</button>
                                                    <p class="qwe" id="qwe" hidden><?= $value['id'] ?></p>
                                                </div>

                                                <input type="text" class="edit_summ__all1" id="edit_summ__all1" value="0" hidden>
                                                <input type="text" class="edit_summ__all2" id="edit_summ__all2" value="0" hidden>

                                                <input type="text" class="edit_summ__note1" id="edit_summ__note1" value="0" hidden>
                                                <input type="text" class="edit_summ__note2" id="edit_summ__note2" value="0" hidden>

                                                <input type="text" class="edit_summ__full__balls" id="edit_summ__full__balls" value="0" hidden>

                                                <input type="text" class="edit_final__note" id="edit_final__note" value="0" hidden>
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
                                                <input type="text" class="delite__group" name="delite__group" hidden>
                                                <button type="submit" name="delete_submit" class="btn btn-danger brs__delete">Удалить</button>
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
                                <select class="add_student_brs331" name="add_student_brs331" id="add_student_brs331">
                                    <?php foreach ($result_base_stud as $value) { ?>
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
                            <div>
                                <p>
                                    Калькулятор среднего арифметического
                                </p>
                                <div class="calc__main__block">
                                    <input type="text" class="calc__brs" placeholder="Введите отметки без пробелов">
                                    <div class="calc__brs__block">
                                        <p>Результат: </p>
                                        <p class="result__calc"> 0</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group edit__brs">
                                <p>Текущая успеваемость <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                        <span class='tip'>
                                            Среднее арифметическое текущих отметок по предмету, кроме контрольных работ.
                                        </span></a></p>
                                <input class="form-control" id="average__current_1" name="average__current_1" value="2" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат КН">
                                <input type="text" class="summ__average__current_1" id="summ__average__current_1" value="0" hidden>
                                <input class="form-control" id="average__current_2" name="average__current_2" value="2" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат семестра">
                                <input type="text" class="summ__average__current_2" id="summ__average__current_2" value="0" hidden>
                            </div>
                            <hr>
                            <div class="form-group edit__brs">
                                <p>Контрольные работы <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                        <span class='tip'>
                                            Среднее арифметическое отметок за контрольны работы по предмету.
                                        </span></a></p>
                                <input class="form-control" id="average__control_1" name="average__control_1" value="2" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат КН">
                                <input type="text" class="summ__average__control_1" id="summ__average__control_1" value="0" hidden>
                                <input class="form-control" id="average__control_2" name="average__control_2" value="2" type="number" step="0.1" placeholder="0" min="2" max="5" title="Результат семестра">
                                <input type="text" class="summ__average__control_2" id="summ__average__control_2" value="0" hidden>
                            </div>
                            <hr>
                            <div>
                                <div class="form-group edit__brs">
                                    <p>Всего часов за период <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                            <span class='tip'>
                                                Количество часов за период.
                                            </span></a></p>
                                    <input class="form-control" name="hour_1" id="hour_1" type="number" value="0" step="1" min="0" max="99" title="Количество часов за КН">
                                    <input class="form-control" name="hour_2" id="hour_2" type="number" value="0" step="1" min="0" max="99" title="Количество часов после КН">
                                </div>
                                <p id="visited__warning" class="visited__warning__hidden">ВНИМАНИЕ! Количество
                                    посещенных занятий не может превышать общее число занятий!</p>
                            </div>
                            <hr>
                            <div>
                                <div class="form-group edit__brs">
                                    <p>Посещенные <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                            <span class='tip'>
                                                Количество посещенных занятий за период.
                                            </span></a></p>
                                    <input class="form-control" id="visited_1" name="visited_1" value="0" type="number" step="1" max="99" min="0" maxlength="2" placeholder="0" title="Результат КН">
                                    <input type="text" class="summ__visited_1" id="summ__visited_1" value="0" hidden>
                                    <input class="form-control" id="visited_2" name="visited_2" value="0" type="number" step="1" placeholder="0" min="0" max="99" title="Результат семестра">
                                    <input type="text" class="summ__visited_2" id="summ__visited_2" value="0" hidden>
                                </div>
                                <p id="visited__warning" class="visited__warning__hidden">ВНИМАНИЕ! Количество
                                    посещенных занятий не может превышать общее число занятий!</p>
                            </div>
                            <hr>
                            <div class="form-group edit__brs">
                                <p>Без опозданий <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                        <span class='tip'>
                                            Количество занятий без опозданий.
                                        </span></a></p>
                                <input class="form-control" id="not_delay_1" name="not_delay_1" value="0" type="number" step="1" placeholder="0" min="0" max="99" title="Результат КН">
                                <input type="text" class="summ__not_delay_1" id="summ__not_delay_1" value="0" hidden>
                                <input class="form-control" id="not_delay_2" name="not_delay_2" value="0" type="number" step="1" placeholder="0" min="0" max="99" title="Результат семестра">
                                <input type="text" class="summ__not_delay_2" id="summ__not_delay_2" value="0" hidden>
                            </div>
                            <hr>
                            <div class="form-group edit__brs">
                                <p>Активные <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                        <span class='tip'>
                                            В эту графу преподавателем вносится общее количество положительных отметок за период
                                        </span></a></p>
                                <input class="form-control" id="active_1" name="active_1" value="0" type="number" step="1" placeholder="0" min="0" max="99" title="Результат КН">
                                <input type="text" class="summ__not_active_1" id="summ__not_active_1" value="0" hidden>
                                <input class="form-control" id="active_2" name="active_2" value="0" type="number" step="1" placeholder="0" min="0" max="99" title="Результат семестра">
                                <input type="text" class="summ__not_active_2" id="summ__not_active_2" value="0" hidden>
                            </div>
                            <hr>
                            <div class="form-group edit__brs">
                                <p>Контроль по итогу семестра <a class="support" tabindex="1" href="#"><i class="far fa-question-circle"></i>
                                        <span class='tip'>
                                            Количество баллов за контроль по итогу семестра.
                                            В данную ячейку заносится количество баллов, соответствующее отметке:
                                            <br>
                                            "5" - 84-100
                                            <br>
                                            "4" - 70-83
                                            <br>
                                            "3" - 60-69
                                            <br>
                                            "2" - менее 60
                                        </span></a></p>
                                <input type="text" class="form-control" id="controle" name="controle" value="0" placeholder="СА отметок">
                            </div>
                            <input type="text" class="summ__all1" id="summ__all1" value="0" hidden>
                            <input type="text" class="summ__all2" id="summ__all2" value="0" hidden>

                            <input type="text" class="summ__note1" id="summ__note1" value="0" hidden>
                            <input type="text" class="summ__note2" id="summ__note2" value="0" hidden>

                            <input type="text" class="summ__full__balls" id="summ__full__balls" value="0" hidden>

                            <input type="text" class="final__note" id="final__note" value="0" hidden>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="button" id="submit_studetn_brs331" class="btn btn-primary brs__add__student__form">Добавить</button>
                    </div>
                    </form>

                    <!-- Блоки с нужными классами -->
                    <div class="pred_neud"></div>
                    <!-- Блоки с нужными классами -->

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