<?php
require 'db.php';

$data = $_POST;
if (isset($data['do_login'])) {
    $errors = array();
    $user = R::findOne('users', "login = ?", array($data['login']));
    if ($user) {
        if (password_verify($data['password'], $user->password)) {
            // Авторизован пользователь
            $_SESSION['logged_user'] = $user;

            header('Location: /');
            exit;
        } else {
            $errors[] = 'Не верный пароль';
        }
    } else {
        $errors[] = 'Пользователь не найден';
    }

    if (!empty($errors)) {
        echo '<div style="color: red;">' . array_shift($errors) . '</div><hr>';
    }
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Вход</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="../css/app.min.css">
</head>

<body>


    <div class="container">

        <?php
        include 'includes/title.php';
        ?>

        <div class="login__wrap">
            <form class="login__form" action="/login.php" method="POST">
                <div class="login__form__header">
                    <h4>Вход в систему</h4> 
                    <i class="bi bi-box-arrow-in-right login__form__title-icon"></i>
                </div>
                <hr>
                <div class="login__input">
                    <strong>Логин</strong>
                    <input type="text" name="login" value="<?php echo @$data['login']; ?>">
                </div>
                <div class="login__input">
                    <strong>Пароль</strong>
                    <input type="password" name="password" value="<?php echo @$data['password']; ?>">
                </div>

                <button type="submit" name="do_login" class="login__button">Войти <i class="bi bi-box-arrow-in-right"></i></button>

            </form>
        </div>

    </div>

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