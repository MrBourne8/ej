<?php
require "../func_base.php";
require "../db.php";

$user_id = $_SESSION['logged_user']->id;

if ($user_id == 12) {
    $table = 'krreport431';
};
if ($user_id == 14) {
    $table = 'krreport211';
};
if ($user_id == 16) {
    $table = 'krreport411';
};
if ($user_id == 17) {
    $table = 'krreport302';
};
if ($user_id == 18) {
    $table = 'krreport211';
};
if ($user_id == 19) {
    $table = 'krreport341';
};
if ($user_id == 20) {
    $table = 'krreport331';
};
if ($user_id == 21) {
    $table = 'krreport421';
};
if ($user_id == 23) {
    $table = 'krreport402';
};
if ($user_id == 24) {
    $table = 'krreport401';
};
if ($user_id == 25) {
    $table = 'krreport311';
};
if ($user_id == 28) {
    $table = 'krreport202';
};
if ($user_id == 29) {
    $table = 'krreport101';
};
if ($user_id == 30) {
    $table = 'krreport111';
};
if ($user_id == 31) {
    $table = 'krreport201';
};
if ($user_id == 33) {
    $table = 'krreport221';
};
if ($user_id == 34) {
    $table = 'krreport241';
};
if ($user_id == 35) {
    $table = 'krreport321';
};
if ($user_id == 27) {
    $table = 'krreport121';
};


$sql = $pdo->prepare("SELECT * FROM `$table`");
$sql->execute();
$result_lk = $sql->fetchAll();
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Личный кабинет</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
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

    <section>
        <div class="container">
            <div class="tabs">
                <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
                <label for="tab-btn-1"><i class="bi bi-calendar3"></i> Данные пользователя</label>
                <input type="radio" name="tab-btn" id="tab-btn-2" value="">
                <label for="tab-btn-2">Вкладка 2</label>
                <input type="radio" name="tab-btn" id="tab-btn-3" value="">
                <label for="tab-btn-3">Вкладка 3</label>
                <input type="radio" name="tab-btn" id="tab-btn-4" value="">
                <label for="tab-btn-4">Вкладка 4</label>

                <div id="content-1">
                    <div class="user__photo">
                        <img src="../images/dest/user_avatar.svg" alt="Фото пользователя">
                    </div>
                    <p class="tab-content__text"><span>ФИО:</span> <?php echo $_SESSION['logged_user']->surname ?>
                        <?php echo $_SESSION['logged_user']->name ?> <?php echo $_SESSION['logged_user']->patronymic ?>
                    </p>
                    <p class="tab-content__text"><span>Телефон:</span> <?php echo $_SESSION['logged_user']->phone ?></p>
                    <p class="tab-content__text"><span>Должность:</span>
                        <?php echo $_SESSION['logged_user']->function ?></p>
                    <p class="tab-content__text"><span>Стаж работы в ОУ:</span> </p>
                    <p class="tab-content__text"><span>Квалификационная категория:</span>
                        <?php echo $_SESSION['logged_user']->qualification ?>
                    </p>

                    <a href="?edit=<?= $value['id'] ?>" class="btn btn-success btn-sm btn_ed" title="Редактировать"
                        data-toggle="modal" data-target="#editModal<?= $value['id'] ?>"><i class="fa fa-edit"></i>
                        Редактировать данные</a>
                </div>
                <div id="content-2">
                    Содержимое 2...
                </div>
                <div id="content-3">
                    Содержимое 3...
                </div>
                <div id="content-4">
                    Содержимое 4...
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <!-- Modal Edit-->
        <div class="modal fade" id="editModal<?= $value['id'] ?>" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal__reportkr modal-dialog-centered" role="document">
                <div class="modal-content shadow">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Редактировать данные</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post">
                            <input type="text" name="current_user_id" id="current_user_id" hidden
                                value="<?= $table; ?>" />
                            <div class="form-group edit__parametr" id="edit__note_01">
                                <p>
                                    Фамилия
                                </p>
                                <input type="text" name="" id="" value="<?= $value['monthe'] ?>">
                            </div>
                            <div class="form-group edit__parametr" id="edit__note_01">
                                <p>
                                    Имя
                                </p>
                                <input type="text" name="" id="" value="<?= $value['monthe'] ?>">
                            </div>
                            <div class="form-group edit__parametr" id="edit__note_01">
                                <p>
                                    Отчество
                                </p>
                                <input type="text" name="" id="" value="<?= $value['monthe'] ?>">
                            </div>
                            <div class="form-group edit__parametr" id="edit__note_01">
                                <p>
                                    Телефон
                                </p>
                                <input type="text" name="" id="" value="<?= $value['monthe'] ?>">
                            </div>
                            <div class="form-group edit__parametr" id="edit__note_01">
                                <p>
                                    Стаж работы в ОУ
                                </p>
                                <input type="text" name="" id="" value="<?= $value['monthe'] ?>">
                            </div>
                            <div class="form-group edit__parametr" id="edit__note_01">
                                <p>
                                    Фото пользователя
                                </p>
                                <input type="file" name="myimage">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
    </div>

    <div class="container">
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
                                <select class="select__students" name="students" id="select__students">
                                    <?php foreach ($result_base_101 as $value) { ?>
                                    <option value="<?= $value['students_name'] ?>"><?= $value['students_name'] ?>
                                    </option>
                                    <?php } ?>
                                </select>
                            </div>
                            <hr>
                            <?php foreach ($result_base_predmet_101 as $value) { ?>
                            <div class="form-group add__predmet">
                                <p><?= $value['predmets_name'] ?></p>
                                <select name="<?= $value['predmet_code'] ?>" id="">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="" selected></option>
                                </select>
                            </div>
                            <hr>
                            <?php } ?>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="submit" name="submit" class="btn btn-primary">Добавить</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal Добавление студента -->
    </div>

    <div id="absolut"></div>
    <div id="number__group"></div>
    <div id="kach"></div>
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