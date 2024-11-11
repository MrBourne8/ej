/*Адаптивное меню*/
var link = $('.menu-link');
var menu = $('.menu');
var nav_link = $('.submenu a');
var ttr = $('.nav__groups');

link.click(function () {
    event.preventDefault();
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
});
nav_link.click(function () {
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
});
ttr.click(function () {
    ttr.toggleClass('active__submenu');
});


/*Элементы выпадающего меню при адаптивности*/
let eList = $('.e__list');
let eListMenu = $('.e__list__menu');
eList.click(function() {
    eListMenu.toggleClass('visible__menu')
});

let groups = $('.groups');
let groupsMenu = $('.groups__menu');
groups.click(function() {
    groupsMenu.toggleClass('visible__menu')
});

let curating = $('.curating');
let curatingMenu = $('.curating__menu');
curating.click(function() {
    curatingMenu.toggleClass('visible__menu')
});

let missedLessons = $('.missed__lessons');
let missedLessonsMenu = $('.missed__lessons__menu');
missedLessons.click(function() {
    missedLessonsMenu.toggleClass('visible__menu')
});

let archivs = $('.archivs');
let archivsMenu = $('.archivs__menu');
archivs.click(function() {
    archivsMenu.toggleClass('visible__menu')
});
/*Элементы выпадающего меню при адаптивности*/
/*Адаптивное меню*/



// Отображение ссылок для преподавателей
let action = document.querySelectorAll('.action')
let actionReport = document.querySelectorAll('.action-report')
let listReport = document.getElementById('list-report')
let predList = document.getElementById('predmets_list')
let fullreportMenu = document.getElementById('nav_fullreport')
let notesList = document.getElementById('notes-list')
let fullNotesList = document.getElementById('full-notes-lists')
let navGroups = document.getElementById('nav__groups')
let sbg = document.getElementById('skips__buttons__groups')
let archive = document.getElementById('archive')
let navSkips = document.getElementById('nav__skips')
let navSkipsTable = document.getElementById('nav__skips__table')
let navBase = document.getElementById('nav_base')
let navBrs = document.getElementById('nav_brs')
let navKrReport = document.getElementById('nav__kr__report')
let letreportKR = document.querySelector('.report__kr')
let skipsWeek = document.querySelector('#nav__skips__week')
let elReport = document.querySelector('.archive__el__report')
let elReport2 = document.querySelector('.archive__el__report2')
let elReport3 = document.querySelector('.archive__el__report3')

let roleUser = document.getElementById('role__user')

console.log(skipsWeek)

if (roleUser.textContent == 1) {
    if (!predList) {} else {
        predList.removeAttribute('hidden')
    }
    if (!sbg) {} else {
        sbg.removeAttribute('hidden')
    }
    if (!action) {} else {
        for (let i = 0; i < action.length; i++) {
            action[i].removeAttribute('hidden')
        }
        for (let i = 0; i < document.querySelectorAll('.arh__hid').length; i++) {
            document.querySelectorAll('.arh__hid')[i].removeAttribute('hidden')
        }
    }
    fullreportMenu.removeAttribute('hidden')
    notesList.removeAttribute('hidden')
    fullNotesList.removeAttribute('hidden')
    archive.removeAttribute('hidden')
    navSkips.removeAttribute('hidden')
    navSkipsTable.removeAttribute('hidden')
    navBase.removeAttribute('hidden')
    navBrs.removeAttribute('hidden')
    navGroups.removeAttribute('hidden')
    navKrReport.removeAttribute('hidden')
    letreportKR.removeAttribute('hidden')
    skipsWeek.removeAttribute('hidden')


    // if (!actionReport) {} else {
    //     actionReport.removeAttribute('hidden')
    // }
}

if (roleUser.textContent == 2) {
    if (!predList) {} else {
        predList.removeAttribute('hidden')
    }
    if (!sbg) {} else {
        sbg.removeAttribute('hidden')
    }
    if (!action) {} else {
        for (let i = 0; i < action.length; i++) {
            action[i].removeAttribute('hidden')
        }
        for (let i = 0; i < document.querySelectorAll('.arh__hid').length; i++) {
            document.querySelectorAll('.arh__hid')[i].removeAttribute('hidden')
        }
    }
    fullreportMenu.removeAttribute('hidden')
    notesList.removeAttribute('hidden')
    fullNotesList.removeAttribute('hidden')
    archive.removeAttribute('hidden')
    navSkips.removeAttribute('hidden')
    navSkipsTable.removeAttribute('hidden')
    navGroups.removeAttribute('hidden')
    navKrReport.removeAttribute('hidden')
    letreportKR.removeAttribute('hidden')
}
if (roleUser.textContent == 4) {
    if (!sbg) {} else {
        sbg.removeAttribute('hidden')
    }
    fullreportMenu.removeAttribute('hidden')
    archive.removeAttribute('hidden')
    navSkipsTable.removeAttribute('hidden')
    letreportKR.removeAttribute('hidden')
    navBrs.removeAttribute('hidden')
    // listReport.setAttribute('hidden', 'ok')
}
if (roleUser.textContent == 5) {
    navGroups.removeAttribute('hidden')
    navSkips.removeAttribute('hidden')
    notesList.removeAttribute('hidden')
    navKrReport.removeAttribute('hidden')
    letreportKR.removeAttribute('hidden')
    skipsWeek.removeAttribute('hidden')
    navSkipsTable.removeAttribute('hidden')
    navGroups.removeAttribute('hidden')
    if (!sbg) {} else {
        sbg.removeAttribute('hidden')
    }
}
if (roleUser.textContent == 3) {
    notesList.removeAttribute('hidden')
    navGroups.removeAttribute('hidden')
    navSkips.removeAttribute('hidden')
    navKrReport.removeAttribute('hidden')
    letreportKR.removeAttribute('hidden')
    // listReport.setAttribute('hidden', 'ok')
    elReport.setAttribute('hidden', 'ok')
    elReport2.setAttribute('hidden', 'ok')
    elReport3.setAttribute('hidden', 'ok')
}

if (roleUser.textContent == 7) {
    archive.setAttribute('hidden', 'ok')
}
// Отображение ссылок для преподавателей

let dates = document.getElementById('dates')
    let userId = document.getElementById('id__user')

    if (!dates) {} else {
        let dates1 = dates.textContent
        let userId1 = userId.textContent
        $.ajax({
            url: '/func_date.php',
            type: 'POST',
            data: {
                dates1,
                userId1
            },
            success: function (data) {
                // location.reload();
                console.log(data);
            },
            error: function () {
                console.log('ERROR');
            }
        })
    }