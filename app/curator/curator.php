<?php
require "../db.php";
require "../config.php";
require "../func_curator.php";


$user_id = $_SESSION['logged_user']->id;
$curator_group = $_SESSION['logged_user']->curator_group;
$user_role = $_SESSION['logged_user']->role;

if ($user_id == 70) {
    $table = 'notes101';
    $result_base = 'students_101';
    $group = 101;
};

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>МОЯ ГРУППА</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
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

                <button class="btn btn-success mb-1" data-toggle="modal" data-target="#Modal"><i class="fa fa-user-plus" title="Добавить студента"></i> Добавить студента</button>
                <h4 class="page__title">Общие сведения об обучающихся</h4>
                <table class="table shadow table__students" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark thead__fixed">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">ФИО</th>
                            <th style="font-weight: 200;">Дата рождения</th>
                            <th style="font-weight: 200;">Пол</th>
                            <th style="font-weight: 200;">Телефон</th>
                            <th style="font-weight: 200;">ФИО мамы</th>
                            <th style="font-weight: 200;">ФИО папы</th>
                            <th style="font-weight: 200;">Домашний адрес</th>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result_stydents as $value) { ?>
                            <tr class="students__row">
                                <td id="nuber__students"></td>
                                <td class="name_students"><?= $value['surname_student'] ?> <?= $value['name_student'] ?> <?= $value['patronymic_student'] ?></td>
                                <td ><?= $value['birth_student'] ?></td>
                                <td ><?= $value['gender_student'] ?></td>
                                <td ><?= $value['phone_student'] ?></td>
                                <td ><?= $value['surname_mom'] ?> <?= $value['name_mom'] ?> <?= $value['patronymic_mom'] ?></td>
                                <td ><?= $value['surname_father'] ?> <?= $value['name_father'] ?> <?= $value['patronymic_father'] ?></td>
                                <td ><?= $value['registration_student'] ?></td>
                                <td class="action">
                                    <a href="?edit=<?= $value['id'] ?>edit_student" class="btn btn-success btn-sm btn_ed" title="Редактировать" data-toggle="modal" data-target="#editModal<?= $value['id'] ?>edit_student"><i class="fa fa-edit"></i></a>
                                    <a href="?delete=<?= $value['id'] ?>delete_student" class="btn btn-danger btn-sm" title="Удалить" data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>delete_student"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>

                            <!-- Modal Edit-->
                            <div class="modal fade edit__pred__modal" id="editModal<?= $value['id'] ?>edit_student" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Редактировать данные студента
                                                <?= $value['surname_student'] ?> <?= $value['name_student'] ?> <?= $value['patronymic_student'] ?></h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="?id=<?= $value['id'] ?>" method="post">
                                                <h5>Данные о студенте</h5>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Фамилия</p>
                                                    <input type="text" name="edit_surname_student" value="<?= $value['surname_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Имя</p>
                                                    <input type="text" name="edit_name_student" value="<?= $value['name_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Отчество</p>
                                                    <input type="text" name="edit_patronymic_student" value="<?= $value['patronymic_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Дата рождения</p>
                                                    <input type="text" name="edit_birth_student" value="<?= $value['birth_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Телефон</p>
                                                    <input type="text" name="edit_phone_student" value="<?= $value['phone_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Пол</p>
                                                    <input type="text" name="edit_gender_student" value="<?= $value['gender_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Адрес по прописке</p>
                                                    <input type="text" name="edit_registration_student" value="<?= $value['registration_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Адрес фактического проживания</p>
                                                    <input type="text" name="edit_adress_student" value="<?= $value['adress_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Занятость во внеурочное время</p>
                                                    <input type="text" name="edit_hobbies_student" value="<?= $value['hobbies_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Группа здоровья</p>
                                                    <input type="text" name="edit_health_group_student" value="<?= $value['health_group_student'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Текущая учебная группа</p>
                                                    <input type="text" name="edit_student_group" value="<?= $value['student_group'] ?>">
                                                </div>
                                                <hr>
                                                <h5>Данные о родителях</h5>
                                                <h5>Мать:</h5>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Фамилия</p>
                                                    <input type="text" name="edit_surname_mom" value="<?= $value['surname_mom'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Имя</p>
                                                    <input type="text" name="edit_name_mom" value="<?= $value['name_mom'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Отчество</p>
                                                    <input type="text" name="edit_patronymic_mom" value="<?= $value['patronymic_mom'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Телефон</p>
                                                    <input type="text" name="edit_phone_mom" value="<?= $value['phone_mom'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Место работы, должность</p>
                                                    <input type="text" name="edit_job_mom" value="<?= $value['job_mom'] ?>">
                                                </div>
                                                <h5>Отец:</h5>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Фамилия</p>
                                                    <input type="text" name="edit_surname_father" value="<?= $value['surname_father'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Имя</p>
                                                    <input type="text" name="edit_name_father" value="<?= $value['name_father'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Отчество</p>
                                                    <input type="text" name="edit_patronymic_father" value="<?= $value['patronymic_father'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Телефон</p>
                                                    <input type="text" name="edit_phone_father" value="<?= $value['phone_father'] ?>">
                                                </div>
                                                <div class="form-group edit__notes">
                                                    <p class="edit__pred__name">Место работы, должность</p>
                                                    <input type="text" name="edit_job_father" value="<?= $value['job_father'] ?>">
                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                                    <button type="submit" name="edit_student" class="btn btn-primary">Обновить</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- DELETE MODAL -->
                            <div class="modal fade" id="deleteModal<?= $value['id'] ?>delete_student" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content shadow">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Удалить студента
                                                <span><?= $value['name_student'] ?> <?= $value['surname_student'] ?> <?= $value['patronymic_student'] ?></span>
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
                                            <form action="?id=<?= $value['id'] ?>delete_student" method="post">
                                                <button type="submit" name="delete_student" class="btn btn-danger">Удалить</button>
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
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">

                    <div class="col-md-6">

                        <div class="print__block">
                            <button class="btn btn-primary print__page" onClick="window.print()">
                                <i class="bi bi-printer-fill"></i> Распечатать страницу
                            </button>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        </div>
        <!-- Modal Добавление студента -->
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
                            <div class="form-group">
                                <p>Данные о студенте</p>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Фамилия</p>
                                    <input type="text" name="surname_student" placeholder="Фимилия">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Имя</p>
                                    <input type="text" name="name_student" placeholder="Имя">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Отчество</p>
                                    <input type="text" name="patronymic_student" placeholder="Отчество">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Дата рождения</p>
                                    <input type="text" name="add_birth_student" placeholder="Дата рождения">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Телефон</p>
                                    <input type="text" name="add_phone_student" placeholder="Телефон">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Пол</p>
                                    <select name="add_gender_student">
                                        <option value="М">М</option>
                                        <option value="Ж">Ж</option>
                                    </select>
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Адрес по прописке</p>
                                    <input type="text" name="add_registration_student" placeholder="Адрес по прописке">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Адрес фактического проживания</p>
                                    <input type="text" name="add_adress_student" placeholder="Адрес фактического проживания">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Занятость во внеурочное время</p>
                                    <input type="text" name="add_hobbies_student" placeholder="Занятость во внеурочное время">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Группа здоровья</p>
                                    <input type="text" name="add_health_group_student" placeholder="Группа здоровья">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Текущая учебная группа</p>
                                    <input type="text" name="add_student_group" value="<?php echo $curator_group; ?>">
                                </div>
                                <hr>
                                <div class="form-group edit__notes">
                                    <h5 class="modal-title">Данные о родителях</h5>
                                    <p>Мать</p>
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Фамилия</p>
                                    <input type="text" name="add_surname_mom" placeholder="Фимилия">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Имя</p>
                                    <input type="text" name="add_name_mom" placeholder="Имя">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Отчество</p>
                                    <input type="text" name="add_patronymic_mom" placeholder="Отчество">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Телефон</p>
                                    <input type="text" name="add_phone_mom" placeholder="Телефон">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Место работы, должность</p>
                                    <input type="text" name="add_job_mom" placeholder="Место работы, должность">
                                </div>
                                <div class="form-group edit__notes">
                                    <p>Отец</p>
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Фамилия</p>
                                    <input type="text" name="add_surname_father" placeholder="Фимилия">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Имя</p>
                                    <input type="text" name="add_name_father" placeholder="Имя">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Отчество</p>
                                    <input type="text" name="add_patronymic_father" placeholder="Отчество">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Телефон</p>
                                    <input type="text" name="add_phone_father" placeholder="Телефон">
                                </div>
                                <div class="form-group edit__notes">
                                    <p class="edit__pred__name">Место работы, должность</p>
                                    <input type="text" name="add_job_father" placeholder="Место работы, должность">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                                    <button type="submit" name="add_student" class="btn btn-primary">Добавить</button>
                                </div>
                                <input type="text" name="curator_group" value="<?php echo $curator_group; ?>">
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