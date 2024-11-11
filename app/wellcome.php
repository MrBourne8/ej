<div class="welcome__user">
    <p id="welcome__user__text">Здравствуйте, <?php echo $_SESSION['logged_user']->fi ?>!</p>
    <img src="../images/dest/user_avatar.svg" alt="User Avatar" class="user__avatar">
    <a href="/logout.php" title="Выход"><i class="fas fa-sign-out-alt header__exit"></i></a>

    <p id="id__user" name="user_id" hidden><?php echo $_SESSION['logged_user']->id ?></p>
    <p id="role__user" name="" hidden><?php echo $_SESSION['logged_user']->role ?></p>
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
            <li>
                <a href="#" onclick="return false;" class="active e__list">Отчеты по успеваемости<span
                        class="fa fa-angle-down st"></span></a>
                <ul class="submenu e__list__menu">
                    <li id="nav_fullreport" hidden>
                        <a href="../fullreport.php" class="nav__li menu__link">
                            <i class="fas fa-chart-bar"></i>
                            СВОДНАЯ ВЕДОМОСТЬ ПО ГРУППАМ
                        </a>
                    </li>
                    <li id="full-notes-lists" hidden>
                        <a href="/reportsgroup/report10.php" class="group__nav full-notes-lists menu__link"
                            title="Электронные ведомости преподавателей">
                            <i class="fab fa-elementor"></i> Электронные ведомости преподавателей
                        </a>
                    </li>
                    <li id="notes-list" hidden>
                        <a href="/reportsgroup/report1011.php" class="group__nav notes-list menu__link"
                            title="Электронная ведомость">
                            <i class="fab fa-elementor"></i> Электронная ведомость
                        </a>
                    </li>
                </ul>
            </li>
            <li id="nav__groups" hidden>
                <a href="#" onclick="return false;" class="active groups">ГРУППЫ<span class="fa fa-angle-down st"></span></a>
                <ul class="submenu groups__menu">
                    <li>
                        <a href="../base_group/base_group.php" class="nav__li" id="nav_fullreport menu__link">
                            <i class="fas fa-chart-bar"></i>
                            Редактировать список группы
                        </a>
                    </li>
                </ul>
            </li>
            <li id="kr">
                <a href="#" onclick="return false;" class="active curating"><i class="far fa-folder-open"></i> КУРАТОРСТВО<span
                        class="fa fa-angle-down"></span></a>
                <ul class="submenu curating__menu">
                    <li>
                        <a href="/basekr/fullkr.php" class="group__nav">
                            <i class="far fa-address-book"></i>
                            СВОДНАЯ ТАБЛИЦА ПО БАЛЛАМ
                        </a>
                    </li>
                    <li hidden>
                        <a href="/basekr/krtable.php" class="group__nav">
                            <i class="far fa-address-book"></i>
                            СВОДНАЯ ТАБЛИЦА ПО ВОПРОСАМ
                        </a>
                    </li>
                    <li>
                        <a href="/reportkr/reportsfull.php" class="report__kr" hidden>
                            <i class="far fa-address-book"></i>
                            ОТЧЕТЫ КУРАТОРОВ
                        </a>
                    </li>
                    <li id="nav__kr__report" hidden>
                        <a href="/reportkr/reportkr.php" class=" group__nav nav__report">
                            <i class="fab fa-elementor"></i> Сделать отчет
                        </a>
                    </li>
                </ul>
            </li>
            <li id="archive"><a href="#" onclick="return false;" class="active missed__lessons"><i class="fas fa-calendar-day"></i>
                    Пропуски<span class="fa fa-angle-down"></span></a>
                <ul class="submenu missed__lessons__menu">
                    <li id="nav__skips__table" hidden>
                        <a href="../skips/skipsreport.php" class="group__nav">
                            <i class="fab fa-elementor"></i> СВОДНАЯ ТАБЛИЦА ПРОПУСКОВ</a>
                    </li>
                    <li id="nav__skips" hidden>
                        <a href="../skips/skips.php" class="group__nav">
                            <i class="fab fa-elementor"></i> Пропуски</a>
                    </li>
                </ul>
            </li>
            <li id="nav_base" hidden>
                <a href="../base.php" class="nav__li">
                    <i class="fas fa-book-open"></i>
                    БАЗА
                </a>
            </li>
            <li id="archive"><a href="#" onclick="return false;" class="active archivs">Архив<span
                        class="fa fa-angle-down"></span></a>
                <ul class="submenu archivs__menu">
                    <li><a href="#" onclick="return false;">2020-2021 II полугодие<span
                                class="fa fa-angle-down"></span></a>
                        <ul class="submenu">
                            <li><a href="../fullreport2020_2.php">СВОДНАЯ ТАБЛИЦА</a></li>
                            <li><a href="../reportsgroup2020_2/report101.php" class="group__nav" title="101 группа">101
                                    группа</a></li>
                            <li><a href="../reportsgroup2020_2/report111.php" class="group__nav" title="111 группа">111
                                    группа</a></li>
                            <li><a href="../reportsgroup2020_2/report121.php" class="group__nav" title="121 группа">121
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report201.php" class="group__nav" title="201 группа">201
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report202.php" class="group__nav" title="202 группа">202
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report211.php" class="group__nav" title="211 группа">211
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report221.php" class="group__nav" title="221 группа">221
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report231.php" class="group__nav" title="231 группа">231
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report241.php" class="group__nav" title="241 группа">241
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report301.php" class="group__nav" title="301 группа">301
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report302.php" class="group__nav" title="302 группа">302
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report311.php" class="group__nav" title="311 группа">311
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report321.php" class="group__nav" title="321 группа">321
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report331.php" class="group__nav" title="331 группа">331
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report401.php" class="group__nav" title="401 группа">401
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report402.php" class="group__nav" title="402 группа">402
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report411.php" class="group__nav" title="411 группа">411
                                    гуппа</a></li>
                            <li><a href="../reportsgroup2020_2/report421.php" class="group__nav" title="421 группа">421
                                    гуппа</a></li>
                        </ul>
                    </li>
                    <li><a href="#" onclick="return false;">2021-2022 I полугодие<span
                                class="fa fa-angle-down"></span></a>
                        <ul class="submenu">
                            <li><a href="../fullreport2021_1.php">СВОДНАЯ ТАБЛИЦА</a></li>
                            <li><a href="../reportsgroup2021_1/report10.php" id="list-report">Электронные ведомости</a>
                            </li>
                            <li><a href="../reportsgroup2021_1/report1011.php">Электронная ведомость</a></li>
                        </ul>
                    </li>
                    <li><a href="#" onclick="return false;">2021-2022 II полугодие<span
                                class="fa fa-angle-down"></span></a>
                        <ul class="submenu">
                            <li><a href="../fullreport2022_2.php">СВОДНАЯ ТАБЛИЦА</a></li>
                            <li><a href="../reportsgroup2022_2/report10.php" id="list-report">Электронные ведомости</a>
                            </li>
                            <li><a href="../reportsgroup2022_2/report1011.php">Электронная ведомость</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#" onclick="return false;" class="active instruction">ИНСТРУКЦИИ<span
                        class="fa fa-angle-down"></span></a>
                <ul class="submenu">
                    <li>
                        <a href="/files/Инструкция по заполнению пропусков.pdf" target="blank">
                            Инструкция по заполнению пропусков
                        </a>
                    </li>
                    <li>
                        <a href="/files/Инструкция по заполнению отчета классного руководителя.pdf" target="blank">
                            Инструкция по заполнению отчета классного руководителя
                        </a>
                    </li>
                    <li>
                        <a href="/files/Инструкция по редактированию списка студентов.pdf" target="blank">
                            Инструкция по редактированию списка студентов
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>