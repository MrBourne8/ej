<?php
require "../db.php";
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Электронные ведомости</title>
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
        <div class="row">
            <div class="button__wrap">
                <button class="button__group" id="group__number101" title="101" name="group__number101">101</button>
                <button class="button__group" id="group__number111" title="111" name="group__number111">111</button>
                <button class="button__group" id="group__number121" title="121" name="group__number121">121</button>
                <button class="button__group" id="group__number201" title="201" name="group__number201">201</button>
                <button class="button__group" id="group__number202" title="202" name="group__number202">202</button>
                <button class="button__group" id="group__number211" title="211" name="group__number211">211</button>
                <button class="button__group" id="group__number221" title="221" name="group__number221">221</button>
                <button class="button__group" id="group__number231" title="231" name="group__number231">231</button>
                <button class="button__group" id="group__number241" title="241" name="group__number241">241</button>
                <button class="button__group" id="group__number301" title="301" name="group__number301">301</button>
                <button class="button__group" id="group__number302" title="302" name="group__number302">302</button>
                <button class="button__group" id="group__number311" title="311" name="group__number311">311</button>
                <button class="button__group" id="group__number321" title="321" name="group__number321">321</button>
                <button class="button__group" id="group__number331" title="331" name="group__number331">331</button>
                <button class="button__group" id="group__number341" title="341" name="group__number341">341</button>
                <button class="button__group" id="group__number401" title="401" name="group__number401">401</button>
                <button class="button__group" id="group__number402" title="402" name="group__number402">402</button>
                <button class="button__group" id="group__number411" title="411" name="group__number411">411</button>
                <button class="button__group" id="group__number421" title="421" name="group__number421">421</button>
                <button class="button__group" id="group__number431" title="431" name="group__number431">431</button>
                <p id="number" hidden>101</p>
            </div>
        </div>
        <div class="content">

        </div>

        <div class="start-info" id="start_info">
            <h2> Для просмотра отчета выберите месяц или группу</h2>
        </div>
    </div>
    <!-- Modal -->


    </div>
    <div>
        <p id="but" hidden>Абсолютная успеваемость: <span class="absolut__text" id="absolut">0</span></p>
        <p hidden>Качественная успеваемость: <span class="kach__text" id="kach">0</span></p>
        <p id="number__group" hidden>0</p>
        <p id="leght_st" hidden>0</p>
        <p id="number__group__base" hidden></p>
    </div>
    <hr>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <script>

    </script>
    <script src="../js/app.min.js"></script>
</body>

</html>