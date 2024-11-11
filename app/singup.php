<?php
require 'db.php';

$data = $_POST;
if (isset($data['do_singup'])) {
    $errors = array();
    if (trim($data['login']) == '') {
        $errors[] = 'Введите логин (ФИО)!';
    }
    if (trim($data['phone']) == '') {
        $errors[] = 'Введите телефон!';
    }
    if (trim($data['password']) == '') {
        $errors[] = 'Введите пароль!';
    }
    if (trim($data['password_2']) != $data['password']) {
        $errors[] = 'Повторный пароль введен не верно!';
    }

    if (R::count('users', "login = ?", array($data['login'])) > 0) {
        $errors[] = 'Пользователь с таким логином уже зарегистрирован!';
    }

    if (R::count('users', "number = ?", array($data['number'])) > 0) {
        $errors[] = 'Пользователь с таким телефоном уже зарегистрирован!';
    }

    if (empty($errors)) {
        $user = R::dispense('users');
        $user->login = $data['login'];
        $user->phone = $data['phone'];
        $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
        R::store($user);
        echo '<div style="color: green;">Вы успешно зарегистрированны! Можете <a href="login.php">войти</a> в систему.</div><hr>';
    } else {
        echo '<div style="color: red;">' . array_shift($errors) . '</div><hr>';
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Отчет классного руководителя 401 группа</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="../css/app.min.css">
</head>

<body>


    <div class="container">

        <?php
        include 'includes/title.php';
        ?>

        <div class="singin__wrap">
            <form class="singin__form" action="/singup.php" method="POST">
                <h4>Регистрация в системе</h4>
                <hr>
                <div class="singin__input">
                    <strong>Ваш логин (ФИО)</strong>
                    <input type="text" name="login" class="input_name" value="<?php echo @$data['login']; ?>">
                </div>

                <div class="singin__input">
                    <strong>Ваш телефон</strong>
                    <input type="text" name="phone" class="input_phone" value="<?php echo @$data['phone']; ?>">
                </div>

                <div class="singin__input">
                    <strong>Ваш пароль</strong>
                    <input type="password" name="password" value="<?php echo @$data['password']; ?>">
                </div>

                <div class="singin__input">
                    <strong>Ваш пароль еще раз</strong>
                    <input type="password" name="password_2" value="<?php echo @$data['password_2']; ?>">
                </div>

                <button type="submit" class="singin__button" name="do_singup">Зарегистрироваться</button>

            </form>
        </div>

    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
        $(function() {
            $(".input_name").inputmask("Aa{2,15} Aa{2,15} Aa{2,15}");
            $(".input_phone").inputmask("9 (999) 999-9999");
        });
    </script>
    <script src="../js/app.min.js"></script>
</body>

</html>