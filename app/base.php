<?php
require "func_base.php";
require "func_date.php";
require "db.php";
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Общая база групп</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="css/app.min.css">
</head>

<body>

    <header>
        <div class="container">
            <?php
            include 'includes/title.php';
            ?>
            <div class="header__wellcome">
                <?php
                if (isset($_SESSION['logged_user'])) : ?>
                <!-- Приветствие авторизованного пользователя -->
                <?php
                    include 'includes/wellcome.php';
                    ?>
                <!-- Приветствие авторизованного пользователя -->
            </div>
        </div>
    </header>

    <div class="container">
        <div class="row base__group__wrap">
            <h4 class="base__grop__title">Общая информация по группам и классным руководителям</h4>
        </div>
        <hr>
        <div class="row base__group__content">
            <div class="col-md-6">
                <h5 class="page__title">Классные руководители</h5>
                <br>
                <?= $success_stud ?>
                <table class="table shadow" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Группа</th>
                            <th style="font-weight: 200;">Классный руководитель</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_group_info as $value) { ?>
                        <tr>
                            <td id="nuber__students"></td>
                            <td class="table__students"><?= $value['group_name'] ?></td>
                            <td class="table__students"><?= $value['mentor_name'] ?></td>
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
                                        <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="add__student__input"
                                                    name="edit_group_name" value="<?= $value['group_name'] ?>"
                                                    placeholder="Группа">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="add__student__input"
                                                    name="edit_mentor_name" value="<?= $value['mentor_name'] ?>"
                                                    placeholder="Классный руководитель(ФИО)">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-dismiss="modal">Отмена</button>
                                                <button type="submit" name="edit__info__submit"
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
                                        <h5 class="modal-title" id="exampleModalLabel">Удалить данные из списка</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>После удаления данные будут не доступны!</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Отмена</button>
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <button type="submit" name="delete_info_submit"
                                                class="btn btn-danger">Удалить</button>
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
                <div class="add__info">
                    <p class="add__student__title">Группу <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_group_name"
                                value="" placeholder="Группа">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_mentor_name"
                                value="" placeholder="Классный руководитель(ФИО)">
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add__info__submit" class="btn btn-primary"
                                id="add__info__submit">Добавить</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-md-6">
                <h5 class="page__title">Посещения</h5>
                <br>
                <table class="table shadow" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">ФИ</th>
                            <th style="font-weight: 200;">Дата посещения</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_date as $value) { ?>
                        <tr>
                            <td></td>
                            <td><?= $value['login'] ?></td>
                            <td><?= $value['dates'] ?></td>
                        </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>



            <div class="col-md-6">
                <h5 class="page__title">Преподаватели для выставления в БРС</h5>
                <br>
                <?= $success_stud ?>
                <table class="table shadow" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Группа</th>
                            <th style="font-weight: 200;">Классный руководитель</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_group_info as $value) { ?>
                        <tr>
                            <td id="nuber__students"></td>
                            <td class="table__students"><?= $value['group_name'] ?></td>
                            <td class="table__students"><?= $value['mentor_name'] ?></td>
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
                                        <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="add__student__input"
                                                    name="edit_group_name" value="<?= $value['group_name'] ?>"
                                                    placeholder="Группа">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="add__student__input"
                                                    name="edit_mentor_name" value="<?= $value['mentor_name'] ?>"
                                                    placeholder="Классный руководитель(ФИО)">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-dismiss="modal">Отмена</button>
                                                <button type="submit" name="edit__info__submit"
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
                                        <h5 class="modal-title" id="exampleModalLabel">Удалить данные из списка</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>После удаления данные будут не доступны!</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Отмена</button>
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <button type="submit" name="delete_info_submit"
                                                class="btn btn-danger">Удалить</button>
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
                <div class="add__info">
                    <p class="add__student__title">Группу <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_group_name"
                                value="" placeholder="Группа">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_mentor_name"
                                value="" placeholder="Классный руководитель(ФИО)">
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add__info__submit" class="btn btn-primary"
                                id="add__info__submit">Добавить</button>
                        </div>
                    </form>
                </div>
            </div>





            <div class="col-md-6" hidden>
                <h4>Текущий период отчета</h4>
                <?= $success_stud ?>
                <table class="table shadow" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Год обучения</th>
                            <th style="font-weight: 200;">Семестр</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($result_period as $value) { ?>
                        <tr>
                            <td id="number"></td>
                            <td class="table__students"><?= $value['period'] ?></td>
                            <td class="table__students"><?= $value['semester'] ?></td>
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
                                        <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="add__student__input"
                                                    name="edit_group_name" value="<?= $value['group_name'] ?>"
                                                    placeholder="Группа">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="add__student__input"
                                                    name="edit_mentor_name" value="<?= $value['mentor_name'] ?>"
                                                    placeholder="Классный руководитель(ФИО)">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-dismiss="modal">Отмена</button>
                                                <button type="submit" name="edit__info__submit"
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
                                        <h5 class="modal-title" id="exampleModalLabel">Удалить данные из списка</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>После удаления данные будут не доступны!</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Отмена</button>
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <button type="submit" name="delete_info_submit"
                                                class="btn btn-danger">Удалить</button>
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
                <div class="add__info">
                    <p class="add__student__title">Группу <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_group_name"
                                value="" placeholder="ID">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_mentor_name"
                                value="" placeholder="Преподаватель">
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add__info__submit" class="btn btn-primary"
                                id="add__info__submit">Добавить</button>
                        </div>
                    </form>
                </div>






                <div class="add__info">
                    <p class="add__student__title">Группу <i class="fas fa-level-down-alt"></i></i></p>
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_group_name"
                                value="" placeholder="Группа">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="add__student__input" name="add_mentor_name"
                                value="" placeholder="Классный руководитель(ФИО)">
                        </div>
                        <hr>
                        <div>
                            <button type="submit" name="add__info__submit" class="btn btn-primary"
                                id="add__info__submit">Добавить</button>
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
                    include 'includes/footer.php';
    ?>

    <?php else : ?>
    <?php
                    include 'includes/not_autorise.php';
    ?>
    <?php endif; ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <script src="js/app.min.js"></script>
</body>

</html>