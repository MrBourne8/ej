<div class="welcome__user">
    <p id="welcome__user__text">Здравствуйте, <?php echo $_SESSION['logged_user']->login ?>!</p>
    <img src="../images/dest/user_avatar.svg" alt="User Avatar" class="user__avatar">
    <a href="/logout.php" title="Выход"><i class="fas fa-sign-out-alt header__exit"></i></a>

    <p id="id__user" name="user_id" hidden><?php echo $_SESSION['logged_user']->id ?></p>
    <p id="role__user" name="" hidden><?php echo $_SESSION['logged_user']->role ?></p>
    <p id="curator_group" name="" hidden><?php echo $_SESSION['logged_user']->curator_group ?></p>
    <p id="dates" hidden>
        <?php
        date_default_timezone_set('Asia/Novosibirsk');
        $date = date("F j, Y, g:i a");
        echo $date;
        ?>
    </p>

</div>
<br>
<div class="header__nav">
    <a href="#" class="menu-link ">
        <span></span>
    </a>
    <nav class="menu">
        <ul class="topmenu main-menu">

            <li>
                <a href="/index.php" class="nav__li"><i class="fas fa-school"></i> Главная</a>
            </li>

            <li id="nav__groups">
                <a href="../administrstrator/administrator.php" class="active groups">АДМИНИСТРАТОР</a>
            </li>

            <li id="nav__groups">
                <a href="../curator/curator.php" class="active groups">Моя группа</a>
            </li>

        </ul>
    </nav>
</div>