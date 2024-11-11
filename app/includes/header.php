<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>ЭЛЕКТРОННЫЙ ЖУРНАЛ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="../css/app.min.css">
</head>

<body>

    <header>
        <div class="container">
            <div class="header__wrap">
                <div class="logo" style="font-weight: bold;">
                    <h1>ЭЛЕКТРОННЫЙ ЖУРНАЛ <span>beta</span></h1>
                    <p>Карасукский педагогический колледж</p>
                </div>
            </div>
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
    <?php else : ?>
    <a href="login.php">Вход</a>
    <a href="singup.php">Регистрация</a>
    <?php endif; ?>