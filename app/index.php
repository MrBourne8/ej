<?php
require "db.php";
// include 'func.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>ЭЛЕКТРОННЫЙ ЖУРНАЛ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/favicon.ico">

    <link rel="apple-touch-icon" sizes="57x57" href="images/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="images/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="images/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link rel="manifest" href="manifest.json">

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" контент="yes">
    <meta name="application-name" content="ЭДОК">
    <meta name="apple-mobile-web-app-title" content="ЭДОК">
    <meta name="msapplication-starturl" content="https://shcnaider.ru/index.php">
    <meta name="viewport" content="width=width-device-width, initial-scale=1, slim-to-fit=no">

    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('sw.js').then(function(registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }

        if ('serviceWorker' in navigator && 'PushManager' in window) {
            console.log('Service Worker and Push are supported');

            navigator.serviceWorker.register('sw.js')
                .then(function(swReg) {
                    console.log('Service Worker is registered', swReg);

                    swRegistration = swReg;
                })
                .catch(function(error) {
                    console.error('Service Worker Error', error);
                });
        } else {
            console.warn('Push messaging is not supported');
            pushButton.textContent = 'Push Not Supported';
        }
    </script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/app.min.css">
</head>

<body>
    <header>
        <div class="container">
            <!-- Логотип и название  -->
            <?php
            include 'includes/title.php';
            ?>
            <!-- Логотип и название  -->
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

    <section class="main-section">
        <div class="container">
            <img src="images/dest/main_img.svg" alt="Главная страница" class="main_img">
        </div>
    </section>

    <?php
                    include 'includes/footer.php';
    ?>

<?php else : ?>
    <?php
                    include 'includes/not_autorise.php';
    ?>
<?php endif; ?>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>
<!-- <script src="js/app.min.js"></script> -->
<script src="js/drop.js"></script>
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