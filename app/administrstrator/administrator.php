<?php
require "../db.php";
require "../config.php";
require "../func_administrator.php";
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>ПАНЕЛЬ АДМИНИСТРАТОРА</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css">
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



        <div class="row base__group__content">
            <div class="col-md-6">
                <h5 class="page__title">Реализуемые специальности</h5>
                <br>
                <table class="table shadow base__table__students" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Код специальности</th>
                            <th style="font-weight: 200;">Название специальности</th>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody id="tb_base">
                        <?php foreach ($result_speciality_info as $value) { ?>
                            <tr class="base__students__table">
                                <td id="nuber__students"></td>
                                <td class="table__students"><?= $value['number_speciality'] ?></td>
                                <td class="table__students"><?= $value['name_speciality'] ?></td>
                                <td>
                                    <a href="?edit=<?= $value['id'] ?>speciality" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?>speciality"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?>speciality" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>speciality"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?>speciality" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные специальности
                                                <?= $value['name_speciality'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>speciality" method="post">
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit__base__student__431" value="<?= $value['name_speciality'] ?>">
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
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?>speciality" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить специальность
                                                <span><?= $value['name_speciality'] ?></span> из списка
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
                                            <form action="?id=<?= $value['id'] ?>speciality" method="post">
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
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div class="add__student">
                    <p class="add__student__title">Добавить специальность <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add_number_speciality" name="add_number_speciality" value="" placeholder="Номер специальности">
                            <br>
                            <input type="text" class="form-control" id="add_name_speciality" name="add_name_speciality" value="" placeholder="Название специальности">
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add_speciality" class="btn btn-primary" id="add_speciality">Добавить</button>
                        </div>
                    </form>
                </div>
            </div>


            <div class="col-md-6">
                <h5 class="page__title">Учебные группы</h5>
                <br>
                <table class="table shadow base__table__students" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Группа</th>
                            <th style="font-weight: 200;">Специальность</th>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody id="tb_base">
                        <?php foreach ($result_group_info as $value) { ?>
                            <tr class="base__students__table">
                                <td id="nuber__students"></td>
                                <td class="table__students"><?= $value['name_study_group'] ?></td>
                                <td class="table__students"><?= $value['speciality_study_group'] ?></td>
                                <td>
                                    <a href="?edit=<?= $value['id'] ?>groups" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?>groups"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?>groups" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>groups"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModal<?= $value['id'] ?>groups" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные группы
                                                <?= $value['students_name'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>groups" method="post">
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
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить группу
                                                <span><?= $value['students_name'] ?></span> из списка
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
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div class="add__student">
                    <p class="add__student__title">Добавить учебную группу <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add_name_study_group" name="add_name_study_group" value="" placeholder="Номер группы">
                            <?php foreach ($result_speciality_info as $value) { ?>
                                <select class="add__predmet__controle" name="speciality_study_group" value="">
                                    <option value="" selected hidden>Выберите специаьность</option>
                                    <option value="<?= $value['name_speciality'] ?>"><?= $value['name_speciality'] ?></option>
                                </select>
                            <?php } ?>
                            <!-- <input type="text" class="form-control" id="speciality_study_group" name="speciality_study_group" value="" placeholder="Специальность"> -->
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add_study_group" class="btn btn-primary" id="add_study_group">Добавить</button>
                        </div>
                    </form>
                </div>
            </div>






            <div class="col-md-6" id="predmets_list">
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