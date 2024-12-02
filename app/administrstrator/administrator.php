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
                <table class="table shadow base__table__speciality" style="border-collapse: collapse;">
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
                                                    <input type="text" class="form-control edit__pred" name="edit_number_speciality" value="<?= $value['number_speciality'] ?>">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit_name_speciality" value="<?= $value['name_speciality'] ?>">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="submit" name="edit_speciality" class="btn btn-primary">Обновить</button>
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
                                                <button type="submit" name="delete_speciality" class="btn btn-danger">Удалить</button>
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
                <table class="table shadow base__table__group" style="border-collapse: collapse;">
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
                                                <?= $value['name_study_group'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>groups" method="post">
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit_name_study_group" value="<?= $value['name_study_group'] ?>">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit_speciality_study_group" value="<?= $value['speciality_study_group'] ?>">
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="submit" name="edit_study_group" class="btn btn-primary">Обновить</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- DELETE MODAL -->
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?>groups" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить группу
                                                <span><?= $value['name_study_group'] ?></span> из списка
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
                                                <button type="submit" name="delete_stydy_group" class="btn btn-danger">Удалить</button>
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
                            <select class="add__predmet__controle" name="speciality_study_group" value="">
                                <?php foreach ($result_speciality_info as $value) { ?>
                                    <option value="" selected hidden>Выберите специаьность</option>
                                    <option value="<?= $value['name_speciality'] ?>"><?= $value['name_speciality'] ?></option>
                                <?php } ?>
                            </select>

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
                <h5 class="page__title">Информация о текущем периоде обучения</h5>
                <br>
                <?= $success_pred ?>
                <table class="table shadow table__base__predmers" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Семестр</th>
                            <th style="font-weight: 200;">Учебный год</th>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_current_period as $value) { ?>
                            <tr>
                                <td id="nuber__predmetsts"></td>
                                <td class="table__predmets"><?= $value['current_semester'] ?></td>
                                <td><?= $value['current_year'] ?></td>
                                <td>
                                    <a href="?edit=<?= $value['id'] ?>period" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModalPred<?= $value['id'] ?>period"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?>period" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModalPred<?= $value['id'] ?>period"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade" id="editModalPred<?= $value['id'] ?>period" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать период обучения</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>period" method="post">
                                                <div class="form-group">
                                                    <input type="text" class="form-control edit__pred" name="edit_current_semester" value="<?= $value['current_semester'] ?>">
                                                    <input type="text" class="form-control edit__pred" name="edit_current_year" value="<?= $value['current_year'] ?>">
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
                            <div class="modal fade" id="deleteModalPred<?= $value['id'] ?>period" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>После удаления данные будут не доступны!</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                            <form action="?id=<?= $value['id'] ?>period" method="post">
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
                        </tr>
                    </tfoot>
                </table>
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