document.addEventListener("DOMContentLoaded", function () {


    // Электронные ведомости_____________________________________________________________________
    var srt = 'Зачтено'

    // Создание массива таблицы
    let array = []
    let mas = []
    let table = document.querySelector("table.table__report > tbody")
    if (!table) {} else {
        let rows = table.children
        for (let i = 0; i < rows.length; i++) {
            let fields = rows[i].children
            mas.push(fields)
            let rowArray = []
            for (let j = 0; j < fields.length; j++) {
                rowArray.push(fields[j].innerHTML)
            }
            array.push(rowArray)
        }
    }
    // Создание массива таблицы



    // Создание массива студентов, заголовки таблицы
    let arrayst = []
    let tablest = document.querySelector("table.table__report > thead")
    let pred = []
    if (!tablest) {} else {
        let rowsPred = tablest.children
        for (let i = 0; i < rowsPred.length; i++) {
            let fieldst = rowsPred[i].children
            let rowArrayst = []
            pred = fieldst
            for (let j = 0; j < fieldst.length; j++) {
                rowArrayst.push(fieldst[j].innerHTML)
            }
            arrayst.push(rowArrayst)
        }
    }


    if (!array) {} else {
        for (let i = 0; i < array.length; i++) {
            array[i].length = arrayst[0].length - 1
        }
    }

    if (!arrayst[0]) {} else {
        for (let i = 0; i < arrayst[0].length - 1; i++) {
            let m0 = mas[0]
            if (!m0) {} else {
                mas[0][i].removeAttribute('hidden')
            }
            let m1 = mas[1]
            if (!m1) {} else {
                mas[1][i].removeAttribute('hidden')
            }
            let m2 = mas[2]
            if (!m2) {} else {
                mas[2][i].removeAttribute('hidden')
            }
            let m3 = mas[3]
            if (!m3) {} else {
                mas[3][i].removeAttribute('hidden')
            }
            let m4 = mas[4]
            if (!m4) {} else {
                mas[4][i].removeAttribute('hidden')
            }
            let m5 = mas[5]
            if (!m5) {} else {
                mas[5][i].removeAttribute('hidden')
            }
            let m6 = mas[6]
            if (!m6) {} else {
                mas[6][i].removeAttribute('hidden')
            }
            let m7 = mas[7]
            if (!m7) {} else {
                mas[7][i].removeAttribute('hidden')
            }
            let m8 = mas[8]
            if (!m8) {} else {
                mas[8][i].removeAttribute('hidden')
            }
            let m9 = mas[9]
            if (!m9) {} else {
                mas[9][i].removeAttribute('hidden')
            }
            let m10 = mas[10]
            if (!m10) {} else {
                mas[10][i].removeAttribute('hidden')
            }
            let m11 = mas[11]
            if (!m11) {} else {
                mas[11][i].removeAttribute('hidden')
            }
            let m12 = mas[12]
            if (!m12) {} else {
                mas[12][i].removeAttribute('hidden')
            }
            let m13 = mas[13]
            if (!m13) {} else {
                mas[13][i].removeAttribute('hidden')
            }
            let m14 = mas[14]
            if (!m14) {} else {
                mas[14][i].removeAttribute('hidden')
            }
            let m15 = mas[15]
            if (!m15) {} else {
                mas[15][i].removeAttribute('hidden')
            }
            let m16 = mas[16]
            if (!m16) {} else {
                mas[16][i].removeAttribute('hidden')
            }
            let m17 = mas[17]
            if (!m17) {} else {
                mas[17][i].removeAttribute('hidden')
            }
            let m18 = mas[18]
            if (!m18) {} else {
                mas[18][i].removeAttribute('hidden')
            }
            let m19 = mas[19]
            if (!m19) {} else {
                mas[19][i].removeAttribute('hidden')
            }
            let m20 = mas[20]
            if (!m20) {} else {
                mas[20][i].removeAttribute('hidden')
            }
            let m21 = mas[21]
            if (!m21) {} else {
                mas[21][i].removeAttribute('hidden')
            }
            let m22 = mas[22]
            if (!m22) {} else {
                mas[22][i].removeAttribute('hidden')
            }
            let m23 = mas[23]
            if (!m23) {} else {
                mas[23][i].removeAttribute('hidden')
            }
            let m24 = mas[24]
            if (!m24) {} else {
                mas[24][i].removeAttribute('hidden')
            }
            let m25 = mas[25]
            if (!m25) {} else {
                mas[25][i].removeAttribute('hidden')
            }
            let m26 = mas[26]
            if (!m26) {} else {
                mas[26][i].removeAttribute('hidden')
            }
            let m27 = mas[27]
            if (!m27) {} else {
                mas[27][i].removeAttribute('hidden')
            }
            let m28 = mas[28]
            if (!m28) {} else {
                mas[28][i].removeAttribute('hidden')
            }
            let m29 = mas[29]
            if (!m29) {} else {
                mas[29][i].removeAttribute('hidden')
            }
            let m30 = mas[30]
            if (!m30) {} else {
                mas[30][i].removeAttribute('hidden')
            }
            let m31 = mas[31]
            if (!m31) {} else {
                mas[31][i].removeAttribute('hidden')
            }
            let m32 = mas[32]
            if (!m32) {} else {
                mas[32][i].removeAttribute('hidden')
            }
            let m33 = mas[33]
            if (!m33) {} else {
                mas[33][i].removeAttribute('hidden')
            }
            let m34 = mas[34]
            if (!m34) {} else {
                mas[34][i].removeAttribute('hidden')
            }
            let m35 = mas[35]
            if (!m35) {} else {
                mas[35][i].removeAttribute('hidden')
            }
        }
    }


    $('.table tbody tr').each(function (i) {
        var number = i + 1;
        $(this).find('td:first').text(number + ".");
    });
    $('.table__base__predmers tbody tr').each(function (i) {
        var number = i + 1;
        $(this).find('td:first').text(number + ".");
    });


    // Создание массива студентов, заголовки таблицы
    let ar0 = array[0]
    let ar1 = array[1]
    let ar2 = array[2]
    let ar3 = array[3]
    let ar4 = array[4]
    let ar5 = array[5]
    let ar6 = array[6]
    let ar7 = array[7]
    let ar8 = array[8]
    let ar9 = array[9]
    let ar10 = array[10]
    let ar11 = array[11]
    let ar12 = array[12]
    let ar13 = array[13]
    let ar14 = array[14]
    let ar15 = array[15]
    let ar16 = array[16]
    let ar17 = array[17]
    let ar18 = array[18]
    let ar19 = array[19]
    let ar20 = array[20]
    let ar21 = array[21]
    let ar22 = array[22]
    let ar23 = array[23]
    let ar24 = array[24]
    let ar25 = array[25]
    let ar26 = array[26]
    let ar27 = array[27]
    let ar28 = array[28]
    let ar29 = array[29]
    let ar30 = array[30]
    let ar31 = array[31]
    let ar32 = array[32]
    let ar33 = array[33]
    let ar34 = array[34]
    let ar35 = array[35]
    let studentsNeud = document.getElementById('students_neud')




    // Вывод студентов с двойками по первой строке
    if (!ar0) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_1')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_1')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar0.length; i++) {
            if (ar0[i] == '2' || ar0[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar0[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_1 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    // Вывод предметов с двойками по первой строке
    // Вывод предметов с двойками по второй строке
    if (!ar1) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_2')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_2')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar1.length; i++) {
            if (ar1[i] == '2' || ar1[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar1[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_2 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }

    }
    // Вывод предметов с двойками по второй строке
    if (!ar2) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_3')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_3')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar2.length; i++) {
            if (ar2[i] == '2' || ar2[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar2[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_3 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar3) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_4')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_4')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar3.length; i++) {
            if (ar3[i] == '2' || ar3[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar3[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_4 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar4) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud5')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_5')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar4.length; i++) {
            if (ar4[i] == '2' || ar4[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar4[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_5 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar5) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_6')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_6')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar5.length; i++) {
            if (ar5[i] == '2' || ar5[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar5[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_6 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar6) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_7')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_7')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar6.length; i++) {
            if (ar6[i] == '2' || ar6[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar6[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_7 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar7) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_8')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_8')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar7.length; i++) {
            if (ar7[i] == '2' || ar7[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar7[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_8 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar8) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_9')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_9')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar8.length; i++) {
            if (ar8[i] == '2' || ar8[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar8[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_9 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar9) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_10')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_10')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar9.length; i++) {
            if (ar9[i] == '2' || ar9[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar9[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_10 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar10) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_11')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_11')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar10.length; i++) {
            if (ar10[i] == '2' || ar10[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar10[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_11 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar11) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_12')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_12')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar11.length; i++) {
            if (ar11[i] == '2' || ar11[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar11[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_12 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar12) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_13')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_13')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar12.length; i++) {
            if (ar12[i] == '2' || ar12[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar12[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_13 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar13) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_14')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_14')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar13.length; i++) {
            if (ar13[i] == '2' || ar13[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar13[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')
                document.querySelector('.student_neud_14 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar14) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_15')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_15')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar14.length; i++) {
            if (ar14[i] == '2' || ar14[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar14[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_15 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar15) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_16')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_16')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar15.length; i++) {
            if (ar15[i] == '2' || ar15[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar15[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_16 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar16) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_17')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_17')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar16.length; i++) {
            if (ar16[i] == '2' || ar16[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar16[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_17 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar17) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_18')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_18')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar17.length; i++) {
            if (ar17[i] == '2' || ar17[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar17[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_18 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar18) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_19')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_19')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar18.length; i++) {
            if (ar18[i] == '2' || ar18[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar18[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_19 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar19) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_20')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_20')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar19.length; i++) {
            if (ar19[i] == '2' || ar19[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar19[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_20 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar20) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_21')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_21')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar20.length; i++) {
            if (ar20[i] == '2' || ar20[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar20[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_21 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar21) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_22')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_22')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar21.length; i++) {
            if (ar21[i] == '2' || ar21[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar21[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_22 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar22) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_23')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_23')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar22.length; i++) {
            if (ar22[i] == '2' || ar22[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar22[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_23 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar23) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_24')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_24')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar23.length; i++) {
            if (ar23[i] == '2' || ar23[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar23[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_24 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar24) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_25')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_25')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar24.length; i++) {
            if (ar24[i] == '2' || ar24[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar24[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_25 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar25) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_26')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_26')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar25.length; i++) {
            if (ar25[i] == '2' || ar25[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar25[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_26 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar26) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_27')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_27')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar26.length; i++) {
            if (ar26[i] == '2' || ar26[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar26[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_27 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar27) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_28')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_28')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar27.length; i++) {
            if (ar27[i] == '2' || ar27[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar27[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_28 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar28) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_29')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_29')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar28.length; i++) {
            if (ar28[i] == '2' || ar28[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar28[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_29 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar29) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_30')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_30')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar29.length; i++) {
            if (ar29[i] == '2' || ar29[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar29[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_30 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar30) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_31')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_31')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar30.length; i++) {
            if (ar30[i] == '2' || ar30[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar30[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')
                document.querySelector('.student_neud_31 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }

    }
    if (!ar31) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_32')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_32')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar31.length; i++) {
            if (ar31[i] == '2' || ar31[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar31[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_32 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar32) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_33')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_33')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar32.length; i++) {
            if (ar32[i] == '2' || ar32[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar32[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_33 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }







    // Вывод отличников и хорошистов
    if (array.length <= 0) {} else {
        for (let i = 0; i < ar0.length; i++) {
            if (ar0[i] == 'Зачтено') {
                ar0[i] = 5
            }
        }
        var middle = ar0.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[0][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__0'
            var elemText = document.createTextNode(array[0][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__0').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 1) {} else {
        for (let i = 0; i < ar1.length; i++) {
            if (ar1[i] == 'Зачтено') {
                ar1[i] = 5
            }
        }
        var middle = ar1.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[1][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__1'
            var elemText = document.createTextNode(array[1][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__1').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 2) {} else {
        for (let i = 0; i < ar2.length; i++) {
            if (ar2[i] == 'Зачтено') {
                ar2[i] = 5
            }
        }
        var middle = ar2.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[2][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__2'
            var elemText = document.createTextNode(array[2][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__2').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 3) {} else {
        for (let i = 0; i < ar3.length; i++) {
            if (ar3[i] == 'Зачтено') {
                ar3[i] = 5
            }
        }
        var middle = ar3.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[3][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__3'
            var elemText = document.createTextNode(array[3][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__3').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 4) {} else {
        for (let i = 0; i < ar4.length; i++) {
            if (ar4[i] == 'Зачтено') {
                ar4[i] = 5
            }
        }
        var middle = ar4.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[4][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__4'
            var elemText = document.createTextNode(array[4][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__4').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 5) {} else {
        for (let i = 0; i < ar5.length; i++) {
            if (ar5[i] == 'Зачтено') {
                ar5[i] = 5
            }
        }
        var middle = ar5.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[5][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__5'
            var elemText = document.createTextNode(array[5][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__5').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 6) {} else {
        for (let i = 0; i < ar6.length; i++) {
            if (ar6[i] == 'Зачтено') {
                ar6[i] = 5
            }
        }
        var middle = ar6.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[6][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__6'
            var elemText = document.createTextNode(array[6][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__6').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 7) {} else {
        for (let i = 0; i < ar7.length; i++) {
            if (ar7[i] == 'Зачтено') {
                ar7[i] = 5
            }
        }
        var middle = ar7.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[7][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__7'
            var elemText = document.createTextNode(array[7][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__7').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 8) {} else {
        for (let i = 0; i < ar8.length; i++) {
            if (ar8[i] == 'Зачтено') {
                ar8[i] = 5
            }
        }
        var middle = ar8.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[8][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__8'
            var elemText = document.createTextNode(array[8][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__8').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 9) {} else {
        for (let i = 0; i < ar9.length; i++) {
            if (ar9[i] == 'Зачтено') {
                ar9[i] = 5
            }
        }
        var middle = ar9.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[9][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__9'
            var elemText = document.createTextNode(array[9][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__9').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 10) {} else {
        for (let i = 0; i < ar10.length; i++) {
            if (ar10[i] == 'Зачтено') {
                ar10[i] = 5
            }
        }
        var middle = ar10.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[10][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__10'
            var elemText = document.createTextNode(array[10][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__10').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 11) {} else {
        for (let i = 0; i < ar11.length; i++) {
            if (ar11[i] == 'Зачтено') {
                ar11[i] = 5
            }
        }
        var middle = ar11.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[11][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__11'
            var elemText = document.createTextNode(array[11][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__11').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 12) {} else {
        for (let i = 0; i < ar12.length; i++) {
            if (ar12[i] == 'Зачтено') {
                ar12[i] = 5
            }
        }
        var middle = ar12.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[12][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__12'
            var elemText = document.createTextNode(array[12][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__12').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 13) {} else {
        for (let i = 0; i < ar13.length; i++) {
            if (ar13[i] == 'Зачтено') {
                ar13[i] = 5
            }
        }
        var middle = ar13.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[13][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__13'
            var elemText = document.createTextNode(array[13][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__13').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 14) {} else {
        for (let i = 0; i < ar14.length; i++) {
            if (ar14[i] == 'Зачтено') {
                ar14[i] = 5
            }
        }
        var middle = ar14.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[14][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__14'
            var elemText = document.createTextNode(array[14][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__14').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 15) {} else {
        for (let i = 0; i < ar15.length; i++) {
            if (ar15[i] == 'Зачтено') {
                ar15[i] = 5
            }
        }
        var middle = ar15.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[15][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__15'
            var elemText = document.createTextNode(array[15][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__15').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 16) {} else {
        for (let i = 0; i < ar16.length; i++) {
            if (ar16[i] == 'Зачтено') {
                ar16[i] = 5
            }
        }
        var middle = ar16.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[16][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__16'
            var elemText = document.createTextNode(array[16][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__16').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 17) {} else {
        for (let i = 0; i < ar17.length; i++) {
            if (ar17[i] == 'Зачтено') {
                ar17[i] = 5
            }
        }
        var middle = ar17.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[17][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__17'
            var elemText = document.createTextNode(array[17][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__17').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 18) {} else {
        for (let i = 0; i < ar18.length; i++) {
            if (ar18[i] == 'Зачтено') {
                ar18[i] = 5
            }
        }
        var middle = ar18.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[18][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__18'
            var elemText = document.createTextNode(array[18][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__18').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 19) {} else {
        for (let i = 0; i < ar19.length; i++) {
            if (ar19[i] == 'Зачтено') {
                ar19[i] = 5
            }
        }
        var middle = ar19.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[19][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__19'
            var elemText = document.createTextNode(array[19][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__19').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 20) {} else {
        for (let i = 0; i < ar20.length; i++) {
            if (ar20[i] == 'Зачтено') {
                ar20[i] = 5
            }
        }
        var middle = ar20.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[20][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__20'
            var elemText = document.createTextNode(array[20][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__20').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 21) {} else {
        for (let i = 0; i < ar21.length; i++) {
            if (ar21[i] == 'Зачтено') {
                ar21[i] = 5
            }
        }
        var middle = ar21.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[21][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__21'
            var elemText = document.createTextNode(array[21][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__21').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 22) {} else {
        for (let i = 0; i < ar22.length; i++) {
            if (ar22[i] == 'Зачтено') {
                ar22[i] = 5
            }
        }
        var middle = ar22.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[22][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__22'
            var elemText = document.createTextNode(array[22][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__22').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 23) {} else {
        for (let i = 0; i < ar23.length; i++) {
            if (ar23[i] == 'Зачтено') {
                ar23[i] = 5
            }
        }
        var middle = ar23.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[23][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__23'
            var elemText = document.createTextNode(array[23][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__23').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 24) {} else {
        for (let i = 0; i < ar24.length; i++) {
            if (ar24[i] == 'Зачтено') {
                ar24[i] = 5
            }
        }
        var middle = ar24.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[24][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__24'
            var elemText = document.createTextNode(array[24][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__24').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 25) {} else {
        for (let i = 0; i < ar25.length; i++) {
            if (ar25[i] == 'Зачтено') {
                ar25[i] = 5
            }
        }
        var middle = ar25.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[25][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__25'
            var elemText = document.createTextNode(array[25][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__25').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 26) {} else {
        for (let i = 0; i < ar26.length; i++) {
            if (ar26[i] == 'Зачтено') {
                ar26[i] = 5
            }
        }
        var middle = ar26.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[26][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__26'
            var elemText = document.createTextNode(array[26][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__26').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 27) {} else {
        for (let i = 0; i < ar27.length; i++) {
            if (ar27[i] == 'Зачтено') {
                ar27[i] = 5
            }
        }
        var middle = ar27.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[27][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__27'
            var elemText = document.createTextNode(array[27][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__27').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 28) {} else {
        for (let i = 0; i < ar28.length; i++) {
            if (ar28[i] == 'Зачтено') {
                ar28[i] = 5
            }
        }
        var middle = ar28.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[28][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__28'
            var elemText = document.createTextNode(array[28][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__28').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 29) {} else {
        for (let i = 0; i < ar29.length; i++) {
            if (ar29[i] == 'Зачтено') {
                ar29[i] = 5
            }
        }
        var middle = ar29.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[29][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__29'
            var elemText = document.createTextNode(array[29][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__29').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 30) {} else {
        for (let i = 0; i < ar30.length; i++) {
            if (ar30[i] == 'Зачтено') {
                ar30[i] = 5
            }
        }
        var middle = ar30.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[30][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__30'
            var elemText = document.createTextNode(array[30][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__30').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 31) {} else {
        for (let i = 0; i < ar31.length; i++) {
            if (ar31[i] == 'Зачтено') {
                ar31[i] = 5
            }
        }
        var middle = ar31.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[31][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
            elem.classList.add('rtt5')
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__31'
            var elemText = document.createTextNode(array[31][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__31').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 32) {} else {
        for (let i = 0; i < ar32.length; i++) {
            if (ar32[i] == 'Зачтено') {
                ar32[i] = 5
            }
        }
        var middle = ar32.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[32][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__32'
            var elemText = document.createTextNode(array[32][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__32').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 33) {} else {
        for (let i = 0; i < ar33.length; i++) {
            if (ar33[i] == 'Зачтено') {
                ar33[i] = 5
            }
        }
        var middle = ar33.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[33][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__33'
            var elemText = document.createTextNode(array[33][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__33').setAttribute('hidden', 'ok')
            }
        }
    }
    // Вывод отличников и хорошистов




    $('.pred_neud').each(function () {
        var $this = $(this);
        var t = $this.text();
        $this.html(t.replace('&lt', '<').replace('&gt', '>'));
    });

    // Подсчет Качественной и Абсолютной успеваемости
    if (!document.querySelectorAll('div.hor > p.student__hor')) {} else {
        let studentNeud = document.querySelectorAll('.student_neud').length
        let fullStudents = array.length
        let infoAbsolut = document.getElementById('absolut')
        let infoKach = document.getElementById('kach')
        let horStudents = document.querySelectorAll('div.hor > p.student__hor').length
        let infoAbsolut1 = ((fullStudents - studentNeud) * 100) / fullStudents
        if (!infoAbsolut || !infoAbsolut1) {} else {
            infoAbsolut.textContent = infoAbsolut1.toFixed(1) + '%'
        }
        let infoKach1 = ((horStudents * 100) / fullStudents) + 0
        if (!infoKach || !infoKach1) {} else {
            infoKach.textContent = infoKach1.toFixed(1) + '%'
        }
    }
    // Подсчет Качественной и Абсолютной успеваемости







    let name1 = document.getElementById('absolut')
    let name
    if (!name1) {} else {
        name = name1.textContent
    }
    let number__group1 = document.getElementById('number__group')
    let number__group
    if (!number__group1) {} else {
        number__group = number__group1.textContent
    }
    let number__group__base
    let numberGroupBase = document.getElementById('number__group__base')

    if (!numberGroupBase) {} else {
        number__group__base = numberGroupBase.textContent
    }
    if (!numberGroupBase) {} else {
        number__group__base = numberGroupBase.textContent
    }
    let leght_st1 = document.querySelectorAll('#tb_base > tr')
    let leght_st
    if (!leght_st1) {} else {
        leght_st = leght_st1.textContent
    }
    let kachUsp1 = document.getElementById('kach')
    let kachUsp2


    if (!kachUsp1) {} else {
        kachUsp2 = kachUsp1.textContent
    }
    if (!name || !number__group) {} else {
        $(function () {
            $.ajax({
                url: '/abs.php',
                type: 'POST',
                data: {
                    number__group,
                    name,
                    kachUsp2
                },
                success: function (data) {
                    console.log(data);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        });
    }
    if (!kachUsp1) {} else {
        let absolUsp = document.getElementById('absolut').textContent
        let kachUsp = document.getElementById('kach').textContent
        let numberGroupReport = document.getElementById('number__group').textContent

        console.log(absolUsp, kachUsp, numberGroupReport)
        $(function () {
            $.ajax({
                url: '/percent.php',
                type: 'POST',
                data: {
                    absolUsp,
                    kachUsp,
                    numberGroupReport
                },
                success: function (data) {
                    console.log(data);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        });
    }

    if (!leght_st) {} else {
        $(function () {
            $.ajax({
                url: '/abs.php',
                type: 'POST',
                data: {
                    leght_st,
                    number__group__base,
                },
                success: function (data) {
                    console.log(data);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        });
    }




    let controle_var = document.querySelectorAll('span.controle_variant')
    for (let i = 0; i < controle_var.length; i++) {
        if (controle_var[i].textContent == 'Дифференцированный зачет') {
            controle_var[i].parentNode.classList.add('red')
        }
        if (controle_var[i].textContent == 'Зачет') {
            controle_var[i].parentNode.classList.add('red')
        }
        if (controle_var[i].textContent == 'Экзамен') {
            controle_var[i].parentNode.classList.add('red')
        }
    }



    // БРС_______________________________________________________________________________________________________________
    let vrem_id = document.querySelectorAll('#vrem_id')
    if (!document.querySelector('option[selected="selected"]')) {} else {
        if (!document.getElementById('vrem_id')) {} else {
            document.getElementById('add_id_predm').value = document.getElementById('vrem_id').value
            document.getElementById('add_name_predm').value = document.querySelector('option[selected="selected"]').textContent
        }
    }
    // Ограничение ввода посещенных занятий
    let visited_1 = document.getElementById('visited_1')
    if (!visited_1) {} else {
        visited_1.oninput = function () {
            let wq = document.getElementById('hour_1')
            let qw = visited_1.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                visited_1.value = wq.value
            }
        }
    }
    let visited_2 = document.getElementById('visited_2')
    if (!visited_2) {} else {
        visited_2.oninput = function () {
            let wq = document.getElementById('hour_2')
            let qw = visited_2.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                visited_2.value = wq.value
            }
        }
    }
    // Ограничение ввода посещенных занятий
    // Ограничение ввода занятий без опозданий
    let not_delay_1 = document.getElementById('not_delay_1')
    if (!not_delay_1) {} else {
        not_delay_1.oninput = function () {
            let wq = visited_1 = document.getElementById('visited_1')
            let qw = not_delay_1.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                not_delay_1.value = wq.value
            }
        }
    }
    let not_delay_2 = document.getElementById('not_delay_2')
    if (!not_delay_2) {} else {
        not_delay_2.oninput = function () {
            let wq = visited_2 = document.getElementById('visited_2')
            let qw = not_delay_2.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                not_delay_2.value = wq.value
            }
        }
    }
    // Ограничение ввода занятий без опозданий
    // Ограничение ввода активных занятий
    let active_1 = document.getElementById('active_1')
    if (!active_1) {} else {
        active_1.oninput = function () {
            let wq = visited_1 = document.getElementById('visited_1')
            let qw = active_1.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                active_1.value = wq.value
            }
        }
    }
    let active_2 = document.getElementById('active_2')
    if (!active_2) {} else {
        active_2.oninput = function () {
            let wq = visited_2 = document.getElementById('visited_2')
            let qw = active_2.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                active_2.value = wq.value
            }
        }
    }
    // Ограничение ввода активных занятий
    // Для редактирования
    let modal = document.getElementsByClassName('modal')[0]
    if (!modal) {} else {
        if (modal.classList.contains('show')) {}
    }

    // Ограничение ввода посещенных занятий при редактировании БРС
    let allHour = document.querySelectorAll('#edit_hour_1')
    let visitedHour = document.querySelectorAll('#edit_visited_1')
    let notDelay = document.querySelectorAll('#edit_not_delay_1')
    let editActive = document.querySelectorAll('#edit_active_1')


    if (!visitedHour[0]) {} else {
        visitedHour[0].onchange = function () {
            if (+this.value > +allHour[0].value) {
                this.value = allHour[0].value
            }
        }
    }
    if (!visitedHour[1]) {} else {
        visitedHour[1].onchange = function () {
            if (+this.value > +allHour[1].value) {
                this.value = allHour[1].value
            }
        }
    }
    if (!visitedHour[2]) {} else {
        visitedHour[2].onchange = function () {
            if (+this.value > +allHour[2].value) {
                this.value = allHour[2].value
            }
        }
    }
    if (!visitedHour[3]) {} else {
        visitedHour[3].onchange = function () {
            if (+this.value > +allHour[3].value) {
                this.value = allHour[3].value
            }
        }
    }
    if (!visitedHour[4]) {} else {
        visitedHour[4].onchange = function () {
            if (+this.value > +allHour[4].value) {
                this.value = allHour[4].value
            }
        }
    }
    if (!visitedHour[5]) {} else {
        visitedHour[5].onchange = function () {
            if (+this.value > +allHour[5].value) {
                this.value = allHour[5].value
            }
        }
    }
    if (!visitedHour[6]) {} else {
        visitedHour[6].onchange = function () {
            if (+this.value > +allHour[6].value) {
                this.value = allHour[6].value
            }
        }
    }
    if (!visitedHour[7]) {} else {
        visitedHour[7].onchange = function () {
            if (+this.value > +allHour[7].value) {
                this.value = allHour[7].value
            }
        }
    }
    if (!visitedHour[8]) {} else {
        visitedHour[8].onchange = function () {
            if (+this.value > +allHour[8].value) {
                this.value = allHour[8].value
            }
        }
    }
    if (!visitedHour[9]) {} else {
        visitedHour[9].onchange = function () {
            if (+this.value > +allHour[9].value) {
                this.value = allHour[9].value
            }
        }
    }
    if (!visitedHour[10]) {} else {
        visitedHour[10].onchange = function () {
            if (+this.value > +allHour[10].value) {
                this.value = allHour[10].value
            }
        }
    }
    if (!visitedHour[11]) {} else {
        visitedHour[11].onchange = function () {
            if (+this.value > +allHour[11].value) {
                this.value = allHour[11].value
            }
        }
    }
    if (!visitedHour[12]) {} else {
        visitedHour[12].onchange = function () {
            if (+this.value > +allHour[12].value) {
                this.value = allHour[12].value
            }
        }
    }
    if (!visitedHour[13]) {} else {
        visitedHour[13].onchange = function () {
            if (+this.value > +allHour[13].value) {
                this.value = allHour[13].value
            }
        }
    }
    if (!visitedHour[14]) {} else {
        visitedHour[14].onchange = function () {
            if (+this.value > +allHour[14].value) {
                this.value = allHour[14].value
            }
        }
    }
    if (!visitedHour[15]) {} else {
        visitedHour[15].onchange = function () {
            if (+this.value > +allHour[15].value) {
                this.value = allHour[15].value
            }
        }
    }
    if (!visitedHour[16]) {} else {
        visitedHour[16].onchange = function () {
            if (+this.value > +allHour[16].value) {
                this.value = allHour[16].value
            }
        }
    }
    if (!visitedHour[17]) {} else {
        visitedHour[17].onchange = function () {
            if (+this.value > +allHour[17].value) {
                this.value = allHour[17].value
            }
        }
    }
    if (!visitedHour[18]) {} else {
        visitedHour[18].onchange = function () {
            if (+this.value > +allHour[18].value) {
                this.value = allHour[18].value
            }
        }
    }
    if (!visitedHour[19]) {} else {
        visitedHour[19].onchange = function () {
            if (+this.value > +allHour[19].value) {
                this.value = allHour[19].value
            }
        }
    }
    if (!visitedHour[20]) {} else {
        visitedHour[20].onchange = function () {
            if (+this.value > +allHour[20].value) {
                this.value = allHour[20].value
            }
        }
    }
    if (!visitedHour[21]) {} else {
        visitedHour[21].onchange = function () {
            if (+this.value > +allHour[21].value) {
                this.value = allHour[21].value
            }
        }
    }
    if (!visitedHour[22]) {} else {
        visitedHour[22].onchange = function () {
            if (+this.value > +allHour[22].value) {
                this.value = allHour[22].value
            }
        }
    }
    if (!visitedHour[23]) {} else {
        visitedHour[23].onchange = function () {
            if (+this.value > +allHour[23].value) {
                this.value = allHour[23].value
            }
        }
    }
    if (!visitedHour[24]) {} else {
        visitedHour[24].onchange = function () {
            if (+this.value > +allHour[24].value) {
                this.value = allHour[24].value
            }
        }
    }
    if (!visitedHour[25]) {} else {
        visitedHour[25].onchange = function () {
            if (+this.value > +allHour[25].value) {
                this.value = allHour[25].value
            }
        }
    }
    if (!visitedHour[26]) {} else {
        visitedHour[26].onchange = function () {
            if (+this.value > +allHour[26].value) {
                this.value = allHour[26].value
            }
        }
    }
    if (!visitedHour[27]) {} else {
        visitedHour[27].onchange = function () {
            if (+this.value > +allHour[27].value) {
                this.value = allHour[27].value
            }
        }
    }
    if (!visitedHour[28]) {} else {
        visitedHour[28].onchange = function () {
            if (+this.value > +allHour[28].value) {
                this.value = allHour[28].value
            }
        }
    }
    if (!visitedHour[29]) {} else {
        visitedHour[29].onchange = function () {
            if (+this.value > +allHour[29].value) {
                this.value = allHour[29].value
            }
        }
    }
    if (!visitedHour[30]) {} else {
        visitedHour[30].onchange = function () {
            if (+this.value > +allHour[30].value) {
                this.value = allHour[30].value
            }
        }
    }
    if (!visitedHour[31]) {} else {
        visitedHour[31].onchange = function () {
            if (+this.value > +allHour[31].value) {
                this.value = allHour[31].value
            }
        }
    }
    if (!visitedHour[32]) {} else {
        visitedHour[32].onchange = function () {
            if (+this.value > +allHour[32].value) {
                this.value = allHour[32].value
            }
        }
    }
    if (!visitedHour[33]) {} else {
        visitedHour[33].onchange = function () {
            if (+this.value > +allHour[33].value) {
                this.value = allHour[33].value
            }
        }
    }
    if (!visitedHour[34]) {} else {
        visitedHour[34].onchange = function () {
            if (+this.value > +allHour[34].value) {
                this.value = allHour[34].value
            }
        }
    }
    if (!visitedHour[35]) {} else {
        visitedHour[35].onchange = function () {
            if (+this.value > +allHour[35].value) {
                this.value = allHour[35].value
            }
        }
    }


    // Занятия без опозданий
    if (!visitedHour[0]) {} else {
        notDelay[0].onchange = function () {
            if (+this.value > +visitedHour[0].value) {
                this.value = visitedHour[0].value
            }
        }
    }
    if (!visitedHour[1]) {} else {
        notDelay[1].onchange = function () {
            if (+this.value > +visitedHour[1].value) {
                this.value = visitedHour[1].value
            }
        }
    }
    if (!visitedHour[2]) {} else {
        notDelay[2].onchange = function () {
            if (+this.value > +visitedHour[2].value) {
                this.value = visitedHour[2].value
            }
        }
    }
    if (!visitedHour[3]) {} else {
        notDelay[3].onchange = function () {
            if (+this.value > +visitedHour[3].value) {
                this.value = visitedHour[3].value
            }
        }
    }
    if (!visitedHour[4]) {} else {
        notDelay[4].onchange = function () {
            if (+this.value > +visitedHour[4].value) {
                this.value = visitedHour[4].value
            }
        }
    }
    if (!visitedHour[5]) {} else {
        notDelay[5].onchange = function () {
            if (+this.value > +visitedHour[5].value) {
                this.value = visitedHour[5].value
            }
        }
    }
    if (!visitedHour[6]) {} else {
        notDelay[6].onchange = function () {
            if (+this.value > +visitedHour[6].value) {
                this.value = visitedHour[6].value
            }
        }
    }
    if (!visitedHour[7]) {} else {
        notDelay[7].onchange = function () {
            if (+this.value > +visitedHour[7].value) {
                this.value = visitedHour[7].value
            }
        }
    }
    if (!visitedHour[8]) {} else {
        notDelay[8].onchange = function () {
            if (+this.value > +visitedHour[8].value) {
                this.value = visitedHour[8].value
            }
        }
    }
    if (!visitedHour[9]) {} else {
        notDelay[9].onchange = function () {
            if (+this.value > +visitedHour[9].value) {
                this.value = visitedHour[9].value
            }
        }
    }
    if (!visitedHour[10]) {} else {
        notDelay[10].onchange = function () {
            if (+this.value > +visitedHour[10].value) {
                this.value = visitedHour[10].value
            }
        }
    }
    if (!visitedHour[11]) {} else {
        notDelay[11].onchange = function () {
            if (+this.value > +visitedHour[11].value) {
                this.value = visitedHour[11].value
            }
        }
    }
    if (!visitedHour[12]) {} else {
        notDelay[12].onchange = function () {
            if (+this.value > +visitedHour[12].value) {
                this.value = visitedHour[12].value
            }
        }
    }
    if (!visitedHour[13]) {} else {
        notDelay[13].onchange = function () {
            if (+this.value > +visitedHour[13].value) {
                this.value = visitedHour[13].value
            }
        }
    }
    if (!visitedHour[14]) {} else {
        notDelay[14].onchange = function () {
            if (+this.value > +visitedHour[14].value) {
                this.value = visitedHour[14].value
            }
        }
    }
    if (!visitedHour[15]) {} else {
        notDelay[15].onchange = function () {
            if (+this.value > +visitedHour[15].value) {
                this.value = visitedHour[15].value
            }
        }
    }
    if (!visitedHour[16]) {} else {
        notDelay[16].onchange = function () {
            if (+this.value > +visitedHour[16].value) {
                this.value = visitedHour[16].value
            }
        }
    }
    if (!visitedHour[17]) {} else {
        notDelay[17].onchange = function () {
            if (+this.value > +visitedHour[17].value) {
                this.value = visitedHour[17].value
            }
        }
    }
    if (!visitedHour[18]) {} else {
        notDelay[18].onchange = function () {
            if (+this.value > +visitedHour[18].value) {
                this.value = visitedHour[18].value
            }
        }
    }
    if (!visitedHour[19]) {} else {
        notDelay[19].onchange = function () {
            if (+this.value > +visitedHour[19].value) {
                this.value = visitedHour[19].value
            }
        }
    }
    if (!visitedHour[20]) {} else {
        notDelay[20].onchange = function () {
            if (+this.value > +visitedHour[20].value) {
                this.value = visitedHour[20].value
            }
        }
    }
    if (!visitedHour[21]) {} else {
        notDelay[21].onchange = function () {
            if (+this.value > +visitedHour[21].value) {
                this.value = visitedHour[21].value
            }
        }
    }
    if (!visitedHour[22]) {} else {
        notDelay[22].onchange = function () {
            if (+this.value > +visitedHour[22].value) {
                this.value = visitedHour[22].value
            }
        }
    }
    if (!visitedHour[23]) {} else {
        notDelay[23].onchange = function () {
            if (+this.value > +visitedHour[23].value) {
                this.value = visitedHour[23].value
            }
        }
    }
    if (!visitedHour[24]) {} else {
        notDelay[24].onchange = function () {
            if (+this.value > +visitedHour[24].value) {
                this.value = visitedHour[24].value
            }
        }
    }
    if (!visitedHour[25]) {} else {
        notDelay[25].onchange = function () {
            if (+this.value > +visitedHour[25].value) {
                this.value = visitedHour[25].value
            }
        }
    }
    if (!visitedHour[26]) {} else {
        notDelay[26].onchange = function () {
            if (+this.value > +visitedHour[26].value) {
                this.value = visitedHour[26].value
            }
        }
    }
    if (!visitedHour[27]) {} else {
        notDelay[27].onchange = function () {
            if (+this.value > +visitedHour[27].value) {
                this.value = visitedHour[27].value
            }
        }
    }
    if (!visitedHour[28]) {} else {
        notDelay[28].onchange = function () {
            if (+this.value > +visitedHour[28].value) {
                this.value = visitedHour[28].value
            }
        }
    }
    if (!visitedHour[29]) {} else {
        notDelay[29].onchange = function () {
            if (+this.value > +visitedHour[29].value) {
                this.value = visitedHour[29].value
            }
        }
    }
    if (!visitedHour[30]) {} else {
        notDelay[30].onchange = function () {
            if (+this.value > +visitedHour[30].value) {
                this.value = visitedHour[30].value
            }
        }
    }
    if (!visitedHour[31]) {} else {
        notDelay[31].onchange = function () {
            if (+this.value > +visitedHour[31].value) {
                this.value = visitedHour[31].value
            }
        }
    }
    if (!visitedHour[32]) {} else {
        notDelay[32].onchange = function () {
            if (+this.value > +visitedHour[32].value) {
                this.value = visitedHour[32].value
            }
        }
    }
    if (!visitedHour[33]) {} else {
        notDelay[33].onchange = function () {
            if (+this.value > +visitedHour[33].value) {
                this.value = visitedHour[33].value
            }
        }
    }
    if (!visitedHour[34]) {} else {
        notDelay[34].onchange = function () {
            if (+this.value > +visitedHour[34].value) {
                this.value = visitedHour[34].value
            }
        }
    }
    if (!visitedHour[35]) {} else {
        notDelay[35].onchange = function () {
            if (+this.value > +visitedHour[35].value) {
                this.value = visitedHour[35].value
            }
        }
    }
    // Занятия без опозданий


    // Активные занятия
    if (!visitedHour[0]) {} else {
        editActive[0].onchange = function () {
            if (+this.value > +visitedHour[0].value) {
                this.value = visitedHour[0].value
            }
        }
    }
    if (!visitedHour[1]) {} else {
        editActive[1].onchange = function () {
            if (+this.value > +visitedHour[1].value) {
                this.value = visitedHour[1].value
            }
        }
    }
    if (!visitedHour[2]) {} else {
        editActive[2].onchange = function () {
            if (+this.value > +visitedHour[2].value) {
                this.value = visitedHour[2].value
            }
        }
    }
    if (!visitedHour[3]) {} else {
        editActive[3].onchange = function () {
            if (+this.value > +visitedHour[3].value) {
                this.value = visitedHour[3].value
            }
        }
    }
    if (!visitedHour[4]) {} else {
        editActive[4].onchange = function () {
            if (+this.value > +visitedHour[4].value) {
                this.value = visitedHour[4].value
            }
        }
    }
    if (!visitedHour[5]) {} else {
        editActive[5].onchange = function () {
            if (+this.value > +visitedHour[5].value) {
                this.value = visitedHour[5].value
            }
        }
    }
    if (!visitedHour[6]) {} else {
        editActive[6].onchange = function () {
            if (+this.value > +visitedHour[6].value) {
                this.value = visitedHour[6].value
            }
        }
    }
    if (!visitedHour[7]) {} else {
        editActive[7].onchange = function () {
            if (+this.value > +visitedHour[7].value) {
                this.value = visitedHour[7].value
            }
        }
    }
    if (!visitedHour[8]) {} else {
        editActive[8].onchange = function () {
            if (+this.value > +visitedHour[8].value) {
                this.value = visitedHour[8].value
            }
        }
    }
    if (!visitedHour[9]) {} else {
        editActive[9].onchange = function () {
            if (+this.value > +visitedHour[9].value) {
                this.value = visitedHour[9].value
            }
        }
    }
    if (!visitedHour[10]) {} else {
        editActive[10].onchange = function () {
            if (+this.value > +visitedHour[10].value) {
                this.value = visitedHour[10].value
            }
        }
    }
    if (!visitedHour[11]) {} else {
        editActive[11].onchange = function () {
            if (+this.value > +visitedHour[11].value) {
                this.value = visitedHour[11].value
            }
        }
    }
    if (!visitedHour[12]) {} else {
        editActive[12].onchange = function () {
            if (+this.value > +visitedHour[12].value) {
                this.value = visitedHour[12].value
            }
        }
    }
    if (!visitedHour[13]) {} else {
        editActive[13].onchange = function () {
            if (+this.value > +visitedHour[13].value) {
                this.value = visitedHour[13].value
            }
        }
    }
    if (!visitedHour[14]) {} else {
        editActive[14].onchange = function () {
            if (+this.value > +visitedHour[14].value) {
                this.value = visitedHour[14].value
            }
        }
    }
    if (!visitedHour[15]) {} else {
        editActive[15].onchange = function () {
            if (+this.value > +visitedHour[15].value) {
                this.value = visitedHour[15].value
            }
        }
    }
    if (!visitedHour[16]) {} else {
        editActive[16].onchange = function () {
            if (+this.value > +visitedHour[16].value) {
                this.value = visitedHour[16].value
            }
        }
    }
    if (!visitedHour[17]) {} else {
        editActive[17].onchange = function () {
            if (+this.value > +visitedHour[17].value) {
                this.value = visitedHour[17].value
            }
        }
    }
    if (!visitedHour[18]) {} else {
        editActive[18].onchange = function () {
            if (+this.value > +visitedHour[18].value) {
                this.value = visitedHour[18].value
            }
        }
    }
    if (!visitedHour[19]) {} else {
        editActive[19].onchange = function () {
            if (+this.value > +visitedHour[19].value) {
                this.value = visitedHour[19].value
            }
        }
    }
    if (!visitedHour[20]) {} else {
        editActive[20].onchange = function () {
            if (+this.value > +visitedHour[20].value) {
                this.value = visitedHour[20].value
            }
        }
    }
    if (!visitedHour[21]) {} else {
        editActive[21].onchange = function () {
            if (+this.value > +visitedHour[21].value) {
                this.value = visitedHour[21].value
            }
        }
    }
    if (!visitedHour[22]) {} else {
        editActive[22].onchange = function () {
            if (+this.value > +visitedHour[22].value) {
                this.value = visitedHour[22].value
            }
        }
    }
    if (!visitedHour[23]) {} else {
        editActive[23].onchange = function () {
            if (+this.value > +visitedHour[23].value) {
                this.value = visitedHour[23].value
            }
        }
    }
    if (!visitedHour[24]) {} else {
        editActive[24].onchange = function () {
            if (+this.value > +visitedHour[24].value) {
                this.value = visitedHour[24].value
            }
        }
    }
    if (!visitedHour[25]) {} else {
        editActive[25].onchange = function () {
            if (+this.value > +visitedHour[25].value) {
                this.value = visitedHour[25].value
            }
        }
    }
    if (!visitedHour[26]) {} else {
        editActive[26].onchange = function () {
            if (+this.value > +visitedHour[26].value) {
                this.value = visitedHour[26].value
            }
        }
    }
    if (!visitedHour[27]) {} else {
        editActive[27].onchange = function () {
            if (+this.value > +visitedHour[27].value) {
                this.value = visitedHour[27].value
            }
        }
    }
    if (!visitedHour[28]) {} else {
        editActive[28].onchange = function () {
            if (+this.value > +visitedHour[28].value) {
                this.value = visitedHour[28].value
            }
        }
    }
    if (!visitedHour[29]) {} else {
        editActive[29].onchange = function () {
            if (+this.value > +visitedHour[29].value) {
                this.value = visitedHour[29].value
            }
        }
    }
    if (!visitedHour[30]) {} else {
        editActive[30].onchange = function () {
            if (+this.value > +visitedHour[30].value) {
                this.value = visitedHour[30].value
            }
        }
    }
    if (!visitedHour[31]) {} else {
        editActive[31].onchange = function () {
            if (+this.value > +visitedHour[31].value) {
                this.value = visitedHour[31].value
            }
        }
    }
    if (!visitedHour[32]) {} else {
        editActive[32].onchange = function () {
            if (+this.value > +visitedHour[32].value) {
                this.value = visitedHour[32].value
            }
        }
    }
    if (!visitedHour[33]) {} else {
        editActive[33].onchange = function () {
            if (+this.value > +visitedHour[33].value) {
                this.value = visitedHour[33].value
            }
        }
    }
    if (!visitedHour[34]) {} else {
        editActive[34].onchange = function () {
            if (+this.value > +visitedHour[34].value) {
                this.value = visitedHour[34].value
            }
        }
    }
    if (!visitedHour[35]) {} else {
        editActive[35].onchange = function () {
            if (+this.value > +visitedHour[35].value) {
                this.value = visitedHour[35].value
            }
        }
    }
    // Активные занятия

    // Ограничение ввода посещенных занятий при редактировании БРС

    // Ограничение ввода посещенных занятий при редактировании БРС
    let allHour2 = document.querySelectorAll('#edit_hour_2')
    let visitedHour2 = document.querySelectorAll('#edit_visited_2')
    let notDelay2 = document.querySelectorAll('#edit_not_delay_2')
    let editActive2 = document.querySelectorAll('#edit_active_2')


    if (!visitedHour2[0]) {} else {
        visitedHour2[0].onchange = function () {
            if (+this.value > +allHour2[0].value) {
                this.value = allHour2[0].value
            }
        }
    }
    if (!visitedHour2[1]) {} else {
        visitedHour2[1].onchange = function () {
            if (+this.value > +allHour2[1].value) {
                this.value = allHour2[1].value
            }
        }
    }
    if (!visitedHour2[2]) {} else {
        visitedHour2[2].onchange = function () {
            if (+this.value > +allHour2[2].value) {
                this.value = allHour2[2].value
            }
        }
    }
    if (!visitedHour2[3]) {} else {
        visitedHour2[3].onchange = function () {
            if (+this.value > +allHour2[3].value) {
                this.value = allHour2[3].value
            }
        }
    }
    if (!visitedHour2[4]) {} else {
        visitedHour2[4].onchange = function () {
            if (+this.value > +allHour2[4].value) {
                this.value = allHour2[4].value
            }
        }
    }
    if (!visitedHour2[5]) {} else {
        visitedHour2[5].onchange = function () {
            if (+this.value > +allHour2[5].value) {
                this.value = allHour2[5].value
            }
        }
    }
    if (!visitedHour2[6]) {} else {
        visitedHour2[6].onchange = function () {
            if (+this.value > +allHour2[6].value) {
                this.value = allHour2[6].value
            }
        }
    }
    if (!visitedHour2[7]) {} else {
        visitedHour2[7].onchange = function () {
            if (+this.value > +allHour2[7].value) {
                this.value = allHour2[7].value
            }
        }
    }
    if (!visitedHour2[8]) {} else {
        visitedHour2[8].onchange = function () {
            if (+this.value > +allHour2[8].value) {
                this.value = allHour2[8].value
            }
        }
    }
    if (!visitedHour2[9]) {} else {
        visitedHour2[9].onchange = function () {
            if (+this.value > +allHour2[9].value) {
                this.value = allHour2[9].value
            }
        }
    }
    if (!visitedHour2[10]) {} else {
        visitedHour2[10].onchange = function () {
            if (+this.value > +allHour2[10].value) {
                this.value = allHour2[10].value
            }
        }
    }
    if (!visitedHour2[11]) {} else {
        visitedHour2[11].onchange = function () {
            if (+this.value > +allHour2[11].value) {
                this.value = allHour2[11].value
            }
        }
    }
    if (!visitedHour2[12]) {} else {
        visitedHour2[12].onchange = function () {
            if (+this.value > +allHour2[12].value) {
                this.value = allHour2[12].value
            }
        }
    }
    if (!visitedHour2[13]) {} else {
        visitedHour2[13].onchange = function () {
            if (+this.value > +allHour2[13].value) {
                this.value = allHour2[13].value
            }
        }
    }
    if (!visitedHour2[14]) {} else {
        visitedHour2[14].onchange = function () {
            if (+this.value > +allHour2[14].value) {
                this.value = allHour2[14].value
            }
        }
    }
    if (!visitedHour2[15]) {} else {
        visitedHour2[15].onchange = function () {
            if (+this.value > +allHour2[15].value) {
                this.value = allHour2[15].value
            }
        }
    }
    if (!visitedHour2[16]) {} else {
        visitedHour2[16].onchange = function () {
            if (+this.value > +allHour2[16].value) {
                this.value = allHour2[16].value
            }
        }
    }
    if (!visitedHour2[17]) {} else {
        visitedHour2[17].onchange = function () {
            if (+this.value > +allHour2[17].value) {
                this.value = allHour2[17].value
            }
        }
    }
    if (!visitedHour2[18]) {} else {
        visitedHour2[18].onchange = function () {
            if (+this.value > +allHour2[18].value) {
                this.value = allHour2[18].value
            }
        }
    }
    if (!visitedHour2[19]) {} else {
        visitedHour2[19].onchange = function () {
            if (+this.value > +allHour2[19].value) {
                this.value = allHour2[19].value
            }
        }
    }
    if (!visitedHour2[20]) {} else {
        visitedHour2[20].onchange = function () {
            if (+this.value > +allHour2[20].value) {
                this.value = allHour2[20].value
            }
        }
    }
    if (!visitedHour2[21]) {} else {
        visitedHour2[21].onchange = function () {
            if (+this.value > +allHour2[21].value) {
                this.value = allHour2[21].value
            }
        }
    }
    if (!visitedHour2[22]) {} else {
        visitedHour2[22].onchange = function () {
            if (+this.value > +allHour2[22].value) {
                this.value = allHour2[22].value
            }
        }
    }
    if (!visitedHour2[23]) {} else {
        visitedHour2[23].onchange = function () {
            if (+this.value > +allHour2[23].value) {
                this.value = allHour2[23].value
            }
        }
    }
    if (!visitedHour2[24]) {} else {
        visitedHour2[24].onchange = function () {
            if (+this.value > +allHour2[24].value) {
                this.value = allHour2[24].value
            }
        }
    }
    if (!visitedHour2[25]) {} else {
        visitedHour2[25].onchange = function () {
            if (+this.value > +allHour2[25].value) {
                this.value = allHour2[25].value
            }
        }
    }
    if (!visitedHour2[26]) {} else {
        visitedHour2[26].onchange = function () {
            if (+this.value > +allHour2[26].value) {
                this.value = allHour2[26].value
            }
        }
    }
    if (!visitedHour2[27]) {} else {
        visitedHour2[27].onchange = function () {
            if (+this.value > +allHour2[27].value) {
                this.value = allHour2[27].value
            }
        }
    }
    if (!visitedHour2[28]) {} else {
        visitedHour2[28].onchange = function () {
            if (+this.value > +allHour2[28].value) {
                this.value = allHour2[28].value
            }
        }
    }
    if (!visitedHour2[29]) {} else {
        visitedHour2[29].onchange = function () {
            if (+this.value > +allHour2[29].value) {
                this.value = allHour2[29].value
            }
        }
    }
    if (!visitedHour2[30]) {} else {
        visitedHour2[30].onchange = function () {
            if (+this.value > +allHour2[30].value) {
                this.value = allHour2[30].value
            }
        }
    }
    if (!visitedHour2[31]) {} else {
        visitedHour2[31].onchange = function () {
            if (+this.value > +allHour2[31].value) {
                this.value = allHour2[31].value
            }
        }
    }
    if (!visitedHour2[32]) {} else {
        visitedHour2[32].onchange = function () {
            if (+this.value > +allHour2[32].value) {
                this.value = allHour2[32].value
            }
        }
    }
    if (!visitedHour2[33]) {} else {
        visitedHour2[33].onchange = function () {
            if (+this.value > +allHour2[33].value) {
                this.value = allHour2[33].value
            }
        }
    }
    if (!visitedHour2[34]) {} else {
        visitedHour2[34].onchange = function () {
            if (+this.value > +allHour2[34].value) {
                this.value = allHour2[34].value
            }
        }
    }
    if (!visitedHour2[35]) {} else {
        visitedHour2[35].onchange = function () {
            if (+this.value > +allHour2[35].value) {
                this.value = allHour2[35].value
            }
        }
    }


    // Занятия без опозданий
    if (!visitedHour2[0]) {} else {
        notDelay[0].onchange = function () {
            if (+this.value > +visitedHour2[0].value) {
                this.value = visitedHour2[0].value
            }
        }
    }
    if (!visitedHour2[1]) {} else {
        notDelay2[1].onchange = function () {
            if (+this.value > +visitedHour2[1].value) {
                this.value = visitedHour2[1].value
            }
        }
    }
    if (!visitedHour2[2]) {} else {
        notDelay2[2].onchange = function () {
            if (+this.value > +visitedHour2[2].value) {
                this.value = visitedHour2[2].value
            }
        }
    }
    if (!visitedHour2[3]) {} else {
        notDelay2[3].onchange = function () {
            if (+this.value > +visitedHour2[3].value) {
                this.value = visitedHour2[3].value
            }
        }
    }
    if (!visitedHour2[4]) {} else {
        notDelay2[4].onchange = function () {
            if (+this.value > +visitedHour2[4].value) {
                this.value = visitedHour2[4].value
            }
        }
    }
    if (!visitedHour2[5]) {} else {
        notDelay2[5].onchange = function () {
            if (+this.value > +visitedHour2[5].value) {
                this.value = visitedHour2[5].value
            }
        }
    }
    if (!visitedHour2[6]) {} else {
        notDelay2[6].onchange = function () {
            if (+this.value > +visitedHour2[6].value) {
                this.value = visitedHour2[6].value
            }
        }
    }
    if (!visitedHour2[7]) {} else {
        notDelay2[7].onchange = function () {
            if (+this.value > +visitedHour2[7].value) {
                this.value = visitedHour2[7].value
            }
        }
    }
    if (!visitedHour2[8]) {} else {
        notDelay2[8].onchange = function () {
            if (+this.value > +visitedHour2[8].value) {
                this.value = visitedHour2[8].value
            }
        }
    }
    if (!visitedHour2[9]) {} else {
        notDelay2[9].onchange = function () {
            if (+this.value > +visitedHour2[9].value) {
                this.value = visitedHour2[9].value
            }
        }
    }
    if (!visitedHour2[10]) {} else {
        notDelay2[10].onchange = function () {
            if (+this.value > +visitedHour2[10].value) {
                this.value = visitedHour2[10].value
            }
        }
    }
    if (!visitedHour2[11]) {} else {
        notDelay2[11].onchange = function () {
            if (+this.value > +visitedHour2[11].value) {
                this.value = visitedHour2[11].value
            }
        }
    }
    if (!visitedHour2[12]) {} else {
        notDelay2[12].onchange = function () {
            if (+this.value > +visitedHour2[12].value) {
                this.value = visitedHour2[12].value
            }
        }
    }
    if (!visitedHour2[13]) {} else {
        notDelay2[13].onchange = function () {
            if (+this.value > +visitedHour2[13].value) {
                this.value = visitedHour2[13].value
            }
        }
    }
    if (!visitedHour2[14]) {} else {
        notDelay2[14].onchange = function () {
            if (+this.value > +visitedHour2[14].value) {
                this.value = visitedHour2[14].value
            }
        }
    }
    if (!visitedHour2[15]) {} else {
        notDelay2[15].onchange = function () {
            if (+this.value > +visitedHour2[15].value) {
                this.value = visitedHour2[15].value
            }
        }
    }
    if (!visitedHour2[16]) {} else {
        notDelay2[16].onchange = function () {
            if (+this.value > +visitedHour2[16].value) {
                this.value = visitedHour2[16].value
            }
        }
    }
    if (!visitedHour2[17]) {} else {
        notDelay2[17].onchange = function () {
            if (+this.value > +visitedHour2[17].value) {
                this.value = visitedHour2[17].value
            }
        }
    }
    if (!visitedHour2[18]) {} else {
        notDelay2[18].onchange = function () {
            if (+this.value > +visitedHour2[18].value) {
                this.value = visitedHour2[18].value
            }
        }
    }
    if (!visitedHour2[19]) {} else {
        notDelay2[19].onchange = function () {
            if (+this.value > +visitedHour2[19].value) {
                this.value = visitedHour2[19].value
            }
        }
    }
    if (!visitedHour2[20]) {} else {
        notDelay2[20].onchange = function () {
            if (+this.value > +visitedHour2[20].value) {
                this.value = visitedHour2[20].value
            }
        }
    }
    if (!visitedHour2[21]) {} else {
        notDelay2[21].onchange = function () {
            if (+this.value > +visitedHour2[21].value) {
                this.value = visitedHour2[21].value
            }
        }
    }
    if (!visitedHour2[22]) {} else {
        notDelay2[22].onchange = function () {
            if (+this.value > +visitedHour2[22].value) {
                this.value = visitedHour2[22].value
            }
        }
    }
    if (!visitedHour2[23]) {} else {
        notDelay2[23].onchange = function () {
            if (+this.value > +visitedHour2[23].value) {
                this.value = visitedHour2[23].value
            }
        }
    }
    if (!visitedHour2[24]) {} else {
        notDelay2[24].onchange = function () {
            if (+this.value > +visitedHour2[24].value) {
                this.value = visitedHour2[24].value
            }
        }
    }
    if (!visitedHour2[25]) {} else {
        notDelay2[25].onchange = function () {
            if (+this.value > +visitedHour2[25].value) {
                this.value = visitedHour2[25].value
            }
        }
    }
    if (!visitedHour2[26]) {} else {
        notDelay2[26].onchange = function () {
            if (+this.value > +visitedHour2[26].value) {
                this.value = visitedHour2[26].value
            }
        }
    }
    if (!visitedHour2[27]) {} else {
        notDelay2[27].onchange = function () {
            if (+this.value > +visitedHour2[27].value) {
                this.value = visitedHour2[27].value
            }
        }
    }
    if (!visitedHour2[28]) {} else {
        notDelay2[28].onchange = function () {
            if (+this.value > +visitedHour2[28].value) {
                this.value = visitedHour2[28].value
            }
        }
    }
    if (!visitedHour2[29]) {} else {
        notDelay2[29].onchange = function () {
            if (+this.value > +visitedHour2[29].value) {
                this.value = visitedHour2[29].value
            }
        }
    }
    if (!visitedHour2[30]) {} else {
        notDelay2[30].onchange = function () {
            if (+this.value > +visitedHour2[30].value) {
                this.value = visitedHour2[30].value
            }
        }
    }
    if (!visitedHour2[31]) {} else {
        notDelay2[31].onchange = function () {
            if (+this.value > +visitedHour2[31].value) {
                this.value = visitedHour2[31].value
            }
        }
    }
    if (!visitedHour2[32]) {} else {
        notDelay2[32].onchange = function () {
            if (+this.value > +visitedHour2[32].value) {
                this.value = visitedHour2[32].value
            }
        }
    }
    if (!visitedHour2[33]) {} else {
        notDelay2[33].onchange = function () {
            if (+this.value > +visitedHour2[33].value) {
                this.value = visitedHour2[33].value
            }
        }
    }
    if (!visitedHour2[34]) {} else {
        notDelay2[34].onchange = function () {
            if (+this.value > +visitedHour2[34].value) {
                this.value = visitedHour2[34].value
            }
        }
    }
    if (!visitedHour2[35]) {} else {
        notDelay2[35].onchange = function () {
            if (+this.value > +visitedHour2[35].value) {
                this.value = visitedHour2[35].value
            }
        }
    }
    // Занятия без опозданий


    // Активные занятия
    if (!visitedHour2[0]) {} else {
        editActive2[0].onchange = function () {
            if (+this.value > +visitedHour2[0].value) {
                this.value = visitedHour2[0].value
            }
        }
    }
    if (!visitedHour2[1]) {} else {
        editActive2[1].onchange = function () {
            if (+this.value > +visitedHour2[1].value) {
                this.value = visitedHour2[1].value
            }
        }
    }
    if (!visitedHour2[2]) {} else {
        editActive2[2].onchange = function () {
            if (+this.value > +visitedHour2[2].value) {
                this.value = visitedHour2[2].value
            }
        }
    }
    if (!visitedHour2[3]) {} else {
        editActive2[3].onchange = function () {
            if (+this.value > +visitedHour2[3].value) {
                this.value = visitedHour2[3].value
            }
        }
    }
    if (!visitedHour2[4]) {} else {
        editActive2[4].onchange = function () {
            if (+this.value > +visitedHour2[4].value) {
                this.value = visitedHour2[4].value
            }
        }
    }
    if (!visitedHour2[5]) {} else {
        editActive2[5].onchange = function () {
            if (+this.value > +visitedHour2[5].value) {
                this.value = visitedHour2[5].value
            }
        }
    }
    if (!visitedHour2[6]) {} else {
        editActive2[6].onchange = function () {
            if (+this.value > +visitedHour2[6].value) {
                this.value = visitedHour2[6].value
            }
        }
    }
    if (!visitedHour2[7]) {} else {
        editActive2[7].onchange = function () {
            if (+this.value > +visitedHour2[7].value) {
                this.value = visitedHour2[7].value
            }
        }
    }
    if (!visitedHour2[8]) {} else {
        editActive2[8].onchange = function () {
            if (+this.value > +visitedHour2[8].value) {
                this.value = visitedHour2[8].value
            }
        }
    }
    if (!visitedHour2[9]) {} else {
        editActive2[9].onchange = function () {
            if (+this.value > +visitedHour2[9].value) {
                this.value = visitedHour2[9].value
            }
        }
    }
    if (!visitedHour2[10]) {} else {
        editActive2[10].onchange = function () {
            if (+this.value > +visitedHour2[10].value) {
                this.value = visitedHour2[10].value
            }
        }
    }
    if (!visitedHour2[11]) {} else {
        editActive2[11].onchange = function () {
            if (+this.value > +visitedHour2[11].value) {
                this.value = visitedHour2[11].value
            }
        }
    }
    if (!visitedHour2[12]) {} else {
        editActive2[12].onchange = function () {
            if (+this.value > +visitedHour2[12].value) {
                this.value = visitedHour2[12].value
            }
        }
    }
    if (!visitedHour2[13]) {} else {
        editActive2[13].onchange = function () {
            if (+this.value > +visitedHour2[13].value) {
                this.value = visitedHour2[13].value
            }
        }
    }
    if (!visitedHour2[14]) {} else {
        editActive2[14].onchange = function () {
            if (+this.value > +visitedHour2[14].value) {
                this.value = visitedHour2[14].value
            }
        }
    }
    if (!visitedHour2[15]) {} else {
        editActive2[15].onchange = function () {
            if (+this.value > +visitedHour2[15].value) {
                this.value = visitedHour2[15].value
            }
        }
    }
    if (!visitedHour2[16]) {} else {
        editActive2[16].onchange = function () {
            if (+this.value > +visitedHour2[16].value) {
                this.value = visitedHour2[16].value
            }
        }
    }
    if (!visitedHour2[17]) {} else {
        editActive2[17].onchange = function () {
            if (+this.value > +visitedHour2[17].value) {
                this.value = visitedHour2[17].value
            }
        }
    }
    if (!visitedHour2[18]) {} else {
        editActive2[18].onchange = function () {
            if (+this.value > +visitedHour2[18].value) {
                this.value = visitedHour2[18].value
            }
        }
    }
    if (!visitedHour2[19]) {} else {
        editActive2[19].onchange = function () {
            if (+this.value > +visitedHour2[19].value) {
                this.value = visitedHour2[19].value
            }
        }
    }
    if (!visitedHour2[20]) {} else {
        editActive2[20].onchange = function () {
            if (+this.value > +visitedHour2[20].value) {
                this.value = visitedHour2[20].value
            }
        }
    }
    if (!visitedHour2[21]) {} else {
        editActive2[21].onchange = function () {
            if (+this.value > +visitedHour2[21].value) {
                this.value = visitedHour2[21].value
            }
        }
    }
    if (!visitedHour2[22]) {} else {
        editActive2[22].onchange = function () {
            if (+this.value > +visitedHour2[22].value) {
                this.value = visitedHour2[22].value
            }
        }
    }
    if (!visitedHour2[23]) {} else {
        editActive2[23].onchange = function () {
            if (+this.value > +visitedHour2[23].value) {
                this.value = visitedHour2[23].value
            }
        }
    }
    if (!visitedHour2[24]) {} else {
        editActive2[24].onchange = function () {
            if (+this.value > +visitedHour2[24].value) {
                this.value = visitedHour2[24].value
            }
        }
    }
    if (!visitedHour2[25]) {} else {
        editActive2[25].onchange = function () {
            if (+this.value > +visitedHour2[25].value) {
                this.value = visitedHour2[25].value
            }
        }
    }
    if (!visitedHour2[26]) {} else {
        editActive2[26].onchange = function () {
            if (+this.value > +visitedHour2[26].value) {
                this.value = visitedHour2[26].value
            }
        }
    }
    if (!visitedHour2[27]) {} else {
        editActive2[27].onchange = function () {
            if (+this.value > +visitedHour2[27].value) {
                this.value = visitedHour2[27].value
            }
        }
    }
    if (!visitedHour2[28]) {} else {
        editActive2[28].onchange = function () {
            if (+this.value > +visitedHour2[28].value) {
                this.value = visitedHour2[28].value
            }
        }
    }
    if (!visitedHour2[29]) {} else {
        editActive2[29].onchange = function () {
            if (+this.value > +visitedHour2[29].value) {
                this.value = visitedHour2[29].value
            }
        }
    }
    if (!visitedHour2[30]) {} else {
        editActive2[30].onchange = function () {
            if (+this.value > +visitedHour2[30].value) {
                this.value = visitedHour2[30].value
            }
        }
    }
    if (!visitedHour2[31]) {} else {
        editActive2[31].onchange = function () {
            if (+this.value > +visitedHour2[31].value) {
                this.value = visitedHour2[31].value
            }
        }
    }
    if (!visitedHour2[32]) {} else {
        editActive2[32].onchange = function () {
            if (+this.value > +visitedHour2[32].value) {
                this.value = visitedHour2[32].value
            }
        }
    }
    if (!visitedHour2[33]) {} else {
        editActive2[33].onchange = function () {
            if (+this.value > +visitedHour2[33].value) {
                this.value = visitedHour2[33].value
            }
        }
    }
    if (!visitedHour2[34]) {} else {
        editActive2[34].onchange = function () {
            if (+this.value > +visitedHour2[34].value) {
                this.value = visitedHour2[34].value
            }
        }
    }
    if (!visitedHour2[35]) {} else {
        editActive2[35].onchange = function () {
            if (+this.value > +visitedHour2[35].value) {
                this.value = visitedHour2[35].value
            }
        }
    }
    // Активные занятия

    // Ограничение ввода посещенных занятий при редактировании БРС



    // Для редактирования
    // Калькуляция БРС при добавлении студента
    $("#submit_studetn_brs331").on("click", function () {
        var add_name_predm = document.getElementById('add_name_predm').value
        var add_student_brs331 = document.getElementById('add_student_brs331').value
        var add_id_predm = document.getElementById('add_id_predm').value
        var average__current_1 = document.getElementById('average__current_1').value
        var average__current_2 = document.getElementById('average__current_2').value
        var average__control_1 = document.getElementById('average__control_1').value
        var average__control_2 = document.getElementById('average__control_2').value
        var visited_1 = document.getElementById('visited_1').value
        var visited_2 = document.getElementById('visited_2').value
        var not_delay_1 = document.getElementById('not_delay_1').value
        var not_delay_2 = document.getElementById('not_delay_2').value
        var active_1 = document.getElementById('active_1').value
        var active_2 = document.getElementById('active_2').value
        var controle = document.getElementById('controle').value
        var summ__all1 = document.getElementById('summ__all1').value
        var summ__all2 = document.getElementById('summ__all2').value
        var summ__note1 = document.getElementById('summ__note1').value
        var summ__note2 = document.getElementById('summ__note2').value
        var summ__full__balls = document.getElementById('summ__full__balls').value
        var final__note = document.getElementById('final__note').value
        let summ__average__current_1 = document.getElementById('summ__average__current_1')
        let summ__average__current_2 = document.getElementById('summ__average__current_2')
        let summ__average__control_1 = document.getElementById('summ__average__control_1')
        let summ__average__control_2 = document.getElementById('summ__average__control_2')
        let summ__visited_1 = document.getElementById('summ__visited_1')
        let summ__visited_2 = document.getElementById('summ__visited_2')
        let summ__not_delay_1 = document.getElementById('summ__not_delay_1')
        let summ__not_delay_2 = document.getElementById('summ__not_delay_2')
        let summ__not_active_1 = document.getElementById('summ__not_active_1')
        let summ__not_active_2 = document.getElementById('summ__not_active_2')
        let hour_1 = document.getElementById('hour_1').value
        let hour_2 = document.getElementById('hour_2').value
        let v_summ__average__current_1 = (average__current_1 / 5) * 21
        summ__average__current_1 = v_summ__average__current_1.toFixed(2)
        let v_summ__average__current_2 = (average__current_2 / 5) * 21
        summ__average__current_2 = v_summ__average__current_2.toFixed(2)
        let v_summ__average__control_1 = (average__control_1 / 5) * 40
        summ__average__control_1 = v_summ__average__control_1.toFixed(2)
        let v_summ__average__control_2 = (average__control_2 / 5) * 40
        summ__average__control_2 = v_summ__average__control_2.toFixed(2)
        let v_summ__visited_1 = (8 / hour_1) * visited_1
        summ__visited_1 = v_summ__visited_1.toFixed(2)
        let v_summ__visited_2 = (8 / hour_2.value) * visited_2
        summ__visited_2 = v_summ__visited_2.toFixed(2)
        let v_summ__not_delay_1 = (5 / hour_1) * not_delay_1
        summ__not_delay_1 = v_summ__not_delay_1.toFixed(2)
        let v_summ__not_delay_2 = (5 / hour_2) * not_delay_2
        summ__not_delay_2 = v_summ__not_delay_2.toFixed(2)
        let v_summ__not_active_1 = active_1 * 8 / ((hour_1 * 30) / 100)
        summ__not_active_1 = v_summ__not_active_1.toFixed(2)
        let v_summ__not_active_2 = active_2 * 8 / ((hour_2 * 30) / 100)
        summ__not_active_2 = v_summ__not_active_2.toFixed(2)
        let v_summ__all1 = Number(summ__average__current_1) + Number(summ__average__control_1) + Number(summ__visited_1) + Number(summ__not_delay_1) + Number(summ__not_active_1)
        summ__all1 = v_summ__all1.toFixed(2)
        let v_summ__all2 = Number(summ__average__current_2) + Number(summ__average__control_2) + Number(summ__visited_2) + Number(summ__not_delay_2) + Number(summ__not_active_2)
        summ__all2 = v_summ__all2.toFixed(2)

        // Перевод баллов в отметку первая КН
        if (summ__all1 >= 0 && summ__all1 <= 69.99) {
            summ__note1 = 2
        }
        if (summ__all1 >= 70 && summ__all1 <= 79.99) {
            summ__note1 = 3
        }
        if (summ__all1 >= 80 && summ__all1 <= 89.99) {
            summ__note1 = 4
        }
        if (summ__all1 >= 90 && summ__all1 <= 120) {
            summ__note1 = 5
        }
        // Перевод баллов в отметку первая КН
        // Перевод баллов в отметку итог семестра
        if (summ__all2 >= 0 && summ__all2 <= 69.99) {
            summ__note2 = 2
        }
        if (summ__all2 >= 70 && summ__all2 <= 79.99) {
            summ__note2 = 3
        }
        if (summ__all2 >= 80 && summ__all2 <= 89.99) {
            summ__note2 = 4
        }
        if (summ__all2 >= 90 && summ__all2 <= 120) {
            summ__note2 = 5
        }

        // Перевод баллов в отметку итог семестра
        // Подсчет иговых балов при зачете
        if (controle != 0) {
            let v_summ__full__balls = (Number(summ__all1) + Number(summ__all2) + Number(controle)) / 3
            summ__full__balls = v_summ__full__balls.toFixed(2)
        }
        // Подсчет иговых балов при зачете
        // Подсчет иговых балов без зачета
        if (controle < 1) {
            let v_summ__full__balls = (Number(summ__all1) + Number(summ__all2)) / 2
            summ__full__balls = v_summ__full__balls.toFixed(2)
        }

        // Подсчет иговых балов без зачета
        // Перевод итоговых баллов в отметку итог семестра
        if (summ__full__balls >= 0 && summ__full__balls <= 69.99) {
            final__note = 2
        }
        if (summ__full__balls >= 70 && summ__full__balls <= 79.99) {
            final__note = 3
        }
        if (summ__full__balls >= 80 && summ__full__balls <= 89.99) {
            final__note = 4
        }
        if (summ__full__balls >= 90 && summ__full__balls <= 120) {
            final__note = 5
        }

        // Перевод итоговых баллов в отметку итог семестра
        // Калькуляция БРС при добавлении студента
        // Отправка данных БРС в БД при добавлении студента
        $.ajax({
            url: '/brs.php',
            type: 'POST',
            data: {
                add_name_predm,
                add_student_brs331,
                add_id_predm,
                average__current_1,
                average__current_2,
                average__control_1,
                average__control_2,
                visited_1,
                visited_2,
                not_delay_1,
                not_delay_2,
                active_1,
                active_2,
                controle,
                summ__all1,
                summ__all2,
                summ__note1,
                summ__note2,
                summ__full__balls,
                final__note,
                hour_1,
                hour_2
            },
            success: function (data) {
                // location.reload();
            },
            error: function () {
                console.log('ERROR');
            }
        })
        // Отправка данных БРС в БД при добавлении студента
    });
    document.body.onclick = function (event) {
        t = event.target || event.srcElement;
        // alert(t.id);
        if (t.id == 'edit_submit_brs331') {
            var edit_predmet = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_predmet').value
            var edit_students = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_students').value
            var edit_id_predm = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_id_predm').value
            var edit_average__current_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__current_1').value
            var edit_average__current_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__current_2').value
            var edit_average__control_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__control_1').value
            var edit_average__control_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__control_2').value
            var edit_visited_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_visited_1').value
            var edit_visited_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_visited_2').value
            var edit_not_delay_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_not_delay_1').value
            var edit_not_delay_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_not_delay_2').value
            var edit_active_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_active_1').value
            var edit_active_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_active_2').value
            var edit_controle = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_controle').value
            var id = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.modal-footer > p#qwe').textContent
            var edit_summ__all1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__all1').value
            var edit_summ__all2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__all2').value
            var edit_summ__note1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__note1').value
            var edit_summ__note2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__note2').value
            var edit_summ__full__balls = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__full__balls').value
            var edit_final__note = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_final__note').value
            let edit_summ__average__current_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__current_1')
            let edit_summ__average__current_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__current_2')
            let edit_summ__average__control_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__control_1')
            let edit_summ__average__control_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__control_2')
            let edit_summ__visited_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__visited_1')
            let edit_summ__visited_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__visited_2')
            let edit_summ__not_delay_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_delay_1')
            let edit_summ__not_delay_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_delay_2')
            let edit_summ__not_active_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_active_1')
            let edit_summ__not_active_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_active_2')

            let edit_hour_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_hour_1').value
            let edit_hour_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_hour_2').value


            let v_summ__average__current_1 = (edit_average__current_1 / 5) * 21
            edit_summ__average__current_1 = v_summ__average__current_1.toFixed(2)
            let v_summ__average__current_2 = (edit_average__current_2 / 5) * 21
            edit_summ__average__current_2 = v_summ__average__current_2.toFixed(2)
            let v_summ__average__control_1 = (edit_average__control_1 / 5) * 40
            edit_summ__average__control_1 = v_summ__average__control_1.toFixed(2)
            let v_summ__average__control_2 = (edit_average__control_2 / 5) * 40
            edit_summ__average__control_2 = v_summ__average__control_2.toFixed(2)
            let v_summ__visited_1 = (8 / edit_hour_1) * edit_visited_1
            edit_summ__visited_1 = v_summ__visited_1.toFixed(2)
            let v_summ__visited_2 = (8 / edit_hour_2) * edit_visited_2
            edit_summ__visited_2 = v_summ__visited_2.toFixed(2)
            let v_summ__not_delay_1 = (5 / edit_hour_1) * edit_not_delay_1
            edit_summ__not_delay_1 = v_summ__not_delay_1.toFixed(2)
            let v_summ__not_delay_2 = (5 / edit_hour_2) * edit_not_delay_2
            edit_summ__not_delay_2 = v_summ__not_delay_2.toFixed(2)
            let v_summ__not_active_1 = edit_active_1 * 8 / ((edit_hour_1 * 30) / 100)
            edit_summ__not_active_1 = v_summ__not_active_1.toFixed(2)
            let v_summ__not_active_2 = edit_active_2 * 8 / ((edit_hour_2 * 30) / 100)
            edit_summ__not_active_2 = v_summ__not_active_2.toFixed(2)
            let v_summ__all1 = Number(edit_summ__average__current_1) + Number(edit_summ__average__control_1) + Number(edit_summ__visited_1) + Number(edit_summ__not_delay_1) + Number(edit_summ__not_active_1)
            edit_summ__all1 = v_summ__all1.toFixed(2)
            let v_summ__all2 = Number(edit_summ__average__current_2) + Number(edit_summ__average__control_2) + Number(edit_summ__visited_2) + Number(edit_summ__not_delay_2) + Number(edit_summ__not_active_2)
            edit_summ__all2 = v_summ__all2.toFixed(2)
            // Перевод баллов в отметку первая КН
            if (edit_summ__all1 >= 0 && edit_summ__all1 <= 69.99) {
                edit_summ__note1 = 2
            }
            if (edit_summ__all1 >= 70 && edit_summ__all1 <= 79.99) {
                edit_summ__note1 = 3
            }
            if (edit_summ__all1 >= 80 && edit_summ__all1 <= 89.99) {
                edit_summ__note1 = 4
            }
            if (edit_summ__all1 >= 90 && edit_summ__all1 <= 120) {
                edit_summ__note1 = 5
            }
            // Перевод баллов в отметку первая КН
            // Перевод баллов в отметку итог семестра
            if (edit_summ__all2 >= 0 && edit_summ__all2 <= 69.99) {
                edit_summ__note2 = 2
            }
            if (edit_summ__all2 >= 70 && edit_summ__all2 <= 79.99) {
                edit_summ__note2 = 3
            }
            if (edit_summ__all2 >= 80 && edit_summ__all2 <= 89.99) {
                edit_summ__note2 = 4
            }
            if (edit_summ__all2 >= 90 && edit_summ__all2 <= 120) {
                edit_summ__note2 = 5
            }
            // Перевод баллов в отметку итог семестра
            // Подсчет иговых балов при зачете
            if (edit_controle != 0) {
                let v_summ__full__balls = (Number(edit_summ__all1) + Number(edit_summ__all2) + Number(edit_controle)) / 3
                edit_summ__full__balls = v_summ__full__balls.toFixed(2)
            }
            // Подсчет иговых балов при зачете
            // Подсчет иговых балов без зачета
            if (edit_controle < 1) {
                let v_summ__full__balls = (Number(edit_summ__all1) + Number(edit_summ__all2)) / 2
                edit_summ__full__balls = v_summ__full__balls.toFixed(2)
            }
            // Подсчет иговых балов без зачета
            // Перевод итоговых баллов в отметку итог семестра
            if (edit_summ__full__balls >= 0 && edit_summ__full__balls <= 69.99) {
                edit_final__note = 2
            }
            if (edit_summ__full__balls >= 70 && edit_summ__full__balls <= 79.99) {
                edit_final__note = 3
            }
            if (edit_summ__full__balls >= 80 && edit_summ__full__balls <= 89.99) {
                edit_final__note = 4
            }
            if (edit_summ__full__balls >= 90 && edit_summ__full__balls <= 120) {
                edit_final__note = 5
            }
            // Перевод итоговых баллов в отметку итог семестра
            $.ajax({
                url: '/brs.php',
                type: 'POST',
                data: {
                    id,
                    edit_predmet,
                    edit_students,
                    edit_id_predm,
                    edit_average__current_1,
                    edit_average__current_2,
                    edit_average__control_1,
                    edit_average__control_2,
                    edit_hour_1,
                    edit_hour_2,
                    edit_visited_1,
                    edit_visited_2,
                    edit_not_delay_1,
                    edit_not_delay_2,
                    edit_active_1,
                    edit_active_2,
                    edit_controle,
                    edit_summ__all1,
                    edit_summ__all2,
                    edit_summ__note1,
                    edit_summ__note2,
                    edit_summ__full__balls,
                    edit_final__note
                },
                success: function (data) {
                    // location.reload();
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }


    // Подсчет балов и перевод в отметку

    let note1 = document.getElementsByClassName('summ__note1');
    for (let i = 0; i < note1.length; i++) {
        if (note1[i].textContent == 5) {
            note1[i].classList.add('note_5')
        }
        if (note1[i].textContent == 4) {
            note1[i].classList.add('note_4')
        }
        if (note1[i].textContent == 3) {
            note1[i].classList.add('note_3')
        }
        if (note1[i].textContent == 2) {
            note1[i].classList.add('note_2')
        }
    }
    let note2 = document.getElementsByClassName('summ__note2');
    for (let i = 0; i < note2.length; i++) {
        if (note2[i].textContent == 5) {
            note2[i].classList.add('note_5')
        }
        if (note2[i].textContent == 4) {
            note2[i].classList.add('note_4')
        }
        if (note2[i].textContent == 3) {
            note2[i].classList.add('note_3')
        }
        if (note2[i].textContent == 2) {
            note2[i].classList.add('note_2')
        }
    }
    let final_grade = document.getElementsByClassName('final_grade');
    for (let i = 0; i < final_grade.length; i++) {
        if (final_grade[i].textContent == 5) {
            final_grade[i].classList.add('note_5')
        }
        if (final_grade[i].textContent == 4) {
            final_grade[i].classList.add('note_4')
        }
        if (final_grade[i].textContent == 3) {
            final_grade[i].classList.add('note_3')
        }
        if (final_grade[i].textContent == 2) {
            final_grade[i].classList.add('note_2')
        }
    }
    // Подсчет балов и перевод в отметку


    // Переключение групп кнопками
    let local101 = document.querySelector('.local101')
    let local111 = document.querySelector('.local111')
    let local121 = document.querySelector('.local121')
    let local201 = document.querySelector('.local201')
    let local202 = document.querySelector('.local202')
    let local211 = document.querySelector('.local211')
    let local221 = document.querySelector('.local221')
    let local231 = document.querySelector('.local231')
    let local241 = document.querySelector('.local241')
    let local301 = document.querySelector('.local301')
    let local302 = document.querySelector('.local302')
    let local311 = document.querySelector('.local311')
    let local321 = document.querySelector('.local321')
    let local331 = document.querySelector('.local331')
    let local341 = document.querySelector('.local341')
    let local401 = document.querySelector('.local401')
    let local402 = document.querySelector('.local402')
    let local411 = document.querySelector('.local411')
    let local421 = document.querySelector('.local421')
    let local431 = document.querySelector('.local431')
    let local441 = document.querySelector('.local441')

    if (!local101) {} else {
        local101.onclick = function () {
            localStorage.setItem('brsGroup', '101')
            console.log(localStorage.getItem('brsGroup'))
        }
        local111.onclick = function () {
            localStorage.setItem('brsGroup', '111')
            console.log(localStorage.getItem('brsGroup'))
        }
        local121.onclick = function () {
            localStorage.setItem('brsGroup', '121')
            console.log(localStorage.getItem('brsGroup'))
        }
        local201.onclick = function () {
            localStorage.setItem('brsGroup', '201')
            console.log(localStorage.getItem('brsGroup'))
        }
        local202.onclick = function () {
            localStorage.setItem('brsGroup', '202')
            console.log(localStorage.getItem('brsGroup'))
        }
        local211.onclick = function () {
            localStorage.setItem('brsGroup', '211')
            console.log(localStorage.getItem('brsGroup'))
        }
        local221.onclick = function () {
            localStorage.setItem('brsGroup', '221')
            console.log(localStorage.getItem('brsGroup'))
        }
        local231.onclick = function () {
            localStorage.setItem('brsGroup', '231')
            console.log(localStorage.getItem('brsGroup'))
        }
        local241.onclick = function () {
            localStorage.setItem('brsGroup', '241')
            console.log(localStorage.getItem('brsGroup'))
        }
        local301.onclick = function () {
            localStorage.setItem('brsGroup', '301')
            console.log(localStorage.getItem('brsGroup'))
        }
        local302.onclick = function () {
            localStorage.setItem('brsGroup', '302')
            console.log(localStorage.getItem('brsGroup'))
        }
        local311.onclick = function () {
            localStorage.setItem('brsGroup', '311')
            console.log(localStorage.getItem('brsGroup'))
        }
        local321.onclick = function () {
            localStorage.setItem('brsGroup', '321')
            console.log(localStorage.getItem('brsGroup'))
        }
        local331.onclick = function () {
            localStorage.setItem('brsGroup', '331')
            console.log(localStorage.getItem('brsGroup'))
        }
        local341.onclick = function () {
            localStorage.setItem('brsGroup', '341')
            console.log(localStorage.getItem('brsGroup'))
        }
        local401.onclick = function () {
            localStorage.setItem('brsGroup', '401')
            console.log(localStorage.getItem('brsGroup'))
        }
        local402.onclick = function () {
            localStorage.setItem('brsGroup', '402')
            console.log(localStorage.getItem('brsGroup'))
        }
        local411.onclick = function () {
            localStorage.setItem('brsGroup', '411')
            console.log(localStorage.getItem('brsGroup'))
        }
        local421.onclick = function () {
            localStorage.setItem('brsGroup', '421')
            console.log(localStorage.getItem('brsGroup'))
        }
        local431.onclick = function () {
            localStorage.setItem('brsGroup', '431')
            console.log(localStorage.getItem('brsGroup'))
        }
        local441.onclick = function () {
            localStorage.setItem('brsGroup', '441')
            console.log(localStorage.getItem('brsGroup'))
        }

        let brsGroup = document.querySelector('.brs__group')
        brsGroup.value = localStorage.getItem('brsGroup')

        let brsGroupTitle = document.querySelector('.brs__group-title')
        brsGroupTitle.textContent = brsGroup.value

        let brsButtonGroup = document.querySelectorAll('.brs__button-group')
        for (let i = 0; i < brsButtonGroup.length; i++) {
            if (brsButtonGroup[i].textContent == brsGroup.value) {
                brsButtonGroup[i].classList.add('brs__button-group__active')
            }
        }
    }
    // Переключение групп кнопками




    let addStIn = document.getElementById('add__student__input')
    if (!addStIn) {} else {
        addStIn.oninput = function () {
            document.getElementById('add__student__submit').removeAttribute('disabled', 'ok')
            if (addStIn.value == '') {
                document.getElementById('add__student__submit').setAttribute('disabled', 'ok')
            }
        }
    }
    let addStInSkip = document.getElementById('add__student__input_skip')
    if (!addStInSkip) {} else {
        addStInSkip.oninput = function () {
            document.getElementById('add__student__submit_skip').removeAttribute('disabled', 'ok')
            if (addStInSkip.value == '') {
                document.getElementById('add__student__submit_skip').setAttribute('disabled', 'ok')
            }
        }
    }

    let addPrCode = document.getElementById('add__predmet__code')
    let addContVar = document.getElementById('add__predmet__controle')
    let addPrName = document.getElementById('add__predmet__input')
    if (!addPrCode) {} else {
        addPrCode.onclick = function () {
            if (addPrCode.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addContVar.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrName.value == '') {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrCode.value != 0 && addPrName.value != '' && addContVar.value != 0) {
                document.getElementById('add__predmet__submit').removeAttribute('disabled', 'ok')
            }

        }
    }
    if (!addContVar) {} else {
        addContVar.onclick = function () {
            if (addPrCode.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addContVar.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrName.value == '') {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrCode.value != 0 && addPrName.value != '' && addContVar.value != 0) {
                document.getElementById('add__predmet__submit').removeAttribute('disabled', 'ok')
            }

        }
    }
    if (!addPrName) {} else {
        addPrName.oninput = function () {
            if (addPrCode.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addContVar.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrName.value == '') {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrCode.value != 0 && addPrName.value != '' && addContVar.value != 0) {
                document.getElementById('add__predmet__submit').removeAttribute('disabled', 'ok')
            }

        }
    }




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
    eList.click(function () {
        eListMenu.toggleClass('visible__menu')
    });

    let groups = $('.groups');
    let groupsMenu = $('.groups__menu');
    groups.click(function () {
        groupsMenu.toggleClass('visible__menu')
    });

    let curating = $('.curating');
    let curatingMenu = $('.curating__menu');
    curating.click(function () {
        curatingMenu.toggleClass('visible__menu')
    });

    let missedLessons = $('.missed__lessons');
    let missedLessonsMenu = $('.missed__lessons__menu');
    missedLessons.click(function () {
        missedLessonsMenu.toggleClass('visible__menu')
    });

    let archivs = $('.archivs');
    let archivsMenu = $('.archivs__menu');
    archivs.click(function () {
        archivsMenu.toggleClass('visible__menu')
    });
    /*Элементы выпадающего меню при адаптивности*/
    /*Адаптивное меню*/

    // Отображение ссылок для преподавателей
    let action = document.querySelectorAll('.action')
    let actionReport = document.querySelectorAll('.action-report')
    let listReport1 = document.getElementById('list-report_1')
    let listReport2 = document.getElementById('list-report_2')
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
    let navKrReport = document.getElementById('nav__kr__report')
    let letreportKR = document.querySelector('.report__kr')

    let roleUser = document.getElementById('role__user')


    if (!roleUser) {} else {
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
            }
            fullreportMenu.removeAttribute('hidden')
            notesList.removeAttribute('hidden')
            fullNotesList.removeAttribute('hidden')
            archive.removeAttribute('hidden')
            navSkips.removeAttribute('hidden')
            navSkipsTable.removeAttribute('hidden')
            navBase.removeAttribute('hidden')
            navGroups.removeAttribute('hidden')
            navKrReport.removeAttribute('hidden')
            letreportKR.removeAttribute('hidden')
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
            // if (!actionReport) {} else {
            //     actionReport.removeAttribute('hidden')
            // }
        }
        if (roleUser.textContent == 4) {
            if (!sbg) {} else {
                sbg.removeAttribute('hidden')
            }
            fullreportMenu.removeAttribute('hidden')
            archive.removeAttribute('hidden')
            navSkipsTable.removeAttribute('hidden')
            letreportKR.removeAttribute('hidden')
            listReport1.setAttribute('hidden', 'ok')
            listReport2.setAttribute('hidden', 'ok')
        }
        if (roleUser.textContent == 5) {
            navGroups.removeAttribute('hidden')
            navSkips.removeAttribute('hidden')
            listReport1.setAttribute('hidden', 'ok')
            notesList.removeAttribute('hidden')
            navKrReport.removeAttribute('hidden')
            letreportKR.removeAttribute('hidden')
            listReport2.setAttribute('hidden', 'ok')
        }
        if (roleUser.textContent == 3) {
            notesList.removeAttribute('hidden')
            navGroups.removeAttribute('hidden')
            navSkips.removeAttribute('hidden')
            navKrReport.removeAttribute('hidden')
            letreportKR.removeAttribute('hidden')
            listReport1.setAttribute('hidden', 'ok')
            listReport2.setAttribute('hidden', 'ok')
        }
    }
    // Отображение ссылок для преподавателей



    // Копирование ссылки на таблицу с отметками
    if (!document.getElementById('copy__link')) {} else {
        document.getElementById('copy__link').onclick = function (event) {
            event.preventDefault()
            var copyText = document.getElementById('myInput')
            copyText.select()
            document.execCommand('copy')
            document.getElementById('copy__tip').textContent = 'Ссылка скопирована!'
        }
        document.getElementById('copy__link').onmouseout = function (event) {
            document.getElementById('copy__tip').textContent = 'Скопировать ссылку'
        }
    }
    // Копирование ссылки на таблицу с отметками
    let editMonate = document.getElementById('edit_monate')
    let enterMonate = document.getElementById('enter_monate')

    let toDo = document.getElementById('edit_kr_to_do')
    let activities = document.getElementById('edit_kr_group_activities')
    let section = document.getElementById('edit_kr_section')
    let academic_debt = document.getElementById('edit_kr_academic_debt')
    let skipping = document.getElementById('edit_kr_skipping')
    let breaking_rules = document.getElementById('edit_kr_breaking_rules')
    let smoking = document.getElementById('edit_kr_smoking')
    let dress_code = document.getElementById('edit_kr_dress_code')
    let volunteers = document.getElementById('edit_kr_volunteers')
    let food = document.getElementById('edit_kr_food')
    let stableFood = document.getElementById('edit_kr_stable_food')
    let characteristics = document.getElementById('edit_kr_characteristics')
    let stLeght = document.getElementById('st_leght')
    let points = document.getElementById('points')

    let editBtn = document.getElementById('edit_kr_report')


    if (!editMonate) {} else {
        if (editMonate.value == 1) {
            enterMonate.value = 'Сентябрь'
        }
        if (editMonate.value == 2) {
            enterMonate.value = 'Октябрь'
        }
        if (editMonate.value == 3) {
            enterMonate.value = 'Ноябрь'
        }
        if (editMonate.value == 4) {
            enterMonate.value = 'Декабрь'
        }
        if (editMonate.value == 5) {
            enterMonate.value = 'Январь'
        }
        if (editMonate.value == 6) {
            enterMonate.value = 'Февраль'
        }
        if (editMonate.value == 7) {
            enterMonate.value = 'Март'
        }
        if (editMonate.value == 8) {
            enterMonate.value = 'Апрель'
        }
        if (editMonate.value == 9) {
            enterMonate.value = 'Май'
        }
        if (editMonate.value == 10) {
            enterMonate.value = 'Июнь'
        }
        editMonate.onchange = function () {
            if (editMonate.value == 1) {
                enterMonate.value = 'Сентябрь'
            }
            if (editMonate.value == 2) {
                enterMonate.value = 'Октябрь'
            }
            if (editMonate.value == 3) {
                enterMonate.value = 'Ноябрь'
            }
            if (editMonate.value == 4) {
                enterMonate.value = 'Декабрь'
            }
            if (editMonate.value == 5) {
                enterMonate.value = 'Январь'
            }
            if (editMonate.value == 6) {
                enterMonate.value = 'Февраль'
            }
            if (editMonate.value == 7) {
                enterMonate.value = 'Март'
            }
            if (editMonate.value == 8) {
                enterMonate.value = 'Апрель'
            }
            if (editMonate.value == 9) {
                enterMonate.value = 'Май'
            }
            if (editMonate.value == 10) {
                enterMonate.value = 'Июнь'
            }
        }
    }

    if (!toDo) {} else {
        toDo.oninput = function () {
            if (+toDo.value > +stLeght.textContent) {
                toDo.value = stLeght.textContent
            }
        }
    }
    if (!activities) {} else {
        let activitiesName_1 = document.getElementById('edit_kr_activities_name_1')
        let activitiesName_2 = document.getElementById('edit_kr_activities_name_2')
        let activitiesName_3 = document.getElementById('edit_kr_activities_name_3')
        let activitiesName_4 = document.getElementById('edit_kr_activities_name_4')

        if (activities.value >= 1) {
            activitiesName_1.removeAttribute('hidden')
        }
        if (activities.value >= 2) {
            activitiesName_2.removeAttribute('hidden')
        }
        if (activities.value >= 3) {
            activitiesName_3.removeAttribute('hidden')
        }
        if (activities.value >= 4) {
            activitiesName_4.removeAttribute('hidden')
        }
        if (activities.value < 4) {
            activitiesName_4.setAttribute('hidden', 'ok')
        }
        if (activities.value < 3) {
            activitiesName_3.setAttribute('hidden', 'ok')
        }
        if (activities.value < 2) {
            activitiesName_2.setAttribute('hidden', 'ok')
        }
        if (activities.value < 1) {
            activitiesName_1.setAttribute('hidden', 'ok')
        }

        activities.oninput = function () {
            if (activities.value >= 1) {
                activitiesName_1.removeAttribute('hidden')
            }
            if (activities.value >= 2) {
                activitiesName_2.removeAttribute('hidden')
            }
            if (activities.value >= 3) {
                activitiesName_3.removeAttribute('hidden')
            }
            if (activities.value >= 4) {
                activitiesName_4.removeAttribute('hidden')
            }
            if (activities.value < 4) {
                activitiesName_4.setAttribute('hidden', 'ok')
                activitiesName_4.value = ""
            }
            if (activities.value < 3) {
                activitiesName_3.setAttribute('hidden', 'ok')
                activitiesName_3.value = ""
            }
            if (activities.value < 2) {
                activitiesName_2.setAttribute('hidden', 'ok')
                activitiesName_2.value = ""
            }
            if (activities.value < 1) {
                activitiesName_1.setAttribute('hidden', 'ok')
                activitiesName_1.value = ""
            }
        }
    }
    if (!section) {} else {
        section.oninput = function () {
            if (+section.value > +stLeght.textContent) {
                section.value = stLeght.textContent
            }
        }
    }
    if (!academic_debt) {} else {
        academic_debt.oninput = function () {
            if (+academic_debt.value > +stLeght.textContent) {
                academic_debt.value = stLeght.textContent
            }
        }
    }
    if (!skipping) {} else {
        let skipping_1 = document.getElementById('skipping_name_1')
        let skipping_2 = document.getElementById('skipping_name_2')
        let skipping_3 = document.getElementById('skipping_name_3')
        let skipping_4 = document.getElementById('skipping_name_4')
        let skipping_5 = document.getElementById('skipping_name_5')
        let skipping_6 = document.getElementById('skipping_name_6')
        let skipping_7 = document.getElementById('skipping_name_7')
        let skipping_8 = document.getElementById('skipping_name_8')
        let skipping_9 = document.getElementById('skipping_name_9')
        let skipping_10 = document.getElementById('skipping_name_10')
        let skipping_11 = document.getElementById('skipping_name_11')
        let skipping_12 = document.getElementById('skipping_name_12')
        let skipping_13 = document.getElementById('skipping_name_13')
        let skipping_14 = document.getElementById('skipping_name_14')
        let skipping_15 = document.getElementById('skipping_name_15')

        if (skipping.value >= 1) {
            skipping_1.removeAttribute('hidden')
        }
        if (skipping.value >= 2) {
            skipping_2.removeAttribute('hidden')
        }
        if (skipping.value >= 3) {
            skipping_3.removeAttribute('hidden')
        }
        if (skipping.value >= 4) {
            skipping_4.removeAttribute('hidden')
        }
        if (skipping.value >= 5) {
            skipping_5.removeAttribute('hidden')
        }
        if (skipping.value >= 6) {
            skipping_6.removeAttribute('hidden')
        }
        if (skipping.value >= 7) {
            skipping_7.removeAttribute('hidden')
        }
        if (skipping.value >= 8) {
            skipping_8.removeAttribute('hidden')
        }
        if (skipping.value >= 9) {
            skipping_9.removeAttribute('hidden')
        }
        if (skipping.value >= 10) {
            skipping_10.removeAttribute('hidden')
        }
        if (skipping.value >= 11) {
            skipping_11.removeAttribute('hidden')
        }
        if (skipping.value >= 12) {
            skipping_12.removeAttribute('hidden')
        }
        if (skipping.value >= 13) {
            skipping_13.removeAttribute('hidden')
        }
        if (skipping.value >= 14) {
            skipping_14.removeAttribute('hidden')
        }
        if (skipping.value >= 15) {
            skipping_15.removeAttribute('hidden')
        }

        skipping.oninput = function () {
            if (+skipping.value > +stLeght.textContent) {
                skipping.value = stLeght.textContent
            }
            if (skipping.value >= 1) {
                skipping_1.removeAttribute('hidden')
            }
            if (skipping.value >= 2) {
                skipping_2.removeAttribute('hidden')
            }
            if (skipping.value >= 3) {
                skipping_3.removeAttribute('hidden')
            }
            if (skipping.value >= 4) {
                skipping_4.removeAttribute('hidden')
            }
            if (skipping.value >= 5) {
                skipping_5.removeAttribute('hidden')
            }
            if (skipping.value >= 6) {
                skipping_6.removeAttribute('hidden')
            }
            if (skipping.value >= 7) {
                skipping_7.removeAttribute('hidden')
            }
            if (skipping.value >= 8) {
                skipping_8.removeAttribute('hidden')
            }
            if (skipping.value >= 9) {
                skipping_9.removeAttribute('hidden')
            }
            if (skipping.value >= 10) {
                skipping_10.removeAttribute('hidden')
            }
            if (skipping.value >= 11) {
                skipping_11.removeAttribute('hidden')
            }
            if (skipping.value >= 12) {
                skipping_12.removeAttribute('hidden')
            }
            if (skipping.value >= 13) {
                skipping_13.removeAttribute('hidden')
            }
            if (skipping.value >= 14) {
                skipping_14.removeAttribute('hidden')
            }
            if (skipping.value >= 15) {
                skipping_15.removeAttribute('hidden')
            }


            if (skipping.value < 15) {
                skipping_15.setAttribute('hidden', 'ok')
                skipping_15.value = ""
            }
            if (skipping.value < 14) {
                skipping_14.setAttribute('hidden', 'ok')
                skipping_14.value = ""
            }
            if (skipping.value < 13) {
                skipping_13.setAttribute('hidden', 'ok')
                skipping_13.value = ""
            }
            if (skipping.value < 12) {
                skipping_12.setAttribute('hidden', 'ok')
                skipping_12.value = ""
            }
            if (skipping.value < 11) {
                skipping_11.setAttribute('hidden', 'ok')
                skipping_11.value = ""
            }
            if (skipping.value < 10) {
                skipping_10.setAttribute('hidden', 'ok')
                skipping_10.value = ""
            }
            if (skipping.value < 9) {
                skipping_9.setAttribute('hidden', 'ok')
                skipping_9.value = ""
            }
            if (skipping.value < 8) {
                skipping_8.setAttribute('hidden', 'ok')
                skipping_8.value = ""
            }
            if (skipping.value < 7) {
                skipping_7.setAttribute('hidden', 'ok')
                skipping_7.value = ""
            }
            if (skipping.value < 6) {
                skipping_6.setAttribute('hidden', 'ok')
                skipping_6.value = ""
            }
            if (skipping.value < 5) {
                skipping_5.setAttribute('hidden', 'ok')
                skipping_5.value = ""
            }
            if (skipping.value < 4) {
                skipping_4.setAttribute('hidden', 'ok')
                skipping_4.value = ""
            }
            if (skipping.value < 3) {
                skipping_3.setAttribute('hidden', 'ok')
                skipping_3.value = ""
            }
            if (skipping.value < 2) {
                skipping_2.setAttribute('hidden', 'ok')
                skipping_2.value = ""
            }
            if (skipping.value < 1) {
                skipping_1.setAttribute('hidden', 'ok')
                skipping_1.value = ""
            }
        }
    }
    if (!breaking_rules) {} else {
        let breakingRules_1 = document.getElementById('rules_name_1')
        let breakingRules_2 = document.getElementById('rules_name_2')
        let breakingRules_3 = document.getElementById('rules_name_3')
        let breakingRules_4 = document.getElementById('rules_name_4')
        let breakingRules_5 = document.getElementById('rules_name_5')
        let breakingRules_6 = document.getElementById('rules_name_6')
        let breakingRules_7 = document.getElementById('rules_name_7')
        let breakingRules_8 = document.getElementById('rules_name_8')
        let breakingRules_9 = document.getElementById('rules_name_9')
        let breakingRules_10 = document.getElementById('rules_name_10')
        let breakingRules_11 = document.getElementById('rules_name_11')
        let breakingRules_12 = document.getElementById('rules_name_12')
        let breakingRules_13 = document.getElementById('rules_name_13')
        let breakingRules_14 = document.getElementById('rules_name_14')
        let breakingRules_15 = document.getElementById('rules_name_15')
        let breakingRules_16 = document.getElementById('rules_name_16')
        let breakingRules_17 = document.getElementById('rules_name_17')
        let breakingRules_18 = document.getElementById('rules_name_18')
        let breakingRules_19 = document.getElementById('rules_name_19')
        let breakingRules_20 = document.getElementById('rules_name_20')
        let breakingRules_21 = document.getElementById('rules_name_21')

        if (breaking_rules.value >= 1) {
            breakingRules_1.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 2) {
            breakingRules_2.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 3) {
            breakingRules_3.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 4) {
            breakingRules_4.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 5) {
            breakingRules_5.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 6) {
            breakingRules_6.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 7) {
            breakingRules_7.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 8) {
            breakingRules_8.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 9) {
            breakingRules_9.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 10) {
            breakingRules_10.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 11) {
            breakingRules_11.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 12) {
            breakingRules_12.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 13) {
            breakingRules_13.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 14) {
            breakingRules_14.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 15) {
            breakingRules_15.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 16) {
            breakingRules_16.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 17) {
            breakingRules_17.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 18) {
            breakingRules_18.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 19) {
            breakingRules_19.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 20) {
            breakingRules_20.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 21) {
            breakingRules_21.removeAttribute('hidden')
        }

        breaking_rules.oninput = function () {
            if (+breaking_rules.value > +stLeght.textContent) {
                breaking_rules.value = stLeght.textContent
            }
            if (breaking_rules.value >= 1) {
                breakingRules_1.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 2) {
                breakingRules_2.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 3) {
                breakingRules_3.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 4) {
                breakingRules_4.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 5) {
                breakingRules_5.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 6) {
                breakingRules_6.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 7) {
                breakingRules_7.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 8) {
                breakingRules_8.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 9) {
                breakingRules_9.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 10) {
                breakingRules_10.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 11) {
                breakingRules_11.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 12) {
                breakingRules_12.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 13) {
                breakingRules_13.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 14) {
                breakingRules_14.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 15) {
                breakingRules_15.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 16) {
                breakingRules_16.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 17) {
                breakingRules_17.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 18) {
                breakingRules_18.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 19) {
                breakingRules_19.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 20) {
                breakingRules_20.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 21) {
                breakingRules_21.removeAttribute('hidden')
            }


            if (breaking_rules.value < 21) {
                breakingRules_21.setAttribute('hidden', 'ok')
                breakingRules_21.value = ""
            }
            if (breaking_rules.value < 20) {
                breakingRules_20.setAttribute('hidden', 'ok')
                breakingRules_20.value = ""
            }
            if (breaking_rules.value < 19) {
                breakingRules_19.setAttribute('hidden', 'ok')
                breakingRules_19.value = ""
            }
            if (breaking_rules.value < 18) {
                breakingRules_18.setAttribute('hidden', 'ok')
                breakingRules_18.value = ""
            }
            if (breaking_rules.value < 17) {
                breakingRules_17.setAttribute('hidden', 'ok')
                breakingRules_17.value = ""
            }
            if (breaking_rules.value < 16) {
                breakingRules_16.setAttribute('hidden', 'ok')
                breakingRules_16.value = ""
            }
            if (breaking_rules.value < 15) {
                breakingRules_15.setAttribute('hidden', 'ok')
                breakingRules_15.value = ""
            }
            if (breaking_rules.value < 14) {
                breakingRules_14.setAttribute('hidden', 'ok')
                breakingRules_14.value = ""
            }
            if (breaking_rules.value < 13) {
                breakingRules_13.setAttribute('hidden', 'ok')
                breakingRules_13.value = ""
            }
            if (breaking_rules.value < 12) {
                breakingRules_12.setAttribute('hidden', 'ok')
                breakingRules_12.value = ""
            }
            if (breaking_rules.value < 11) {
                breakingRules_11.setAttribute('hidden', 'ok')
                breakingRules_11.value = ""
            }
            if (breaking_rules.value < 10) {
                breakingRules_10.setAttribute('hidden', 'ok')
                breakingRules_10.value = ""
            }
            if (breaking_rules.value < 9) {
                breakingRules_9.setAttribute('hidden', 'ok')
                breakingRules_9.value = ""
            }
            if (breaking_rules.value < 8) {
                breakingRules_8.setAttribute('hidden', 'ok')
                breakingRules_8.value = ""
            }
            if (breaking_rules.value < 7) {
                breakingRules_7.setAttribute('hidden', 'ok')
                breakingRules_7.value = ""
            }
            if (breaking_rules.value < 6) {
                breakingRules_6.setAttribute('hidden', 'ok')
                breakingRules_6.value = ""
            }
            if (breaking_rules.value < 5) {
                breakingRules_5.setAttribute('hidden', 'ok')
                breakingRules_5.value = ""
            }
            if (breaking_rules.value < 4) {
                breakingRules_4.setAttribute('hidden', 'ok')
                breakingRules_4.value = ""
            }
            if (breaking_rules.value < 3) {
                breakingRules_3.setAttribute('hidden', 'ok')
                breakingRules_3.value = ""
            }
            if (breaking_rules.value < 2) {
                breakingRules_2.setAttribute('hidden', 'ok')
                breakingRules_2.value = ""
            }
            if (breaking_rules.value < 1) {
                breakingRules_1.setAttribute('hidden', 'ok')
                breakingRules_1.value = ""
            }
        }
    }
    if (!smoking) {} else {
        let smokingName_1 = document.getElementById('smoking_name_1')
        let smokingName_2 = document.getElementById('smoking_name_2')
        let smokingName_3 = document.getElementById('smoking_name_3')
        let smokingName_4 = document.getElementById('smoking_name_4')
        let smokingName_5 = document.getElementById('smoking_name_5')
        let smokingName_6 = document.getElementById('smoking_name_6')
        let smokingName_7 = document.getElementById('smoking_name_7')
        let smokingName_8 = document.getElementById('smoking_name_8')
        let smokingName_9 = document.getElementById('smoking_name_9')
        let smokingName_10 = document.getElementById('smoking_name_10')
        let smokingName_11 = document.getElementById('smoking_name_11')
        let smokingName_12 = document.getElementById('smoking_name_12')
        let smokingName_13 = document.getElementById('smoking_name_13')
        let smokingName_14 = document.getElementById('smoking_name_14')
        let smokingName_15 = document.getElementById('smoking_name_15')

        if (smoking.value >= 1) {
            smokingName_1.removeAttribute('hidden')
        }
        if (smoking.value >= 2) {
            smokingName_2.removeAttribute('hidden')
        }
        if (smoking.value >= 3) {
            smokingName_3.removeAttribute('hidden')
        }
        if (smoking.value >= 4) {
            smokingName_4.removeAttribute('hidden')
        }
        if (smoking.value >= 5) {
            smokingName_5.removeAttribute('hidden')
        }
        if (smoking.value >= 6) {
            smokingName_6.removeAttribute('hidden')
        }
        if (smoking.value >= 7) {
            smokingName_7.removeAttribute('hidden')
        }
        if (smoking.value >= 8) {
            smokingName_8.removeAttribute('hidden')
        }
        if (smoking.value >= 9) {
            smokingName_9.removeAttribute('hidden')
        }
        if (smoking.value >= 10) {
            smokingName_10.removeAttribute('hidden')
        }
        if (smoking.value >= 11) {
            smokingName_11.removeAttribute('hidden')
        }
        if (smoking.value >= 12) {
            smokingName_12.removeAttribute('hidden')
        }
        if (smoking.value >= 13) {
            smokingName_13.removeAttribute('hidden')
        }
        if (smoking.value >= 14) {
            smokingName_14.removeAttribute('hidden')
        }
        if (smoking.value >= 15) {
            smokingName_15.removeAttribute('hidden')
        }

        smoking.oninput = function () {
            if (+smoking.value > +stLeght.textContent) {
                smoking.value = stLeght.textContent
            }

            if (smoking.value >= 1) {
                smokingName_1.removeAttribute('hidden')
            }
            if (smoking.value >= 2) {
                smokingName_2.removeAttribute('hidden')
            }
            if (smoking.value >= 3) {
                smokingName_3.removeAttribute('hidden')
            }
            if (smoking.value >= 4) {
                smokingName_4.removeAttribute('hidden')
            }
            if (smoking.value >= 5) {
                smokingName_5.removeAttribute('hidden')
            }
            if (smoking.value >= 6) {
                smokingName_6.removeAttribute('hidden')
            }
            if (smoking.value >= 7) {
                smokingName_7.removeAttribute('hidden')
            }
            if (smoking.value >= 8) {
                smokingName_8.removeAttribute('hidden')
            }
            if (smoking.value >= 9) {
                smokingName_9.removeAttribute('hidden')
            }
            if (smoking.value >= 10) {
                smokingName_10.removeAttribute('hidden')
            }
            if (smoking.value >= 11) {
                smokingName_11.removeAttribute('hidden')
            }
            if (smoking.value >= 12) {
                smokingName_12.removeAttribute('hidden')
            }
            if (smoking.value >= 13) {
                smokingName_13.removeAttribute('hidden')
            }
            if (smoking.value >= 14) {
                smokingName_14.removeAttribute('hidden')
            }
            if (smoking.value >= 15) {
                smokingName_15.removeAttribute('hidden')
            }


            if (smoking.value < 15) {
                smokingName_15.setAttribute('hidden', 'ok')
                smokingName_15.value = ""
            }
            if (smoking.value < 14) {
                smokingName_14.setAttribute('hidden', 'ok')
                smokingName_14.value = ""
            }
            if (smoking.value < 13) {
                smokingName_13.setAttribute('hidden', 'ok')
                smokingName_13.value = ""
            }
            if (smoking.value < 12) {
                smokingName_12.setAttribute('hidden', 'ok')
                smokingName_12.value = ""
            }
            if (smoking.value < 11) {
                smokingName_11.setAttribute('hidden', 'ok')
                smokingName_11.value = ""
            }
            if (smoking.value < 10) {
                smokingName_10.setAttribute('hidden', 'ok')
                smokingName_10.value = ""
            }
            if (smoking.value < 9) {
                smokingName_9.setAttribute('hidden', 'ok')
                smokingName_9.value = ""
            }
            if (smoking.value < 8) {
                smokingName_8.setAttribute('hidden', 'ok')
                smokingName_8.value = ""
            }
            if (smoking.value < 7) {
                smokingName_7.setAttribute('hidden', 'ok')
                smokingName_7.value = ""
            }
            if (smoking.value < 6) {
                smokingName_6.setAttribute('hidden', 'ok')
                smokingName_6.value = ""
            }
            if (smoking.value < 5) {
                smokingName_5.setAttribute('hidden', 'ok')
                smokingName_5.value = ""
            }
            if (smoking.value < 4) {
                smokingName_4.setAttribute('hidden', 'ok')
                smokingName_4.value = ""
            }
            if (smoking.value < 3) {
                smokingName_3.setAttribute('hidden', 'ok')
                smokingName_3.value = ""
            }
            if (smoking.value < 2) {
                smokingName_2.setAttribute('hidden', 'ok')
                smokingName_2.value = ""
            }
            if (smoking.value < 1) {
                smokingName_1.setAttribute('hidden', 'ok')
                smokingName_1.value = ""
            }
        }
    }
    if (!dress_code) {} else {
        let dressCodeName_1 = document.getElementById('dress_code_name_1')
        let dressCodeName_2 = document.getElementById('dress_code_name_2')
        let dressCodeName_3 = document.getElementById('dress_code_name_3')
        let dressCodeName_4 = document.getElementById('dress_code_name_4')
        let dressCodeName_5 = document.getElementById('dress_code_name_5')
        let dressCodeName_6 = document.getElementById('dress_code_name_6')
        let dressCodeName_7 = document.getElementById('dress_code_name_7')
        let dressCodeName_8 = document.getElementById('dress_code_name_8')
        let dressCodeName_9 = document.getElementById('dress_code_name_9')
        let dressCodeName_10 = document.getElementById('dress_code_name_10')

        if (dress_code.value >= 1) {
            dressCodeName_1.removeAttribute('hidden')
        }
        if (dress_code.value >= 2) {
            dressCodeName_2.removeAttribute('hidden')
        }
        if (dress_code.value >= 3) {
            dressCodeName_3.removeAttribute('hidden')
        }
        if (dress_code.value >= 4) {
            dressCodeName_4.removeAttribute('hidden')
        }
        if (dress_code.value >= 5) {
            dressCodeName_5.removeAttribute('hidden')
        }
        if (dress_code.value >= 6) {
            dressCodeName_6.removeAttribute('hidden')
        }
        if (dress_code.value >= 7) {
            dressCodeName_7.removeAttribute('hidden')
        }
        if (dress_code.value >= 8) {
            dressCodeName_8.removeAttribute('hidden')
        }
        if (dress_code.value >= 9) {
            dressCodeName_9.removeAttribute('hidden')
        }
        if (dress_code.value >= 10) {
            dressCodeName_10.removeAttribute('hidden')
        }

        dress_code.oninput = function () {
            if (+dress_code.value > +stLeght.textContent) {
                dress_code.value = stLeght.textContent
            }

            if (dress_code.value >= 1) {
                dressCodeName_1.removeAttribute('hidden')
            }
            if (dress_code.value >= 2) {
                dressCodeName_2.removeAttribute('hidden')
            }
            if (dress_code.value >= 3) {
                dressCodeName_3.removeAttribute('hidden')
            }
            if (dress_code.value >= 4) {
                dressCodeName_4.removeAttribute('hidden')
            }
            if (dress_code.value >= 5) {
                dressCodeName_5.removeAttribute('hidden')
            }
            if (dress_code.value >= 6) {
                dressCodeName_6.removeAttribute('hidden')
            }
            if (dress_code.value >= 7) {
                dressCodeName_7.removeAttribute('hidden')
            }
            if (dress_code.value >= 8) {
                dressCodeName_8.removeAttribute('hidden')
            }
            if (dress_code.value >= 9) {
                dressCodeName_9.removeAttribute('hidden')
            }
            if (dress_code.value >= 10) {
                dressCodeName_10.removeAttribute('hidden')
            }

            if (dress_code.value < 10) {
                dressCodeName_10.setAttribute('hidden', 'ok')
                dressCodeName_10.value = ""
            }
            if (dress_code.value < 9) {
                dressCodeName_9.setAttribute('hidden', 'ok')
                dressCodeName_9.value = ""
            }
            if (dress_code.value < 8) {
                dressCodeName_8.setAttribute('hidden', 'ok')
                dressCodeName_8.value = ""
            }
            if (dress_code.value < 7) {
                dressCodeName_7.setAttribute('hidden', 'ok')
                dressCodeName_7.value = ""
            }
            if (dress_code.value < 6) {
                dressCodeName_6.setAttribute('hidden', 'ok')
                dressCodeName_6.value = ""
            }
            if (dress_code.value < 5) {
                dressCodeName_5.setAttribute('hidden', 'ok')
                dressCodeName_5.value = ""
            }
            if (dress_code.value < 4) {
                dressCodeName_4.setAttribute('hidden', 'ok')
                dressCodeName_4.value = ""
            }
            if (dress_code.value < 3) {
                dressCodeName_3.setAttribute('hidden', 'ok')
                dressCodeName_3.value = ""
            }
            if (dress_code.value < 2) {
                dressCodeName_2.setAttribute('hidden', 'ok')
                dressCodeName_2.value = ""
            }
            if (dress_code.value < 1) {
                dressCodeName_1.setAttribute('hidden', 'ok')
                dressCodeName_1.value = ""
            }
        }
    }
    if (!volunteers) {} else {
        volunteers.oninput = function () {
            if (+volunteers.value > +stLeght.textContent) {
                volunteers.value = stLeght.textContent
            }
        }
    }
    if (!food) {} else {
        let foodName_1 = document.getElementById('food_name_1')
        let foodName_2 = document.getElementById('food_name_2')
        let foodName_3 = document.getElementById('food_name_3')
        let foodName_4 = document.getElementById('food_name_4')
        let foodName_5 = document.getElementById('food_name_5')
        let foodName_6 = document.getElementById('food_name_6')
        let foodName_7 = document.getElementById('food_name_7')
        let foodName_8 = document.getElementById('food_name_8')
        let foodName_9 = document.getElementById('food_name_9')
        let foodName_10 = document.getElementById('food_name_10')

        if (food.value >= 1) {
            foodName_1.removeAttribute('hidden')
        }
        if (food.value >= 2) {
            foodName_2.removeAttribute('hidden')
        }
        if (food.value >= 3) {
            foodName_3.removeAttribute('hidden')
        }
        if (food.value >= 4) {
            foodName_4.removeAttribute('hidden')
        }
        if (food.value >= 5) {
            foodName_5.removeAttribute('hidden')
        }
        if (food.value >= 6) {
            foodName_6.removeAttribute('hidden')
        }
        if (food.value >= 7) {
            foodName_7.removeAttribute('hidden')
        }
        if (food.value >= 8) {
            foodName_8.removeAttribute('hidden')
        }
        if (food.value >= 9) {
            foodName_9.removeAttribute('hidden')
        }
        if (food.value >= 10) {
            foodName_10.removeAttribute('hidden')
        }

        food.oninput = function () {
            if (+food.value > +stLeght.textContent) {
                food.value = stLeght.textContent
            }

            if (food.value >= 1) {
                foodName_1.removeAttribute('hidden')
            }
            if (food.value >= 2) {
                foodName_2.removeAttribute('hidden')
            }
            if (food.value >= 3) {
                foodName_3.removeAttribute('hidden')
            }
            if (food.value >= 4) {
                foodName_4.removeAttribute('hidden')
            }
            if (food.value >= 5) {
                foodName_5.removeAttribute('hidden')
            }
            if (food.value >= 6) {
                foodName_6.removeAttribute('hidden')
            }
            if (food.value >= 7) {
                foodName_7.removeAttribute('hidden')
            }
            if (food.value >= 8) {
                foodName_8.removeAttribute('hidden')
            }
            if (food.value >= 9) {
                foodName_9.removeAttribute('hidden')
            }
            if (food.value >= 10) {
                foodName_10.removeAttribute('hidden')
            }

            if (food.value < 1) {
                foodName_1.setAttribute('hidden', 'ok')
                foodName_1.value = ""
            }
            if (food.value < 2) {
                foodName_2.setAttribute('hidden', 'ok')
                foodName_2.value = ""
            }
            if (food.value < 3) {
                foodName_3.setAttribute('hidden', 'ok')
                foodName_3.value = ""
            }
            if (food.value < 4) {
                foodName_4.setAttribute('hidden', 'ok')
                foodName_4.value = ""
            }
            if (food.value < 5) {
                foodName_5.setAttribute('hidden', 'ok')
                foodName_5.value = ""
            }
            if (food.value < 6) {
                foodName_6.setAttribute('hidden', 'ok')
                foodName_6.value = ""
            }
            if (food.value < 7) {
                foodName_7.setAttribute('hidden', 'ok')
                foodName_7.value = ""
            }
            if (food.value < 8) {
                foodName_8.setAttribute('hidden', 'ok')
                foodName_8.value = ""
            }
            if (food.value < 9) {
                foodName_9.setAttribute('hidden', 'ok')
                foodName_9.value = ""
            }
            if (food.value < 10) {
                foodName_10.setAttribute('hidden', 'ok')
                foodName_10.value = ""
            }
            if (food.value < 1) {
                foodName_1.setAttribute('hidden', 'ok')
                foodName_1.value = ""
            }
        }
    }

    if (!stableFood) {} else {
        let stable_foodName_1 = document.getElementById('stable_food_name_1')
        let stable_foodName_2 = document.getElementById('stable_food_name_2')
        let stable_foodName_3 = document.getElementById('stable_food_name_3')
        let stable_foodName_4 = document.getElementById('stable_food_name_4')
        let stable_foodName_5 = document.getElementById('stable_food_name_5')
        let stable_foodName_6 = document.getElementById('stable_food_name_6')
        let stable_foodName_7 = document.getElementById('stable_food_name_7')
        let stable_foodName_8 = document.getElementById('stable_food_name_8')
        let stable_foodName_9 = document.getElementById('stable_food_name_9')
        let stable_foodName_10 = document.getElementById('stable_food_name_10')
        let stable_foodName_11 = document.getElementById('stable_food_name_11')
        let stable_foodName_12 = document.getElementById('stable_food_name_12')
        let stable_foodName_13 = document.getElementById('stable_food_name_13')
        let stable_foodName_14 = document.getElementById('stable_food_name_14')
        let stable_foodName_15 = document.getElementById('stable_food_name_15')
        let stable_foodName_16 = document.getElementById('stable_food_name_16')
        let stable_foodName_17 = document.getElementById('stable_food_name_17')
        let stable_foodName_18 = document.getElementById('stable_food_name_18')
        let stable_foodName_19 = document.getElementById('stable_food_name_19')
        let stable_foodName_20 = document.getElementById('stable_food_name_20')

        if (stableFood.value >= 1) {
            stable_foodName_1.removeAttribute('hidden')
        }
        if (stableFood.value >= 2) {
            stable_foodName_2.removeAttribute('hidden')
        }
        if (stableFood.value >= 3) {
            stable_foodName_3.removeAttribute('hidden')
        }
        if (stableFood.value >= 4) {
            stable_foodName_4.removeAttribute('hidden')
        }
        if (stableFood.value >= 5) {
            stable_foodName_5.removeAttribute('hidden')
        }
        if (stableFood.value >= 6) {
            stable_foodName_6.removeAttribute('hidden')
        }
        if (stableFood.value >= 7) {
            stable_foodName_7.removeAttribute('hidden')
        }
        if (stableFood.value >= 8) {
            stable_foodName_8.removeAttribute('hidden')
        }
        if (stableFood.value >= 9) {
            stable_foodName_9.removeAttribute('hidden')
        }
        if (stableFood.value >= 10) {
            stable_foodName_10.removeAttribute('hidden')
        }
        if (stableFood.value >= 11) {
            stable_foodName_11.removeAttribute('hidden')
        }
        if (stableFood.value >= 12) {
            stable_foodName_12.removeAttribute('hidden')
        }
        if (stableFood.value >= 13) {
            stable_foodName_13.removeAttribute('hidden')
        }
        if (stableFood.value >= 14) {
            stable_foodName_14.removeAttribute('hidden')
        }
        if (stableFood.value >= 15) {
            stable_foodName_15.removeAttribute('hidden')
        }
        if (stableFood.value >= 16) {
            stable_foodName_16.removeAttribute('hidden')
        }
        if (stableFood.value >= 17) {
            stable_foodName_17.removeAttribute('hidden')
        }
        if (stableFood.value >= 18) {
            stable_foodName_18.removeAttribute('hidden')
        }
        if (stableFood.value >= 19) {
            stable_foodName_19.removeAttribute('hidden')
        }
        if (stableFood.value >= 20) {
            stable_foodName_20.removeAttribute('hidden')
        }

        stableFood.oninput = function () {
            if (+stableFood.value > +stLeght.textContent) {
                stableFood.value = stLeght.textContent
            }

            if (stableFood.value >= 1) {
                stable_foodName_1.removeAttribute('hidden')
            }
            if (stableFood.value >= 2) {
                stable_foodName_2.removeAttribute('hidden')
            }
            if (stableFood.value >= 3) {
                stable_foodName_3.removeAttribute('hidden')
            }
            if (stableFood.value >= 4) {
                stable_foodName_4.removeAttribute('hidden')
            }
            if (stableFood.value >= 5) {
                stable_foodName_5.removeAttribute('hidden')
            }
            if (stableFood.value >= 6) {
                stable_foodName_6.removeAttribute('hidden')
            }
            if (stableFood.value >= 7) {
                stable_foodName_7.removeAttribute('hidden')
            }
            if (stableFood.value >= 8) {
                stable_foodName_8.removeAttribute('hidden')
            }
            if (stableFood.value >= 9) {
                stable_foodName_9.removeAttribute('hidden')
            }
            if (stableFood.value >= 10) {
                stable_foodName_10.removeAttribute('hidden')
            }
            if (stableFood.value >= 11) {
                stable_foodName_11.removeAttribute('hidden')
            }
            if (stableFood.value >= 12) {
                stable_foodName_12.removeAttribute('hidden')
            }
            if (stableFood.value >= 13) {
                stable_foodName_13.removeAttribute('hidden')
            }
            if (stableFood.value >= 14) {
                stable_foodName_14.removeAttribute('hidden')
            }
            if (stableFood.value >= 15) {
                stable_foodName_15.removeAttribute('hidden')
            }
            if (stableFood.value >= 16) {
                stable_foodName_16.removeAttribute('hidden')
            }
            if (stableFood.value >= 17) {
                stable_foodName_17.removeAttribute('hidden')
            }
            if (stableFood.value >= 18) {
                stable_foodName_18.removeAttribute('hidden')
            }
            if (stableFood.value >= 19) {
                stable_foodName_19.removeAttribute('hidden')
            }
            if (stableFood.value >= 20) {
                stable_foodName_20.removeAttribute('hidden')
            }

            if (stableFood.value < 1) {
                stable_foodName_1.setAttribute('hidden', 'ok')
                stable_foodName_1.value = ""
            }
            if (stableFood.value < 2) {
                stable_foodName_2.setAttribute('hidden', 'ok')
                stable_foodName_2.value = ""
            }
            if (stableFood.value < 3) {
                stable_foodName_3.setAttribute('hidden', 'ok')
                stable_foodName_3.value = ""
            }
            if (stableFood.value < 4) {
                stable_foodName_4.setAttribute('hidden', 'ok')
                stable_foodName_4.value = ""
            }
            if (stableFood.value < 5) {
                stable_foodName_5.setAttribute('hidden', 'ok')
                stable_foodName_5.value = ""
            }
            if (stableFood.value < 6) {
                stable_foodName_6.setAttribute('hidden', 'ok')
                stable_foodName_6.value = ""
            }
            if (stableFood.value < 7) {
                stable_foodName_7.setAttribute('hidden', 'ok')
                stable_foodName_7.value = ""
            }
            if (stableFood.value < 8) {
                stable_foodName_8.setAttribute('hidden', 'ok')
                stable_foodName_8.value = ""
            }
            if (stableFood.value < 9) {
                stable_foodName_9.setAttribute('hidden', 'ok')
                stable_foodName_9.value = ""
            }
            if (stableFood.value < 10) {
                stable_foodName_10.setAttribute('hidden', 'ok')
                stable_foodName_10.value = ""
            }
            if (stableFood.value < 11) {
                stable_foodName_11.setAttribute('hidden', 'ok')
                stable_foodName_11.value = ""
            }
            if (stableFood.value < 12) {
                stable_foodName_12.setAttribute('hidden', 'ok')
                stable_foodName_12.value = ""
            }
            if (stableFood.value < 13) {
                stable_foodName_13.setAttribute('hidden', 'ok')
                stable_foodName_13.value = ""
            }
            if (stableFood.value < 14) {
                stable_foodName_14.setAttribute('hidden', 'ok')
                stable_foodName_14.value = ""
            }
            if (stableFood.value < 15) {
                stable_foodName_15.setAttribute('hidden', 'ok')
                stable_foodName_15.value = ""
            }
            if (stableFood.value < 16) {
                stable_foodName_16.setAttribute('hidden', 'ok')
                stable_foodName_16.value = ""
            }
            if (stableFood.value < 17) {
                stable_foodName_17.setAttribute('hidden', 'ok')
                stable_foodName_17.value = ""
            }
            if (stableFood.value < 18) {
                stable_foodName_18.setAttribute('hidden', 'ok')
                stable_foodName_18.value = ""
            }
            if (stableFood.value < 19) {
                stable_foodName_19.setAttribute('hidden', 'ok')
                stable_foodName_19.value = ""
            }
            if (stableFood.value < 20) {
                stable_foodName_20.setAttribute('hidden', 'ok')
                stable_foodName_20.value = ""
            }
        }
    }

    if (!editBtn) {} else {
        editBtn.onclick = function () {
            let toDoPercent = ((+toDo.value * 100) / +stLeght.textContent).toFixed(0)
            let toDoPoint
            if (toDoPercent >= 0 && toDoPercent <= 29.9) {
                toDoPoint = 0
            }
            if (toDoPercent >= 30 && toDoPercent <= 69.9) {
                toDoPoint = 1
            }
            if (toDoPercent >= 70 && toDoPercent <= 100.1) {
                toDoPoint = 2
            }

            let activitiesoPoint
            if (activities.value == 0) {
                activitiesoPoint = 0
            }
            if (activities.value == 1) {
                activitiesoPoint = 1
            }
            if (activities.value >= 2) {
                activitiesoPoint = 2
            }

            let sectionPercent = ((+section.value * 100) / +stLeght.textContent).toFixed(0)
            let sectionPoint
            if (sectionPercent >= 0 && sectionPercent <= 29.9) {
                sectionPoint = 0
            }
            if (sectionPercent >= 30 && sectionPercent <= 69.9) {
                sectionPoint = 1
            }
            if (sectionPercent >= 70 && sectionPercent <= 100.1) {
                sectionPoint = 2
            }

            let academic_debtPercent = ((+academic_debt.value * 100) / +stLeght.textContent).toFixed(0)
            let academic_debtPoint
            if (academic_debtPercent >= 0 && academic_debtPercent <= 29.9) {
                academic_debtPoint = 2
            }
            if (academic_debtPercent >= 30 && academic_debtPercent <= 69.9) {
                academic_debtPoint = 1
            }
            if (academic_debtPercent >= 70 && academic_debtPercent <= 100.1) {
                academic_debtPoint = 0
            }

            let skippingPercent = ((+skipping.value * 100) / +stLeght.textContent).toFixed(0)
            let skippingPoint
            if (skippingPercent >= 0 && skippingPercent <= 29.9) {
                skippingPoint = 2
            }
            if (skippingPercent >= 30 && skippingPercent <= 69.9) {
                skippingPoint = 1
            }
            if (skippingPercent >= 70 && skippingPercent <= 100.1) {
                skippingPoint = 0
            }

            let breaking_rulesPercent = ((+breaking_rules.value * 100) / +stLeght.textContent).toFixed(0)
            let breaking_rulesPoint
            if (breaking_rulesPercent >= 0 && breaking_rulesPercent <= 29.9) {
                breaking_rulesPoint = 2
            }
            if (breaking_rulesPercent >= 30 && breaking_rulesPercent <= 69.9) {
                breaking_rulesPoint = 1
            }
            if (breaking_rulesPercent >= 70 && breaking_rulesPercent <= 100.1) {
                breaking_rulesPoint = 0
            }

            let smokingPercent = ((+smoking.value * 100) / +stLeght.textContent).toFixed(0)
            let smokingPoint
            if (smokingPercent >= 0 && smokingPercent <= 29.9) {
                smokingPoint = 2
            }
            if (smokingPercent >= 30 && smokingPercent <= 69.9) {
                smokingPoint = 1
            }
            if (smokingPercent >= 70 && smokingPercent <= 100.1) {
                smokingPoint = 0
            }

            let dress_codePercent = ((+dress_code.value * 100) / +stLeght.textContent).toFixed(0)
            let dress_codePoint
            if (dress_codePercent >= 0 && dress_codePercent <= 29.9) {
                dress_codePoint = 2
            }
            if (dress_codePercent >= 30 && dress_codePercent <= 69.9) {
                dress_codePoint = 1
            }
            if (dress_codePercent >= 70 && dress_codePercent <= 100.1) {
                dress_codePoint = 0
            }

            let volunteersPercent = ((+volunteers.value * 100) / +stLeght.textContent).toFixed(0)
            let volunteersPoint
            if (volunteersPercent >= 0 && volunteersPercent <= 29.9) {
                volunteersPoint = 0
            }
            if (volunteersPercent >= 30 && volunteersPercent <= 69.9) {
                volunteersPoint = 1
            }
            if (volunteersPercent >= 70 && volunteersPercent <= 100.1) {
                volunteersPoint = 2
            }

            let foodPercent = ((+food.value * 100) / +stLeght.textContent).toFixed(0)
            let foodPoint
            if (foodPercent >= 0 && foodPercent <= 29.9) {
                foodPoint = 2
            }
            if (foodPercent >= 30 && foodPercent <= 69.9) {
                foodPoint = 1
            }
            if (foodPercent >= 70 && foodPercent <= 100.1) {
                foodPoint = 0
            }

            let stableFoodPercent = ((+stableFood.value * 100) / +stLeght.textContent).toFixed(0)
            let stableFoodPoint
            if (stableFoodPercent >= 0 && stableFoodPercent <= 29.9) {
                stableFoodPoint = 0
            }
            if (stableFoodPercent >= 30 && stableFoodPercent <= 69.9) {
                stableFoodPoint = 1
            }
            if (stableFoodPercent >= 70 && stableFoodPercent <= 100.1) {
                stableFoodPoint = 2
            }

            let characteristicsPoint
            if (characteristics.value == 'Есть характеристики') {
                characteristicsPoint = 1
            }
            if (characteristics.value != 'Есть характеристики') {
                characteristicsPoint = 0
            }

            // console.log(toDoPoint)
            // console.log(activitiesoPoint)
            // console.log(sectionPoint)
            // console.log(academic_debtPoint)
            // console.log(breaking_rulesPoint)
            // console.log(smokingPoint)
            // console.log(dress_codePoint)
            // console.log(volunteersPoint)
            // console.log(foodPoint)
            // console.log(foodPercent)
            // console.log(stableFoodPoint)

            points.value = (+toDoPoint + +activitiesoPoint + +sectionPoint + +academic_debtPoint + +skippingPoint + +breaking_rulesPoint + +smokingPoint + +dress_codePoint + +volunteersPoint + +foodPoint + +stableFoodPoint + +characteristicsPoint).toFixed(0)
        }
    }

    let predNAme = document.querySelectorAll('.pred-table')
    let predNameModal01 = document.querySelectorAll('#edit__note_01 > p.edit__pred__name')
    let predNameModal02 = document.querySelectorAll('#edit__note_02 > p.edit__pred__name')
    let predNameModal03 = document.querySelectorAll('#edit__note_03 > p.edit__pred__name')
    let predNameModal04 = document.querySelectorAll('#edit__note_04 > p.edit__pred__name')
    let predNameModal05 = document.querySelectorAll('#edit__note_05 > p.edit__pred__name')
    let predNameModal06 = document.querySelectorAll('#edit__note_06 > p.edit__pred__name')
    let predNameModal07 = document.querySelectorAll('#edit__note_07 > p.edit__pred__name')
    let predNameModal08 = document.querySelectorAll('#edit__note_08 > p.edit__pred__name')
    let predNameModal09 = document.querySelectorAll('#edit__note_09 > p.edit__pred__name')
    let predNameModal10 = document.querySelectorAll('#edit__note_10 > p.edit__pred__name')
    let predNameModal11 = document.querySelectorAll('#edit__note_11 > p.edit__pred__name')
    let predNameModal12 = document.querySelectorAll('#edit__note_12 > p.edit__pred__name')
    let predNameModal13 = document.querySelectorAll('#edit__note_13 > p.edit__pred__name')
    let predNameModal14 = document.querySelectorAll('#edit__note_14 > p.edit__pred__name')
    let predNameModal15 = document.querySelectorAll('#edit__note_15 > p.edit__pred__name')
    let predNameModal16 = document.querySelectorAll('#edit__note_16 > p.edit__pred__name')
    let predNameModal17 = document.querySelectorAll('#edit__note_17 > p.edit__pred__name')
    let predNameModal18 = document.querySelectorAll('#edit__note_18 > p.edit__pred__name')
    let predNameModal19 = document.querySelectorAll('#edit__note_19 > p.edit__pred__name')
    let predNameModal20 = document.querySelectorAll('#edit__note_20 > p.edit__pred__name')
    let predNameModal21 = document.querySelectorAll('#edit__note_21 > p.edit__pred__name')
    let predNameModal22 = document.querySelectorAll('#edit__note_22 > p.edit__pred__name')
    let predEditModal = document.querySelectorAll('.edit__pred__modal')

    for (let i = 0; i < predEditModal.length; i++) {
        if (!predNAme[0]) {
            predNameModal01[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal01[i].textContent = predNAme[0].title
        }
        if (!predNAme[1]) {
            predNameModal02[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal02[i].textContent = predNAme[1].title
        }
        if (!predNAme[2]) {
            predNameModal03[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal03[i].textContent = predNAme[2].title
        }
        if (!predNAme[3]) {
            predNameModal04[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal04[i].textContent = predNAme[3].title
        }
        if (!predNAme[4]) {
            predNameModal05[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal05[i].textContent = predNAme[4].title
        }
        if (!predNAme[5]) {
            predNameModal06[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal06[i].textContent = predNAme[5].title
        }
        if (!predNAme[6]) {
            predNameModal07[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal07[i].textContent = predNAme[6].title
        }
        if (!predNAme[7]) {
            predNameModal08[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal08[i].textContent = predNAme[7].title
        }
        if (!predNAme[8]) {
            predNameModal09[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal09[i].textContent = predNAme[8].title
        }
        if (!predNAme[9]) {
            predNameModal10[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal10[i].textContent = predNAme[9].title
        }
        if (!predNAme[10]) {
            predNameModal11[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal11[i].textContent = predNAme[10].title
        }
        if (!predNAme[11]) {
            predNameModal12[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal12[i].textContent = predNAme[11].title
        }
        if (!predNAme[12]) {
            predNameModal13[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal13[i].textContent = predNAme[12].title
        }
        if (!predNAme[13]) {
            predNameModal14[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal14[i].textContent = predNAme[13].title
        }
        if (!predNAme[14]) {
            predNameModal15[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal15[i].textContent = predNAme[14].title
        }
        if (!predNAme[15]) {
            predNameModal16[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal16[i].textContent = predNAme[15].title
        }
        if (!predNAme[16]) {
            predNameModal17[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal17[i].textContent = predNAme[16].title
        }
        if (!predNAme[17]) {
            predNameModal18[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal18[i].textContent = predNAme[17].title
        }
        if (!predNAme[18]) {
            predNameModal19[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal19[i].textContent = predNAme[18].title
        }
        if (!predNAme[19]) {
            predNameModal20[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal20[i].textContent = predNAme[19].title
        }
        if (!predNAme[20]) {
            predNameModal21[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal21[i].textContent = predNAme[20].title
        }
        if (!predNAme[21]) {
            predNameModal22[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal22[i].textContent = predNAme[21].title
        }
    }




    // Отправка данных БРС в БД при добавлении студента
    let idUserVrem = document.getElementById('id__user')
    if (!idUserVrem) {} else {
        let idUser1 = idUserVrem.textContent
        $.ajax({
            url: '/funclk.php',
            type: 'POST',
            data: {
                idUser1
            },
            success: function (data) {
                // location.reload();
                // console.log(data);
            },
            error: function () {
                console.log('ERROR');
            }
        })
    }
    // Отправка данных БРС в БД при добавлении студента




    // Отправка данных для подгрузки отчета по группам
    let group101 = document.getElementById('group101')
    let group111 = document.getElementById('group111')
    let group121 = document.getElementById('group121')
    let group201 = document.getElementById('group201')
    let group202 = document.getElementById('group202')
    let group211 = document.getElementById('group211')
    let group221 = document.getElementById('group221')
    let group231 = document.getElementById('group231')
    let group241 = document.getElementById('group241')
    let group301 = document.getElementById('group301')
    let group302 = document.getElementById('group302')
    let group311 = document.getElementById('group311')
    let group321 = document.getElementById('group321')
    let group331 = document.getElementById('group331')
    let group341 = document.getElementById('group341')
    let group401 = document.getElementById('group401')
    let group402 = document.getElementById('group402')
    let group411 = document.getElementById('group411')
    let group421 = document.getElementById('group421')
    let group431 = document.getElementById('group431')

    if (!group101) {} else {
        group101.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport101'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group111) {} else {
        group111.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport111'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                    // console.log(tG)
                    // console.log(mt)
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group121) {} else {
        group121.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport121'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group201) {} else {
        group201.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport201'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group202) {} else {
        group202.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport202'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group211) {} else {
        group211.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport211'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group221) {} else {
        group221.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport221'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group231) {} else {
        group231.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport231'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group241) {} else {
        group241.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport241'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group301) {} else {
        group301.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport301'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group302) {} else {
        group302.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport302'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group311) {} else {
        group311.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport311'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group321) {} else {
        group321.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport321'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group331) {} else {
        group331.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport331'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group341) {} else {
        group341.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport341'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group401) {} else {
        group401.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport401'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group402) {} else {
        group402.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport402'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group411) {} else {
        group411.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport411'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group421) {} else {
        group421.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport421'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group431) {} else {
        group431.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport431'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    // Отправка данных для подгрузки отчета по группам


    // Отправка данных для подгрузки отчета по месяцам
    let monate_1 = document.getElementById('monate_1')
    let monate_2 = document.getElementById('monate_2')
    let monate_3 = document.getElementById('monate_3')
    let monate_4 = document.getElementById('monate_4')
    let monate_5 = document.getElementById('monate_5')
    let monate_6 = document.getElementById('monate_6')
    let monate_7 = document.getElementById('monate_7')
    let monate_8 = document.getElementById('monate_8')
    let monate_9 = document.getElementById('monate_9')
    let monate_10 = document.getElementById('monate_10')

    if (!monate_1) {} else {
        monate_1.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 1
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                    // console.log(mt)
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_2) {} else {
        monate_2.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 2
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')

            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                    // console.log(mt)
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_3) {} else {
        monate_3.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 3
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_4) {} else {
        monate_4.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 4
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_5) {} else {
        monate_5.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 5
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_6) {} else {
        monate_6.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 6
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_7) {} else {
        monate_7.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 7
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_8) {} else {
        monate_8.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 8
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_9) {} else {
        monate_9.onclick = function () {
            this.classList.add('green__button')

            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 9
            let mt
            mt = mt1.textContent

            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_10) {} else {
        monate_10.onclick = function () {
            this.classList.add('green__button')
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 10
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    // Отправка данных для подгрузки отчета по группам

    const list = document.querySelectorAll('.button__monate')
    list.forEach(item => {
        item.addEventListener('click', (e) => {
            list.forEach(el => {
                el.classList.remove('brs__button-group__active');
            });
            item.classList.add('brs__button-group__active')
        })
    })
    const listGroup = document.querySelectorAll('.button__group')
    listGroup.forEach(item => {
        item.addEventListener('click', (e) => {
            listGroup.forEach(el => {
                el.classList.remove('brs__button-group__active');
            });
            item.classList.add('brs__button-group__active')
        })
    })



    let skipU = document.querySelectorAll('.skip_u')
    for (let i = 0; i < skipU.length; i++) {
        skipU[i].setAttribute('name', 'st_u_' + (+[i] + +1))
    }

    let skipN = document.querySelectorAll('.skip_n')
    for (let i = 0; i < skipN.length; i++) {
        skipN[i].setAttribute('name', 'st_n_' + (+[i] + +1))
    }

    let skipsCause = document.querySelectorAll('.skip__cause')
    for (let i = 0; i < skipsCause.length; i++) {
        skipsCause[i].setAttribute('name', 'cause_st' + (+[i] + +1))
    }

    let skipsStudentName = document.querySelectorAll('.skip__stud__name')
    for (let i = 0; i < skipsStudentName.length; i++) {
        skipsStudentName[i].setAttribute('name', 'skip_name_st' + (+[i] + +1))
    }




    let studentsNamesEdit_1 = document.querySelectorAll('.student__skips__name_1')
    let studentsNamesEdit_2 = document.querySelectorAll('.student__skips__name_2')
    let studentsNamesEdit_3 = document.querySelectorAll('.student__skips__name_3')
    let studentsNamesEdit_4 = document.querySelectorAll('.student__skips__name_4')
    let studentsNamesEdit_5 = document.querySelectorAll('.student__skips__name_5')
    let studentsNamesEdit_6 = document.querySelectorAll('.student__skips__name_6')
    let studentsNamesEdit_7 = document.querySelectorAll('.student__skips__name_7')
    let studentsNamesEdit_8 = document.querySelectorAll('.student__skips__name_8')
    let studentsNamesEdit_9 = document.querySelectorAll('.student__skips__name_9')
    let studentsNamesEdit_10 = document.querySelectorAll('.student__skips__name_10')
    let studentsNamesEdit_11 = document.querySelectorAll('.student__skips__name_11')
    let studentsNamesEdit_12 = document.querySelectorAll('.student__skips__name_12')
    let studentsNamesEdit_13 = document.querySelectorAll('.student__skips__name_13')
    let studentsNamesEdit_14 = document.querySelectorAll('.student__skips__name_14')
    let studentsNamesEdit_15 = document.querySelectorAll('.student__skips__name_15')
    let studentsNamesEdit_16 = document.querySelectorAll('.student__skips__name_16')
    let studentsNamesEdit_17 = document.querySelectorAll('.student__skips__name_17')
    let studentsNamesEdit_18 = document.querySelectorAll('.student__skips__name_18')
    let studentsNamesEdit_19 = document.querySelectorAll('.student__skips__name_19')
    let studentsNamesEdit_20 = document.querySelectorAll('.student__skips__name_20')
    let studentsNamesEdit_21 = document.querySelectorAll('.student__skips__name_21')
    let studentsNamesEdit_22 = document.querySelectorAll('.student__skips__name_22')
    let studentsNamesEdit_23 = document.querySelectorAll('.student__skips__name_23')
    let studentsNamesEdit_24 = document.querySelectorAll('.student__skips__name_24')
    let studentsNamesEdit_25 = document.querySelectorAll('.student__skips__name_25')
    let studentsNamesEdit_26 = document.querySelectorAll('.student__skips__name_26')
    let studentsNamesEdit_27 = document.querySelectorAll('.student__skips__name_27')
    let studentsNamesEdit_28 = document.querySelectorAll('.student__skips__name_28')
    let studentsNamesEdit_29 = document.querySelectorAll('.student__skips__name_29')
    let studentsNamesEdit_30 = document.querySelectorAll('.student__skips__name_30')
    let studentsNamesEdit_31 = document.querySelectorAll('.student__skips__name_31')
    let studentsNamesEdit_32 = document.querySelectorAll('.student__skips__name_32')

    // Переменные общего количествопропусков на каждого студента
    let allSkipsUdStud_1 = document.querySelector('.all_skips_student_u_1')
    let allSkipsNeudStud_1 = document.querySelector('.all_skips_student_n_1')
    let allSkipsUdStud_2 = document.querySelector('.all_skips_student_u_2')
    let allSkipsNeudStud_2 = document.querySelector('.all_skips_student_n_2')
    let allSkipsUdStud_3 = document.querySelector('.all_skips_student_u_3')
    let allSkipsNeudStud_3 = document.querySelector('.all_skips_student_n_3')
    let allSkipsUdStud_4 = document.querySelector('.all_skips_student_u_4')
    let allSkipsNeudStud_4 = document.querySelector('.all_skips_student_n_4')
    let allSkipsUdStud_5 = document.querySelector('.all_skips_student_u_5')
    let allSkipsNeudStud_5 = document.querySelector('.all_skips_student_n_5')
    let allSkipsUdStud_6 = document.querySelector('.all_skips_student_u_6')
    let allSkipsNeudStud_6 = document.querySelector('.all_skips_student_n_6')
    let allSkipsUdStud_7 = document.querySelector('.all_skips_student_u_7')
    let allSkipsNeudStud_7 = document.querySelector('.all_skips_student_n_7')
    let allSkipsUdStud_8 = document.querySelector('.all_skips_student_u_8')
    let allSkipsNeudStud_8 = document.querySelector('.all_skips_student_n_8')
    let allSkipsUdStud_9 = document.querySelector('.all_skips_student_u_9')
    let allSkipsNeudStud_9 = document.querySelector('.all_skips_student_n_9')
    let allSkipsUdStud_10 = document.querySelector('.all_skips_student_u_10')
    let allSkipsNeudStud_10 = document.querySelector('.all_skips_student_n_10')
    let allSkipsUdStud_11 = document.querySelector('.all_skips_student_u_11')
    let allSkipsNeudStud_11 = document.querySelector('.all_skips_student_n_11')
    let allSkipsUdStud_12 = document.querySelector('.all_skips_student_u_12')
    let allSkipsNeudStud_12 = document.querySelector('.all_skips_student_n_12')
    let allSkipsUdStud_13 = document.querySelector('.all_skips_student_u_13')
    let allSkipsNeudStud_13 = document.querySelector('.all_skips_student_n_13')
    let allSkipsUdStud_14 = document.querySelector('.all_skips_student_u_14')
    let allSkipsNeudStud_14 = document.querySelector('.all_skips_student_n_14')
    let allSkipsUdStud_15 = document.querySelector('.all_skips_student_u_15')
    let allSkipsNeudStud_15 = document.querySelector('.all_skips_student_n_15')
    let allSkipsUdStud_16 = document.querySelector('.all_skips_student_u_16')
    let allSkipsNeudStud_16 = document.querySelector('.all_skips_student_n_16')
    let allSkipsUdStud_17 = document.querySelector('.all_skips_student_u_17')
    let allSkipsNeudStud_17 = document.querySelector('.all_skips_student_n_17')
    let allSkipsUdStud_18 = document.querySelector('.all_skips_student_u_18')
    let allSkipsNeudStud_18 = document.querySelector('.all_skips_student_n_18')
    let allSkipsUdStud_19 = document.querySelector('.all_skips_student_u_19')
    let allSkipsNeudStud_19 = document.querySelector('.all_skips_student_n_19')
    let allSkipsUdStud_20 = document.querySelector('.all_skips_student_u_20')
    let allSkipsNeudStud_20 = document.querySelector('.all_skips_student_n_20')
    let allSkipsUdStud_21 = document.querySelector('.all_skips_student_u_21')
    let allSkipsNeudStud_21 = document.querySelector('.all_skips_student_n_21')
    let allSkipsUdStud_22 = document.querySelector('.all_skips_student_u_22')
    let allSkipsNeudStud_22 = document.querySelector('.all_skips_student_n_22')
    let allSkipsUdStud_23 = document.querySelector('.all_skips_student_u_23')
    let allSkipsNeudStud_23 = document.querySelector('.all_skips_student_n_23')
    let allSkipsUdStud_24 = document.querySelector('.all_skips_student_u_24')
    let allSkipsNeudStud_24 = document.querySelector('.all_skips_student_n_24')
    let allSkipsUdStud_25 = document.querySelector('.all_skips_student_u_25')
    let allSkipsNeudStud_25 = document.querySelector('.all_skips_student_n_25')
    let allSkipsUdStud_26 = document.querySelector('.all_skips_student_u_26')
    let allSkipsNeudStud_26 = document.querySelector('.all_skips_student_n_26')
    let allSkipsUdStud_27 = document.querySelector('.all_skips_student_u_27')
    let allSkipsNeudStud_27 = document.querySelector('.all_skips_student_n_27')
    let allSkipsUdStud_28 = document.querySelector('.all_skips_student_u_28')
    let allSkipsNeudStud_28 = document.querySelector('.all_skips_student_n_28')
    let allSkipsUdStud_29 = document.querySelector('.all_skips_student_u_29')
    let allSkipsNeudStud_29 = document.querySelector('.all_skips_student_n_29')
    let allSkipsUdStud_30 = document.querySelector('.all_skips_student_u_30')
    let allSkipsNeudStud_30 = document.querySelector('.all_skips_student_n_30')
    let allSkipsUdStud_31 = document.querySelector('.all_skips_student_u_31')
    let allSkipsNeudStud_31 = document.querySelector('.all_skips_student_n_31')
    let allSkipsUdStud_32 = document.querySelector('.all_skips_student_u_32')
    let allSkipsNeudStud_32 = document.querySelector('.all_skips_student_n_32')
    // Переменные общего количествопропусков на каждого студента

    // _____________________________________________________
    let fullSkipsUdStud_1 = document.querySelectorAll('.number__skip_u_1')
    let fullSkipsNeudStud_1 = document.querySelectorAll('.number__skip_n_1')
    let fullSkipsUdStud_2 = document.querySelectorAll('.number__skip_u_2')
    let fullSkipsNeudStud_2 = document.querySelectorAll('.number__skip_n_2')
    let fullSkipsUdStud_3 = document.querySelectorAll('.number__skip_u_3')
    let fullSkipsNeudStud_3 = document.querySelectorAll('.number__skip_n_3')
    let fullSkipsUdStud_4 = document.querySelectorAll('.number__skip_u_4')
    let fullSkipsNeudStud_4 = document.querySelectorAll('.number__skip_n_4')
    let fullSkipsUdStud_5 = document.querySelectorAll('.number__skip_u_5')
    let fullSkipsNeudStud_5 = document.querySelectorAll('.number__skip_n_5')
    let fullSkipsUdStud_6 = document.querySelectorAll('.number__skip_u_6')
    let fullSkipsNeudStud_6 = document.querySelectorAll('.number__skip_n_6')
    let fullSkipsUdStud_7 = document.querySelectorAll('.number__skip_u_7')
    let fullSkipsNeudStud_7 = document.querySelectorAll('.number__skip_n_7')
    let fullSkipsUdStud_8 = document.querySelectorAll('.number__skip_u_8')
    let fullSkipsNeudStud_8 = document.querySelectorAll('.number__skip_n_8')
    let fullSkipsUdStud_9 = document.querySelectorAll('.number__skip_u_9')
    let fullSkipsNeudStud_9 = document.querySelectorAll('.number__skip_n_9')
    let fullSkipsUdStud_10 = document.querySelectorAll('.number__skip_u_10')
    let fullSkipsNeudStud_10 = document.querySelectorAll('.number__skip_n_10')
    let fullSkipsUdStud_11 = document.querySelectorAll('.number__skip_u_11')
    let fullSkipsNeudStud_11 = document.querySelectorAll('.number__skip_n_11')
    let fullSkipsUdStud_12 = document.querySelectorAll('.number__skip_u_12')
    let fullSkipsNeudStud_12 = document.querySelectorAll('.number__skip_n_12')
    let fullSkipsUdStud_13 = document.querySelectorAll('.number__skip_u_13')
    let fullSkipsNeudStud_13 = document.querySelectorAll('.number__skip_n_13')
    let fullSkipsUdStud_14 = document.querySelectorAll('.number__skip_u_14')
    let fullSkipsNeudStud_14 = document.querySelectorAll('.number__skip_n_14')
    let fullSkipsUdStud_15 = document.querySelectorAll('.number__skip_u_15')
    let fullSkipsNeudStud_15 = document.querySelectorAll('.number__skip_n_15')
    let fullSkipsUdStud_16 = document.querySelectorAll('.number__skip_u_16')
    let fullSkipsNeudStud_16 = document.querySelectorAll('.number__skip_n_16')
    let fullSkipsUdStud_17 = document.querySelectorAll('.number__skip_u_17')
    let fullSkipsNeudStud_17 = document.querySelectorAll('.number__skip_n_17')
    let fullSkipsUdStud_18 = document.querySelectorAll('.number__skip_u_18')
    let fullSkipsNeudStud_18 = document.querySelectorAll('.number__skip_n_18')
    let fullSkipsUdStud_19 = document.querySelectorAll('.number__skip_u_19')
    let fullSkipsNeudStud_19 = document.querySelectorAll('.number__skip_n_19')
    let fullSkipsUdStud_20 = document.querySelectorAll('.number__skip_u_20')
    let fullSkipsNeudStud_20 = document.querySelectorAll('.number__skip_n_20')
    let fullSkipsUdStud_21 = document.querySelectorAll('.number__skip_u_21')
    let fullSkipsNeudStud_21 = document.querySelectorAll('.number__skip_n_21')
    let fullSkipsUdStud_22 = document.querySelectorAll('.number__skip_u_22')
    let fullSkipsNeudStud_22 = document.querySelectorAll('.number__skip_n_22')
    let fullSkipsUdStud_23 = document.querySelectorAll('.number__skip_u_23')
    let fullSkipsNeudStud_23 = document.querySelectorAll('.number__skip_n_23')
    let fullSkipsUdStud_24 = document.querySelectorAll('.number__skip_u_24')
    let fullSkipsNeudStud_24 = document.querySelectorAll('.number__skip_n_24')
    let fullSkipsUdStud_25 = document.querySelectorAll('.number__skip_u_25')
    let fullSkipsNeudStud_25 = document.querySelectorAll('.number__skip_n_25')
    let fullSkipsUdStud_26 = document.querySelectorAll('.number__skip_u_26')
    let fullSkipsNeudStud_26 = document.querySelectorAll('.number__skip_n_26')
    let fullSkipsUdStud_27 = document.querySelectorAll('.number__skip_u_27')
    let fullSkipsNeudStud_27 = document.querySelectorAll('.number__skip_n_27')
    let fullSkipsUdStud_28 = document.querySelectorAll('.number__skip_u_28')
    let fullSkipsNeudStud_28 = document.querySelectorAll('.number__skip_n_28')
    let fullSkipsUdStud_29 = document.querySelectorAll('.number__skip_u_29')
    let fullSkipsNeudStud_29 = document.querySelectorAll('.number__skip_n_29')
    let fullSkipsUdStud_30 = document.querySelectorAll('.number__skip_u_30')
    let fullSkipsNeudStud_30 = document.querySelectorAll('.number__skip_n_30')
    let fullSkipsUdStud_31 = document.querySelectorAll('.number__skip_u_31')
    let fullSkipsNeudStud_31 = document.querySelectorAll('.number__skip_n_31')
    let fullSkipsUdStud_32 = document.querySelectorAll('.number__skip_u_32')
    let fullSkipsNeudStud_32 = document.querySelectorAll('.number__skip_n_32')
    // _________________________________________________________


    let studentsNames = document.querySelectorAll('.students__names__skips')
    let studentsNamesEdit = document.querySelectorAll('.student__skip')
    let studentSkipsName = document.querySelectorAll('.student__skips__name')
    let modalEdit = document.querySelectorAll('.modal__edit')

    for (let i = 0; i < modalEdit.length; i++) {
        var c = [].filter.call(modalEdit[i].children, function (el) {
            return el.classList.contains('student__skip');
        });


        if (!studentsNames[0]) {} else {
            studentsNamesEdit_1[i].textContent = studentsNames[0].textContent
            studentsNamesEdit_1[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_1.removeAttribute('hidden')
            allSkipsNeudStud_1.removeAttribute('hidden')

            let asus1 = 0
            for (var q = 0; q < fullSkipsUdStud_1.length; q++) {
                asus1 = +asus1 + +parseInt(fullSkipsUdStud_1[q].textContent);
            }
            let asns1 = 0
            for (var q = 0; q < fullSkipsNeudStud_1.length; q++) {
                asns1 = +asns1 + +parseInt(fullSkipsNeudStud_1[q].textContent);
            }

            allSkipsUdStud_1.textContent = asus1
            allSkipsNeudStud_1.textContent = asns1
        }

        if (!studentsNames[1]) {} else {
            studentsNamesEdit_2[i].textContent = studentsNames[1].textContent
            studentsNamesEdit_2[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_2.removeAttribute('hidden')
            allSkipsNeudStud_2.removeAttribute('hidden')

            let asus2 = 0
            for (var q = 0; q < fullSkipsUdStud_2.length; q++) {
                asus2 = +asus2 + +parseInt(fullSkipsUdStud_2[q].textContent);
            }
            let asns2 = 0
            for (var q = 0; q < fullSkipsNeudStud_2.length; q++) {
                asns2 = +asns2 + +parseInt(fullSkipsNeudStud_2[q].textContent);
            }

            allSkipsUdStud_2.textContent = asus2
            allSkipsNeudStud_2.textContent = asns2

        }
        if (!studentsNames[2]) {} else {
            studentsNamesEdit_3[i].textContent = studentsNames[2].textContent
            studentsNamesEdit_3[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_3.removeAttribute('hidden')
            allSkipsNeudStud_3.removeAttribute('hidden')

            let asus3 = 0
            for (var q = 0; q < fullSkipsUdStud_3.length; q++) {
                asus3 = +asus3 + +parseInt(fullSkipsUdStud_3[q].textContent);
            }
            let asns3 = 0
            for (var q = 0; q < fullSkipsNeudStud_3.length; q++) {
                asns3 = +asns3 + +parseInt(fullSkipsNeudStud_3[q].textContent);
            }

            allSkipsUdStud_3.textContent = asus3
            allSkipsNeudStud_3.textContent = asns3

        }
        if (!studentsNames[3]) {} else {
            studentsNamesEdit_4[i].textContent = studentsNames[3].textContent
            studentsNamesEdit_4[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_4.removeAttribute('hidden')
            allSkipsNeudStud_4.removeAttribute('hidden')

            let asus4 = 0
            for (var q = 0; q < fullSkipsUdStud_4.length; q++) {
                asus4 = +asus4 + +parseInt(fullSkipsUdStud_4[q].textContent);
            }
            let asns4 = 0
            for (var q = 0; q < fullSkipsNeudStud_4.length; q++) {
                asns4 = +asns4 + +parseInt(fullSkipsNeudStud_4[q].textContent);
            }

            allSkipsUdStud_4.textContent = asus4
            allSkipsNeudStud_4.textContent = asns4

        }
        if (!studentsNames[4]) {} else {
            studentsNamesEdit_5[i].textContent = studentsNames[4].textContent
            studentsNamesEdit_5[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_5.removeAttribute('hidden')
            allSkipsNeudStud_5.removeAttribute('hidden')

            let asus5 = 0
            for (var q = 0; q < fullSkipsUdStud_5.length; q++) {
                asus5 = +asus5 + +parseInt(fullSkipsUdStud_5[q].textContent);
            }
            let asns5 = 0
            for (var q = 0; q < fullSkipsNeudStud_5.length; q++) {
                asns5 = +asns5 + +parseInt(fullSkipsNeudStud_5[q].textContent);
            }

            allSkipsUdStud_5.textContent = asus5
            allSkipsNeudStud_5.textContent = asns5

        }
        if (!studentsNames[5]) {} else {
            studentsNamesEdit_6[i].textContent = studentsNames[5].textContent
            studentsNamesEdit_6[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_6.removeAttribute('hidden')
            allSkipsNeudStud_6.removeAttribute('hidden')

            let asus6 = 0
            for (var q = 0; q < fullSkipsUdStud_6.length; q++) {
                asus6 = +asus6 + +parseInt(fullSkipsUdStud_6[q].textContent);
            }
            let asns6 = 0
            for (var q = 0; q < fullSkipsNeudStud_6.length; q++) {
                asns6 = +asns6 + +parseInt(fullSkipsNeudStud_6[q].textContent);
            }

            allSkipsUdStud_6.textContent = asus6
            allSkipsNeudStud_6.textContent = asns6

        }
        if (!studentsNames[6]) {} else {
            studentsNamesEdit_7[i].textContent = studentsNames[6].textContent
            studentsNamesEdit_7[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_7.removeAttribute('hidden')
            allSkipsNeudStud_7.removeAttribute('hidden')

            let asus7 = 0
            for (var q = 0; q < fullSkipsUdStud_7.length; q++) {
                asus7 = +asus7 + +parseInt(fullSkipsUdStud_7[q].textContent);
            }
            let asns7 = 0
            for (var q = 0; q < fullSkipsNeudStud_7.length; q++) {
                asns7 = +asns7 + +parseInt(fullSkipsNeudStud_7[q].textContent);
            }

            allSkipsUdStud_7.textContent = asus7
            allSkipsNeudStud_7.textContent = asns7

        }
        if (!studentsNames[7]) {} else {
            studentsNamesEdit_8[i].textContent = studentsNames[7].textContent
            studentsNamesEdit_8[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_8.removeAttribute('hidden')
            allSkipsNeudStud_8.removeAttribute('hidden')

            let asus8 = 0
            for (var q = 0; q < fullSkipsUdStud_8.length; q++) {
                asus8 = +asus8 + +parseInt(fullSkipsUdStud_8[q].textContent);
            }
            let asns8 = 0
            for (var q = 0; q < fullSkipsNeudStud_8.length; q++) {
                asns8 = +asns8 + +parseInt(fullSkipsNeudStud_8[q].textContent);
            }

            allSkipsUdStud_8.textContent = asus8
            allSkipsNeudStud_8.textContent = asns8

        }
        if (!studentsNames[8]) {} else {
            studentsNamesEdit_9[i].textContent = studentsNames[8].textContent
            studentsNamesEdit_9[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_9.removeAttribute('hidden')
            allSkipsNeudStud_9.removeAttribute('hidden')

            let asus9 = 0
            for (var q = 0; q < fullSkipsUdStud_9.length; q++) {
                asus9 = +asus9 + +parseInt(fullSkipsUdStud_9[q].textContent);
            }
            let asns9 = 0
            for (var q = 0; q < fullSkipsNeudStud_9.length; q++) {
                asns9 = +asns9 + +parseInt(fullSkipsNeudStud_9[q].textContent);
            }

            allSkipsUdStud_9.textContent = asus9
            allSkipsNeudStud_9.textContent = asns9

        }
        if (!studentsNames[9]) {} else {
            studentsNamesEdit_10[i].textContent = studentsNames[9].textContent
            studentsNamesEdit_10[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_10.removeAttribute('hidden')
            allSkipsNeudStud_10.removeAttribute('hidden')

            let asus10 = 0
            for (var q = 0; q < fullSkipsUdStud_10.length; q++) {
                asus10 = +asus10 + +parseInt(fullSkipsUdStud_10[q].textContent);
            }
            let asns10 = 0
            for (var q = 0; q < fullSkipsNeudStud_10.length; q++) {
                asns10 = +asns10 + +parseInt(fullSkipsNeudStud_10[q].textContent);
            }

            allSkipsUdStud_10.textContent = asus10
            allSkipsNeudStud_10.textContent = asns10

        }
        if (!studentsNames[10]) {} else {
            studentsNamesEdit_11[i].textContent = studentsNames[10].textContent
            studentsNamesEdit_11[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_11.removeAttribute('hidden')
            allSkipsNeudStud_11.removeAttribute('hidden')

            let asus11 = 0
            for (var q = 0; q < fullSkipsUdStud_11.length; q++) {
                asus11 = +asus11 + +parseInt(fullSkipsUdStud_11[q].textContent);
            }
            let asns11 = 0
            for (var q = 0; q < fullSkipsNeudStud_11.length; q++) {
                asns11 = +asns11 + +parseInt(fullSkipsNeudStud_11[q].textContent);
            }

            allSkipsUdStud_11.textContent = asus11
            allSkipsNeudStud_11.textContent = asns11
        }
        if (!studentsNames[11]) {} else {
            studentsNamesEdit_12[i].textContent = studentsNames[11].textContent
            studentsNamesEdit_12[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_12.removeAttribute('hidden')
            allSkipsNeudStud_12.removeAttribute('hidden')

            let asus12 = 0
            for (var q = 0; q < fullSkipsUdStud_12.length; q++) {
                asus12 = +asus12 + +parseInt(fullSkipsUdStud_12[q].textContent);
            }
            let asns12 = 0
            for (var q = 0; q < fullSkipsNeudStud_12.length; q++) {
                asns12 = +asns12 + +parseInt(fullSkipsNeudStud_12[q].textContent);
            }

            allSkipsUdStud_12.textContent = asus12
            allSkipsNeudStud_12.textContent = asns12
        }
        if (!studentsNames[12]) {} else {
            studentsNamesEdit_13[i].textContent = studentsNames[12].textContent
            studentsNamesEdit_13[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_13.removeAttribute('hidden')
            allSkipsNeudStud_13.removeAttribute('hidden')

            let asus13 = 0
            for (var q = 0; q < fullSkipsUdStud_13.length; q++) {
                asus13 = +asus13 + +parseInt(fullSkipsUdStud_13[q].textContent);
            }
            let asns13 = 0
            for (var q = 0; q < fullSkipsNeudStud_13.length; q++) {
                asns13 = +asns13 + +parseInt(fullSkipsNeudStud_13[q].textContent);
            }

            allSkipsUdStud_13.textContent = asus13
            allSkipsNeudStud_13.textContent = asns13
        }
        if (!studentsNames[13]) {} else {
            studentsNamesEdit_14[i].textContent = studentsNames[13].textContent
            studentsNamesEdit_14[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_14.removeAttribute('hidden')
            allSkipsNeudStud_14.removeAttribute('hidden')

            let asus14 = 0
            for (var q = 0; q < fullSkipsUdStud_14.length; q++) {
                asus14 = +asus14 + +parseInt(fullSkipsUdStud_14[q].textContent);
            }
            let asns14 = 0
            for (var q = 0; q < fullSkipsNeudStud_14.length; q++) {
                asns14 = +asns14 + +parseInt(fullSkipsNeudStud_14[q].textContent);
            }

            allSkipsUdStud_14.textContent = asus14
            allSkipsNeudStud_14.textContent = asns14
        }
        if (!studentsNames[14]) {} else {
            studentsNamesEdit_15[i].textContent = studentsNames[14].textContent
            studentsNamesEdit_15[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_15.removeAttribute('hidden')
            allSkipsNeudStud_15.removeAttribute('hidden')

            let asus15 = 0
            for (var q = 0; q < fullSkipsUdStud_15.length; q++) {
                asus15 = +asus15 + +parseInt(fullSkipsUdStud_15[q].textContent);
            }
            let asns15 = 0
            for (var q = 0; q < fullSkipsNeudStud_15.length; q++) {
                asns15 = +asns15 + +parseInt(fullSkipsNeudStud_15[q].textContent);
            }

            allSkipsUdStud_15.textContent = asus15
            allSkipsNeudStud_15.textContent = asns15
        }
        if (!studentsNames[15]) {} else {
            studentsNamesEdit_16[i].textContent = studentsNames[15].textContent
            studentsNamesEdit_16[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_16.removeAttribute('hidden')
            allSkipsNeudStud_16.removeAttribute('hidden')

            let asus16 = 0
            for (var q = 0; q < fullSkipsUdStud_16.length; q++) {
                asus16 = +asus16 + +parseInt(fullSkipsUdStud_16[q].textContent);
            }
            let asns16 = 0
            for (var q = 0; q < fullSkipsNeudStud_16.length; q++) {
                asns16 = +asns16 + +parseInt(fullSkipsNeudStud_16[q].textContent);
            }

            allSkipsUdStud_16.textContent = asus16
            allSkipsNeudStud_16.textContent = asns16
        }
        if (!studentsNames[16]) {} else {
            studentsNamesEdit_17[i].textContent = studentsNames[16].textContent
            studentsNamesEdit_17[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_17.removeAttribute('hidden')
            allSkipsNeudStud_17.removeAttribute('hidden')

            let asus17 = 0
            for (var q = 0; q < fullSkipsUdStud_17.length; q++) {
                asus17 = +asus17 + +parseInt(fullSkipsUdStud_17[q].textContent);
            }
            let asns17 = 0
            for (var q = 0; q < fullSkipsNeudStud_17.length; q++) {
                asns17 = +asns17 + +parseInt(fullSkipsNeudStud_17[q].textContent);
            }

            allSkipsUdStud_17.textContent = asus17
            allSkipsNeudStud_17.textContent = asns17
        }
        if (!studentsNames[17]) {} else {
            studentsNamesEdit_18[i].textContent = studentsNames[17].textContent
            studentsNamesEdit_18[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_18.removeAttribute('hidden')
            allSkipsNeudStud_18.removeAttribute('hidden')

            let asus18 = 0
            for (var q = 0; q < fullSkipsUdStud_18.length; q++) {
                asus18 = +asus18 + +parseInt(fullSkipsUdStud_18[q].textContent);
            }
            let asns18 = 0
            for (var q = 0; q < fullSkipsNeudStud_18.length; q++) {
                asns18 = +asns18 + +parseInt(fullSkipsNeudStud_18[q].textContent);
            }

            allSkipsUdStud_18.textContent = asus18
            allSkipsNeudStud_18.textContent = asns18
        }
        if (!studentsNames[18]) {} else {
            studentsNamesEdit_19[i].textContent = studentsNames[18].textContent
            studentsNamesEdit_19[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_19.removeAttribute('hidden')
            allSkipsNeudStud_19.removeAttribute('hidden')

            let asus19 = 0
            for (var q = 0; q < fullSkipsUdStud_19.length; q++) {
                asus19 = +asus19 + +parseInt(fullSkipsUdStud_19[q].textContent);
            }
            let asns19 = 0
            for (var q = 0; q < fullSkipsNeudStud_19.length; q++) {
                asns19 = +asns19 + +parseInt(fullSkipsNeudStud_19[q].textContent);
            }

            allSkipsUdStud_19.textContent = asus19
            allSkipsNeudStud_19.textContent = asns19
        }
        if (!studentsNames[19]) {} else {
            studentsNamesEdit_20[i].textContent = studentsNames[19].textContent
            studentsNamesEdit_20[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_20.removeAttribute('hidden')
            allSkipsNeudStud_20.removeAttribute('hidden')

            let asus20 = 0
            for (var q = 0; q < fullSkipsUdStud_20.length; q++) {
                asus20 = +asus20 + +parseInt(fullSkipsUdStud_20[q].textContent);
            }
            let asns20 = 0
            for (var q = 0; q < fullSkipsNeudStud_20.length; q++) {
                asns20 = +asns20 + +parseInt(fullSkipsNeudStud_20[q].textContent);
            }

            allSkipsUdStud_20.textContent = asus20
            allSkipsNeudStud_20.textContent = asns20
        }
        if (!studentsNames[20]) {} else {
            studentsNamesEdit_21[i].textContent = studentsNames[20].textContent
            studentsNamesEdit_21[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_21.removeAttribute('hidden')
            allSkipsNeudStud_21.removeAttribute('hidden')

            let asus21 = 0
            for (var q = 0; q < fullSkipsUdStud_21.length; q++) {
                asus21 = +asus21 + +parseInt(fullSkipsUdStud_21[q].textContent);
            }
            let asns21 = 0
            for (var q = 0; q < fullSkipsNeudStud_21.length; q++) {
                asns21 = +asns21 + +parseInt(fullSkipsNeudStud_21[q].textContent);
            }

            allSkipsUdStud_21.textContent = asus21
            allSkipsNeudStud_21.textContent = asns21
        }
        if (!studentsNames[21]) {} else {
            studentsNamesEdit_22[i].textContent = studentsNames[21].textContent
            studentsNamesEdit_22[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_22.removeAttribute('hidden')
            allSkipsNeudStud_22.removeAttribute('hidden')

            let asus22 = 0
            for (var q = 0; q < fullSkipsUdStud_22.length; q++) {
                asus22 = +asus22 + +parseInt(fullSkipsUdStud_22[q].textContent);
            }
            let asns22 = 0
            for (var q = 0; q < fullSkipsNeudStud_22.length; q++) {
                asns22 = +asns22 + +parseInt(fullSkipsNeudStud_22[q].textContent);
            }

            allSkipsUdStud_22.textContent = asus22
            allSkipsNeudStud_22.textContent = asns22
        }
        if (!studentsNames[22]) {} else {
            studentsNamesEdit_23[i].textContent = studentsNames[22].textContent
            studentsNamesEdit_23[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_23.removeAttribute('hidden')
            allSkipsNeudStud_23.removeAttribute('hidden')

            let asus23 = 0
            for (var q = 0; q < fullSkipsUdStud_23.length; q++) {
                asus23 = +asus23 + +parseInt(fullSkipsUdStud_23[q].textContent);
            }
            let asns23 = 0
            for (var q = 0; q < fullSkipsNeudStud_23.length; q++) {
                asns23 = +asns23 + +parseInt(fullSkipsNeudStud_23[q].textContent);
            }

            allSkipsUdStud_23.textContent = asus23
            allSkipsNeudStud_23.textContent = asns23
        }
        if (!studentsNames[23]) {} else {
            studentsNamesEdit_24[i].textContent = studentsNames[23].textContent
            studentsNamesEdit_24[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_24.removeAttribute('hidden')
            allSkipsNeudStud_24.removeAttribute('hidden')

            let asus24 = 0
            for (var q = 0; q < fullSkipsUdStud_24.length; q++) {
                asus24 = +asus24 + +parseInt(fullSkipsUdStud_24[q].textContent);
            }
            let asns24 = 0
            for (var q = 0; q < fullSkipsNeudStud_24.length; q++) {
                asns24 = +asns24 + +parseInt(fullSkipsNeudStud_24[q].textContent);
            }

            allSkipsUdStud_24.textContent = asus24
            allSkipsNeudStud_24.textContent = asns24
        }
        if (!studentsNames[24]) {} else {
            studentsNamesEdit_25[i].textContent = studentsNames[24].textContent
            studentsNamesEdit_25[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_25.removeAttribute('hidden')
            allSkipsNeudStud_25.removeAttribute('hidden')

            let asus25 = 0
            for (var q = 0; q < fullSkipsUdStud_25.length; q++) {
                asus25 = +asus25 + +parseInt(fullSkipsUdStud_25[q].textContent);
            }
            let asns25 = 0
            for (var q = 0; q < fullSkipsNeudStud_25.length; q++) {
                asns25 = +asns25 + +parseInt(fullSkipsNeudStud_25[q].textContent);
            }

            allSkipsUdStud_25.textContent = asus25
            allSkipsNeudStud_25.textContent = asns25
        }
        if (!studentsNames[25]) {} else {
            studentsNamesEdit_26[i].textContent = studentsNames[25].textContent
            studentsNamesEdit_26[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_26.removeAttribute('hidden')
            allSkipsNeudStud_26.removeAttribute('hidden')

            let asus26 = 0
            for (var q = 0; q < fullSkipsUdStud_26.length; q++) {
                asus26 = +asus26 + +parseInt(fullSkipsUdStud_26[q].textContent);
            }
            let asns26 = 0
            for (var q = 0; q < fullSkipsNeudStud_26.length; q++) {
                asns26 = +asns26 + +parseInt(fullSkipsNeudStud_26[q].textContent);
            }

            allSkipsUdStud_26.textContent = asus26
            allSkipsNeudStud_26.textContent = asns26
        }
        if (!studentsNames[26]) {} else {
            studentsNamesEdit_27[i].textContent = studentsNames[26].textContent
            studentsNamesEdit_27[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_27.removeAttribute('hidden')
            allSkipsNeudStud_27.removeAttribute('hidden')

            let asus27 = 0
            for (var q = 0; q < fullSkipsUdStud_27.length; q++) {
                asus27 = +asus27 + +parseInt(fullSkipsUdStud_27[q].textContent);
            }
            let asns27 = 0
            for (var q = 0; q < fullSkipsNeudStud_27.length; q++) {
                asns27 = +asns27 + +parseInt(fullSkipsNeudStud_27[q].textContent);
            }

            allSkipsUdStud_27.textContent = asus27
            allSkipsNeudStud_27.textContent = asns27
        }
        if (!studentsNames[27]) {} else {
            studentsNamesEdit_28[i].textContent = studentsNames[27].textContent
            studentsNamesEdit_28[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_28.removeAttribute('hidden')
            allSkipsNeudStud_28.removeAttribute('hidden')

            let asus28 = 0
            for (var q = 0; q < fullSkipsUdStud_28.length; q++) {
                asus28 = +asus28 + +parseInt(fullSkipsUdStud_28[q].textContent);
            }
            let asns28 = 0
            for (var q = 0; q < fullSkipsNeudStud_28.length; q++) {
                asns28 = +asns28 + +parseInt(fullSkipsNeudStud_28[q].textContent);
            }

            allSkipsUdStud_28.textContent = asus28
            allSkipsNeudStud_28.textContent = asns28
        }
        if (!studentsNames[28]) {} else {
            studentsNamesEdit_29[i].textContent = studentsNames[28].textContent
            studentsNamesEdit_29[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_1.removeAttribute('hidden')
            allSkipsNeudStud_1.removeAttribute('hidden')

            let asus29 = 0
            for (var q = 0; q < fullSkipsUdStud_29.length; q++) {
                asus29 = +asus29 + +parseInt(fullSkipsUdStud_29[q].textContent);
            }
            let asns29 = 0
            for (var q = 0; q < fullSkipsNeudStud_29.length; q++) {
                asns29 = +asns29 + +parseInt(fullSkipsNeudStud_29[q].textContent);
            }

            allSkipsUdStud_29.textContent = asus29
            allSkipsNeudStud_29.textContent = asns29
        }
        if (!studentsNames[29]) {} else {
            studentsNamesEdit_30[i].textContent = studentsNames[29].textContent
            studentsNamesEdit_30[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_29.removeAttribute('hidden')
            allSkipsNeudStud_29.removeAttribute('hidden')

            let asus30 = 0
            for (var q = 0; q < fullSkipsUdStud_30.length; q++) {
                asus30 = +asus30 + +parseInt(fullSkipsUdStud_30[q].textContent);
            }
            let asns30 = 0
            for (var q = 0; q < fullSkipsNeudStud_30.length; q++) {
                asns30 = +asns30 + +parseInt(fullSkipsNeudStud_30[q].textContent);
            }

            allSkipsUdStud_30.textContent = asus30
            allSkipsNeudStud_30.textContent = asns30
        }
        if (!studentsNames[30]) {} else {
            studentsNamesEdit_31[i].textContent = studentsNames[30].textContent
            studentsNamesEdit_31[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_30.removeAttribute('hidden')
            allSkipsNeudStud_30.removeAttribute('hidden')

            let asus31 = 0
            for (var q = 0; q < fullSkipsUdStud_31.length; q++) {
                asus31 = +asus31 + +parseInt(fullSkipsUdStud_31[q].textContent);
            }
            let asns31 = 0
            for (var q = 0; q < fullSkipsNeudStud_31.length; q++) {
                asns31 = +asns31 + +parseInt(fullSkipsNeudStud_31[q].textContent);
            }

            allSkipsUdStud_31.textContent = asus31
            allSkipsNeudStud_31.textContent = asns31
        }
        if (!studentsNames[31]) {} else {
            studentsNamesEdit_32[i].textContent = studentsNames[31].textContent
            studentsNamesEdit_32[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_31.removeAttribute('hidden')
            allSkipsNeudStud_31.removeAttribute('hidden')

            let asus32 = 0
            for (var q = 0; q < fullSkipsUdStud_32.length; q++) {
                asus32 = +asus32 + +parseInt(fullSkipsUdStud_32[q].textContent);
            }
            let asns32 = 0
            for (var q = 0; q < fullSkipsNeudStud_32.length; q++) {
                asns32 = +asns32 + +parseInt(fullSkipsNeudStud_32[q].textContent);
            }

            allSkipsUdStud_32.textContent = asus32
            allSkipsNeudStud_32.textContent = asns32
        }
    }





    // Формирование таблиц по пропускам по дням и за неделю

    // Формирование количества студентов
    let weekStudentsBase101 = document.querySelectorAll('.week__full__students__base__101')
    let weekFullStudents101 = document.querySelectorAll('.week__full__students__101')
    if (!weekStudentsBase101) {} else {
        for (var i = 0; i < weekFullStudents101.length; i++) {
            weekFullStudents101[i].textContent = weekStudentsBase101.length
        }
    }

    let weekStudentsBase111 = document.querySelectorAll('.week__full__students__base__111')
    let weekFullStudents111 = document.querySelectorAll('.week__full__students__111')
    if (!weekStudentsBase111) {} else {
        for (var i = 0; i < weekFullStudents111.length; i++) {
            weekFullStudents111[i].textContent = weekStudentsBase111.length
        }
    }

    let weekStudentsBase121 = document.querySelectorAll('.week__full__students__base__121')
    let weekFullStudents121 = document.querySelectorAll('.week__full__students__121')
    if (!weekStudentsBase121) {} else {
        for (var i = 0; i < weekFullStudents121.length; i++) {
            weekFullStudents121[i].textContent = weekStudentsBase121.length
        }
    }

    let weekStudentsBase201 = document.querySelectorAll('.week__full__students__base__201')
    let weekFullStudents201 = document.querySelectorAll('.week__full__students__201')
    if (!weekStudentsBase201) {} else {
        for (var i = 0; i < weekFullStudents201.length; i++) {
            weekFullStudents201[i].textContent = weekStudentsBase201.length
        }
    }

    let weekStudentsBase202 = document.querySelectorAll('.week__full__students__base__202')
    let weekFullStudents202 = document.querySelectorAll('.week__full__students__202')
    if (!weekStudentsBase202) {} else {
        for (var i = 0; i < weekFullStudents202.length; i++) {
            weekFullStudents202[i].textContent = weekStudentsBase202.length
        }
    }

    let weekStudentsBase211 = document.querySelectorAll('.week__full__students__base__211')
    let weekFullStudents211 = document.querySelectorAll('.week__full__students__211')
    if (!weekStudentsBase211) {} else {
        for (var i = 0; i < weekFullStudents211.length; i++) {
            weekFullStudents211[i].textContent = weekStudentsBase211.length
        }
    }

    let weekStudentsBase221 = document.querySelectorAll('.week__full__students__base__221')
    let weekFullStudents221 = document.querySelectorAll('.week__full__students__221')
    if (!weekStudentsBase221) {} else {
        for (var i = 0; i < weekFullStudents221.length; i++) {
            weekFullStudents221[i].textContent = weekStudentsBase221.length
        }
    }

    let weekStudentsBase231 = document.querySelectorAll('.week__full__students__base__231')
    let weekFullStudents231 = document.querySelectorAll('.week__full__students__231')
    if (!weekStudentsBase231) {} else {
        for (var i = 0; i < weekFullStudents231.length; i++) {
            weekFullStudents231[i].textContent = weekStudentsBase231.length
        }
    }

    let weekStudentsBase241 = document.querySelectorAll('.week__full__students__base__241')
    let weekFullStudents241 = document.querySelectorAll('.week__full__students__241')
    if (!weekStudentsBase241) {} else {
        for (var i = 0; i < weekFullStudents241.length; i++) {
            weekFullStudents241[i].textContent = weekStudentsBase241.length
        }
    }

    let weekStudentsBase301 = document.querySelectorAll('.week__full__students__base__301')
    let weekFullStudents301 = document.querySelectorAll('.week__full__students__301')
    if (!weekStudentsBase301) {} else {
        for (var i = 0; i < weekFullStudents301.length; i++) {
            weekFullStudents301[i].textContent = weekStudentsBase301.length
        }
    }

    let weekStudentsBase302 = document.querySelectorAll('.week__full__students__base__302')
    let weekFullStudents302 = document.querySelectorAll('.week__full__students__302')
    if (!weekStudentsBase302) {} else {
        for (var i = 0; i < weekFullStudents302.length; i++) {
            weekFullStudents302[i].textContent = weekStudentsBase302.length
        }
    }

    let weekStudentsBase311 = document.querySelectorAll('.week__full__students__base__311')
    let weekFullStudents311 = document.querySelectorAll('.week__full__students__311')
    if (!weekStudentsBase311) {} else {
        for (var i = 0; i < weekFullStudents311.length; i++) {
            weekFullStudents311[i].textContent = weekStudentsBase311.length
        }
    }

    let weekStudentsBase321 = document.querySelectorAll('.week__full__students__base__321')
    let weekFullStudents321 = document.querySelectorAll('.week__full__students__321')
    if (!weekStudentsBase321) {} else {
        for (var i = 0; i < weekFullStudents321.length; i++) {
            weekFullStudents321[i].textContent = weekStudentsBase321.length
        }
    }

    let weekStudentsBase331 = document.querySelectorAll('.week__full__students__base__331')
    let weekFullStudents331 = document.querySelectorAll('.week__full__students__331')
    if (!weekStudentsBase331) {} else {
        for (var i = 0; i < weekFullStudents331.length; i++) {
            weekFullStudents331[i].textContent = weekStudentsBase331.length
        }
    }

    let weekStudentsBase341 = document.querySelectorAll('.week__full__students__base__341')
    let weekFullStudents341 = document.querySelectorAll('.week__full__students__341')
    if (!weekStudentsBase341) {} else {
        for (var i = 0; i < weekFullStudents341.length; i++) {
            weekFullStudents341[i].textContent = weekStudentsBase341.length
        }
    }

    let weekStudentsBase401 = document.querySelectorAll('.week__full__students__base__401')
    let weekFullStudents401 = document.querySelectorAll('.week__full__students__401')
    if (!weekStudentsBase401) {} else {
        for (var i = 0; i < weekFullStudents401.length; i++) {
            weekFullStudents401[i].textContent = weekStudentsBase401.length
        }
    }

    let weekStudentsBase402 = document.querySelectorAll('.week__full__students__base__402')
    let weekFullStudents402 = document.querySelectorAll('.week__full__students__402')
    if (!weekStudentsBase402) {} else {
        for (var i = 0; i < weekFullStudents402.length; i++) {
            weekFullStudents402[i].textContent = weekStudentsBase402.length
        }
    }

    let weekStudentsBase411 = document.querySelectorAll('.week__full__students__base__411')
    let weekFullStudents411 = document.querySelectorAll('.week__full__students__411')
    if (!weekStudentsBase411) {} else {
        for (var i = 0; i < weekFullStudents411.length; i++) {
            weekFullStudents411[i].textContent = weekStudentsBase411.length
        }
    }

    let weekStudentsBase421 = document.querySelectorAll('.week__full__students__base__421')
    let weekFullStudents421 = document.querySelectorAll('.week__full__students__421')
    if (!weekStudentsBase421) {} else {
        for (var i = 0; i < weekFullStudents421.length; i++) {
            weekFullStudents421[i].textContent = weekStudentsBase421.length
        }
    }

    let weekStudentsBase431 = document.querySelectorAll('.week__full__students__base__431')
    let weekFullStudents431 = document.querySelectorAll('.week__full__students__431')
    if (!weekStudentsBase431) {} else {
        for (var i = 0; i < weekFullStudents431.length; i++) {
            weekFullStudents431[i].textContent = weekStudentsBase431.length
        }
    }

    let weekStudentsBase441 = document.querySelectorAll('.week__full__students__base__441')
    let weekFullStudents441 = document.querySelectorAll('.week__full__students__441')
    if (!weekStudentsBase441) {} else {
        for (var i = 0; i < weekFullStudents441.length; i++) {
            weekFullStudents441[i].textContent = weekStudentsBase441.length
        }
    }
    // Формирование количества студентов

    // Информация по 101 группе
    const day1_101Covid = document.querySelector('.day_1_101_covid')
    const day1_101Orvi = document.querySelector('.day_1_101_orvi')
    const day1_101Orz = document.querySelector('.day_1_101_orz')
    const day1_101Oher = document.querySelector('.day_1_101_other')
    const day1_101OherReasons = document.querySelector('.day_1_101_other_reasons')

    const day1_101 = document.querySelectorAll('.day_1_101')

    const present_101 = document.querySelector('.day_1_101_present')

    if (!day1_101Covid) {} else {
        for (var i = 0; i < day1_101.length; i++) {
            if (day1_101[i].textContent == 'COVID') {
                day1_101Covid.textContent = +day1_101Covid.textContent + 1
            }
            if (day1_101[i].textContent == 'ОРВИ') {
                day1_101Orvi.textContent = +day1_101Orvi.textContent + 1
            }
            if (day1_101[i].textContent == 'ОРЗ') {
                day1_101Orz.textContent = +day1_101Orz.textContent + 1
            }
            if (day1_101[i].textContent == 'Не простудное') {
                day1_101Oher.textContent = +day1_101Oher.textContent + 1
            }
            if (day1_101[i].textContent == 'Другое') {
                day1_101OherReasons.textContent = +day1_101OherReasons.textContent + 1
            }
        }
        if (!day1_101Covid) {} else {
            let presentVrem101
            presentVrem101 = +day1_101Covid.textContent + +day1_101Orvi.textContent + +day1_101Orz.textContent + +day1_101Oher.textContent
            present_101.textContent = +weekStudentsBase101.length - +presentVrem101
        }
    }
    // Информация по 101 группе

    // Информация по 111 группе
    const day1_111Covid = document.querySelector('.day_1_111_covid')
    const day1_111Orvi = document.querySelector('.day_1_111_orvi')
    const day1_111Orz = document.querySelector('.day_1_111_orz')
    const day1_111Oher = document.querySelector('.day_1_111_other')
    const day1_111OherReasons = document.querySelector('.day_1_111_other_reasons')

    const day1_111 = document.querySelectorAll('.day_1_111')

    const present_111 = document.querySelector('.day_1_111_present')

    if (!day1_111Covid) {} else {
        for (var i = 0; i < day1_111.length; i++) {
            if (day1_111[i].textContent == 'COVID') {
                day1_111Covid.textContent = +day1_111Covid.textContent + 1
            }
            if (day1_111[i].textContent == 'ОРВИ') {
                day1_111Orvi.textContent = +day1_111Orvi.textContent + 1
            }
            if (day1_111[i].textContent == 'ОРЗ') {
                day1_111Orz.textContent = +day1_111Orz.textContent + 1
            }
            if (day1_111[i].textContent == 'Не простудное') {
                day1_111Oher.textContent = +day1_111Oher.textContent + 1
            }
            if (day1_111[i].textContent == 'Другое') {
                day1_111OherReasons.textContent = +day1_111OherReasons.textContent + 1
            }
        }
        if (!day1_111Covid) {} else {
            let presentVrem111
            presentVrem111 = +day1_111Covid.textContent + +day1_111Orvi.textContent + +day1_111Orz.textContent + +day1_111Oher.textContent
            present_111.textContent = +weekStudentsBase111.length - +presentVrem111
        }
    }
    // Информация по 111 группе

    // Информация по 121 группе
    const day1_121Covid = document.querySelector('.day_1_121_covid')
    const day1_121Orvi = document.querySelector('.day_1_121_orvi')
    const day1_121Orz = document.querySelector('.day_1_121_orz')
    const day1_121Oher = document.querySelector('.day_1_121_other')
    const day1_121OherReasons = document.querySelector('.day_1_121_other_reasons')

    const day1_121 = document.querySelectorAll('.day_1_121')

    const present_121 = document.querySelector('.day_1_121_present')

    if (!day1_121Covid) {} else {
        for (var i = 0; i < day1_121.length; i++) {
            if (day1_121[i].textContent == 'COVID') {
                day1_121Covid.textContent = +day1_121Covid.textContent + 1
            }
            if (day1_121[i].textContent == 'ОРВИ') {
                day1_121Orvi.textContent = +day1_121Orvi.textContent + 1
            }
            if (day1_121[i].textContent == 'ОРЗ') {
                day1_121Orz.textContent = +day1_121Orz.textContent + 1
            }
            if (day1_121[i].textContent == 'Не простудное') {
                day1_121Oher.textContent = +day1_121Oher.textContent + 1
            }
            if (day1_121[i].textContent == 'Другое') {
                day1_121OherReasons.textContent = +day1_121OherReasons.textContent + 1
            }
        }
        if (!day1_121Covid) {} else {
            let presentVrem121
            presentVrem121 = +day1_121Covid.textContent + +day1_121Orvi.textContent + +day1_121Orz.textContent + +day1_121Oher.textContent
            present_121.textContent = +weekStudentsBase121.length - +presentVrem121
        }
    }
    // Информация по 121 группе

    // Информация по 201 группе
    const day1_201Covid = document.querySelector('.day_1_201_covid')
    const day1_201Orvi = document.querySelector('.day_1_201_orvi')
    const day1_201Orz = document.querySelector('.day_1_201_orz')
    const day1_201Oher = document.querySelector('.day_1_201_other')
    const day1_201OherReasons = document.querySelector('.day_1_201_other_reasons')

    const day1_201 = document.querySelectorAll('.day_1_201')

    const present_201 = document.querySelector('.day_1_201_present')

    if (!day1_201Covid) {} else {
        for (var i = 0; i < day1_201.length; i++) {
            if (day1_201[i].textContent == 'COVID') {
                day1_201Covid.textContent = +day1_201Covid.textContent + 1
            }
            if (day1_201[i].textContent == 'ОРВИ') {
                day1_201Orvi.textContent = +day1_201Orvi.textContent + 1
            }
            if (day1_201[i].textContent == 'ОРЗ') {
                day1_201Orz.textContent = +day1_201Orz.textContent + 1
            }
            if (day1_201[i].textContent == 'Не простудное') {
                day1_201Oher.textContent = +day1_201Oher.textContent + 1
            }
            if (day1_201[i].textContent == 'Другое') {
                day1_201OherReasons.textContent = +day1_201OherReasons.textContent + 1
            }
        }
        if (!day1_201Covid) {} else {
            let presentVrem201
            presentVrem201 = +day1_201Covid.textContent + +day1_201Orvi.textContent + +day1_201Orz.textContent + +day1_201Oher.textContent
            present_201.textContent = +weekStudentsBase201.length - +presentVrem201
        }
    }
    // Информация по 201 группе

    // Информация по 202 группе
    const day1_202Covid = document.querySelector('.day_1_202_covid')
    const day1_202Orvi = document.querySelector('.day_1_202_orvi')
    const day1_202Orz = document.querySelector('.day_1_202_orz')
    const day1_202Oher = document.querySelector('.day_1_202_other')
    const day1_202OherReasons = document.querySelector('.day_1_202_other_reasons')

    const day1_202 = document.querySelectorAll('.day_1_202')

    const present_202 = document.querySelector('.day_1_202_present')

    if (!day1_202Covid) {} else {
        for (var i = 0; i < day1_202.length; i++) {
            if (day1_202[i].textContent == 'COVID') {
                day1_202Covid.textContent = +day1_202Covid.textContent + 1
            }
            if (day1_202[i].textContent == 'ОРВИ') {
                day1_202Orvi.textContent = +day1_202Orvi.textContent + 1
            }
            if (day1_202[i].textContent == 'ОРЗ') {
                day1_202Orz.textContent = +day1_202Orz.textContent + 1
            }
            if (day1_202[i].textContent == 'Не простудное') {
                day1_202Oher.textContent = +day1_202Oher.textContent + 1
            }
            if (day1_202[i].textContent == 'Другое') {
                day1_202OherReasons.textContent = +day1_202OherReasons.textContent + 1
            }
        }
        if (!day1_202Covid) {} else {
            let presentVrem202
            presentVrem202 = +day1_202Covid.textContent + +day1_202Orvi.textContent + +day1_202Orz.textContent + +day1_202Oher.textContent
            present_202.textContent = +weekStudentsBase202.length - +presentVrem202
        }
    }
    // Информация по 202 группе

    // Информация по 211 группе
    const day1_211Covid = document.querySelector('.day_1_211_covid')
    const day1_211Orvi = document.querySelector('.day_1_211_orvi')
    const day1_211Orz = document.querySelector('.day_1_211_orz')
    const day1_211Oher = document.querySelector('.day_1_211_other')
    const day1_211OherReasons = document.querySelector('.day_1_211_other_reasons')

    const day1_211 = document.querySelectorAll('.day_1_211')

    const present_211 = document.querySelector('.day_1_211_present')

    if (!day1_211Covid) {} else {
        for (var i = 0; i < day1_211.length; i++) {
            if (day1_211[i].textContent == 'COVID') {
                day1_211Covid.textContent = +day1_211Covid.textContent + 1
            }
            if (day1_211[i].textContent == 'ОРВИ') {
                day1_211Orvi.textContent = +day1_211Orvi.textContent + 1
            }
            if (day1_211[i].textContent == 'ОРЗ') {
                day1_211Orz.textContent = +day1_211Orz.textContent + 1
            }
            if (day1_211[i].textContent == 'Не простудное') {
                day1_211Oher.textContent = +day1_211Oher.textContent + 1
            }
            if (day1_211[i].textContent == 'Другое') {
                day1_211OherReasons.textContent = +day1_211OherReasons.textContent + 1
            }
        }
        if (!day1_211Covid) {} else {
            let presentVrem211
            presentVrem211 = +day1_211Covid.textContent + +day1_211Orvi.textContent + +day1_211Orz.textContent + +day1_211Oher.textContent
            present_211.textContent = +weekStudentsBase211.length - +presentVrem211
        }
    }
    // Информация по 211 группе

    // Информация по 221 группе
    const day1_221Covid = document.querySelector('.day_1_221_covid')
    const day1_221Orvi = document.querySelector('.day_1_221_orvi')
    const day1_221Orz = document.querySelector('.day_1_221_orz')
    const day1_221Oher = document.querySelector('.day_1_221_other')
    const day1_221OherReasons = document.querySelector('.day_1_221_other_reasons')

    const day1_221 = document.querySelectorAll('.day_1_221')

    const present_221 = document.querySelector('.day_1_221_present')

    if (!day1_221Covid) {} else {
        for (var i = 0; i < day1_221.length; i++) {
            if (day1_221[i].textContent == 'COVID') {
                day1_221Covid.textContent = +day1_221Covid.textContent + 1
            }
            if (day1_221[i].textContent == 'ОРВИ') {
                day1_221Orvi.textContent = +day1_221Orvi.textContent + 1
            }
            if (day1_221[i].textContent == 'ОРЗ') {
                day1_221Orz.textContent = +day1_221Orz.textContent + 1
            }
            if (day1_221[i].textContent == 'Не простудное') {
                day1_221Oher.textContent = +day1_221Oher.textContent + 1
            }
            if (day1_221[i].textContent == 'Другое') {
                day1_221OherReasons.textContent = +day1_221OherReasons.textContent + 1
            }
        }
        if (!day1_221Covid) {} else {
            let presentVrem221
            presentVrem221 = +day1_221Covid.textContent + +day1_221Orvi.textContent + +day1_221Orz.textContent + +day1_221Oher.textContent
            present_221.textContent = +weekStudentsBase221.length - +presentVrem221
        }
    }
    // Информация по 221 группе

    // Информация по 231 группе
    const day1_231Covid = document.querySelector('.day_1_231_covid')
    const day1_231Orvi = document.querySelector('.day_1_231_orvi')
    const day1_231Orz = document.querySelector('.day_1_231_orz')
    const day1_231Oher = document.querySelector('.day_1_231_other')
    const day1_231OherReasons = document.querySelector('.day_1_231_other_reasons')

    const day1_231 = document.querySelectorAll('.day_1_231')

    const present_231 = document.querySelector('.day_1_231_present')

    if (!day1_231Covid) {} else {
        for (var i = 0; i < day1_231.length; i++) {
            if (day1_231[i].textContent == 'COVID') {
                day1_231Covid.textContent = +day1_231Covid.textContent + 1
            }
            if (day1_231[i].textContent == 'ОРВИ') {
                day1_231Orvi.textContent = +day1_231Orvi.textContent + 1
            }
            if (day1_231[i].textContent == 'ОРЗ') {
                day1_231Orz.textContent = +day1_231Orz.textContent + 1
            }
            if (day1_231[i].textContent == 'Не простудное') {
                day1_231Oher.textContent = +day1_231Oher.textContent + 1
            }
            if (day1_231[i].textContent == 'Другое') {
                day1_231OherReasons.textContent = +day1_231OherReasons.textContent + 1
            }
        }
        if (!day1_231Covid) {} else {
            let presentVrem231
            presentVrem231 = +day1_231Covid.textContent + +day1_231Orvi.textContent + +day1_231Orz.textContent + +day1_231Oher.textContent
            present_231.textContent = +weekStudentsBase231.length - +presentVrem231
        }
    }
    // Информация по 231 группе

    // Информация по 241 группе
    const day1_241Covid = document.querySelector('.day_1_241_covid')
    const day1_241Orvi = document.querySelector('.day_1_241_orvi')
    const day1_241Orz = document.querySelector('.day_1_241_orz')
    const day1_241Oher = document.querySelector('.day_1_241_other')
    const day1_241OherReasons = document.querySelector('.day_1_241_other_reasons')

    const day1_241 = document.querySelectorAll('.day_1_241')

    const present_241 = document.querySelector('.day_1_241_present')

    if (!day1_241Covid) {} else {
        for (var i = 0; i < day1_241.length; i++) {
            if (day1_241[i].textContent == 'COVID') {
                day1_241Covid.textContent = +day1_241Covid.textContent + 1
            }
            if (day1_241[i].textContent == 'ОРВИ') {
                day1_241Orvi.textContent = +day1_241Orvi.textContent + 1
            }
            if (day1_241[i].textContent == 'ОРЗ') {
                day1_241Orz.textContent = +day1_241Orz.textContent + 1
            }
            if (day1_241[i].textContent == 'Не простудное') {
                day1_241Oher.textContent = +day1_241Oher.textContent + 1
            }
            if (day1_241[i].textContent == 'Другое') {
                day1_241OherReasons.textContent = +day1_241OherReasons.textContent + 1
            }
        }
        if (!day1_241Covid) {} else {
            let presentVrem241
            presentVrem241 = +day1_241Covid.textContent + +day1_241Orvi.textContent + +day1_241Orz.textContent + +day1_241Oher.textContent
            present_241.textContent = +weekStudentsBase241.length - +presentVrem241
        }
    }
    // Информация по 241 группе

    // Информация по 301 группе
    const day1_301Covid = document.querySelector('.day_1_301_covid')
    const day1_301Orvi = document.querySelector('.day_1_301_orvi')
    const day1_301Orz = document.querySelector('.day_1_301_orz')
    const day1_301Oher = document.querySelector('.day_1_301_other')
    const day1_301OherReasons = document.querySelector('.day_1_301_other_reasons')

    const day1_301 = document.querySelectorAll('.day_1_301')

    const present_301 = document.querySelector('.day_1_301_present')

    if (!day1_301Covid) {} else {
        for (var i = 0; i < day1_301.length; i++) {
            if (day1_301[i].textContent == 'COVID') {
                day1_301Covid.textContent = +day1_301Covid.textContent + 1
            }
            if (day1_301[i].textContent == 'ОРВИ') {
                day1_301Orvi.textContent = +day1_301Orvi.textContent + 1
            }
            if (day1_301[i].textContent == 'ОРЗ') {
                day1_301Orz.textContent = +day1_301Orz.textContent + 1
            }
            if (day1_301[i].textContent == 'Не простудное') {
                day1_301Oher.textContent = +day1_301Oher.textContent + 1
            }
            if (day1_301[i].textContent == 'Другое') {
                day1_301OherReasons.textContent = +day1_301OherReasons.textContent + 1
            }
        }
        if (!day1_301Covid) {} else {
            let presentVrem301
            presentVrem301 = +day1_301Covid.textContent + +day1_301Orvi.textContent + +day1_301Orz.textContent + +day1_301Oher.textContent
            present_301.textContent = +weekStudentsBase301.length - +presentVrem301
        }
    }
    // Информация по 301 группе

    // Информация по 302 группе
    const day1_302Covid = document.querySelector('.day_1_302_covid')
    const day1_302Orvi = document.querySelector('.day_1_302_orvi')
    const day1_302Orz = document.querySelector('.day_1_302_orz')
    const day1_302Oher = document.querySelector('.day_1_302_other')
    const day1_302OherReasons = document.querySelector('.day_1_302_other_reasons')

    const day1_302 = document.querySelectorAll('.day_1_302')

    const present_302 = document.querySelector('.day_1_302_present')

    if (!day1_302Covid) {} else {
        for (var i = 0; i < day1_302.length; i++) {
            if (day1_302[i].textContent == 'COVID') {
                day1_302Covid.textContent = +day1_302Covid.textContent + 1
            }
            if (day1_302[i].textContent == 'ОРВИ') {
                day1_302Orvi.textContent = +day1_302Orvi.textContent + 1
            }
            if (day1_302[i].textContent == 'ОРЗ') {
                day1_302Orz.textContent = +day1_302Orz.textContent + 1
            }
            if (day1_302[i].textContent == 'Не простудное') {
                day1_302Oher.textContent = +day1_302Oher.textContent + 1
            }
            if (day1_302[i].textContent == 'Другое') {
                day1_302OherReasons.textContent = +day1_302OherReasons.textContent + 1
            }
        }
        if (!day1_302Covid) {} else {
            let presentVrem302
            presentVrem302 = +day1_302Covid.textContent + +day1_302Orvi.textContent + +day1_302Orz.textContent + +day1_302Oher.textContent
            present_302.textContent = +weekStudentsBase302.length - +presentVrem302
        }
    }
    // Информация по 302 группе

    // Информация по 311 группе
    const day1_311Covid = document.querySelector('.day_1_311_covid')
    const day1_311Orvi = document.querySelector('.day_1_311_orvi')
    const day1_311Orz = document.querySelector('.day_1_311_orz')
    const day1_311Oher = document.querySelector('.day_1_311_other')
    const day1_311OherReasons = document.querySelector('.day_1_311_other_reasons')

    const day1_311 = document.querySelectorAll('.day_1_311')

    const present_311 = document.querySelector('.day_1_311_present')

    if (!day1_311Covid) {} else {
        for (var i = 0; i < day1_311.length; i++) {
            if (day1_311[i].textContent == 'COVID') {
                day1_311Covid.textContent = +day1_311Covid.textContent + 1
            }
            if (day1_311[i].textContent == 'ОРВИ') {
                day1_311Orvi.textContent = +day1_311Orvi.textContent + 1
            }
            if (day1_311[i].textContent == 'ОРЗ') {
                day1_311Orz.textContent = +day1_311Orz.textContent + 1
            }
            if (day1_311[i].textContent == 'Не простудное') {
                day1_311Oher.textContent = +day1_311Oher.textContent + 1
            }
            if (day1_311[i].textContent == 'Другое') {
                day1_311OherReasons.textContent = +day1_311OherReasons.textContent + 1
            }
        }
        if (!day1_311Covid) {} else {
            let presentVrem311
            presentVrem311 = +day1_311Covid.textContent + +day1_311Orvi.textContent + +day1_311Orz.textContent + +day1_311Oher.textContent
            present_311.textContent = +weekStudentsBase311.length - +presentVrem311
        }
    }
    // Информация по 311 группе

    // Информация по 321 группе
    const day1_321Covid = document.querySelector('.day_1_321_covid')
    const day1_321Orvi = document.querySelector('.day_1_321_orvi')
    const day1_321Orz = document.querySelector('.day_1_321_orz')
    const day1_321Oher = document.querySelector('.day_1_321_other')
    const day1_321OherReasons = document.querySelector('.day_1_321_other_reasons')

    const day1_321 = document.querySelectorAll('.day_1_321')

    const present_321 = document.querySelector('.day_1_321_present')

    if (!day1_321Covid) {} else {
        for (var i = 0; i < day1_321.length; i++) {
            if (day1_321[i].textContent == 'COVID') {
                day1_321Covid.textContent = +day1_321Covid.textContent + 1
            }
            if (day1_321[i].textContent == 'ОРВИ') {
                day1_321Orvi.textContent = +day1_321Orvi.textContent + 1
            }
            if (day1_321[i].textContent == 'ОРЗ') {
                day1_321Orz.textContent = +day1_321Orz.textContent + 1
            }
            if (day1_321[i].textContent == 'Не простудное') {
                day1_321Oher.textContent = +day1_321Oher.textContent + 1
            }
            if (day1_321[i].textContent == 'Другое') {
                day1_321OherReasons.textContent = +day1_321OherReasons.textContent + 1
            }
        }
        if (!day1_321Covid) {} else {
            let presentVrem321
            presentVrem321 = +day1_321Covid.textContent + +day1_321Orvi.textContent + +day1_321Orz.textContent + +day1_321Oher.textContent
            present_321.textContent = +weekStudentsBase321.length - +presentVrem321
        }
    }
    // Информация по 321 группе

    // Информация по 331 группе
    const day1_331Covid = document.querySelector('.day_1_331_covid')
    const day1_331Orvi = document.querySelector('.day_1_331_orvi')
    const day1_331Orz = document.querySelector('.day_1_331_orz')
    const day1_331Oher = document.querySelector('.day_1_331_other')
    const day1_331OherReasons = document.querySelector('.day_1_331_other_reasons')

    const day1_331 = document.querySelectorAll('.day_1_331')

    const present_331 = document.querySelector('.day_1_331_present')

    if (!day1_331Covid) {} else {
        for (var i = 0; i < day1_331.length; i++) {
            if (day1_331[i].textContent == 'COVID') {
                day1_331Covid.textContent = +day1_331Covid.textContent + 1
            }
            if (day1_331[i].textContent == 'ОРВИ') {
                day1_331Orvi.textContent = +day1_331Orvi.textContent + 1
            }
            if (day1_331[i].textContent == 'ОРЗ') {
                day1_331Orz.textContent = +day1_331Orz.textContent + 1
            }
            if (day1_331[i].textContent == 'Не простудное') {
                day1_331Oher.textContent = +day1_331Oher.textContent + 1
            }
            if (day1_331[i].textContent == 'Другое') {
                day1_331OherReasons.textContent = +day1_331OherReasons.textContent + 1
            }
        }
        if (!day1_331Covid) {} else {
            let presentVrem331
            presentVrem331 = +day1_331Covid.textContent + +day1_331Orvi.textContent + +day1_331Orz.textContent + +day1_331Oher.textContent
            present_331.textContent = +weekStudentsBase331.length - +presentVrem331
        }
    }
    // Информация по 331 группе

    // Информация по 341 группе
    const day1_341Covid = document.querySelector('.day_1_341_covid')
    const day1_341Orvi = document.querySelector('.day_1_341_orvi')
    const day1_341Orz = document.querySelector('.day_1_341_orz')
    const day1_341Oher = document.querySelector('.day_1_341_other')
    const day1_341OherReasons = document.querySelector('.day_1_341_other_reasons')

    const day1_341 = document.querySelectorAll('.day_1_341')

    const present_341 = document.querySelector('.day_1_341_present')

    if (!day1_341Covid) {} else {
        for (var i = 0; i < day1_341.length; i++) {
            if (day1_341[i].textContent == 'COVID') {
                day1_341Covid.textContent = +day1_341Covid.textContent + 1
            }
            if (day1_341[i].textContent == 'ОРВИ') {
                day1_341Orvi.textContent = +day1_341Orvi.textContent + 1
            }
            if (day1_341[i].textContent == 'ОРЗ') {
                day1_341Orz.textContent = +day1_341Orz.textContent + 1
            }
            if (day1_341[i].textContent == 'Не простудное') {
                day1_341Oher.textContent = +day1_341Oher.textContent + 1
            }
            if (day1_341[i].textContent == 'Другое') {
                day1_341OherReasons.textContent = +day1_341OherReasons.textContent + 1
            }
        }
        if (!day1_341Covid) {} else {
            let presentVrem341
            presentVrem341 = +day1_341Covid.textContent + +day1_341Orvi.textContent + +day1_341Orz.textContent + +day1_341Oher.textContent
            present_341.textContent = +weekStudentsBase341.length - +presentVrem341
        }
    }
    // Информация по 341 группе

    // Информация по 401 группе
    const day1_401Covid = document.querySelector('.day_1_401_covid')
    const day1_401Orvi = document.querySelector('.day_1_401_orvi')
    const day1_401Orz = document.querySelector('.day_1_401_orz')
    const day1_401Oher = document.querySelector('.day_1_401_other')
    const day1_401OherReasons = document.querySelector('.day_1_401_other_reasons')

    const day1_401 = document.querySelectorAll('.day_1_401')

    const present_401 = document.querySelector('.day_1_401_present')

    if (!day1_401Covid) {} else {
        for (var i = 0; i < day1_401.length; i++) {
            if (day1_401[i].textContent == 'COVID') {
                day1_401Covid.textContent = +day1_401Covid.textContent + 1
            }
            if (day1_401[i].textContent == 'ОРВИ') {
                day1_401Orvi.textContent = +day1_401Orvi.textContent + 1
            }
            if (day1_401[i].textContent == 'ОРЗ') {
                day1_401Orz.textContent = +day1_401Orz.textContent + 1
            }
            if (day1_401[i].textContent == 'Не простудное') {
                day1_401Oher.textContent = +day1_401Oher.textContent + 1
            }
            if (day1_401[i].textContent == 'Другое') {
                day1_401OherReasons.textContent = +day1_401OherReasons.textContent + 1
            }
        }
        if (!day1_401Covid) {} else {
            let presentVrem401
            presentVrem401 = +day1_401Covid.textContent + +day1_401Orvi.textContent + +day1_401Orz.textContent + +day1_401Oher.textContent
            present_401.textContent = +weekStudentsBase401.length - +presentVrem401
        }
    }
    // Информация по 401 группе

    // Информация по 402 группе
    const day1_402Covid = document.querySelector('.day_1_402_covid')
    const day1_402Orvi = document.querySelector('.day_1_402_orvi')
    const day1_402Orz = document.querySelector('.day_1_402_orz')
    const day1_402Oher = document.querySelector('.day_1_402_other')
    const day1_402OherReasons = document.querySelector('.day_1_402_other_reasons')

    const day1_402 = document.querySelectorAll('.day_1_402')

    const present_402 = document.querySelector('.day_1_402_present')

    if (!day1_402Covid) {} else {
        for (var i = 0; i < day1_402.length; i++) {
            if (day1_402[i].textContent == 'COVID') {
                day1_402Covid.textContent = +day1_402Covid.textContent + 1
            }
            if (day1_402[i].textContent == 'ОРВИ') {
                day1_402Orvi.textContent = +day1_402Orvi.textContent + 1
            }
            if (day1_402[i].textContent == 'ОРЗ') {
                day1_402Orz.textContent = +day1_402Orz.textContent + 1
            }
            if (day1_402[i].textContent == 'Не простудное') {
                day1_402Oher.textContent = +day1_402Oher.textContent + 1
            }
            if (day1_402[i].textContent == 'Другое') {
                day1_402OherReasons.textContent = +day1_402OherReasons.textContent + 1
            }
        }
        if (!day1_402Covid) {} else {
            let presentVrem402
            presentVrem402 = +day1_402Covid.textContent + +day1_402Orvi.textContent + +day1_402Orz.textContent + +day1_402Oher.textContent
            present_402.textContent = +weekStudentsBase402.length - +presentVrem402
        }
    }
    // Информация по 402 группе

    // Информация по 411 группе
    const day1_411Covid = document.querySelector('.day_1_411_covid')
    const day1_411Orvi = document.querySelector('.day_1_411_orvi')
    const day1_411Orz = document.querySelector('.day_1_411_orz')
    const day1_411Oher = document.querySelector('.day_1_411_other')
    const day1_411OherReasons = document.querySelector('.day_1_411_other_reasons')

    const day1_411 = document.querySelectorAll('.day_1_411')

    const present_411 = document.querySelector('.day_1_411_present')

    if (!day1_411Covid) {} else {
        for (var i = 0; i < day1_411.length; i++) {
            if (day1_411[i].textContent == 'COVID') {
                day1_411Covid.textContent = +day1_411Covid.textContent + 1
            }
            if (day1_411[i].textContent == 'ОРВИ') {
                day1_411Orvi.textContent = +day1_411Orvi.textContent + 1
            }
            if (day1_411[i].textContent == 'ОРЗ') {
                day1_411Orz.textContent = +day1_411Orz.textContent + 1
            }
            if (day1_411[i].textContent == 'Не простудное') {
                day1_411Oher.textContent = +day1_411Oher.textContent + 1
            }
            if (day1_411[i].textContent == 'Другое') {
                day1_411OherReasons.textContent = +day1_411OherReasons.textContent + 1
            }
        }
        if (!day1_411Covid) {} else {
            let presentVrem411
            presentVrem411 = +day1_411Covid.textContent + +day1_411Orvi.textContent + +day1_411Orz.textContent + +day1_411Oher.textContent
            present_411.textContent = +weekStudentsBase411.length - +presentVrem411
        }
    }
    // Информация по 411 группе

    // Информация по 421 группе
    const day1_421Covid = document.querySelector('.day_1_421_covid')
    const day1_421Orvi = document.querySelector('.day_1_421_orvi')
    const day1_421Orz = document.querySelector('.day_1_421_orz')
    const day1_421Oher = document.querySelector('.day_1_421_other')
    const day1_421OherReasons = document.querySelector('.day_1_421_other_reasons')

    const day1_421 = document.querySelectorAll('.day_1_421')

    const present_421 = document.querySelector('.day_1_421_present')

    if (!day1_421Covid) {} else {
        for (var i = 0; i < day1_421.length; i++) {
            if (day1_421[i].textContent == 'COVID') {
                day1_421Covid.textContent = +day1_421Covid.textContent + 1
            }
            if (day1_421[i].textContent == 'ОРВИ') {
                day1_421Orvi.textContent = +day1_421Orvi.textContent + 1
            }
            if (day1_421[i].textContent == 'ОРЗ') {
                day1_421Orz.textContent = +day1_421Orz.textContent + 1
            }
            if (day1_421[i].textContent == 'Не простудное') {
                day1_421Oher.textContent = +day1_421Oher.textContent + 1
            }
            if (day1_421[i].textContent == 'Другое') {
                day1_421OherReasons.textContent = +day1_421OherReasons.textContent + 1
            }
        }
        if (!day1_421Covid) {} else {
            let presentVrem421
            presentVrem421 = +day1_421Covid.textContent + +day1_421Orvi.textContent + +day1_421Orz.textContent + +day1_421Oher.textContent
            present_421.textContent = +weekStudentsBase421.length - +presentVrem421
        }
    }
    // Информация по 421 группе

    // Информация по 431 группе
    const day1_431Covid = document.querySelector('.day_1_431_covid')
    const day1_431Orvi = document.querySelector('.day_1_431_orvi')
    const day1_431Orz = document.querySelector('.day_1_431_orz')
    const day1_431Oher = document.querySelector('.day_1_431_other')
    const day1_431OherReasons = document.querySelector('.day_1_431_other_reasons')

    const day1_431 = document.querySelectorAll('.day_1_431')

    const present_431 = document.querySelector('.day_1_431_present')

    if (!day1_431Covid) {} else {
        for (var i = 0; i < day1_431.length; i++) {
            if (day1_431[i].textContent == 'COVID') {
                day1_431Covid.textContent = +day1_431Covid.textContent + 1
            }
            if (day1_431[i].textContent == 'ОРВИ') {
                day1_431Orvi.textContent = +day1_431Orvi.textContent + 1
            }
            if (day1_431[i].textContent == 'ОРЗ') {
                day1_431Orz.textContent = +day1_431Orz.textContent + 1
            }
            if (day1_431[i].textContent == 'Не простудное') {
                day1_431Oher.textContent = +day1_431Oher.textContent + 1
            }
            if (day1_431[i].textContent == 'Другое') {
                day1_431OherReasons.textContent = +day1_431OherReasons.textContent + 1
            }
        }
        if (!day1_431Covid) {} else {
            let presentVrem431
            presentVrem431 = +day1_431Covid.textContent + +day1_431Orvi.textContent + +day1_431Orz.textContent + +day1_431Oher.textContent
            present_431.textContent = +weekStudentsBase431.length - +presentVrem431
        }
    }
    // Информация по 431 группе

    // Информация по 441 группе
    const day1_441Covid = document.querySelector('.day_1_441_covid')
    const day1_441Orvi = document.querySelector('.day_1_441_orvi')
    const day1_441Orz = document.querySelector('.day_1_441_orz')
    const day1_441Oher = document.querySelector('.day_1_441_other')
    const day1_441OherReasons = document.querySelector('.day_1_441_other_reasons')

    const day1_441 = document.querySelectorAll('.day_1_441')

    const present_441 = document.querySelector('.day_1_441_present')

    if (!day1_441Covid) {} else {
        for (var i = 0; i < day1_441.length; i++) {
            if (day1_441[i].textContent == 'COVID') {
                day1_441Covid.textContent = +day1_441Covid.textContent + 1
            }
            if (day1_441[i].textContent == 'ОРВИ') {
                day1_441Orvi.textContent = +day1_441Orvi.textContent + 1
            }
            if (day1_441[i].textContent == 'ОРЗ') {
                day1_441Orz.textContent = +day1_441Orz.textContent + 1
            }
            if (day1_441[i].textContent == 'Не простудное') {
                day1_441Oher.textContent = +day1_441Oher.textContent + 1
            }
            if (day1_441[i].textContent == 'Другое') {
                day1_441OherReasons.textContent = +day1_441OherReasons.textContent + 1
            }
        }
        if (!day1_441Covid) {} else {
            let presentVrem441
            presentVrem441 = +day1_441Covid.textContent + +day1_441Orvi.textContent + +day1_441Orz.textContent + +day1_441Oher.textContent
            present_441.textContent = +weekStudentsBase441.length - +presentVrem441
        }
    }
    // Информация по 441 группе


    // Сводка за первый день
    const day_1_allStud = document.querySelector('.day_1_all_students')
    const day_1_allPresent = document.querySelector('.day_1_all_present')
    const day_1_allCovid = document.querySelector('.day_1_all_covid')
    const day_1_allOrv = document.querySelector('.day_1_all_orv')
    const day_1_allOrz = document.querySelector('.day_1_all_orz')
    const day_1_allOther = document.querySelector('.day_1_all_other')
    const day_1_allOtherReasons = document.querySelector('.day_1_all_other_reasons')

    const studentsDay1 = document.querySelectorAll('.students_day_1')
    const covidDay1 = document.querySelectorAll('.day_1_covid')
    const orvDay1 = document.querySelectorAll('.day_1_orvi')
    const orzDay1 = document.querySelectorAll('.day_1_orz')
    const otherDay1 = document.querySelectorAll('.day_1_other')
    const otherReasonsDay1 = document.querySelectorAll('.day_1_other_reasons')


    if (!day_1_allStud) {} else {
        var allStudDay_1 = 0;
        for (var i = 0; i < studentsDay1.length; i++) {
            allStudDay_1 = +allStudDay_1 + +parseInt(studentsDay1[i].textContent);
        }
        day_1_allStud.textContent = allStudDay_1
    }

    if (!day_1_allCovid) {} else {
        var day1Covid = 0;
        for (var i = 0; i < covidDay1.length; i++) {
            day1Covid = +day1Covid + +parseInt(covidDay1[i].textContent);
        }
        day_1_allCovid.textContent = day1Covid
    }

    if (!day_1_allOrv) {} else {
        var day1Orv = 0;
        for (var i = 0; i < orvDay1.length; i++) {
            day1Orv = +day1Orv + +parseInt(orvDay1[i].textContent);
        }
        day_1_allOrv.textContent = day1Orv
    }

    if (!day_1_allOrz) {} else {
        var day1Orz = 0;
        for (var i = 0; i < orzDay1.length; i++) {
            day1Orz = +day1Orz + +parseInt(orzDay1[i].textContent);
        }
        day_1_allOrz.textContent = day1Orz
    }

    if (!day_1_allOther) {} else {
        var day1Other = 0;
        for (var i = 0; i < otherDay1.length; i++) {
            day1Other = +day1Other + +parseInt(otherDay1[i].textContent);
        }
        day_1_allOther.textContent = day1Other
    }

    if (!day_1_allOtherReasons) {} else {
        var day1OtherReasons = 0;
        for (var i = 0; i < otherReasonsDay1.length; i++) {
            day1OtherReasons = +day1OtherReasons + +parseInt(otherReasonsDay1[i].textContent);
        }
        day_1_allOtherReasons.textContent = day1OtherReasons
    }

    if (!day_1_allPresent) {} else {
        day_1_allPresent.textContent = +day_1_allStud.textContent - (+day_1_allOtherReasons.textContent + +day_1_allOther.textContent + +day_1_allOrz.textContent + +day_1_allOrv.textContent + +day_1_allCovid.textContent)
    }
    // Сводка за первый день







    // ВТОРОЙ ДЕНЬ____________________
    // Информация по 101 группе
    const day2_101Covid = document.querySelector('.day_2_101_covid')
    const day2_101Orvi = document.querySelector('.day_2_101_orvi')
    const day2_101Orz = document.querySelector('.day_2_101_orz')
    const day2_101Oher = document.querySelector('.day_2_101_other')
    const day2_101OherReasons = document.querySelector('.day_2_101_other_reasons')

    const day2_101 = document.querySelectorAll('.day_2_101')

    const present_101_day_2 = document.querySelector('.day_2_101_present')

    if (!day2_101Covid) {} else {
        for (var i = 0; i < day2_101.length; i++) {
            if (day2_101[i].textContent == 'COVID') {
                day2_101Covid.textContent = +day2_101Covid.textContent + 1
            }
            if (day2_101[i].textContent == 'ОРВИ') {
                day2_101Orvi.textContent = +day2_101Orvi.textContent + 1
            }
            if (day2_101[i].textContent == 'ОРЗ') {
                day2_101Orz.textContent = +day2_101Orz.textContent + 1
            }
            if (day2_101[i].textContent == 'Не простудное') {
                day2_101Oher.textContent = +day2_101Oher.textContent + 1
            }
            if (day2_101[i].textContent == 'Другое') {
                day2_101OherReasons.textContent = +day2_101OherReasons.textContent + 1
            }
        }
        if (!day2_101Covid) {} else {
            let presentVrem101
            presentVrem101 = +day2_101Covid.textContent + +day2_101Orvi.textContent + +day2_101Orz.textContent + +day2_101Oher.textContent
            present_101_day_2.textContent = +weekStudentsBase101.length - +presentVrem101
        }
    }
    // Информация по 101 группе

    // Информация по 111 группе
    const day2_111Covid = document.querySelector('.day_2_111_covid')
    const day2_111Orvi = document.querySelector('.day_2_111_orvi')
    const day2_111Orz = document.querySelector('.day_2_111_orz')
    const day2_111Oher = document.querySelector('.day_2_111_other')
    const day2_111OherReasons = document.querySelector('.day_2_111_other_reasons')

    const day2_111 = document.querySelectorAll('.day_2_111')

    const present_111_day_2 = document.querySelector('.day_2_111_present')

    if (!day2_111Covid) {} else {
        for (var i = 0; i < day2_111.length; i++) {
            if (day2_111[i].textContent == 'COVID') {
                day2_111Covid.textContent = +day2_111Covid.textContent + 1
            }
            if (day2_111[i].textContent == 'ОРВИ') {
                day2_111Orvi.textContent = +day2_111Orvi.textContent + 1
            }
            if (day2_111[i].textContent == 'ОРЗ') {
                day2_111Orz.textContent = +day2_111Orz.textContent + 1
            }
            if (day2_111[i].textContent == 'Не простудное') {
                day2_111Oher.textContent = +day2_111Oher.textContent + 1
            }
            if (day2_111[i].textContent == 'Другое') {
                day2_111OherReasons.textContent = +day2_111OherReasons.textContent + 1
            }
        }
        if (!day2_111Covid) {} else {
            let presentVrem111
            presentVrem111 = +day2_111Covid.textContent + +day2_111Orvi.textContent + +day2_111Orz.textContent + +day2_111Oher.textContent
            present_111_day_2.textContent = +weekStudentsBase111.length - +presentVrem111
        }
    }
    // Информация по 111 группе

    // Информация по 121 группе
    const day2_121Covid = document.querySelector('.day_2_121_covid')
    const day2_121Orvi = document.querySelector('.day_2_121_orvi')
    const day2_121Orz = document.querySelector('.day_2_121_orz')
    const day2_121Oher = document.querySelector('.day_2_121_other')
    const day2_121OherReasons = document.querySelector('.day_2_121_other_reasons')

    const day2_121 = document.querySelectorAll('.day_2_121')

    const present_121_day_2 = document.querySelector('.day_2_121_present')

    if (!day2_121Covid) {} else {
        for (var i = 0; i < day2_121.length; i++) {
            if (day2_121[i].textContent == 'COVID') {
                day2_121Covid.textContent = +day2_121Covid.textContent + 1
            }
            if (day2_121[i].textContent == 'ОРВИ') {
                day2_121Orvi.textContent = +day2_121Orvi.textContent + 1
            }
            if (day2_121[i].textContent == 'ОРЗ') {
                day2_121Orz.textContent = +day2_121Orz.textContent + 1
            }
            if (day2_121[i].textContent == 'Не простудное') {
                day2_121Oher.textContent = +day2_121Oher.textContent + 1
            }
            if (day2_121[i].textContent == 'Другое') {
                day2_121OherReasons.textContent = +day2_121OherReasons.textContent + 1
            }
        }
        if (!day2_121Covid) {} else {
            let presentVrem121
            presentVrem121 = +day2_121Covid.textContent + +day2_121Orvi.textContent + +day2_121Orz.textContent + +day2_121Oher.textContent
            present_121_day_2.textContent = +weekStudentsBase121.length - +presentVrem121
        }
    }
    // Информация по 121 группе

    // Информация по 201 группе
    const day2_201Covid = document.querySelector('.day_2_201_covid')
    const day2_201Orvi = document.querySelector('.day_2_201_orvi')
    const day2_201Orz = document.querySelector('.day_2_201_orz')
    const day2_201Oher = document.querySelector('.day_2_201_other')
    const day2_201OherReasons = document.querySelector('.day_2_201_other_reasons')

    const day2_201 = document.querySelectorAll('.day_2_201')

    const present_201_day_2 = document.querySelector('.day_2_201_present')

    if (!day2_201Covid) {} else {
        for (var i = 0; i < day2_201.length; i++) {
            if (day2_201[i].textContent == 'COVID') {
                day2_201Covid.textContent = +day2_201Covid.textContent + 1
            }
            if (day2_201[i].textContent == 'ОРВИ') {
                day2_201Orvi.textContent = +day2_201Orvi.textContent + 1
            }
            if (day2_201[i].textContent == 'ОРЗ') {
                day2_201Orz.textContent = +day2_201Orz.textContent + 1
            }
            if (day2_201[i].textContent == 'Не простудное') {
                day2_201Oher.textContent = +day2_201Oher.textContent + 1
            }
            if (day2_201[i].textContent == 'Другое') {
                day2_201OherReasons.textContent = +day2_201OherReasons.textContent + 1
            }
        }
        if (!day2_201Covid) {} else {
            let presentVrem201
            presentVrem201 = +day2_201Covid.textContent + +day2_201Orvi.textContent + +day2_201Orz.textContent + +day2_201Oher.textContent
            present_201_day_2.textContent = +weekStudentsBase201.length - +presentVrem201
        }
    }
    // Информация по 201 группе

    // Информация по 202 группе
    const day2_202Covid = document.querySelector('.day_2_202_covid')
    const day2_202Orvi = document.querySelector('.day_2_202_orvi')
    const day2_202Orz = document.querySelector('.day_2_202_orz')
    const day2_202Oher = document.querySelector('.day_2_202_other')
    const day2_202OherReasons = document.querySelector('.day_2_202_other_reasons')

    const day2_202 = document.querySelectorAll('.day_2_202')

    const present_202_day_2 = document.querySelector('.day_2_202_present')

    if (!day2_202Covid) {} else {
        for (var i = 0; i < day2_202.length; i++) {
            if (day2_202[i].textContent == 'COVID') {
                day2_202Covid.textContent = +day2_202Covid.textContent + 1
            }
            if (day2_202[i].textContent == 'ОРВИ') {
                day2_202Orvi.textContent = +day2_202Orvi.textContent + 1
            }
            if (day2_202[i].textContent == 'ОРЗ') {
                day2_202Orz.textContent = +day2_202Orz.textContent + 1
            }
            if (day2_202[i].textContent == 'Не простудное') {
                day2_202Oher.textContent = +day2_202Oher.textContent + 1
            }
            if (day2_202[i].textContent == 'Другое') {
                day2_202OherReasons.textContent = +day2_202OherReasons.textContent + 1
            }
        }
        if (!day2_202Covid) {} else {
            let presentVrem202
            presentVrem202 = +day2_202Covid.textContent + +day2_202Orvi.textContent + +day2_202Orz.textContent + +day2_202Oher.textContent
            present_202_day_2.textContent = +weekStudentsBase202.length - +presentVrem202
        }
    }
    // Информация по 202 группе

    // Информация по 211 группе
    const day2_211Covid = document.querySelector('.day_2_211_covid')
    const day2_211Orvi = document.querySelector('.day_2_211_orvi')
    const day2_211Orz = document.querySelector('.day_2_211_orz')
    const day2_211Oher = document.querySelector('.day_2_211_other')
    const day2_211OherReasons = document.querySelector('.day_2_211_other_reasons')

    const day2_211 = document.querySelectorAll('.day_2_211')

    const present_211_day_2 = document.querySelector('.day_2_211_present')

    if (!day2_211Covid) {} else {
        for (var i = 0; i < day2_211.length; i++) {
            if (day2_211[i].textContent == 'COVID') {
                day2_211Covid.textContent = +day2_211Covid.textContent + 1
            }
            if (day2_211[i].textContent == 'ОРВИ') {
                day2_211Orvi.textContent = +day2_211Orvi.textContent + 1
            }
            if (day2_211[i].textContent == 'ОРЗ') {
                day2_211Orz.textContent = +day2_211Orz.textContent + 1
            }
            if (day2_211[i].textContent == 'Не простудное') {
                day2_211Oher.textContent = +day2_211Oher.textContent + 1
            }
            if (day2_211[i].textContent == 'Другое') {
                day2_211OherReasons.textContent = +day2_211OherReasons.textContent + 1
            }
        }
        if (!day2_211Covid) {} else {
            let presentVrem211
            presentVrem211 = +day2_211Covid.textContent + +day2_211Orvi.textContent + +day2_211Orz.textContent + +day2_211Oher.textContent
            present_211_day_2.textContent = +weekStudentsBase211.length - +presentVrem211
        }
    }
    // Информация по 211 группе

    // Информация по 221 группе
    const day2_221Covid = document.querySelector('.day_2_221_covid')
    const day2_221Orvi = document.querySelector('.day_2_221_orvi')
    const day2_221Orz = document.querySelector('.day_2_221_orz')
    const day2_221Oher = document.querySelector('.day_2_221_other')
    const day2_221OherReasons = document.querySelector('.day_2_221_other_reasons')

    const day2_221 = document.querySelectorAll('.day_2_221')

    const present_221_day_2 = document.querySelector('.day_2_221_present')

    if (!day2_221Covid) {} else {
        for (var i = 0; i < day2_221.length; i++) {
            if (day2_221[i].textContent == 'COVID') {
                day2_221Covid.textContent = +day2_221Covid.textContent + 1
            }
            if (day2_221[i].textContent == 'ОРВИ') {
                day2_221Orvi.textContent = +day2_221Orvi.textContent + 1
            }
            if (day2_221[i].textContent == 'ОРЗ') {
                day2_221Orz.textContent = +day2_221Orz.textContent + 1
            }
            if (day2_221[i].textContent == 'Не простудное') {
                day2_221Oher.textContent = +day2_221Oher.textContent + 1
            }
            if (day2_221[i].textContent == 'Другое') {
                day2_221OherReasons.textContent = +day2_221OherReasons.textContent + 1
            }
        }
        if (!day2_221Covid) {} else {
            let presentVrem221
            presentVrem221 = +day2_221Covid.textContent + +day2_221Orvi.textContent + +day2_221Orz.textContent + +day2_221Oher.textContent
            present_221_day_2.textContent = +weekStudentsBase221.length - +presentVrem221
        }
    }
    // Информация по 221 группе

    // Информация по 231 группе
    const day2_231Covid = document.querySelector('.day_2_231_covid')
    const day2_231Orvi = document.querySelector('.day_2_231_orvi')
    const day2_231Orz = document.querySelector('.day_2_231_orz')
    const day2_231Oher = document.querySelector('.day_2_231_other')
    const day2_231OherReasons = document.querySelector('.day_2_231_other_reasons')

    const day2_231 = document.querySelectorAll('.day_2_231')

    const present_231_day_2 = document.querySelector('.day_2_231_present')

    if (!day2_231Covid) {} else {
        for (var i = 0; i < day2_231.length; i++) {
            if (day2_231[i].textContent == 'COVID') {
                day2_231Covid.textContent = +day2_231Covid.textContent + 1
            }
            if (day2_231[i].textContent == 'ОРВИ') {
                day2_231Orvi.textContent = +day2_231Orvi.textContent + 1
            }
            if (day2_231[i].textContent == 'ОРЗ') {
                day2_231Orz.textContent = +day2_231Orz.textContent + 1
            }
            if (day2_231[i].textContent == 'Не простудное') {
                day2_231Oher.textContent = +day2_231Oher.textContent + 1
            }
            if (day2_231[i].textContent == 'Другое') {
                day2_231OherReasons.textContent = +day2_231OherReasons.textContent + 1
            }
        }
        if (!day2_231Covid) {} else {
            let presentVrem231
            presentVrem231 = +day2_231Covid.textContent + +day2_231Orvi.textContent + +day2_231Orz.textContent + +day2_231Oher.textContent
            present_231_day_2.textContent = +weekStudentsBase231.length - +presentVrem231
        }
    }
    // Информация по 231 группе

    // Информация по 241 группе
    const day2_241Covid = document.querySelector('.day_2_241_covid')
    const day2_241Orvi = document.querySelector('.day_2_241_orvi')
    const day2_241Orz = document.querySelector('.day_2_241_orz')
    const day2_241Oher = document.querySelector('.day_2_241_other')
    const day2_241OherReasons = document.querySelector('.day_2_241_other_reasons')

    const day2_241 = document.querySelectorAll('.day_2_241')

    const present_241_day_2 = document.querySelector('.day_2_241_present')

    if (!day2_241Covid) {} else {
        for (var i = 0; i < day2_241.length; i++) {
            if (day2_241[i].textContent == 'COVID') {
                day2_241Covid.textContent = +day2_241Covid.textContent + 1
            }
            if (day2_241[i].textContent == 'ОРВИ') {
                day2_241Orvi.textContent = +day2_241Orvi.textContent + 1
            }
            if (day2_241[i].textContent == 'ОРЗ') {
                day2_241Orz.textContent = +day2_241Orz.textContent + 1
            }
            if (day2_241[i].textContent == 'Не простудное') {
                day2_241Oher.textContent = +day2_241Oher.textContent + 1
            }
            if (day2_241[i].textContent == 'Другое') {
                day2_241OherReasons.textContent = +day2_241OherReasons.textContent + 1
            }
        }
        if (!day2_241Covid) {} else {
            let presentVrem241
            presentVrem241 = +day2_241Covid.textContent + +day2_241Orvi.textContent + +day2_241Orz.textContent + +day2_241Oher.textContent
            present_241_day_2.textContent = +weekStudentsBase241.length - +presentVrem241
        }
    }
    // Информация по 241 группе

    // Информация по 301 группе
    const day2_301Covid = document.querySelector('.day_2_301_covid')
    const day2_301Orvi = document.querySelector('.day_2_301_orvi')
    const day2_301Orz = document.querySelector('.day_2_301_orz')
    const day2_301Oher = document.querySelector('.day_2_301_other')
    const day2_301OherReasons = document.querySelector('.day_2_301_other_reasons')

    const day2_301 = document.querySelectorAll('.day_2_301')

    const present_301_day_2 = document.querySelector('.day_2_301_present')

    if (!day2_301Covid) {} else {
        for (var i = 0; i < day2_301.length; i++) {
            if (day2_301[i].textContent == 'COVID') {
                day2_301Covid.textContent = +day2_301Covid.textContent + 1
            }
            if (day2_301[i].textContent == 'ОРВИ') {
                day2_301Orvi.textContent = +day2_301Orvi.textContent + 1
            }
            if (day2_301[i].textContent == 'ОРЗ') {
                day2_301Orz.textContent = +day2_301Orz.textContent + 1
            }
            if (day2_301[i].textContent == 'Не простудное') {
                day2_301Oher.textContent = +day2_301Oher.textContent + 1
            }
            if (day2_301[i].textContent == 'Другое') {
                day2_301OherReasons.textContent = +day2_301OherReasons.textContent + 1
            }
        }
        if (!day2_301Covid) {} else {
            let presentVrem301
            presentVrem301 = +day2_301Covid.textContent + +day2_301Orvi.textContent + +day2_301Orz.textContent + +day2_301Oher.textContent
            present_301_day_2.textContent = +weekStudentsBase301.length - +presentVrem301
        }
    }
    // Информация по 301 группе

    // Информация по 302 группе
    const day2_302Covid = document.querySelector('.day_2_302_covid')
    const day2_302Orvi = document.querySelector('.day_2_302_orvi')
    const day2_302Orz = document.querySelector('.day_2_302_orz')
    const day2_302Oher = document.querySelector('.day_2_302_other')
    const day2_302OherReasons = document.querySelector('.day_2_302_other_reasons')

    const day2_302 = document.querySelectorAll('.day_2_302')

    const present_302_day_2 = document.querySelector('.day_2_302_present')

    if (!day2_302Covid) {} else {
        for (var i = 0; i < day2_302.length; i++) {
            if (day2_302[i].textContent == 'COVID') {
                day2_302Covid.textContent = +day2_302Covid.textContent + 1
            }
            if (day2_302[i].textContent == 'ОРВИ') {
                day2_302Orvi.textContent = +day2_302Orvi.textContent + 1
            }
            if (day2_302[i].textContent == 'ОРЗ') {
                day2_302Orz.textContent = +day2_302Orz.textContent + 1
            }
            if (day2_302[i].textContent == 'Не простудное') {
                day2_302Oher.textContent = +day2_302Oher.textContent + 1
            }
            if (day2_302[i].textContent == 'Другое') {
                day2_302OherReasons.textContent = +day2_302OherReasons.textContent + 1
            }
        }
        if (!day2_302Covid) {} else {
            let presentVrem302
            presentVrem302 = +day2_302Covid.textContent + +day2_302Orvi.textContent + +day2_302Orz.textContent + +day2_302Oher.textContent
            present_302_day_2.textContent = +weekStudentsBase302.length - +presentVrem302
        }
    }
    // Информация по 302 группе

    // Информация по 311 группе
    const day2_311Covid = document.querySelector('.day_2_311_covid')
    const day2_311Orvi = document.querySelector('.day_2_311_orvi')
    const day2_311Orz = document.querySelector('.day_2_311_orz')
    const day2_311Oher = document.querySelector('.day_2_311_other')
    const day2_311OherReasons = document.querySelector('.day_2_311_other_reasons')

    const day2_311 = document.querySelectorAll('.day_2_311')

    const present_311_day_2 = document.querySelector('.day_2_311_present')

    if (!day2_311Covid) {} else {
        for (var i = 0; i < day2_311.length; i++) {
            if (day2_311[i].textContent == 'COVID') {
                day2_311Covid.textContent = +day2_311Covid.textContent + 1
            }
            if (day2_311[i].textContent == 'ОРВИ') {
                day2_311Orvi.textContent = +day2_311Orvi.textContent + 1
            }
            if (day2_311[i].textContent == 'ОРЗ') {
                day2_311Orz.textContent = +day2_311Orz.textContent + 1
            }
            if (day2_311[i].textContent == 'Не простудное') {
                day2_311Oher.textContent = +day2_311Oher.textContent + 1
            }
            if (day2_311[i].textContent == 'Другое') {
                day2_311OherReasons.textContent = +day2_311OherReasons.textContent + 1
            }
        }
        if (!day2_311Covid) {} else {
            let presentVrem311
            presentVrem311 = +day2_311Covid.textContent + +day2_311Orvi.textContent + +day2_311Orz.textContent + +day2_311Oher.textContent
            present_311_day_2.textContent = +weekStudentsBase311.length - +presentVrem311
        }
    }
    // Информация по 311 группе

    // Информация по 321 группе
    const day2_321Covid = document.querySelector('.day_2_321_covid')
    const day2_321Orvi = document.querySelector('.day_2_321_orvi')
    const day2_321Orz = document.querySelector('.day_2_321_orz')
    const day2_321Oher = document.querySelector('.day_2_321_other')
    const day2_321OherReasons = document.querySelector('.day_2_321_other_reasons')

    const day2_321 = document.querySelectorAll('.day_2_321')

    const present_321_day_2 = document.querySelector('.day_2_321_present')

    if (!day2_321Covid) {} else {
        for (var i = 0; i < day2_321.length; i++) {
            if (day2_321[i].textContent == 'COVID') {
                day2_321Covid.textContent = +day2_321Covid.textContent + 1
            }
            if (day2_321[i].textContent == 'ОРВИ') {
                day2_321Orvi.textContent = +day2_321Orvi.textContent + 1
            }
            if (day2_321[i].textContent == 'ОРЗ') {
                day2_321Orz.textContent = +day2_321Orz.textContent + 1
            }
            if (day2_321[i].textContent == 'Не простудное') {
                day2_321Oher.textContent = +day2_321Oher.textContent + 1
            }
            if (day2_321[i].textContent == 'Другое') {
                day2_321OherReasons.textContent = +day2_321OherReasons.textContent + 1
            }
        }
        if (!day2_321Covid) {} else {
            let presentVrem321
            presentVrem321 = +day2_321Covid.textContent + +day2_321Orvi.textContent + +day2_321Orz.textContent + +day2_321Oher.textContent
            present_321_day_2.textContent = +weekStudentsBase321.length - +presentVrem321
        }
    }
    // Информация по 321 группе

    // Информация по 331 группе
    const day2_331Covid = document.querySelector('.day_2_331_covid')
    const day2_331Orvi = document.querySelector('.day_2_331_orvi')
    const day2_331Orz = document.querySelector('.day_2_331_orz')
    const day2_331Oher = document.querySelector('.day_2_331_other')
    const day2_331OherReasons = document.querySelector('.day_2_331_other_reasons')

    const day2_331 = document.querySelectorAll('.day_2_331')

    const present_331_day_2 = document.querySelector('.day_2_331_present')

    if (!day2_331Covid) {} else {
        for (var i = 0; i < day2_331.length; i++) {
            if (day2_331[i].textContent == 'COVID') {
                day2_331Covid.textContent = +day2_331Covid.textContent + 1
            }
            if (day2_331[i].textContent == 'ОРВИ') {
                day2_331Orvi.textContent = +day2_331Orvi.textContent + 1
            }
            if (day2_331[i].textContent == 'ОРЗ') {
                day2_331Orz.textContent = +day2_331Orz.textContent + 1
            }
            if (day2_331[i].textContent == 'Не простудное') {
                day2_331Oher.textContent = +day2_331Oher.textContent + 1
            }
            if (day2_331[i].textContent == 'Другое') {
                day2_331OherReasons.textContent = +day2_331OherReasons.textContent + 1
            }
        }
        if (!day2_331Covid) {} else {
            let presentVrem331
            presentVrem331 = +day2_331Covid.textContent + +day2_331Orvi.textContent + +day2_331Orz.textContent + +day2_331Oher.textContent
            present_331_day_2.textContent = +weekStudentsBase331.length - +presentVrem331
        }
    }
    // Информация по 331 группе

    // Информация по 341 группе
    const day2_341Covid = document.querySelector('.day_2_341_covid')
    const day2_341Orvi = document.querySelector('.day_2_341_orvi')
    const day2_341Orz = document.querySelector('.day_2_341_orz')
    const day2_341Oher = document.querySelector('.day_2_341_other')
    const day2_341OherReasons = document.querySelector('.day_2_341_other_reasons')

    const day2_341 = document.querySelectorAll('.day_2_341')

    const present_341_day_2 = document.querySelector('.day_2_341_present')

    if (!day2_341Covid) {} else {
        for (var i = 0; i < day2_341.length; i++) {
            if (day2_341[i].textContent == 'COVID') {
                day2_341Covid.textContent = +day2_341Covid.textContent + 1
            }
            if (day2_341[i].textContent == 'ОРВИ') {
                day2_341Orvi.textContent = +day2_341Orvi.textContent + 1
            }
            if (day2_341[i].textContent == 'ОРЗ') {
                day2_341Orz.textContent = +day2_341Orz.textContent + 1
            }
            if (day2_341[i].textContent == 'Не простудное') {
                day2_341Oher.textContent = +day2_341Oher.textContent + 1
            }
            if (day2_341[i].textContent == 'Другое') {
                day2_341OherReasons.textContent = +day2_341OherReasons.textContent + 1
            }
        }
        if (!day2_341Covid) {} else {
            let presentVrem341
            presentVrem341 = +day2_341Covid.textContent + +day2_341Orvi.textContent + +day2_341Orz.textContent + +day2_341Oher.textContent
            present_341_day_2.textContent = +weekStudentsBase341.length - +presentVrem341
        }
    }
    // Информация по 341 группе

    // Информация по 401 группе
    const day2_401Covid = document.querySelector('.day_2_401_covid')
    const day2_401Orvi = document.querySelector('.day_2_401_orvi')
    const day2_401Orz = document.querySelector('.day_2_401_orz')
    const day2_401Oher = document.querySelector('.day_2_401_other')
    const day2_401OherReasons = document.querySelector('.day_2_401_other_reasons')

    const day2_401 = document.querySelectorAll('.day_2_401')

    const present_401_day_2 = document.querySelector('.day_2_401_present')

    if (!day2_401Covid) {} else {
        for (var i = 0; i < day2_401.length; i++) {
            if (day2_401[i].textContent == 'COVID') {
                day2_401Covid.textContent = +day2_401Covid.textContent + 1
            }
            if (day2_401[i].textContent == 'ОРВИ') {
                day2_401Orvi.textContent = +day2_401Orvi.textContent + 1
            }
            if (day2_401[i].textContent == 'ОРЗ') {
                day2_401Orz.textContent = +day2_401Orz.textContent + 1
            }
            if (day2_401[i].textContent == 'Не простудное') {
                day2_401Oher.textContent = +day2_401Oher.textContent + 1
            }
            if (day2_401[i].textContent == 'Другое') {
                day2_401OherReasons.textContent = +day2_401OherReasons.textContent + 1
            }
        }
        if (!day2_401Covid) {} else {
            let presentVrem401
            presentVrem401 = +day2_401Covid.textContent + +day2_401Orvi.textContent + +day2_401Orz.textContent + +day2_401Oher.textContent
            present_401_day_2.textContent = +weekStudentsBase401.length - +presentVrem401
        }
    }
    // Информация по 401 группе

    // Информация по 402 группе
    const day2_402Covid = document.querySelector('.day_2_402_covid')
    const day2_402Orvi = document.querySelector('.day_2_402_orvi')
    const day2_402Orz = document.querySelector('.day_2_402_orz')
    const day2_402Oher = document.querySelector('.day_2_402_other')
    const day2_402OherReasons = document.querySelector('.day_2_402_other_reasons')

    const day2_402 = document.querySelectorAll('.day_2_402')

    const present_402_day_2 = document.querySelector('.day_2_402_present')

    if (!day2_402Covid) {} else {
        for (var i = 0; i < day2_402.length; i++) {
            if (day2_402[i].textContent == 'COVID') {
                day2_402Covid.textContent = +day2_402Covid.textContent + 1
            }
            if (day2_402[i].textContent == 'ОРВИ') {
                day2_402Orvi.textContent = +day2_402Orvi.textContent + 1
            }
            if (day2_402[i].textContent == 'ОРЗ') {
                day2_402Orz.textContent = +day2_402Orz.textContent + 1
            }
            if (day2_402[i].textContent == 'Не простудное') {
                day2_402Oher.textContent = +day2_402Oher.textContent + 1
            }
            if (day2_402[i].textContent == 'Другое') {
                day2_402OherReasons.textContent = +day2_402OherReasons.textContent + 1
            }
        }
        if (!day2_402Covid) {} else {
            let presentVrem402
            presentVrem402 = +day2_402Covid.textContent + +day2_402Orvi.textContent + +day2_402Orz.textContent + +day2_402Oher.textContent
            present_402_day_2.textContent = +weekStudentsBase402.length - +presentVrem402
        }
    }
    // Информация по 402 группе

    // Информация по 411 группе
    const day2_411Covid = document.querySelector('.day_2_411_covid')
    const day2_411Orvi = document.querySelector('.day_2_411_orvi')
    const day2_411Orz = document.querySelector('.day_2_411_orz')
    const day2_411Oher = document.querySelector('.day_2_411_other')
    const day2_411OherReasons = document.querySelector('.day_2_411_other_reasons')

    const day2_411 = document.querySelectorAll('.day_2_411')

    const present_411_day_2 = document.querySelector('.day_2_411_present')

    if (!day2_411Covid) {} else {
        for (var i = 0; i < day2_411.length; i++) {
            if (day2_411[i].textContent == 'COVID') {
                day2_411Covid.textContent = +day2_411Covid.textContent + 1
            }
            if (day2_411[i].textContent == 'ОРВИ') {
                day2_411Orvi.textContent = +day2_411Orvi.textContent + 1
            }
            if (day2_411[i].textContent == 'ОРЗ') {
                day2_411Orz.textContent = +day2_411Orz.textContent + 1
            }
            if (day2_411[i].textContent == 'Не простудное') {
                day2_411Oher.textContent = +day2_411Oher.textContent + 1
            }
            if (day2_411[i].textContent == 'Другое') {
                day2_411OherReasons.textContent = +day2_411OherReasons.textContent + 1
            }
        }
        if (!day2_411Covid) {} else {
            let presentVrem411
            presentVrem411 = +day2_411Covid.textContent + +day2_411Orvi.textContent + +day2_411Orz.textContent + +day2_411Oher.textContent
            present_411_day_2.textContent = +weekStudentsBase411.length - +presentVrem411
        }
    }
    // Информация по 411 группе

    // Информация по 421 группе
    const day2_421Covid = document.querySelector('.day_2_421_covid')
    const day2_421Orvi = document.querySelector('.day_2_421_orvi')
    const day2_421Orz = document.querySelector('.day_2_421_orz')
    const day2_421Oher = document.querySelector('.day_2_421_other')
    const day2_421OherReasons = document.querySelector('.day_2_421_other_reasons')

    const day2_421 = document.querySelectorAll('.day_2_421')

    const present_421_day_2 = document.querySelector('.day_2_421_present')

    if (!day2_421Covid) {} else {
        for (var i = 0; i < day2_421.length; i++) {
            if (day2_421[i].textContent == 'COVID') {
                day2_421Covid.textContent = +day2_421Covid.textContent + 1
            }
            if (day2_421[i].textContent == 'ОРВИ') {
                day2_421Orvi.textContent = +day2_421Orvi.textContent + 1
            }
            if (day2_421[i].textContent == 'ОРЗ') {
                day2_421Orz.textContent = +day2_421Orz.textContent + 1
            }
            if (day2_421[i].textContent == 'Не простудное') {
                day2_421Oher.textContent = +day2_421Oher.textContent + 1
            }
            if (day2_421[i].textContent == 'Другое') {
                day2_421OherReasons.textContent = +day2_421OherReasons.textContent + 1
            }
        }
        if (!day2_421Covid) {} else {
            let presentVrem421
            presentVrem421 = +day2_421Covid.textContent + +day2_421Orvi.textContent + +day2_421Orz.textContent + +day2_421Oher.textContent
            present_421_day_2.textContent = +weekStudentsBase421.length - +presentVrem421
        }
    }
    // Информация по 421 группе

    // Информация по 431 группе
    const day2_431Covid = document.querySelector('.day_2_431_covid')
    const day2_431Orvi = document.querySelector('.day_2_431_orvi')
    const day2_431Orz = document.querySelector('.day_2_431_orz')
    const day2_431Oher = document.querySelector('.day_2_431_other')
    const day2_431OherReasons = document.querySelector('.day_2_431_other_reasons')

    const day2_431 = document.querySelectorAll('.day_2_431')

    const present_431_day_2 = document.querySelector('.day_2_431_present')

    if (!day2_431Covid) {} else {
        for (var i = 0; i < day2_431.length; i++) {
            if (day2_431[i].textContent == 'COVID') {
                day2_431Covid.textContent = +day2_431Covid.textContent + 1
            }
            if (day2_431[i].textContent == 'ОРВИ') {
                day2_431Orvi.textContent = +day2_431Orvi.textContent + 1
            }
            if (day2_431[i].textContent == 'ОРЗ') {
                day2_431Orz.textContent = +day2_431Orz.textContent + 1
            }
            if (day2_431[i].textContent == 'Не простудное') {
                day2_431Oher.textContent = +day2_431Oher.textContent + 1
            }
            if (day2_431[i].textContent == 'Другое') {
                day2_431OherReasons.textContent = +day2_431OherReasons.textContent + 1
            }
        }
        if (!day2_431Covid) {} else {
            let presentVrem431
            presentVrem431 = +day2_431Covid.textContent + +day2_431Orvi.textContent + +day2_431Orz.textContent + +day2_431Oher.textContent
            present_431_day_2.textContent = +weekStudentsBase431.length - +presentVrem431
        }
    }
    // Информация по 431 группе

    // Информация по 441 группе
    const day2_441Covid = document.querySelector('.day_2_441_covid')
    const day2_441Orvi = document.querySelector('.day_2_441_orvi')
    const day2_441Orz = document.querySelector('.day_2_441_orz')
    const day2_441Oher = document.querySelector('.day_2_441_other')
    const day2_441OherReasons = document.querySelector('.day_2_441_other_reasons')

    const day2_441 = document.querySelectorAll('.day_2_441')

    const present_441_day_2 = document.querySelector('.day_2_441_present')

    if (!day2_441Covid) {} else {
        for (var i = 0; i < day2_441.length; i++) {
            if (day2_441[i].textContent == 'COVID') {
                day2_441Covid.textContent = +day2_441Covid.textContent + 1
            }
            if (day2_441[i].textContent == 'ОРВИ') {
                day2_441Orvi.textContent = +day2_441Orvi.textContent + 1
            }
            if (day2_441[i].textContent == 'ОРЗ') {
                day2_441Orz.textContent = +day2_441Orz.textContent + 1
            }
            if (day2_441[i].textContent == 'Не простудное') {
                day2_441Oher.textContent = +day2_441Oher.textContent + 1
            }
            if (day2_441[i].textContent == 'Другое') {
                day2_441OherReasons.textContent = +day2_441OherReasons.textContent + 1
            }
        }
        if (!day2_441Covid) {} else {
            let presentVrem441
            presentVrem441 = +day2_441Covid.textContent + +day2_441Orvi.textContent + +day2_441Orz.textContent + +day2_441Oher.textContent
            present_441_day_2.textContent = +weekStudentsBase441.length - +presentVrem441
        }
    }
    // Информация по 441 группе


    // Сводка за второй день
    const day_2_allStud = document.querySelector('.day_2_all_students')
    const day_2_allPresent = document.querySelector('.day_2_all_present')
    const day_2_allCovid = document.querySelector('.day_2_all_covid')
    const day_2_allOrv = document.querySelector('.day_2_all_orv')
    const day_2_allOrz = document.querySelector('.day_2_all_orz')
    const day_2_allOther = document.querySelector('.day_2_all_other')
    const day_2_allOtherReasons = document.querySelector('.day_2_all_other_reasons')

    const studentsday2 = document.querySelectorAll('.students_day_2')
    const covidday2 = document.querySelectorAll('.day_2_covid')
    const orvday2 = document.querySelectorAll('.day_2_orvi')
    const orzday2 = document.querySelectorAll('.day_2_orz')
    const otherday2 = document.querySelectorAll('.day_2_other')
    const otherReasonsday2 = document.querySelectorAll('.day_2_other_reasons')


    if (!day_2_allStud) {} else {
        var allStudday_2 = 0;
        for (var i = 0; i < studentsday2.length; i++) {
            allStudday_2 = +allStudday_2 + +parseInt(studentsday2[i].textContent);
        }
        day_2_allStud.textContent = allStudday_2
    }

    if (!day_2_allCovid) {} else {
        var day2Covid = 0;
        for (var i = 0; i < covidday2.length; i++) {
            day2Covid = +day2Covid + +parseInt(covidday2[i].textContent);
        }
        day_2_allCovid.textContent = day2Covid
    }

    if (!day_2_allOrv) {} else {
        var day2Orv = 0;
        for (var i = 0; i < orvday2.length; i++) {
            day2Orv = +day2Orv + +parseInt(orvday2[i].textContent);
        }
        day_2_allOrv.textContent = day2Orv
    }

    if (!day_2_allOrz) {} else {
        var day2Orz = 0;
        for (var i = 0; i < orzday2.length; i++) {
            day2Orz = +day2Orz + +parseInt(orzday2[i].textContent);
        }
        day_2_allOrz.textContent = day2Orz
    }

    if (!day_2_allOther) {} else {
        var day2Other = 0;
        for (var i = 0; i < otherday2.length; i++) {
            day2Other = +day2Other + +parseInt(otherday2[i].textContent);
        }
        day_2_allOther.textContent = day2Other
    }

    if (!day_2_allOtherReasons) {} else {
        var day2OtherReasons = 0;
        for (var i = 0; i < otherReasonsday2.length; i++) {
            day2OtherReasons = +day2OtherReasons + +parseInt(otherReasonsday2[i].textContent);
        }
        day_2_allOtherReasons.textContent = day2OtherReasons
    }

    if (!day_2_allPresent) {} else {
        day_2_allPresent.textContent = +day_2_allStud.textContent - (+day_2_allOtherReasons.textContent + +day_2_allOther.textContent + +day_2_allOrz.textContent + +day_2_allOrv.textContent + +day_2_allCovid.textContent)
    }
    // Сводка за второй день




    // ТРЕТИЙ ДЕНЬ___________________
    // Информация по 101 группе
    const day3_101Covid = document.querySelector('.day_3_101_covid')
    const day3_101Orvi = document.querySelector('.day_3_101_orvi')
    const day3_101Orz = document.querySelector('.day_3_101_orz')
    const day3_101Oher = document.querySelector('.day_3_101_other')
    const day3_101OherReasons = document.querySelector('.day_3_101_other_reasons')

    const day3_101 = document.querySelectorAll('.day_3_101')

    const present_101_day_3 = document.querySelector('.day_3_101_present')

    if (!day3_101Covid) {} else {
        for (var i = 0; i < day3_101.length; i++) {
            if (day3_101[i].textContent == 'COVID') {
                day3_101Covid.textContent = +day3_101Covid.textContent + 1
            }
            if (day3_101[i].textContent == 'ОРВИ') {
                day3_101Orvi.textContent = +day3_101Orvi.textContent + 1
            }
            if (day3_101[i].textContent == 'ОРЗ') {
                day3_101Orz.textContent = +day3_101Orz.textContent + 1
            }
            if (day3_101[i].textContent == 'Не простудное') {
                day3_101Oher.textContent = +day3_101Oher.textContent + 1
            }
            if (day3_101[i].textContent == 'Другое') {
                day3_101OherReasons.textContent = +day3_101OherReasons.textContent + 1
            }
        }
        if (!day3_101Covid) {} else {
            let presentVrem101
            presentVrem101 = +day3_101Covid.textContent + +day3_101Orvi.textContent + +day3_101Orz.textContent + +day3_101Oher.textContent
            present_101_day_3.textContent = +weekStudentsBase101.length - +presentVrem101
        }
    }
    // Информация по 101 группе

    // Информация по 111 группе
    const day3_111Covid = document.querySelector('.day_3_111_covid')
    const day3_111Orvi = document.querySelector('.day_3_111_orvi')
    const day3_111Orz = document.querySelector('.day_3_111_orz')
    const day3_111Oher = document.querySelector('.day_3_111_other')
    const day3_111OherReasons = document.querySelector('.day_3_111_other_reasons')

    const day3_111 = document.querySelectorAll('.day_3_111')

    const present_111_day_3 = document.querySelector('.day_3_111_present')

    if (!day3_111Covid) {} else {
        for (var i = 0; i < day3_111.length; i++) {
            if (day3_111[i].textContent == 'COVID') {
                day3_111Covid.textContent = +day3_111Covid.textContent + 1
            }
            if (day3_111[i].textContent == 'ОРВИ') {
                day3_111Orvi.textContent = +day3_111Orvi.textContent + 1
            }
            if (day3_111[i].textContent == 'ОРЗ') {
                day3_111Orz.textContent = +day3_111Orz.textContent + 1
            }
            if (day3_111[i].textContent == 'Не простудное') {
                day3_111Oher.textContent = +day3_111Oher.textContent + 1
            }
            if (day3_111[i].textContent == 'Другое') {
                day3_111OherReasons.textContent = +day3_111OherReasons.textContent + 1
            }
        }
        if (!day3_111Covid) {} else {
            let presentVrem111
            presentVrem111 = +day3_111Covid.textContent + +day3_111Orvi.textContent + +day3_111Orz.textContent + +day3_111Oher.textContent
            present_111_day_3.textContent = +weekStudentsBase111.length - +presentVrem111
        }
    }
    // Информация по 111 группе

    // Информация по 121 группе
    const day3_121Covid = document.querySelector('.day_3_121_covid')
    const day3_121Orvi = document.querySelector('.day_3_121_orvi')
    const day3_121Orz = document.querySelector('.day_3_121_orz')
    const day3_121Oher = document.querySelector('.day_3_121_other')
    const day3_121OherReasons = document.querySelector('.day_3_121_other_reasons')

    const day3_121 = document.querySelectorAll('.day_3_121')

    const present_121_day_3 = document.querySelector('.day_3_121_present')

    if (!day3_121Covid) {} else {
        for (var i = 0; i < day3_121.length; i++) {
            if (day3_121[i].textContent == 'COVID') {
                day3_121Covid.textContent = +day3_121Covid.textContent + 1
            }
            if (day3_121[i].textContent == 'ОРВИ') {
                day3_121Orvi.textContent = +day3_121Orvi.textContent + 1
            }
            if (day3_121[i].textContent == 'ОРЗ') {
                day3_121Orz.textContent = +day3_121Orz.textContent + 1
            }
            if (day3_121[i].textContent == 'Не простудное') {
                day3_121Oher.textContent = +day3_121Oher.textContent + 1
            }
            if (day3_121[i].textContent == 'Другое') {
                day3_121OherReasons.textContent = +day3_121OherReasons.textContent + 1
            }
        }
        if (!day3_121Covid) {} else {
            let presentVrem121
            presentVrem121 = +day3_121Covid.textContent + +day3_121Orvi.textContent + +day3_121Orz.textContent + +day3_121Oher.textContent
            present_121_day_3.textContent = +weekStudentsBase121.length - +presentVrem121
        }
    }
    // Информация по 121 группе

    // Информация по 201 группе
    const day3_201Covid = document.querySelector('.day_3_201_covid')
    const day3_201Orvi = document.querySelector('.day_3_201_orvi')
    const day3_201Orz = document.querySelector('.day_3_201_orz')
    const day3_201Oher = document.querySelector('.day_3_201_other')
    const day3_201OherReasons = document.querySelector('.day_3_201_other_reasons')

    const day3_201 = document.querySelectorAll('.day_3_201')

    const present_201_day_3 = document.querySelector('.day_3_201_present')

    if (!day3_201Covid) {} else {
        for (var i = 0; i < day3_201.length; i++) {
            if (day3_201[i].textContent == 'COVID') {
                day3_201Covid.textContent = +day3_201Covid.textContent + 1
            }
            if (day3_201[i].textContent == 'ОРВИ') {
                day3_201Orvi.textContent = +day3_201Orvi.textContent + 1
            }
            if (day3_201[i].textContent == 'ОРЗ') {
                day3_201Orz.textContent = +day3_201Orz.textContent + 1
            }
            if (day3_201[i].textContent == 'Не простудное') {
                day3_201Oher.textContent = +day3_201Oher.textContent + 1
            }
            if (day3_201[i].textContent == 'Другое') {
                day3_201OherReasons.textContent = +day3_201OherReasons.textContent + 1
            }
        }
        if (!day3_201Covid) {} else {
            let presentVrem201
            presentVrem201 = +day3_201Covid.textContent + +day3_201Orvi.textContent + +day3_201Orz.textContent + +day3_201Oher.textContent
            present_201_day_3.textContent = +weekStudentsBase201.length - +presentVrem201
        }
    }
    // Информация по 201 группе

    // Информация по 202 группе
    const day3_202Covid = document.querySelector('.day_3_202_covid')
    const day3_202Orvi = document.querySelector('.day_3_202_orvi')
    const day3_202Orz = document.querySelector('.day_3_202_orz')
    const day3_202Oher = document.querySelector('.day_3_202_other')
    const day3_202OherReasons = document.querySelector('.day_3_202_other_reasons')

    const day3_202 = document.querySelectorAll('.day_3_202')

    const present_202_day_3 = document.querySelector('.day_3_202_present')

    if (!day3_202Covid) {} else {
        for (var i = 0; i < day3_202.length; i++) {
            if (day3_202[i].textContent == 'COVID') {
                day3_202Covid.textContent = +day3_202Covid.textContent + 1
            }
            if (day3_202[i].textContent == 'ОРВИ') {
                day3_202Orvi.textContent = +day3_202Orvi.textContent + 1
            }
            if (day3_202[i].textContent == 'ОРЗ') {
                day3_202Orz.textContent = +day3_202Orz.textContent + 1
            }
            if (day3_202[i].textContent == 'Не простудное') {
                day3_202Oher.textContent = +day3_202Oher.textContent + 1
            }
            if (day3_202[i].textContent == 'Другое') {
                day3_202OherReasons.textContent = +day3_202OherReasons.textContent + 1
            }
        }
        if (!day3_202Covid) {} else {
            let presentVrem202
            presentVrem202 = +day3_202Covid.textContent + +day3_202Orvi.textContent + +day3_202Orz.textContent + +day3_202Oher.textContent
            present_202_day_3.textContent = +weekStudentsBase202.length - +presentVrem202
        }
    }
    // Информация по 202 группе

    // Информация по 211 группе
    const day3_211Covid = document.querySelector('.day_3_211_covid')
    const day3_211Orvi = document.querySelector('.day_3_211_orvi')
    const day3_211Orz = document.querySelector('.day_3_211_orz')
    const day3_211Oher = document.querySelector('.day_3_211_other')
    const day3_211OherReasons = document.querySelector('.day_3_211_other_reasons')

    const day3_211 = document.querySelectorAll('.day_3_211')

    const present_211_day_3 = document.querySelector('.day_3_211_present')

    if (!day3_211Covid) {} else {
        for (var i = 0; i < day3_211.length; i++) {
            if (day3_211[i].textContent == 'COVID') {
                day3_211Covid.textContent = +day3_211Covid.textContent + 1
            }
            if (day3_211[i].textContent == 'ОРВИ') {
                day3_211Orvi.textContent = +day3_211Orvi.textContent + 1
            }
            if (day3_211[i].textContent == 'ОРЗ') {
                day3_211Orz.textContent = +day3_211Orz.textContent + 1
            }
            if (day3_211[i].textContent == 'Не простудное') {
                day3_211Oher.textContent = +day3_211Oher.textContent + 1
            }
            if (day3_211[i].textContent == 'Другое') {
                day3_211OherReasons.textContent = +day3_211OherReasons.textContent + 1
            }
        }
        if (!day3_211Covid) {} else {
            let presentVrem211
            presentVrem211 = +day3_211Covid.textContent + +day3_211Orvi.textContent + +day3_211Orz.textContent + +day3_211Oher.textContent
            present_211_day_3.textContent = +weekStudentsBase211.length - +presentVrem211
        }
    }
    // Информация по 211 группе

    // Информация по 221 группе
    const day3_221Covid = document.querySelector('.day_3_221_covid')
    const day3_221Orvi = document.querySelector('.day_3_221_orvi')
    const day3_221Orz = document.querySelector('.day_3_221_orz')
    const day3_221Oher = document.querySelector('.day_3_221_other')
    const day3_221OherReasons = document.querySelector('.day_3_221_other_reasons')

    const day3_221 = document.querySelectorAll('.day_3_221')

    const present_221_day_3 = document.querySelector('.day_3_221_present')

    if (!day3_221Covid) {} else {
        for (var i = 0; i < day3_221.length; i++) {
            if (day3_221[i].textContent == 'COVID') {
                day3_221Covid.textContent = +day3_221Covid.textContent + 1
            }
            if (day3_221[i].textContent == 'ОРВИ') {
                day3_221Orvi.textContent = +day3_221Orvi.textContent + 1
            }
            if (day3_221[i].textContent == 'ОРЗ') {
                day3_221Orz.textContent = +day3_221Orz.textContent + 1
            }
            if (day3_221[i].textContent == 'Не простудное') {
                day3_221Oher.textContent = +day3_221Oher.textContent + 1
            }
            if (day3_221[i].textContent == 'Другое') {
                day3_221OherReasons.textContent = +day3_221OherReasons.textContent + 1
            }
        }
        if (!day3_221Covid) {} else {
            let presentVrem221
            presentVrem221 = +day3_221Covid.textContent + +day3_221Orvi.textContent + +day3_221Orz.textContent + +day3_221Oher.textContent
            present_221_day_3.textContent = +weekStudentsBase221.length - +presentVrem221
        }
    }
    // Информация по 221 группе

    // Информация по 231 группе
    const day3_231Covid = document.querySelector('.day_3_231_covid')
    const day3_231Orvi = document.querySelector('.day_3_231_orvi')
    const day3_231Orz = document.querySelector('.day_3_231_orz')
    const day3_231Oher = document.querySelector('.day_3_231_other')
    const day3_231OherReasons = document.querySelector('.day_3_231_other_reasons')

    const day3_231 = document.querySelectorAll('.day_3_231')

    const present_231_day_3 = document.querySelector('.day_3_231_present')

    if (!day3_231Covid) {} else {
        for (var i = 0; i < day3_231.length; i++) {
            if (day3_231[i].textContent == 'COVID') {
                day3_231Covid.textContent = +day3_231Covid.textContent + 1
            }
            if (day3_231[i].textContent == 'ОРВИ') {
                day3_231Orvi.textContent = +day3_231Orvi.textContent + 1
            }
            if (day3_231[i].textContent == 'ОРЗ') {
                day3_231Orz.textContent = +day3_231Orz.textContent + 1
            }
            if (day3_231[i].textContent == 'Не простудное') {
                day3_231Oher.textContent = +day3_231Oher.textContent + 1
            }
            if (day3_231[i].textContent == 'Другое') {
                day3_231OherReasons.textContent = +day3_231OherReasons.textContent + 1
            }
        }
        if (!day3_231Covid) {} else {
            let presentVrem231
            presentVrem231 = +day3_231Covid.textContent + +day3_231Orvi.textContent + +day3_231Orz.textContent + +day3_231Oher.textContent
            present_231_day_3.textContent = +weekStudentsBase231.length - +presentVrem231
        }
    }
    // Информация по 231 группе

    // Информация по 241 группе
    const day3_241Covid = document.querySelector('.day_3_241_covid')
    const day3_241Orvi = document.querySelector('.day_3_241_orvi')
    const day3_241Orz = document.querySelector('.day_3_241_orz')
    const day3_241Oher = document.querySelector('.day_3_241_other')
    const day3_241OherReasons = document.querySelector('.day_3_241_other_reasons')

    const day3_241 = document.querySelectorAll('.day_3_241')

    const present_241_day_3 = document.querySelector('.day_3_241_present')

    if (!day3_241Covid) {} else {
        for (var i = 0; i < day3_241.length; i++) {
            if (day3_241[i].textContent == 'COVID') {
                day3_241Covid.textContent = +day3_241Covid.textContent + 1
            }
            if (day3_241[i].textContent == 'ОРВИ') {
                day3_241Orvi.textContent = +day3_241Orvi.textContent + 1
            }
            if (day3_241[i].textContent == 'ОРЗ') {
                day3_241Orz.textContent = +day3_241Orz.textContent + 1
            }
            if (day3_241[i].textContent == 'Не простудное') {
                day3_241Oher.textContent = +day3_241Oher.textContent + 1
            }
            if (day3_241[i].textContent == 'Другое') {
                day3_241OherReasons.textContent = +day3_241OherReasons.textContent + 1
            }
        }
        if (!day3_241Covid) {} else {
            let presentVrem241
            presentVrem241 = +day3_241Covid.textContent + +day3_241Orvi.textContent + +day3_241Orz.textContent + +day3_241Oher.textContent
            present_241_day_3.textContent = +weekStudentsBase241.length - +presentVrem241
        }
    }
    // Информация по 241 группе

    // Информация по 301 группе
    const day3_301Covid = document.querySelector('.day_3_301_covid')
    const day3_301Orvi = document.querySelector('.day_3_301_orvi')
    const day3_301Orz = document.querySelector('.day_3_301_orz')
    const day3_301Oher = document.querySelector('.day_3_301_other')
    const day3_301OherReasons = document.querySelector('.day_3_301_other_reasons')

    const day3_301 = document.querySelectorAll('.day_3_301')

    const present_301_day_3 = document.querySelector('.day_3_301_present')

    if (!day3_301Covid) {} else {
        for (var i = 0; i < day3_301.length; i++) {
            if (day3_301[i].textContent == 'COVID') {
                day3_301Covid.textContent = +day3_301Covid.textContent + 1
            }
            if (day3_301[i].textContent == 'ОРВИ') {
                day3_301Orvi.textContent = +day3_301Orvi.textContent + 1
            }
            if (day3_301[i].textContent == 'ОРЗ') {
                day3_301Orz.textContent = +day3_301Orz.textContent + 1
            }
            if (day3_301[i].textContent == 'Не простудное') {
                day3_301Oher.textContent = +day3_301Oher.textContent + 1
            }
            if (day3_301[i].textContent == 'Другое') {
                day3_301OherReasons.textContent = +day3_301OherReasons.textContent + 1
            }
        }
        if (!day3_301Covid) {} else {
            let presentVrem301
            presentVrem301 = +day3_301Covid.textContent + +day3_301Orvi.textContent + +day3_301Orz.textContent + +day3_301Oher.textContent
            present_301_day_3.textContent = +weekStudentsBase301.length - +presentVrem301
        }
    }
    // Информация по 301 группе

    // Информация по 302 группе
    const day3_302Covid = document.querySelector('.day_3_302_covid')
    const day3_302Orvi = document.querySelector('.day_3_302_orvi')
    const day3_302Orz = document.querySelector('.day_3_302_orz')
    const day3_302Oher = document.querySelector('.day_3_302_other')
    const day3_302OherReasons = document.querySelector('.day_3_302_other_reasons')

    const day3_302 = document.querySelectorAll('.day_3_302')

    const present_302_day_3 = document.querySelector('.day_3_302_present')

    if (!day3_302Covid) {} else {
        for (var i = 0; i < day3_302.length; i++) {
            if (day3_302[i].textContent == 'COVID') {
                day3_302Covid.textContent = +day3_302Covid.textContent + 1
            }
            if (day3_302[i].textContent == 'ОРВИ') {
                day3_302Orvi.textContent = +day3_302Orvi.textContent + 1
            }
            if (day3_302[i].textContent == 'ОРЗ') {
                day3_302Orz.textContent = +day3_302Orz.textContent + 1
            }
            if (day3_302[i].textContent == 'Не простудное') {
                day3_302Oher.textContent = +day3_302Oher.textContent + 1
            }
            if (day3_302[i].textContent == 'Другое') {
                day3_302OherReasons.textContent = +day3_302OherReasons.textContent + 1
            }
        }
        if (!day3_302Covid) {} else {
            let presentVrem302
            presentVrem302 = +day3_302Covid.textContent + +day3_302Orvi.textContent + +day3_302Orz.textContent + +day3_302Oher.textContent
            present_302_day_3.textContent = +weekStudentsBase302.length - +presentVrem302
        }
    }
    // Информация по 302 группе

    // Информация по 311 группе
    const day3_311Covid = document.querySelector('.day_3_311_covid')
    const day3_311Orvi = document.querySelector('.day_3_311_orvi')
    const day3_311Orz = document.querySelector('.day_3_311_orz')
    const day3_311Oher = document.querySelector('.day_3_311_other')
    const day3_311OherReasons = document.querySelector('.day_3_311_other_reasons')

    const day3_311 = document.querySelectorAll('.day_3_311')

    const present_311_day_3 = document.querySelector('.day_3_311_present')

    if (!day3_311Covid) {} else {
        for (var i = 0; i < day3_311.length; i++) {
            if (day3_311[i].textContent == 'COVID') {
                day3_311Covid.textContent = +day3_311Covid.textContent + 1
            }
            if (day3_311[i].textContent == 'ОРВИ') {
                day3_311Orvi.textContent = +day3_311Orvi.textContent + 1
            }
            if (day3_311[i].textContent == 'ОРЗ') {
                day3_311Orz.textContent = +day3_311Orz.textContent + 1
            }
            if (day3_311[i].textContent == 'Не простудное') {
                day3_311Oher.textContent = +day3_311Oher.textContent + 1
            }
            if (day3_311[i].textContent == 'Другое') {
                day3_311OherReasons.textContent = +day3_311OherReasons.textContent + 1
            }
        }
        if (!day3_311Covid) {} else {
            let presentVrem311
            presentVrem311 = +day3_311Covid.textContent + +day3_311Orvi.textContent + +day3_311Orz.textContent + +day3_311Oher.textContent
            present_311_day_3.textContent = +weekStudentsBase311.length - +presentVrem311
        }
    }
    // Информация по 311 группе

    // Информация по 321 группе
    const day3_321Covid = document.querySelector('.day_3_321_covid')
    const day3_321Orvi = document.querySelector('.day_3_321_orvi')
    const day3_321Orz = document.querySelector('.day_3_321_orz')
    const day3_321Oher = document.querySelector('.day_3_321_other')
    const day3_321OherReasons = document.querySelector('.day_3_321_other_reasons')

    const day3_321 = document.querySelectorAll('.day_3_321')

    const present_321_day_3 = document.querySelector('.day_3_321_present')

    if (!day3_321Covid) {} else {
        for (var i = 0; i < day3_321.length; i++) {
            if (day3_321[i].textContent == 'COVID') {
                day3_321Covid.textContent = +day3_321Covid.textContent + 1
            }
            if (day3_321[i].textContent == 'ОРВИ') {
                day3_321Orvi.textContent = +day3_321Orvi.textContent + 1
            }
            if (day3_321[i].textContent == 'ОРЗ') {
                day3_321Orz.textContent = +day3_321Orz.textContent + 1
            }
            if (day3_321[i].textContent == 'Не простудное') {
                day3_321Oher.textContent = +day3_321Oher.textContent + 1
            }
            if (day3_321[i].textContent == 'Другое') {
                day3_321OherReasons.textContent = +day3_321OherReasons.textContent + 1
            }
        }
        if (!day3_321Covid) {} else {
            let presentVrem321
            presentVrem321 = +day3_321Covid.textContent + +day3_321Orvi.textContent + +day3_321Orz.textContent + +day3_321Oher.textContent
            present_321_day_3.textContent = +weekStudentsBase321.length - +presentVrem321
        }
    }
    // Информация по 321 группе

    // Информация по 331 группе
    const day3_331Covid = document.querySelector('.day_3_331_covid')
    const day3_331Orvi = document.querySelector('.day_3_331_orvi')
    const day3_331Orz = document.querySelector('.day_3_331_orz')
    const day3_331Oher = document.querySelector('.day_3_331_other')
    const day3_331OherReasons = document.querySelector('.day_3_331_other_reasons')

    const day3_331 = document.querySelectorAll('.day_3_331')

    const present_331_day_3 = document.querySelector('.day_3_331_present')

    if (!day3_331Covid) {} else {
        for (var i = 0; i < day3_331.length; i++) {
            if (day3_331[i].textContent == 'COVID') {
                day3_331Covid.textContent = +day3_331Covid.textContent + 1
            }
            if (day3_331[i].textContent == 'ОРВИ') {
                day3_331Orvi.textContent = +day3_331Orvi.textContent + 1
            }
            if (day3_331[i].textContent == 'ОРЗ') {
                day3_331Orz.textContent = +day3_331Orz.textContent + 1
            }
            if (day3_331[i].textContent == 'Не простудное') {
                day3_331Oher.textContent = +day3_331Oher.textContent + 1
            }
            if (day3_331[i].textContent == 'Другое') {
                day3_331OherReasons.textContent = +day3_331OherReasons.textContent + 1
            }
        }
        if (!day3_331Covid) {} else {
            let presentVrem331
            presentVrem331 = +day3_331Covid.textContent + +day3_331Orvi.textContent + +day3_331Orz.textContent + +day3_331Oher.textContent
            present_331_day_3.textContent = +weekStudentsBase331.length - +presentVrem331
        }
    }
    // Информация по 331 группе

    // Информация по 341 группе
    const day3_341Covid = document.querySelector('.day_3_341_covid')
    const day3_341Orvi = document.querySelector('.day_3_341_orvi')
    const day3_341Orz = document.querySelector('.day_3_341_orz')
    const day3_341Oher = document.querySelector('.day_3_341_other')
    const day3_341OherReasons = document.querySelector('.day_3_341_other_reasons')

    const day3_341 = document.querySelectorAll('.day_3_341')

    const present_341_day_3 = document.querySelector('.day_3_341_present')

    if (!day3_341Covid) {} else {
        for (var i = 0; i < day3_341.length; i++) {
            if (day3_341[i].textContent == 'COVID') {
                day3_341Covid.textContent = +day3_341Covid.textContent + 1
            }
            if (day3_341[i].textContent == 'ОРВИ') {
                day3_341Orvi.textContent = +day3_341Orvi.textContent + 1
            }
            if (day3_341[i].textContent == 'ОРЗ') {
                day3_341Orz.textContent = +day3_341Orz.textContent + 1
            }
            if (day3_341[i].textContent == 'Не простудное') {
                day3_341Oher.textContent = +day3_341Oher.textContent + 1
            }
            if (day3_341[i].textContent == 'Другое') {
                day3_341OherReasons.textContent = +day3_341OherReasons.textContent + 1
            }
        }
        if (!day3_341Covid) {} else {
            let presentVrem341
            presentVrem341 = +day3_341Covid.textContent + +day3_341Orvi.textContent + +day3_341Orz.textContent + +day3_341Oher.textContent
            present_341_day_3.textContent = +weekStudentsBase341.length - +presentVrem341
        }
    }
    // Информация по 341 группе

    // Информация по 401 группе
    const day3_401Covid = document.querySelector('.day_3_401_covid')
    const day3_401Orvi = document.querySelector('.day_3_401_orvi')
    const day3_401Orz = document.querySelector('.day_3_401_orz')
    const day3_401Oher = document.querySelector('.day_3_401_other')
    const day3_401OherReasons = document.querySelector('.day_3_401_other_reasons')

    const day3_401 = document.querySelectorAll('.day_3_401')

    const present_401_day_3 = document.querySelector('.day_3_401_present')

    if (!day3_401Covid) {} else {
        for (var i = 0; i < day3_401.length; i++) {
            if (day3_401[i].textContent == 'COVID') {
                day3_401Covid.textContent = +day3_401Covid.textContent + 1
            }
            if (day3_401[i].textContent == 'ОРВИ') {
                day3_401Orvi.textContent = +day3_401Orvi.textContent + 1
            }
            if (day3_401[i].textContent == 'ОРЗ') {
                day3_401Orz.textContent = +day3_401Orz.textContent + 1
            }
            if (day3_401[i].textContent == 'Не простудное') {
                day3_401Oher.textContent = +day3_401Oher.textContent + 1
            }
            if (day3_401[i].textContent == 'Другое') {
                day3_401OherReasons.textContent = +day3_401OherReasons.textContent + 1
            }
        }
        if (!day3_401Covid) {} else {
            let presentVrem401
            presentVrem401 = +day3_401Covid.textContent + +day3_401Orvi.textContent + +day3_401Orz.textContent + +day3_401Oher.textContent
            present_401_day_3.textContent = +weekStudentsBase401.length - +presentVrem401
        }
    }
    // Информация по 401 группе

    // Информация по 402 группе
    const day3_402Covid = document.querySelector('.day_3_402_covid')
    const day3_402Orvi = document.querySelector('.day_3_402_orvi')
    const day3_402Orz = document.querySelector('.day_3_402_orz')
    const day3_402Oher = document.querySelector('.day_3_402_other')
    const day3_402OherReasons = document.querySelector('.day_3_402_other_reasons')

    const day3_402 = document.querySelectorAll('.day_3_402')

    const present_402_day_3 = document.querySelector('.day_3_402_present')

    if (!day3_402Covid) {} else {
        for (var i = 0; i < day3_402.length; i++) {
            if (day3_402[i].textContent == 'COVID') {
                day3_402Covid.textContent = +day3_402Covid.textContent + 1
            }
            if (day3_402[i].textContent == 'ОРВИ') {
                day3_402Orvi.textContent = +day3_402Orvi.textContent + 1
            }
            if (day3_402[i].textContent == 'ОРЗ') {
                day3_402Orz.textContent = +day3_402Orz.textContent + 1
            }
            if (day3_402[i].textContent == 'Не простудное') {
                day3_402Oher.textContent = +day3_402Oher.textContent + 1
            }
            if (day3_402[i].textContent == 'Другое') {
                day3_402OherReasons.textContent = +day3_402OherReasons.textContent + 1
            }
        }
        if (!day3_402Covid) {} else {
            let presentVrem402
            presentVrem402 = +day3_402Covid.textContent + +day3_402Orvi.textContent + +day3_402Orz.textContent + +day3_402Oher.textContent
            present_402_day_3.textContent = +weekStudentsBase402.length - +presentVrem402
        }
    }
    // Информация по 402 группе

    // Информация по 411 группе
    const day3_411Covid = document.querySelector('.day_3_411_covid')
    const day3_411Orvi = document.querySelector('.day_3_411_orvi')
    const day3_411Orz = document.querySelector('.day_3_411_orz')
    const day3_411Oher = document.querySelector('.day_3_411_other')
    const day3_411OherReasons = document.querySelector('.day_3_411_other_reasons')

    const day3_411 = document.querySelectorAll('.day_3_411')

    const present_411_day_3 = document.querySelector('.day_3_411_present')

    if (!day3_411Covid) {} else {
        for (var i = 0; i < day3_411.length; i++) {
            if (day3_411[i].textContent == 'COVID') {
                day3_411Covid.textContent = +day3_411Covid.textContent + 1
            }
            if (day3_411[i].textContent == 'ОРВИ') {
                day3_411Orvi.textContent = +day3_411Orvi.textContent + 1
            }
            if (day3_411[i].textContent == 'ОРЗ') {
                day3_411Orz.textContent = +day3_411Orz.textContent + 1
            }
            if (day3_411[i].textContent == 'Не простудное') {
                day3_411Oher.textContent = +day3_411Oher.textContent + 1
            }
            if (day3_411[i].textContent == 'Другое') {
                day3_411OherReasons.textContent = +day3_411OherReasons.textContent + 1
            }
        }
        if (!day3_411Covid) {} else {
            let presentVrem411
            presentVrem411 = +day3_411Covid.textContent + +day3_411Orvi.textContent + +day3_411Orz.textContent + +day3_411Oher.textContent
            present_411_day_3.textContent = +weekStudentsBase411.length - +presentVrem411
        }
    }
    // Информация по 411 группе

    // Информация по 421 группе
    const day3_421Covid = document.querySelector('.day_3_421_covid')
    const day3_421Orvi = document.querySelector('.day_3_421_orvi')
    const day3_421Orz = document.querySelector('.day_3_421_orz')
    const day3_421Oher = document.querySelector('.day_3_421_other')
    const day3_421OherReasons = document.querySelector('.day_3_421_other_reasons')

    const day3_421 = document.querySelectorAll('.day_3_421')

    const present_421_day_3 = document.querySelector('.day_3_421_present')

    if (!day3_421Covid) {} else {
        for (var i = 0; i < day3_421.length; i++) {
            if (day3_421[i].textContent == 'COVID') {
                day3_421Covid.textContent = +day3_421Covid.textContent + 1
            }
            if (day3_421[i].textContent == 'ОРВИ') {
                day3_421Orvi.textContent = +day3_421Orvi.textContent + 1
            }
            if (day3_421[i].textContent == 'ОРЗ') {
                day3_421Orz.textContent = +day3_421Orz.textContent + 1
            }
            if (day3_421[i].textContent == 'Не простудное') {
                day3_421Oher.textContent = +day3_421Oher.textContent + 1
            }
            if (day3_421[i].textContent == 'Другое') {
                day3_421OherReasons.textContent = +day3_421OherReasons.textContent + 1
            }
        }
        if (!day3_421Covid) {} else {
            let presentVrem421
            presentVrem421 = +day3_421Covid.textContent + +day3_421Orvi.textContent + +day3_421Orz.textContent + +day3_421Oher.textContent
            present_421_day_3.textContent = +weekStudentsBase421.length - +presentVrem421
        }
    }
    // Информация по 421 группе

    // Информация по 431 группе
    const day3_431Covid = document.querySelector('.day_3_431_covid')
    const day3_431Orvi = document.querySelector('.day_3_431_orvi')
    const day3_431Orz = document.querySelector('.day_3_431_orz')
    const day3_431Oher = document.querySelector('.day_3_431_other')
    const day3_431OherReasons = document.querySelector('.day_3_431_other_reasons')

    const day3_431 = document.querySelectorAll('.day_3_431')

    const present_431_day_3 = document.querySelector('.day_3_431_present')

    if (!day3_431Covid) {} else {
        for (var i = 0; i < day3_431.length; i++) {
            if (day3_431[i].textContent == 'COVID') {
                day3_431Covid.textContent = +day3_431Covid.textContent + 1
            }
            if (day3_431[i].textContent == 'ОРВИ') {
                day3_431Orvi.textContent = +day3_431Orvi.textContent + 1
            }
            if (day3_431[i].textContent == 'ОРЗ') {
                day3_431Orz.textContent = +day3_431Orz.textContent + 1
            }
            if (day3_431[i].textContent == 'Не простудное') {
                day3_431Oher.textContent = +day3_431Oher.textContent + 1
            }
            if (day3_431[i].textContent == 'Другое') {
                day3_431OherReasons.textContent = +day3_431OherReasons.textContent + 1
            }
        }
        if (!day3_431Covid) {} else {
            let presentVrem431
            presentVrem431 = +day3_431Covid.textContent + +day3_431Orvi.textContent + +day3_431Orz.textContent + +day3_431Oher.textContent
            present_431_day_3.textContent = +weekStudentsBase431.length - +presentVrem431
        }
    }
    // Информация по 431 группе

    // Информация по 441 группе
    const day3_441Covid = document.querySelector('.day_3_441_covid')
    const day3_441Orvi = document.querySelector('.day_3_441_orvi')
    const day3_441Orz = document.querySelector('.day_3_441_orz')
    const day3_441Oher = document.querySelector('.day_3_441_other')
    const day3_441OherReasons = document.querySelector('.day_3_441_other_reasons')

    const day3_441 = document.querySelectorAll('.day_3_441')

    const present_441_day_3 = document.querySelector('.day_3_441_present')

    if (!day3_441Covid) {} else {
        for (var i = 0; i < day3_441.length; i++) {
            if (day3_441[i].textContent == 'COVID') {
                day3_441Covid.textContent = +day3_441Covid.textContent + 1
            }
            if (day3_441[i].textContent == 'ОРВИ') {
                day3_441Orvi.textContent = +day3_441Orvi.textContent + 1
            }
            if (day3_441[i].textContent == 'ОРЗ') {
                day3_441Orz.textContent = +day3_441Orz.textContent + 1
            }
            if (day3_441[i].textContent == 'Не простудное') {
                day3_441Oher.textContent = +day3_441Oher.textContent + 1
            }
            if (day3_441[i].textContent == 'Другое') {
                day3_441OherReasons.textContent = +day3_441OherReasons.textContent + 1
            }
        }
        if (!day3_441Covid) {} else {
            let presentVrem441
            presentVrem441 = +day3_441Covid.textContent + +day3_441Orvi.textContent + +day3_441Orz.textContent + +day3_441Oher.textContent
            present_441_day_3.textContent = +weekStudentsBase441.length - +presentVrem441
        }
    }
    // Информация по 441 группе


    // Сводка за третий день
    const day_3_allStud = document.querySelector('.day_3_all_students')
    const day_3_allPresent = document.querySelector('.day_3_all_present')
    const day_3_allCovid = document.querySelector('.day_3_all_covid')
    const day_3_allOrv = document.querySelector('.day_3_all_orv')
    const day_3_allOrz = document.querySelector('.day_3_all_orz')
    const day_3_allOther = document.querySelector('.day_3_all_other')
    const day_3_allOtherReasons = document.querySelector('.day_3_all_other_reasons')

    const studentsday3 = document.querySelectorAll('.students_day_3')
    const covidday3 = document.querySelectorAll('.day_3_covid')
    const orvday3 = document.querySelectorAll('.day_3_orvi')
    const orzday3 = document.querySelectorAll('.day_3_orz')
    const otherday3 = document.querySelectorAll('.day_3_other')
    const otherReasonsday3 = document.querySelectorAll('.day_3_other_reasons')


    if (!day_3_allStud) {} else {
        var allStudday_3 = 0;
        for (var i = 0; i < studentsday3.length; i++) {
            allStudday_3 = +allStudday_3 + +parseInt(studentsday3[i].textContent);
        }
        day_3_allStud.textContent = allStudday_3
    }

    if (!day_3_allCovid) {} else {
        var day3Covid = 0;
        for (var i = 0; i < covidday3.length; i++) {
            day3Covid = +day3Covid + +parseInt(covidday3[i].textContent);
        }
        day_3_allCovid.textContent = day3Covid
    }

    if (!day_3_allOrv) {} else {
        var day3Orv = 0;
        for (var i = 0; i < orvday3.length; i++) {
            day3Orv = +day3Orv + +parseInt(orvday3[i].textContent);
        }
        day_3_allOrv.textContent = day3Orv
    }

    if (!day_3_allOrz) {} else {
        var day3Orz = 0;
        for (var i = 0; i < orzday3.length; i++) {
            day3Orz = +day3Orz + +parseInt(orzday3[i].textContent);
        }
        day_3_allOrz.textContent = day3Orz
    }

    if (!day_3_allOther) {} else {
        var day3Other = 0;
        for (var i = 0; i < otherday3.length; i++) {
            day3Other = +day3Other + +parseInt(otherday3[i].textContent);
        }
        day_3_allOther.textContent = day3Other
    }

    if (!day_3_allOtherReasons) {} else {
        var day3OtherReasons = 0;
        for (var i = 0; i < otherReasonsday3.length; i++) {
            day3OtherReasons = +day3OtherReasons + +parseInt(otherReasonsday3[i].textContent);
        }
        day_3_allOtherReasons.textContent = day3OtherReasons
    }

    if (!day_3_allPresent) {} else {
        day_3_allPresent.textContent = +day_3_allStud.textContent - (+day_3_allOtherReasons.textContent + +day_3_allOther.textContent + +day_3_allOrz.textContent + +day_3_allOrv.textContent + +day_3_allCovid.textContent)
    }
    // Сводка за третий день



    // ЧЕТВЕРТЫЙ ДЕНЬ___________________
    // Информация по 101 группе
    const day4_101Covid = document.querySelector('.day_4_101_covid')
    const day4_101Orvi = document.querySelector('.day_4_101_orvi')
    const day4_101Orz = document.querySelector('.day_4_101_orz')
    const day4_101Oher = document.querySelector('.day_4_101_other')
    const day4_101OherReasons = document.querySelector('.day_4_101_other_reasons')

    const day4_101 = document.querySelectorAll('.day_4_101')

    const present_101_day_4 = document.querySelector('.day_4_101_present')

    if (!day4_101Covid) {} else {
        for (var i = 0; i < day4_101.length; i++) {
            if (day4_101[i].textContent == 'COVID') {
                day4_101Covid.textContent = +day4_101Covid.textContent + 1
            }
            if (day4_101[i].textContent == 'ОРВИ') {
                day4_101Orvi.textContent = +day4_101Orvi.textContent + 1
            }
            if (day4_101[i].textContent == 'ОРЗ') {
                day4_101Orz.textContent = +day4_101Orz.textContent + 1
            }
            if (day4_101[i].textContent == 'Не простудное') {
                day4_101Oher.textContent = +day4_101Oher.textContent + 1
            }
            if (day4_101[i].textContent == 'Другое') {
                day4_101OherReasons.textContent = +day4_101OherReasons.textContent + 1
            }
        }
        if (!day4_101Covid) {} else {
            let presentVrem101
            presentVrem101 = +day4_101Covid.textContent + +day4_101Orvi.textContent + +day4_101Orz.textContent + +day4_101Oher.textContent
            present_101_day_4.textContent = +weekStudentsBase101.length - +presentVrem101
        }
    }
    // Информация по 101 группе

    // Информация по 111 группе
    const day4_111Covid = document.querySelector('.day_4_111_covid')
    const day4_111Orvi = document.querySelector('.day_4_111_orvi')
    const day4_111Orz = document.querySelector('.day_4_111_orz')
    const day4_111Oher = document.querySelector('.day_4_111_other')
    const day4_111OherReasons = document.querySelector('.day_4_111_other_reasons')

    const day4_111 = document.querySelectorAll('.day_4_111')

    const present_111_day_4 = document.querySelector('.day_4_111_present')

    if (!day4_111Covid) {} else {
        for (var i = 0; i < day4_111.length; i++) {
            if (day4_111[i].textContent == 'COVID') {
                day4_111Covid.textContent = +day4_111Covid.textContent + 1
            }
            if (day4_111[i].textContent == 'ОРВИ') {
                day4_111Orvi.textContent = +day4_111Orvi.textContent + 1
            }
            if (day4_111[i].textContent == 'ОРЗ') {
                day4_111Orz.textContent = +day4_111Orz.textContent + 1
            }
            if (day4_111[i].textContent == 'Не простудное') {
                day4_111Oher.textContent = +day4_111Oher.textContent + 1
            }
            if (day4_111[i].textContent == 'Другое') {
                day4_111OherReasons.textContent = +day4_111OherReasons.textContent + 1
            }
        }
        if (!day4_111Covid) {} else {
            let presentVrem111
            presentVrem111 = +day4_111Covid.textContent + +day4_111Orvi.textContent + +day4_111Orz.textContent + +day4_111Oher.textContent
            present_111_day_4.textContent = +weekStudentsBase111.length - +presentVrem111
        }
    }
    // Информация по 111 группе

    // Информация по 121 группе
    const day4_121Covid = document.querySelector('.day_4_121_covid')
    const day4_121Orvi = document.querySelector('.day_4_121_orvi')
    const day4_121Orz = document.querySelector('.day_4_121_orz')
    const day4_121Oher = document.querySelector('.day_4_121_other')
    const day4_121OherReasons = document.querySelector('.day_4_121_other_reasons')

    const day4_121 = document.querySelectorAll('.day_4_121')

    const present_121_day_4 = document.querySelector('.day_4_121_present')

    if (!day4_121Covid) {} else {
        for (var i = 0; i < day4_121.length; i++) {
            if (day4_121[i].textContent == 'COVID') {
                day4_121Covid.textContent = +day4_121Covid.textContent + 1
            }
            if (day4_121[i].textContent == 'ОРВИ') {
                day4_121Orvi.textContent = +day4_121Orvi.textContent + 1
            }
            if (day4_121[i].textContent == 'ОРЗ') {
                day4_121Orz.textContent = +day4_121Orz.textContent + 1
            }
            if (day4_121[i].textContent == 'Не простудное') {
                day4_121Oher.textContent = +day4_121Oher.textContent + 1
            }
            if (day4_121[i].textContent == 'Другое') {
                day4_121OherReasons.textContent = +day4_121OherReasons.textContent + 1
            }
        }
        if (!day4_121Covid) {} else {
            let presentVrem121
            presentVrem121 = +day4_121Covid.textContent + +day4_121Orvi.textContent + +day4_121Orz.textContent + +day4_121Oher.textContent
            present_121_day_4.textContent = +weekStudentsBase121.length - +presentVrem121
        }
    }
    // Информация по 121 группе

    // Информация по 201 группе
    const day4_201Covid = document.querySelector('.day_4_201_covid')
    const day4_201Orvi = document.querySelector('.day_4_201_orvi')
    const day4_201Orz = document.querySelector('.day_4_201_orz')
    const day4_201Oher = document.querySelector('.day_4_201_other')
    const day4_201OherReasons = document.querySelector('.day_4_201_other_reasons')

    const day4_201 = document.querySelectorAll('.day_4_201')

    const present_201_day_4 = document.querySelector('.day_4_201_present')

    if (!day4_201Covid) {} else {
        for (var i = 0; i < day4_201.length; i++) {
            if (day4_201[i].textContent == 'COVID') {
                day4_201Covid.textContent = +day4_201Covid.textContent + 1
            }
            if (day4_201[i].textContent == 'ОРВИ') {
                day4_201Orvi.textContent = +day4_201Orvi.textContent + 1
            }
            if (day4_201[i].textContent == 'ОРЗ') {
                day4_201Orz.textContent = +day4_201Orz.textContent + 1
            }
            if (day4_201[i].textContent == 'Не простудное') {
                day4_201Oher.textContent = +day4_201Oher.textContent + 1
            }
            if (day4_201[i].textContent == 'Другое') {
                day4_201OherReasons.textContent = +day4_201OherReasons.textContent + 1
            }
        }
        if (!day4_201Covid) {} else {
            let presentVrem201
            presentVrem201 = +day4_201Covid.textContent + +day4_201Orvi.textContent + +day4_201Orz.textContent + +day4_201Oher.textContent
            present_201_day_4.textContent = +weekStudentsBase201.length - +presentVrem201
        }
    }
    // Информация по 201 группе

    // Информация по 202 группе
    const day4_202Covid = document.querySelector('.day_4_202_covid')
    const day4_202Orvi = document.querySelector('.day_4_202_orvi')
    const day4_202Orz = document.querySelector('.day_4_202_orz')
    const day4_202Oher = document.querySelector('.day_4_202_other')
    const day4_202OherReasons = document.querySelector('.day_4_202_other_reasons')

    const day4_202 = document.querySelectorAll('.day_4_202')

    const present_202_day_4 = document.querySelector('.day_4_202_present')

    if (!day4_202Covid) {} else {
        for (var i = 0; i < day4_202.length; i++) {
            if (day4_202[i].textContent == 'COVID') {
                day4_202Covid.textContent = +day4_202Covid.textContent + 1
            }
            if (day4_202[i].textContent == 'ОРВИ') {
                day4_202Orvi.textContent = +day4_202Orvi.textContent + 1
            }
            if (day4_202[i].textContent == 'ОРЗ') {
                day4_202Orz.textContent = +day4_202Orz.textContent + 1
            }
            if (day4_202[i].textContent == 'Не простудное') {
                day4_202Oher.textContent = +day4_202Oher.textContent + 1
            }
            if (day4_202[i].textContent == 'Другое') {
                day4_202OherReasons.textContent = +day4_202OherReasons.textContent + 1
            }
        }
        if (!day4_202Covid) {} else {
            let presentVrem202
            presentVrem202 = +day4_202Covid.textContent + +day4_202Orvi.textContent + +day4_202Orz.textContent + +day4_202Oher.textContent
            present_202_day_4.textContent = +weekStudentsBase202.length - +presentVrem202
        }
    }
    // Информация по 202 группе

    // Информация по 211 группе
    const day4_211Covid = document.querySelector('.day_4_211_covid')
    const day4_211Orvi = document.querySelector('.day_4_211_orvi')
    const day4_211Orz = document.querySelector('.day_4_211_orz')
    const day4_211Oher = document.querySelector('.day_4_211_other')
    const day4_211OherReasons = document.querySelector('.day_4_211_other_reasons')

    const day4_211 = document.querySelectorAll('.day_4_211')

    const present_211_day_4 = document.querySelector('.day_4_211_present')

    if (!day4_211Covid) {} else {
        for (var i = 0; i < day4_211.length; i++) {
            if (day4_211[i].textContent == 'COVID') {
                day4_211Covid.textContent = +day4_211Covid.textContent + 1
            }
            if (day4_211[i].textContent == 'ОРВИ') {
                day4_211Orvi.textContent = +day4_211Orvi.textContent + 1
            }
            if (day4_211[i].textContent == 'ОРЗ') {
                day4_211Orz.textContent = +day4_211Orz.textContent + 1
            }
            if (day4_211[i].textContent == 'Не простудное') {
                day4_211Oher.textContent = +day4_211Oher.textContent + 1
            }
            if (day4_211[i].textContent == 'Другое') {
                day4_211OherReasons.textContent = +day4_211OherReasons.textContent + 1
            }
        }
        if (!day4_211Covid) {} else {
            let presentVrem211
            presentVrem211 = +day4_211Covid.textContent + +day4_211Orvi.textContent + +day4_211Orz.textContent + +day4_211Oher.textContent
            present_211_day_4.textContent = +weekStudentsBase211.length - +presentVrem211
        }
    }
    // Информация по 211 группе

    // Информация по 221 группе
    const day4_221Covid = document.querySelector('.day_4_221_covid')
    const day4_221Orvi = document.querySelector('.day_4_221_orvi')
    const day4_221Orz = document.querySelector('.day_4_221_orz')
    const day4_221Oher = document.querySelector('.day_4_221_other')
    const day4_221OherReasons = document.querySelector('.day_4_221_other_reasons')

    const day4_221 = document.querySelectorAll('.day_4_221')

    const present_221_day_4 = document.querySelector('.day_4_221_present')

    if (!day4_221Covid) {} else {
        for (var i = 0; i < day4_221.length; i++) {
            if (day4_221[i].textContent == 'COVID') {
                day4_221Covid.textContent = +day4_221Covid.textContent + 1
            }
            if (day4_221[i].textContent == 'ОРВИ') {
                day4_221Orvi.textContent = +day4_221Orvi.textContent + 1
            }
            if (day4_221[i].textContent == 'ОРЗ') {
                day4_221Orz.textContent = +day4_221Orz.textContent + 1
            }
            if (day4_221[i].textContent == 'Не простудное') {
                day4_221Oher.textContent = +day4_221Oher.textContent + 1
            }
            if (day4_221[i].textContent == 'Другое') {
                day4_221OherReasons.textContent = +day4_221OherReasons.textContent + 1
            }
        }
        if (!day4_221Covid) {} else {
            let presentVrem221
            presentVrem221 = +day4_221Covid.textContent + +day4_221Orvi.textContent + +day4_221Orz.textContent + +day4_221Oher.textContent
            present_221_day_4.textContent = +weekStudentsBase221.length - +presentVrem221
        }
    }
    // Информация по 221 группе

    // Информация по 231 группе
    const day4_231Covid = document.querySelector('.day_4_231_covid')
    const day4_231Orvi = document.querySelector('.day_4_231_orvi')
    const day4_231Orz = document.querySelector('.day_4_231_orz')
    const day4_231Oher = document.querySelector('.day_4_231_other')
    const day4_231OherReasons = document.querySelector('.day_4_231_other_reasons')

    const day4_231 = document.querySelectorAll('.day_4_231')

    const present_231_day_4 = document.querySelector('.day_4_231_present')

    if (!day4_231Covid) {} else {
        for (var i = 0; i < day4_231.length; i++) {
            if (day4_231[i].textContent == 'COVID') {
                day4_231Covid.textContent = +day4_231Covid.textContent + 1
            }
            if (day4_231[i].textContent == 'ОРВИ') {
                day4_231Orvi.textContent = +day4_231Orvi.textContent + 1
            }
            if (day4_231[i].textContent == 'ОРЗ') {
                day4_231Orz.textContent = +day4_231Orz.textContent + 1
            }
            if (day4_231[i].textContent == 'Не простудное') {
                day4_231Oher.textContent = +day4_231Oher.textContent + 1
            }
            if (day4_231[i].textContent == 'Другое') {
                day4_231OherReasons.textContent = +day4_231OherReasons.textContent + 1
            }
        }
        if (!day4_231Covid) {} else {
            let presentVrem231
            presentVrem231 = +day4_231Covid.textContent + +day4_231Orvi.textContent + +day4_231Orz.textContent + +day4_231Oher.textContent
            present_231_day_4.textContent = +weekStudentsBase231.length - +presentVrem231
        }
    }
    // Информация по 231 группе

    // Информация по 241 группе
    const day4_241Covid = document.querySelector('.day_4_241_covid')
    const day4_241Orvi = document.querySelector('.day_4_241_orvi')
    const day4_241Orz = document.querySelector('.day_4_241_orz')
    const day4_241Oher = document.querySelector('.day_4_241_other')
    const day4_241OherReasons = document.querySelector('.day_4_241_other_reasons')

    const day4_241 = document.querySelectorAll('.day_4_241')

    const present_241_day_4 = document.querySelector('.day_4_241_present')

    if (!day4_241Covid) {} else {
        for (var i = 0; i < day4_241.length; i++) {
            if (day4_241[i].textContent == 'COVID') {
                day4_241Covid.textContent = +day4_241Covid.textContent + 1
            }
            if (day4_241[i].textContent == 'ОРВИ') {
                day4_241Orvi.textContent = +day4_241Orvi.textContent + 1
            }
            if (day4_241[i].textContent == 'ОРЗ') {
                day4_241Orz.textContent = +day4_241Orz.textContent + 1
            }
            if (day4_241[i].textContent == 'Не простудное') {
                day4_241Oher.textContent = +day4_241Oher.textContent + 1
            }
            if (day4_241[i].textContent == 'Другое') {
                day4_241OherReasons.textContent = +day4_241OherReasons.textContent + 1
            }
        }
        if (!day4_241Covid) {} else {
            let presentVrem241
            presentVrem241 = +day4_241Covid.textContent + +day4_241Orvi.textContent + +day4_241Orz.textContent + +day4_241Oher.textContent
            present_241_day_4.textContent = +weekStudentsBase241.length - +presentVrem241
        }
    }
    // Информация по 241 группе

    // Информация по 301 группе
    const day4_301Covid = document.querySelector('.day_4_301_covid')
    const day4_301Orvi = document.querySelector('.day_4_301_orvi')
    const day4_301Orz = document.querySelector('.day_4_301_orz')
    const day4_301Oher = document.querySelector('.day_4_301_other')
    const day4_301OherReasons = document.querySelector('.day_4_301_other_reasons')

    const day4_301 = document.querySelectorAll('.day_4_301')

    const present_301_day_4 = document.querySelector('.day_4_301_present')

    if (!day4_301Covid) {} else {
        for (var i = 0; i < day4_301.length; i++) {
            if (day4_301[i].textContent == 'COVID') {
                day4_301Covid.textContent = +day4_301Covid.textContent + 1
            }
            if (day4_301[i].textContent == 'ОРВИ') {
                day4_301Orvi.textContent = +day4_301Orvi.textContent + 1
            }
            if (day4_301[i].textContent == 'ОРЗ') {
                day4_301Orz.textContent = +day4_301Orz.textContent + 1
            }
            if (day4_301[i].textContent == 'Не простудное') {
                day4_301Oher.textContent = +day4_301Oher.textContent + 1
            }
            if (day4_301[i].textContent == 'Другое') {
                day4_301OherReasons.textContent = +day4_301OherReasons.textContent + 1
            }
        }
        if (!day4_301Covid) {} else {
            let presentVrem301
            presentVrem301 = +day4_301Covid.textContent + +day4_301Orvi.textContent + +day4_301Orz.textContent + +day4_301Oher.textContent
            present_301_day_4.textContent = +weekStudentsBase301.length - +presentVrem301
        }
    }
    // Информация по 301 группе

    // Информация по 302 группе
    const day4_302Covid = document.querySelector('.day_4_302_covid')
    const day4_302Orvi = document.querySelector('.day_4_302_orvi')
    const day4_302Orz = document.querySelector('.day_4_302_orz')
    const day4_302Oher = document.querySelector('.day_4_302_other')
    const day4_302OherReasons = document.querySelector('.day_4_302_other_reasons')

    const day4_302 = document.querySelectorAll('.day_4_302')

    const present_302_day_4 = document.querySelector('.day_4_302_present')

    if (!day4_302Covid) {} else {
        for (var i = 0; i < day4_302.length; i++) {
            if (day4_302[i].textContent == 'COVID') {
                day4_302Covid.textContent = +day4_302Covid.textContent + 1
            }
            if (day4_302[i].textContent == 'ОРВИ') {
                day4_302Orvi.textContent = +day4_302Orvi.textContent + 1
            }
            if (day4_302[i].textContent == 'ОРЗ') {
                day4_302Orz.textContent = +day4_302Orz.textContent + 1
            }
            if (day4_302[i].textContent == 'Не простудное') {
                day4_302Oher.textContent = +day4_302Oher.textContent + 1
            }
            if (day4_302[i].textContent == 'Другое') {
                day4_302OherReasons.textContent = +day4_302OherReasons.textContent + 1
            }
        }
        if (!day4_302Covid) {} else {
            let presentVrem302
            presentVrem302 = +day4_302Covid.textContent + +day4_302Orvi.textContent + +day4_302Orz.textContent + +day4_302Oher.textContent
            present_302_day_4.textContent = +weekStudentsBase302.length - +presentVrem302
        }
    }
    // Информация по 302 группе

    // Информация по 311 группе
    const day4_311Covid = document.querySelector('.day_4_311_covid')
    const day4_311Orvi = document.querySelector('.day_4_311_orvi')
    const day4_311Orz = document.querySelector('.day_4_311_orz')
    const day4_311Oher = document.querySelector('.day_4_311_other')
    const day4_311OherReasons = document.querySelector('.day_4_311_other_reasons')

    const day4_311 = document.querySelectorAll('.day_4_311')

    const present_311_day_4 = document.querySelector('.day_4_311_present')

    if (!day4_311Covid) {} else {
        for (var i = 0; i < day4_311.length; i++) {
            if (day4_311[i].textContent == 'COVID') {
                day4_311Covid.textContent = +day4_311Covid.textContent + 1
            }
            if (day4_311[i].textContent == 'ОРВИ') {
                day4_311Orvi.textContent = +day4_311Orvi.textContent + 1
            }
            if (day4_311[i].textContent == 'ОРЗ') {
                day4_311Orz.textContent = +day4_311Orz.textContent + 1
            }
            if (day4_311[i].textContent == 'Не простудное') {
                day4_311Oher.textContent = +day4_311Oher.textContent + 1
            }
            if (day4_311[i].textContent == 'Другое') {
                day4_311OherReasons.textContent = +day4_311OherReasons.textContent + 1
            }
        }
        if (!day4_311Covid) {} else {
            let presentVrem311
            presentVrem311 = +day4_311Covid.textContent + +day4_311Orvi.textContent + +day4_311Orz.textContent + +day4_311Oher.textContent
            present_311_day_4.textContent = +weekStudentsBase311.length - +presentVrem311
        }
    }
    // Информация по 311 группе

    // Информация по 321 группе
    const day4_321Covid = document.querySelector('.day_4_321_covid')
    const day4_321Orvi = document.querySelector('.day_4_321_orvi')
    const day4_321Orz = document.querySelector('.day_4_321_orz')
    const day4_321Oher = document.querySelector('.day_4_321_other')
    const day4_321OherReasons = document.querySelector('.day_4_321_other_reasons')

    const day4_321 = document.querySelectorAll('.day_4_321')

    const present_321_day_4 = document.querySelector('.day_4_321_present')

    if (!day4_321Covid) {} else {
        for (var i = 0; i < day4_321.length; i++) {
            if (day4_321[i].textContent == 'COVID') {
                day4_321Covid.textContent = +day4_321Covid.textContent + 1
            }
            if (day4_321[i].textContent == 'ОРВИ') {
                day4_321Orvi.textContent = +day4_321Orvi.textContent + 1
            }
            if (day4_321[i].textContent == 'ОРЗ') {
                day4_321Orz.textContent = +day4_321Orz.textContent + 1
            }
            if (day4_321[i].textContent == 'Не простудное') {
                day4_321Oher.textContent = +day4_321Oher.textContent + 1
            }
            if (day4_321[i].textContent == 'Другое') {
                day4_321OherReasons.textContent = +day4_321OherReasons.textContent + 1
            }
        }
        if (!day4_321Covid) {} else {
            let presentVrem321
            presentVrem321 = +day4_321Covid.textContent + +day4_321Orvi.textContent + +day4_321Orz.textContent + +day4_321Oher.textContent
            present_321_day_4.textContent = +weekStudentsBase321.length - +presentVrem321
        }
    }
    // Информация по 321 группе

    // Информация по 331 группе
    const day4_331Covid = document.querySelector('.day_4_331_covid')
    const day4_331Orvi = document.querySelector('.day_4_331_orvi')
    const day4_331Orz = document.querySelector('.day_4_331_orz')
    const day4_331Oher = document.querySelector('.day_4_331_other')
    const day4_331OherReasons = document.querySelector('.day_4_331_other_reasons')

    const day4_331 = document.querySelectorAll('.day_4_331')

    const present_331_day_4 = document.querySelector('.day_4_331_present')

    if (!day4_331Covid) {} else {
        for (var i = 0; i < day4_331.length; i++) {
            if (day4_331[i].textContent == 'COVID') {
                day4_331Covid.textContent = +day4_331Covid.textContent + 1
            }
            if (day4_331[i].textContent == 'ОРВИ') {
                day4_331Orvi.textContent = +day4_331Orvi.textContent + 1
            }
            if (day4_331[i].textContent == 'ОРЗ') {
                day4_331Orz.textContent = +day4_331Orz.textContent + 1
            }
            if (day4_331[i].textContent == 'Не простудное') {
                day4_331Oher.textContent = +day4_331Oher.textContent + 1
            }
            if (day4_331[i].textContent == 'Другое') {
                day4_331OherReasons.textContent = +day4_331OherReasons.textContent + 1
            }
        }
        if (!day4_331Covid) {} else {
            let presentVrem331
            presentVrem331 = +day4_331Covid.textContent + +day4_331Orvi.textContent + +day4_331Orz.textContent + +day4_331Oher.textContent
            present_331_day_4.textContent = +weekStudentsBase331.length - +presentVrem331
        }
    }
    // Информация по 331 группе

    // Информация по 341 группе
    const day4_341Covid = document.querySelector('.day_4_341_covid')
    const day4_341Orvi = document.querySelector('.day_4_341_orvi')
    const day4_341Orz = document.querySelector('.day_4_341_orz')
    const day4_341Oher = document.querySelector('.day_4_341_other')
    const day4_341OherReasons = document.querySelector('.day_4_341_other_reasons')

    const day4_341 = document.querySelectorAll('.day_4_341')

    const present_341_day_4 = document.querySelector('.day_4_341_present')

    if (!day4_341Covid) {} else {
        for (var i = 0; i < day4_341.length; i++) {
            if (day4_341[i].textContent == 'COVID') {
                day4_341Covid.textContent = +day4_341Covid.textContent + 1
            }
            if (day4_341[i].textContent == 'ОРВИ') {
                day4_341Orvi.textContent = +day4_341Orvi.textContent + 1
            }
            if (day4_341[i].textContent == 'ОРЗ') {
                day4_341Orz.textContent = +day4_341Orz.textContent + 1
            }
            if (day4_341[i].textContent == 'Не простудное') {
                day4_341Oher.textContent = +day4_341Oher.textContent + 1
            }
            if (day4_341[i].textContent == 'Другое') {
                day4_341OherReasons.textContent = +day4_341OherReasons.textContent + 1
            }
        }
        if (!day4_341Covid) {} else {
            let presentVrem341
            presentVrem341 = +day4_341Covid.textContent + +day4_341Orvi.textContent + +day4_341Orz.textContent + +day4_341Oher.textContent
            present_341_day_4.textContent = +weekStudentsBase341.length - +presentVrem341
        }
    }
    // Информация по 341 группе

    // Информация по 401 группе
    const day4_401Covid = document.querySelector('.day_4_401_covid')
    const day4_401Orvi = document.querySelector('.day_4_401_orvi')
    const day4_401Orz = document.querySelector('.day_4_401_orz')
    const day4_401Oher = document.querySelector('.day_4_401_other')
    const day4_401OherReasons = document.querySelector('.day_4_401_other_reasons')

    const day4_401 = document.querySelectorAll('.day_4_401')

    const present_401_day_4 = document.querySelector('.day_4_401_present')

    if (!day4_401Covid) {} else {
        for (var i = 0; i < day4_401.length; i++) {
            if (day4_401[i].textContent == 'COVID') {
                day4_401Covid.textContent = +day4_401Covid.textContent + 1
            }
            if (day4_401[i].textContent == 'ОРВИ') {
                day4_401Orvi.textContent = +day4_401Orvi.textContent + 1
            }
            if (day4_401[i].textContent == 'ОРЗ') {
                day4_401Orz.textContent = +day4_401Orz.textContent + 1
            }
            if (day4_401[i].textContent == 'Не простудное') {
                day4_401Oher.textContent = +day4_401Oher.textContent + 1
            }
            if (day4_401[i].textContent == 'Другое') {
                day4_401OherReasons.textContent = +day4_401OherReasons.textContent + 1
            }
        }
        if (!day4_401Covid) {} else {
            let presentVrem401
            presentVrem401 = +day4_401Covid.textContent + +day4_401Orvi.textContent + +day4_401Orz.textContent + +day4_401Oher.textContent
            present_401_day_4.textContent = +weekStudentsBase401.length - +presentVrem401
        }
    }
    // Информация по 401 группе

    // Информация по 402 группе
    const day4_402Covid = document.querySelector('.day_4_402_covid')
    const day4_402Orvi = document.querySelector('.day_4_402_orvi')
    const day4_402Orz = document.querySelector('.day_4_402_orz')
    const day4_402Oher = document.querySelector('.day_4_402_other')
    const day4_402OherReasons = document.querySelector('.day_4_402_other_reasons')

    const day4_402 = document.querySelectorAll('.day_4_402')

    const present_402_day_4 = document.querySelector('.day_4_402_present')

    if (!day4_402Covid) {} else {
        for (var i = 0; i < day4_402.length; i++) {
            if (day4_402[i].textContent == 'COVID') {
                day4_402Covid.textContent = +day4_402Covid.textContent + 1
            }
            if (day4_402[i].textContent == 'ОРВИ') {
                day4_402Orvi.textContent = +day4_402Orvi.textContent + 1
            }
            if (day4_402[i].textContent == 'ОРЗ') {
                day4_402Orz.textContent = +day4_402Orz.textContent + 1
            }
            if (day4_402[i].textContent == 'Не простудное') {
                day4_402Oher.textContent = +day4_402Oher.textContent + 1
            }
            if (day4_402[i].textContent == 'Другое') {
                day4_402OherReasons.textContent = +day4_402OherReasons.textContent + 1
            }
        }
        if (!day4_402Covid) {} else {
            let presentVrem402
            presentVrem402 = +day4_402Covid.textContent + +day4_402Orvi.textContent + +day4_402Orz.textContent + +day4_402Oher.textContent
            present_402_day_4.textContent = +weekStudentsBase402.length - +presentVrem402
        }
    }
    // Информация по 402 группе

    // Информация по 411 группе
    const day4_411Covid = document.querySelector('.day_4_411_covid')
    const day4_411Orvi = document.querySelector('.day_4_411_orvi')
    const day4_411Orz = document.querySelector('.day_4_411_orz')
    const day4_411Oher = document.querySelector('.day_4_411_other')
    const day4_411OherReasons = document.querySelector('.day_4_411_other_reasons')

    const day4_411 = document.querySelectorAll('.day_4_411')

    const present_411_day_4 = document.querySelector('.day_4_411_present')

    if (!day4_411Covid) {} else {
        for (var i = 0; i < day4_411.length; i++) {
            if (day4_411[i].textContent == 'COVID') {
                day4_411Covid.textContent = +day4_411Covid.textContent + 1
            }
            if (day4_411[i].textContent == 'ОРВИ') {
                day4_411Orvi.textContent = +day4_411Orvi.textContent + 1
            }
            if (day4_411[i].textContent == 'ОРЗ') {
                day4_411Orz.textContent = +day4_411Orz.textContent + 1
            }
            if (day4_411[i].textContent == 'Не простудное') {
                day4_411Oher.textContent = +day4_411Oher.textContent + 1
            }
            if (day4_411[i].textContent == 'Другое') {
                day4_411OherReasons.textContent = +day4_411OherReasons.textContent + 1
            }
        }
        if (!day4_411Covid) {} else {
            let presentVrem411
            presentVrem411 = +day4_411Covid.textContent + +day4_411Orvi.textContent + +day4_411Orz.textContent + +day4_411Oher.textContent
            present_411_day_4.textContent = +weekStudentsBase411.length - +presentVrem411
        }
    }
    // Информация по 411 группе

    // Информация по 421 группе
    const day4_421Covid = document.querySelector('.day_4_421_covid')
    const day4_421Orvi = document.querySelector('.day_4_421_orvi')
    const day4_421Orz = document.querySelector('.day_4_421_orz')
    const day4_421Oher = document.querySelector('.day_4_421_other')
    const day4_421OherReasons = document.querySelector('.day_4_421_other_reasons')

    const day4_421 = document.querySelectorAll('.day_4_421')

    const present_421_day_4 = document.querySelector('.day_4_421_present')

    if (!day4_421Covid) {} else {
        for (var i = 0; i < day4_421.length; i++) {
            if (day4_421[i].textContent == 'COVID') {
                day4_421Covid.textContent = +day4_421Covid.textContent + 1
            }
            if (day4_421[i].textContent == 'ОРВИ') {
                day4_421Orvi.textContent = +day4_421Orvi.textContent + 1
            }
            if (day4_421[i].textContent == 'ОРЗ') {
                day4_421Orz.textContent = +day4_421Orz.textContent + 1
            }
            if (day4_421[i].textContent == 'Не простудное') {
                day4_421Oher.textContent = +day4_421Oher.textContent + 1
            }
            if (day4_421[i].textContent == 'Другое') {
                day4_421OherReasons.textContent = +day4_421OherReasons.textContent + 1
            }
        }
        if (!day4_421Covid) {} else {
            let presentVrem421
            presentVrem421 = +day4_421Covid.textContent + +day4_421Orvi.textContent + +day4_421Orz.textContent + +day4_421Oher.textContent
            present_421_day_4.textContent = +weekStudentsBase421.length - +presentVrem421
        }
    }
    // Информация по 421 группе

    // Информация по 431 группе
    const day4_431Covid = document.querySelector('.day_4_431_covid')
    const day4_431Orvi = document.querySelector('.day_4_431_orvi')
    const day4_431Orz = document.querySelector('.day_4_431_orz')
    const day4_431Oher = document.querySelector('.day_4_431_other')
    const day4_431OherReasons = document.querySelector('.day_4_431_other_reasons')

    const day4_431 = document.querySelectorAll('.day_4_431')

    const present_431_day_4 = document.querySelector('.day_4_431_present')

    if (!day4_431Covid) {} else {
        for (var i = 0; i < day4_431.length; i++) {
            if (day4_431[i].textContent == 'COVID') {
                day4_431Covid.textContent = +day4_431Covid.textContent + 1
            }
            if (day4_431[i].textContent == 'ОРВИ') {
                day4_431Orvi.textContent = +day4_431Orvi.textContent + 1
            }
            if (day4_431[i].textContent == 'ОРЗ') {
                day4_431Orz.textContent = +day4_431Orz.textContent + 1
            }
            if (day4_431[i].textContent == 'Не простудное') {
                day4_431Oher.textContent = +day4_431Oher.textContent + 1
            }
            if (day4_431[i].textContent == 'Другое') {
                day4_431OherReasons.textContent = +day4_431OherReasons.textContent + 1
            }
        }
        if (!day4_431Covid) {} else {
            let presentVrem431
            presentVrem431 = +day4_431Covid.textContent + +day4_431Orvi.textContent + +day4_431Orz.textContent + +day4_431Oher.textContent
            present_431_day_4.textContent = +weekStudentsBase431.length - +presentVrem431
        }
    }
    // Информация по 431 группе

    // Информация по 441 группе
    const day4_441Covid = document.querySelector('.day_4_441_covid')
    const day4_441Orvi = document.querySelector('.day_4_441_orvi')
    const day4_441Orz = document.querySelector('.day_4_441_orz')
    const day4_441Oher = document.querySelector('.day_4_441_other')
    const day4_441OherReasons = document.querySelector('.day_4_441_other_reasons')

    const day4_441 = document.querySelectorAll('.day_4_441')

    const present_441_day_4 = document.querySelector('.day_4_441_present')

    if (!day4_441Covid) {} else {
        for (var i = 0; i < day4_441.length; i++) {
            if (day4_441[i].textContent == 'COVID') {
                day4_441Covid.textContent = +day4_441Covid.textContent + 1
            }
            if (day4_441[i].textContent == 'ОРВИ') {
                day4_441Orvi.textContent = +day4_441Orvi.textContent + 1
            }
            if (day4_441[i].textContent == 'ОРЗ') {
                day4_441Orz.textContent = +day4_441Orz.textContent + 1
            }
            if (day4_441[i].textContent == 'Не простудное') {
                day4_441Oher.textContent = +day4_441Oher.textContent + 1
            }
            if (day4_441[i].textContent == 'Другое') {
                day4_441OherReasons.textContent = +day4_441OherReasons.textContent + 1
            }
        }
        if (!day4_441Covid) {} else {
            let presentVrem441
            presentVrem441 = +day4_441Covid.textContent + +day4_441Orvi.textContent + +day4_441Orz.textContent + +day4_441Oher.textContent
            present_441_day_4.textContent = +weekStudentsBase441.length - +presentVrem441
        }
    }
    // Информация по 441 группе


    // Сводка за четвертый день
    const day_4_allStud = document.querySelector('.day_4_all_students')
    const day_4_allPresent = document.querySelector('.day_4_all_present')
    const day_4_allCovid = document.querySelector('.day_4_all_covid')
    const day_4_allOrv = document.querySelector('.day_4_all_orv')
    const day_4_allOrz = document.querySelector('.day_4_all_orz')
    const day_4_allOther = document.querySelector('.day_4_all_other')
    const day_4_allOtherReasons = document.querySelector('.day_4_all_other_reasons')

    const studentsday4 = document.querySelectorAll('.students_day_4')
    const covidday4 = document.querySelectorAll('.day_4_covid')
    const orvday4 = document.querySelectorAll('.day_4_orvi')
    const orzday4 = document.querySelectorAll('.day_4_orz')
    const otherday4 = document.querySelectorAll('.day_4_other')
    const otherReasonsday4 = document.querySelectorAll('.day_4_other_reasons')


    if (!day_4_allStud) {} else {
        var allStudday_4 = 0;
        for (var i = 0; i < studentsday4.length; i++) {
            allStudday_4 = +allStudday_4 + +parseInt(studentsday4[i].textContent);
        }
        day_4_allStud.textContent = allStudday_4
    }

    if (!day_4_allCovid) {} else {
        var day4Covid = 0;
        for (var i = 0; i < covidday4.length; i++) {
            day4Covid = +day4Covid + +parseInt(covidday4[i].textContent);
        }
        day_4_allCovid.textContent = day4Covid
    }

    if (!day_4_allOrv) {} else {
        var day4Orv = 0;
        for (var i = 0; i < orvday4.length; i++) {
            day4Orv = +day4Orv + +parseInt(orvday4[i].textContent);
        }
        day_4_allOrv.textContent = day4Orv
    }

    if (!day_4_allOrz) {} else {
        var day4Orz = 0;
        for (var i = 0; i < orzday4.length; i++) {
            day4Orz = +day4Orz + +parseInt(orzday4[i].textContent);
        }
        day_4_allOrz.textContent = day4Orz
    }

    if (!day_4_allOther) {} else {
        var day4Other = 0;
        for (var i = 0; i < otherday4.length; i++) {
            day4Other = +day4Other + +parseInt(otherday4[i].textContent);
        }
        day_4_allOther.textContent = day4Other
    }

    if (!day_4_allOtherReasons) {} else {
        var day4OtherReasons = 0;
        for (var i = 0; i < otherReasonsday4.length; i++) {
            day4OtherReasons = +day4OtherReasons + +parseInt(otherReasonsday4[i].textContent);
        }
        day_4_allOtherReasons.textContent = day4OtherReasons
    }

    if (!day_4_allPresent) {} else {
        day_4_allPresent.textContent = +day_4_allStud.textContent - (+day_4_allOtherReasons.textContent + +day_4_allOther.textContent + +day_4_allOrz.textContent + +day_4_allOrv.textContent + +day_4_allCovid.textContent)
    }
    // Сводка за четвертый день



    // ПЯТЫЙ ДЕНЬ___________________
    // Информация по 101 группе
    const day5_101Covid = document.querySelector('.day_5_101_covid')
    const day5_101Orvi = document.querySelector('.day_5_101_orvi')
    const day5_101Orz = document.querySelector('.day_5_101_orz')
    const day5_101Oher = document.querySelector('.day_5_101_other')
    const day5_101OherReasons = document.querySelector('.day_5_101_other_reasons')

    const day5_101 = document.querySelectorAll('.day_5_101')

    const present_101_day_5 = document.querySelector('.day_5_101_present')

    if (!day5_101Covid) {} else {
        for (var i = 0; i < day5_101.length; i++) {
            if (day5_101[i].textContent == 'COVID') {
                day5_101Covid.textContent = +day5_101Covid.textContent + 1
            }
            if (day5_101[i].textContent == 'ОРВИ') {
                day5_101Orvi.textContent = +day5_101Orvi.textContent + 1
            }
            if (day5_101[i].textContent == 'ОРЗ') {
                day5_101Orz.textContent = +day5_101Orz.textContent + 1
            }
            if (day5_101[i].textContent == 'Не простудное') {
                day5_101Oher.textContent = +day5_101Oher.textContent + 1
            }
            if (day5_101[i].textContent == 'Другое') {
                day5_101OherReasons.textContent = +day5_101OherReasons.textContent + 1
            }
        }
        if (!day5_101Covid) {} else {
            let presentVrem101
            presentVrem101 = +day5_101Covid.textContent + +day5_101Orvi.textContent + +day5_101Orz.textContent + +day5_101Oher.textContent
            present_101_day_5.textContent = +weekStudentsBase101.length - +presentVrem101
        }
    }
    // Информация по 101 группе

    // Информация по 111 группе
    const day5_111Covid = document.querySelector('.day_5_111_covid')
    const day5_111Orvi = document.querySelector('.day_5_111_orvi')
    const day5_111Orz = document.querySelector('.day_5_111_orz')
    const day5_111Oher = document.querySelector('.day_5_111_other')
    const day5_111OherReasons = document.querySelector('.day_5_111_other_reasons')

    const day5_111 = document.querySelectorAll('.day_5_111')

    const present_111_day_5 = document.querySelector('.day_5_111_present')

    if (!day5_111Covid) {} else {
        for (var i = 0; i < day5_111.length; i++) {
            if (day5_111[i].textContent == 'COVID') {
                day5_111Covid.textContent = +day5_111Covid.textContent + 1
            }
            if (day5_111[i].textContent == 'ОРВИ') {
                day5_111Orvi.textContent = +day5_111Orvi.textContent + 1
            }
            if (day5_111[i].textContent == 'ОРЗ') {
                day5_111Orz.textContent = +day5_111Orz.textContent + 1
            }
            if (day5_111[i].textContent == 'Не простудное') {
                day5_111Oher.textContent = +day5_111Oher.textContent + 1
            }
            if (day5_111[i].textContent == 'Другое') {
                day5_111OherReasons.textContent = +day5_111OherReasons.textContent + 1
            }
        }
        if (!day5_111Covid) {} else {
            let presentVrem111
            presentVrem111 = +day5_111Covid.textContent + +day5_111Orvi.textContent + +day5_111Orz.textContent + +day5_111Oher.textContent
            present_111_day_5.textContent = +weekStudentsBase111.length - +presentVrem111
        }
    }
    // Информация по 111 группе

    // Информация по 121 группе
    const day5_121Covid = document.querySelector('.day_5_121_covid')
    const day5_121Orvi = document.querySelector('.day_5_121_orvi')
    const day5_121Orz = document.querySelector('.day_5_121_orz')
    const day5_121Oher = document.querySelector('.day_5_121_other')
    const day5_121OherReasons = document.querySelector('.day_5_121_other_reasons')

    const day5_121 = document.querySelectorAll('.day_5_121')

    const present_121_day_5 = document.querySelector('.day_5_121_present')

    if (!day5_121Covid) {} else {
        for (var i = 0; i < day5_121.length; i++) {
            if (day5_121[i].textContent == 'COVID') {
                day5_121Covid.textContent = +day5_121Covid.textContent + 1
            }
            if (day5_121[i].textContent == 'ОРВИ') {
                day5_121Orvi.textContent = +day5_121Orvi.textContent + 1
            }
            if (day5_121[i].textContent == 'ОРЗ') {
                day5_121Orz.textContent = +day5_121Orz.textContent + 1
            }
            if (day5_121[i].textContent == 'Не простудное') {
                day5_121Oher.textContent = +day5_121Oher.textContent + 1
            }
            if (day5_121[i].textContent == 'Другое') {
                day5_121OherReasons.textContent = +day5_121OherReasons.textContent + 1
            }
        }
        if (!day5_121Covid) {} else {
            let presentVrem121
            presentVrem121 = +day5_121Covid.textContent + +day5_121Orvi.textContent + +day5_121Orz.textContent + +day5_121Oher.textContent
            present_121_day_5.textContent = +weekStudentsBase121.length - +presentVrem121
        }
    }
    // Информация по 121 группе

    // Информация по 201 группе
    const day5_201Covid = document.querySelector('.day_5_201_covid')
    const day5_201Orvi = document.querySelector('.day_5_201_orvi')
    const day5_201Orz = document.querySelector('.day_5_201_orz')
    const day5_201Oher = document.querySelector('.day_5_201_other')
    const day5_201OherReasons = document.querySelector('.day_5_201_other_reasons')

    const day5_201 = document.querySelectorAll('.day_5_201')

    const present_201_day_5 = document.querySelector('.day_5_201_present')

    if (!day5_201Covid) {} else {
        for (var i = 0; i < day5_201.length; i++) {
            if (day5_201[i].textContent == 'COVID') {
                day5_201Covid.textContent = +day5_201Covid.textContent + 1
            }
            if (day5_201[i].textContent == 'ОРВИ') {
                day5_201Orvi.textContent = +day5_201Orvi.textContent + 1
            }
            if (day5_201[i].textContent == 'ОРЗ') {
                day5_201Orz.textContent = +day5_201Orz.textContent + 1
            }
            if (day5_201[i].textContent == 'Не простудное') {
                day5_201Oher.textContent = +day5_201Oher.textContent + 1
            }
            if (day5_201[i].textContent == 'Другое') {
                day5_201OherReasons.textContent = +day5_201OherReasons.textContent + 1
            }
        }
        if (!day5_201Covid) {} else {
            let presentVrem201
            presentVrem201 = +day5_201Covid.textContent + +day5_201Orvi.textContent + +day5_201Orz.textContent + +day5_201Oher.textContent
            present_201_day_5.textContent = +weekStudentsBase201.length - +presentVrem201
        }
    }
    // Информация по 201 группе

    // Информация по 202 группе
    const day5_202Covid = document.querySelector('.day_5_202_covid')
    const day5_202Orvi = document.querySelector('.day_5_202_orvi')
    const day5_202Orz = document.querySelector('.day_5_202_orz')
    const day5_202Oher = document.querySelector('.day_5_202_other')
    const day5_202OherReasons = document.querySelector('.day_5_202_other_reasons')

    const day5_202 = document.querySelectorAll('.day_5_202')

    const present_202_day_5 = document.querySelector('.day_5_202_present')

    if (!day5_202Covid) {} else {
        for (var i = 0; i < day5_202.length; i++) {
            if (day5_202[i].textContent == 'COVID') {
                day5_202Covid.textContent = +day5_202Covid.textContent + 1
            }
            if (day5_202[i].textContent == 'ОРВИ') {
                day5_202Orvi.textContent = +day5_202Orvi.textContent + 1
            }
            if (day5_202[i].textContent == 'ОРЗ') {
                day5_202Orz.textContent = +day5_202Orz.textContent + 1
            }
            if (day5_202[i].textContent == 'Не простудное') {
                day5_202Oher.textContent = +day5_202Oher.textContent + 1
            }
            if (day5_202[i].textContent == 'Другое') {
                day5_202OherReasons.textContent = +day5_202OherReasons.textContent + 1
            }
        }
        if (!day5_202Covid) {} else {
            let presentVrem202
            presentVrem202 = +day5_202Covid.textContent + +day5_202Orvi.textContent + +day5_202Orz.textContent + +day5_202Oher.textContent
            present_202_day_5.textContent = +weekStudentsBase202.length - +presentVrem202
        }
    }
    // Информация по 202 группе

    // Информация по 211 группе
    const day5_211Covid = document.querySelector('.day_5_211_covid')
    const day5_211Orvi = document.querySelector('.day_5_211_orvi')
    const day5_211Orz = document.querySelector('.day_5_211_orz')
    const day5_211Oher = document.querySelector('.day_5_211_other')
    const day5_211OherReasons = document.querySelector('.day_5_211_other_reasons')

    const day5_211 = document.querySelectorAll('.day_5_211')

    const present_211_day_5 = document.querySelector('.day_5_211_present')

    if (!day5_211Covid) {} else {
        for (var i = 0; i < day5_211.length; i++) {
            if (day5_211[i].textContent == 'COVID') {
                day5_211Covid.textContent = +day5_211Covid.textContent + 1
            }
            if (day5_211[i].textContent == 'ОРВИ') {
                day5_211Orvi.textContent = +day5_211Orvi.textContent + 1
            }
            if (day5_211[i].textContent == 'ОРЗ') {
                day5_211Orz.textContent = +day5_211Orz.textContent + 1
            }
            if (day5_211[i].textContent == 'Не простудное') {
                day5_211Oher.textContent = +day5_211Oher.textContent + 1
            }
            if (day5_211[i].textContent == 'Другое') {
                day5_211OherReasons.textContent = +day5_211OherReasons.textContent + 1
            }
        }
        if (!day5_211Covid) {} else {
            let presentVrem211
            presentVrem211 = +day5_211Covid.textContent + +day5_211Orvi.textContent + +day5_211Orz.textContent + +day5_211Oher.textContent
            present_211_day_5.textContent = +weekStudentsBase211.length - +presentVrem211
        }
    }
    // Информация по 211 группе

    // Информация по 221 группе
    const day5_221Covid = document.querySelector('.day_5_221_covid')
    const day5_221Orvi = document.querySelector('.day_5_221_orvi')
    const day5_221Orz = document.querySelector('.day_5_221_orz')
    const day5_221Oher = document.querySelector('.day_5_221_other')
    const day5_221OherReasons = document.querySelector('.day_5_221_other_reasons')

    const day5_221 = document.querySelectorAll('.day_5_221')

    const present_221_day_5 = document.querySelector('.day_5_221_present')

    if (!day5_221Covid) {} else {
        for (var i = 0; i < day5_221.length; i++) {
            if (day5_221[i].textContent == 'COVID') {
                day5_221Covid.textContent = +day5_221Covid.textContent + 1
            }
            if (day5_221[i].textContent == 'ОРВИ') {
                day5_221Orvi.textContent = +day5_221Orvi.textContent + 1
            }
            if (day5_221[i].textContent == 'ОРЗ') {
                day5_221Orz.textContent = +day5_221Orz.textContent + 1
            }
            if (day5_221[i].textContent == 'Не простудное') {
                day5_221Oher.textContent = +day5_221Oher.textContent + 1
            }
            if (day5_221[i].textContent == 'Другое') {
                day5_221OherReasons.textContent = +day5_221OherReasons.textContent + 1
            }
        }
        if (!day5_221Covid) {} else {
            let presentVrem221
            presentVrem221 = +day5_221Covid.textContent + +day5_221Orvi.textContent + +day5_221Orz.textContent + +day5_221Oher.textContent
            present_221_day_5.textContent = +weekStudentsBase221.length - +presentVrem221
        }
    }
    // Информация по 221 группе

    // Информация по 231 группе
    const day5_231Covid = document.querySelector('.day_5_231_covid')
    const day5_231Orvi = document.querySelector('.day_5_231_orvi')
    const day5_231Orz = document.querySelector('.day_5_231_orz')
    const day5_231Oher = document.querySelector('.day_5_231_other')
    const day5_231OherReasons = document.querySelector('.day_5_231_other_reasons')

    const day5_231 = document.querySelectorAll('.day_5_231')

    const present_231_day_5 = document.querySelector('.day_5_231_present')

    if (!day5_231Covid) {} else {
        for (var i = 0; i < day5_231.length; i++) {
            if (day5_231[i].textContent == 'COVID') {
                day5_231Covid.textContent = +day5_231Covid.textContent + 1
            }
            if (day5_231[i].textContent == 'ОРВИ') {
                day5_231Orvi.textContent = +day5_231Orvi.textContent + 1
            }
            if (day5_231[i].textContent == 'ОРЗ') {
                day5_231Orz.textContent = +day5_231Orz.textContent + 1
            }
            if (day5_231[i].textContent == 'Не простудное') {
                day5_231Oher.textContent = +day5_231Oher.textContent + 1
            }
            if (day5_231[i].textContent == 'Другое') {
                day5_231OherReasons.textContent = +day5_231OherReasons.textContent + 1
            }
        }
        if (!day5_231Covid) {} else {
            let presentVrem231
            presentVrem231 = +day5_231Covid.textContent + +day5_231Orvi.textContent + +day5_231Orz.textContent + +day5_231Oher.textContent
            present_231_day_5.textContent = +weekStudentsBase231.length - +presentVrem231
        }
    }
    // Информация по 231 группе

    // Информация по 241 группе
    const day5_241Covid = document.querySelector('.day_5_241_covid')
    const day5_241Orvi = document.querySelector('.day_5_241_orvi')
    const day5_241Orz = document.querySelector('.day_5_241_orz')
    const day5_241Oher = document.querySelector('.day_5_241_other')
    const day5_241OherReasons = document.querySelector('.day_5_241_other_reasons')

    const day5_241 = document.querySelectorAll('.day_5_241')

    const present_241_day_5 = document.querySelector('.day_5_241_present')

    if (!day5_241Covid) {} else {
        for (var i = 0; i < day5_241.length; i++) {
            if (day5_241[i].textContent == 'COVID') {
                day5_241Covid.textContent = +day5_241Covid.textContent + 1
            }
            if (day5_241[i].textContent == 'ОРВИ') {
                day5_241Orvi.textContent = +day5_241Orvi.textContent + 1
            }
            if (day5_241[i].textContent == 'ОРЗ') {
                day5_241Orz.textContent = +day5_241Orz.textContent + 1
            }
            if (day5_241[i].textContent == 'Не простудное') {
                day5_241Oher.textContent = +day5_241Oher.textContent + 1
            }
            if (day5_241[i].textContent == 'Другое') {
                day5_241OherReasons.textContent = +day5_241OherReasons.textContent + 1
            }
        }
        if (!day5_241Covid) {} else {
            let presentVrem241
            presentVrem241 = +day5_241Covid.textContent + +day5_241Orvi.textContent + +day5_241Orz.textContent + +day5_241Oher.textContent
            present_241_day_5.textContent = +weekStudentsBase241.length - +presentVrem241
        }
    }
    // Информация по 241 группе

    // Информация по 301 группе
    const day5_301Covid = document.querySelector('.day_5_301_covid')
    const day5_301Orvi = document.querySelector('.day_5_301_orvi')
    const day5_301Orz = document.querySelector('.day_5_301_orz')
    const day5_301Oher = document.querySelector('.day_5_301_other')
    const day5_301OherReasons = document.querySelector('.day_5_301_other_reasons')

    const day5_301 = document.querySelectorAll('.day_5_301')

    const present_301_day_5 = document.querySelector('.day_5_301_present')

    if (!day5_301Covid) {} else {
        for (var i = 0; i < day5_301.length; i++) {
            if (day5_301[i].textContent == 'COVID') {
                day5_301Covid.textContent = +day5_301Covid.textContent + 1
            }
            if (day5_301[i].textContent == 'ОРВИ') {
                day5_301Orvi.textContent = +day5_301Orvi.textContent + 1
            }
            if (day5_301[i].textContent == 'ОРЗ') {
                day5_301Orz.textContent = +day5_301Orz.textContent + 1
            }
            if (day5_301[i].textContent == 'Не простудное') {
                day5_301Oher.textContent = +day5_301Oher.textContent + 1
            }
            if (day5_301[i].textContent == 'Другое') {
                day5_301OherReasons.textContent = +day5_301OherReasons.textContent + 1
            }
        }
        if (!day5_301Covid) {} else {
            let presentVrem301
            presentVrem301 = +day5_301Covid.textContent + +day5_301Orvi.textContent + +day5_301Orz.textContent + +day5_301Oher.textContent
            present_301_day_5.textContent = +weekStudentsBase301.length - +presentVrem301
        }
    }
    // Информация по 301 группе

    // Информация по 302 группе
    const day5_302Covid = document.querySelector('.day_5_302_covid')
    const day5_302Orvi = document.querySelector('.day_5_302_orvi')
    const day5_302Orz = document.querySelector('.day_5_302_orz')
    const day5_302Oher = document.querySelector('.day_5_302_other')
    const day5_302OherReasons = document.querySelector('.day_5_302_other_reasons')

    const day5_302 = document.querySelectorAll('.day_5_302')

    const present_302_day_5 = document.querySelector('.day_5_302_present')

    if (!day5_302Covid) {} else {
        for (var i = 0; i < day5_302.length; i++) {
            if (day5_302[i].textContent == 'COVID') {
                day5_302Covid.textContent = +day5_302Covid.textContent + 1
            }
            if (day5_302[i].textContent == 'ОРВИ') {
                day5_302Orvi.textContent = +day5_302Orvi.textContent + 1
            }
            if (day5_302[i].textContent == 'ОРЗ') {
                day5_302Orz.textContent = +day5_302Orz.textContent + 1
            }
            if (day5_302[i].textContent == 'Не простудное') {
                day5_302Oher.textContent = +day5_302Oher.textContent + 1
            }
            if (day5_302[i].textContent == 'Другое') {
                day5_302OherReasons.textContent = +day5_302OherReasons.textContent + 1
            }
        }
        if (!day5_302Covid) {} else {
            let presentVrem302
            presentVrem302 = +day5_302Covid.textContent + +day5_302Orvi.textContent + +day5_302Orz.textContent + +day5_302Oher.textContent
            present_302_day_5.textContent = +weekStudentsBase302.length - +presentVrem302
        }
    }
    // Информация по 302 группе

    // Информация по 311 группе
    const day5_311Covid = document.querySelector('.day_5_311_covid')
    const day5_311Orvi = document.querySelector('.day_5_311_orvi')
    const day5_311Orz = document.querySelector('.day_5_311_orz')
    const day5_311Oher = document.querySelector('.day_5_311_other')
    const day5_311OherReasons = document.querySelector('.day_5_311_other_reasons')

    const day5_311 = document.querySelectorAll('.day_5_311')

    const present_311_day_5 = document.querySelector('.day_5_311_present')

    if (!day5_311Covid) {} else {
        for (var i = 0; i < day5_311.length; i++) {
            if (day5_311[i].textContent == 'COVID') {
                day5_311Covid.textContent = +day5_311Covid.textContent + 1
            }
            if (day5_311[i].textContent == 'ОРВИ') {
                day5_311Orvi.textContent = +day5_311Orvi.textContent + 1
            }
            if (day5_311[i].textContent == 'ОРЗ') {
                day5_311Orz.textContent = +day5_311Orz.textContent + 1
            }
            if (day5_311[i].textContent == 'Не простудное') {
                day5_311Oher.textContent = +day5_311Oher.textContent + 1
            }
            if (day5_311[i].textContent == 'Другое') {
                day5_311OherReasons.textContent = +day5_311OherReasons.textContent + 1
            }
        }
        if (!day5_311Covid) {} else {
            let presentVrem311
            presentVrem311 = +day5_311Covid.textContent + +day5_311Orvi.textContent + +day5_311Orz.textContent + +day5_311Oher.textContent
            present_311_day_5.textContent = +weekStudentsBase311.length - +presentVrem311
        }
    }
    // Информация по 311 группе

    // Информация по 321 группе
    const day5_321Covid = document.querySelector('.day_5_321_covid')
    const day5_321Orvi = document.querySelector('.day_5_321_orvi')
    const day5_321Orz = document.querySelector('.day_5_321_orz')
    const day5_321Oher = document.querySelector('.day_5_321_other')
    const day5_321OherReasons = document.querySelector('.day_5_321_other_reasons')

    const day5_321 = document.querySelectorAll('.day_5_321')

    const present_321_day_5 = document.querySelector('.day_5_321_present')

    if (!day5_321Covid) {} else {
        for (var i = 0; i < day5_321.length; i++) {
            if (day5_321[i].textContent == 'COVID') {
                day5_321Covid.textContent = +day5_321Covid.textContent + 1
            }
            if (day5_321[i].textContent == 'ОРВИ') {
                day5_321Orvi.textContent = +day5_321Orvi.textContent + 1
            }
            if (day5_321[i].textContent == 'ОРЗ') {
                day5_321Orz.textContent = +day5_321Orz.textContent + 1
            }
            if (day5_321[i].textContent == 'Не простудное') {
                day5_321Oher.textContent = +day5_321Oher.textContent + 1
            }
            if (day5_321[i].textContent == 'Другое') {
                day5_321OherReasons.textContent = +day5_321OherReasons.textContent + 1
            }
        }
        if (!day5_321Covid) {} else {
            let presentVrem321
            presentVrem321 = +day5_321Covid.textContent + +day5_321Orvi.textContent + +day5_321Orz.textContent + +day5_321Oher.textContent
            present_321_day_5.textContent = +weekStudentsBase321.length - +presentVrem321
        }
    }
    // Информация по 321 группе

    // Информация по 331 группе
    const day5_331Covid = document.querySelector('.day_5_331_covid')
    const day5_331Orvi = document.querySelector('.day_5_331_orvi')
    const day5_331Orz = document.querySelector('.day_5_331_orz')
    const day5_331Oher = document.querySelector('.day_5_331_other')
    const day5_331OherReasons = document.querySelector('.day_5_331_other_reasons')

    const day5_331 = document.querySelectorAll('.day_5_331')

    const present_331_day_5 = document.querySelector('.day_5_331_present')

    if (!day5_331Covid) {} else {
        for (var i = 0; i < day5_331.length; i++) {
            if (day5_331[i].textContent == 'COVID') {
                day5_331Covid.textContent = +day5_331Covid.textContent + 1
            }
            if (day5_331[i].textContent == 'ОРВИ') {
                day5_331Orvi.textContent = +day5_331Orvi.textContent + 1
            }
            if (day5_331[i].textContent == 'ОРЗ') {
                day5_331Orz.textContent = +day5_331Orz.textContent + 1
            }
            if (day5_331[i].textContent == 'Не простудное') {
                day5_331Oher.textContent = +day5_331Oher.textContent + 1
            }
            if (day5_331[i].textContent == 'Другое') {
                day5_331OherReasons.textContent = +day5_331OherReasons.textContent + 1
            }
        }
        if (!day5_331Covid) {} else {
            let presentVrem331
            presentVrem331 = +day5_331Covid.textContent + +day5_331Orvi.textContent + +day5_331Orz.textContent + +day5_331Oher.textContent
            present_331_day_5.textContent = +weekStudentsBase331.length - +presentVrem331
        }
    }
    // Информация по 331 группе

    // Информация по 341 группе
    const day5_341Covid = document.querySelector('.day_5_341_covid')
    const day5_341Orvi = document.querySelector('.day_5_341_orvi')
    const day5_341Orz = document.querySelector('.day_5_341_orz')
    const day5_341Oher = document.querySelector('.day_5_341_other')
    const day5_341OherReasons = document.querySelector('.day_5_341_other_reasons')

    const day5_341 = document.querySelectorAll('.day_5_341')

    const present_341_day_5 = document.querySelector('.day_5_341_present')

    if (!day5_341Covid) {} else {
        for (var i = 0; i < day5_341.length; i++) {
            if (day5_341[i].textContent == 'COVID') {
                day5_341Covid.textContent = +day5_341Covid.textContent + 1
            }
            if (day5_341[i].textContent == 'ОРВИ') {
                day5_341Orvi.textContent = +day5_341Orvi.textContent + 1
            }
            if (day5_341[i].textContent == 'ОРЗ') {
                day5_341Orz.textContent = +day5_341Orz.textContent + 1
            }
            if (day5_341[i].textContent == 'Не простудное') {
                day5_341Oher.textContent = +day5_341Oher.textContent + 1
            }
            if (day5_341[i].textContent == 'Другое') {
                day5_341OherReasons.textContent = +day5_341OherReasons.textContent + 1
            }
        }
        if (!day5_341Covid) {} else {
            let presentVrem341
            presentVrem341 = +day5_341Covid.textContent + +day5_341Orvi.textContent + +day5_341Orz.textContent + +day5_341Oher.textContent
            present_341_day_5.textContent = +weekStudentsBase341.length - +presentVrem341
        }
    }
    // Информация по 341 группе

    // Информация по 401 группе
    const day5_401Covid = document.querySelector('.day_5_401_covid')
    const day5_401Orvi = document.querySelector('.day_5_401_orvi')
    const day5_401Orz = document.querySelector('.day_5_401_orz')
    const day5_401Oher = document.querySelector('.day_5_401_other')
    const day5_401OherReasons = document.querySelector('.day_5_401_other_reasons')

    const day5_401 = document.querySelectorAll('.day_5_401')

    const present_401_day_5 = document.querySelector('.day_5_401_present')

    if (!day5_401Covid) {} else {
        for (var i = 0; i < day5_401.length; i++) {
            if (day5_401[i].textContent == 'COVID') {
                day5_401Covid.textContent = +day5_401Covid.textContent + 1
            }
            if (day5_401[i].textContent == 'ОРВИ') {
                day5_401Orvi.textContent = +day5_401Orvi.textContent + 1
            }
            if (day5_401[i].textContent == 'ОРЗ') {
                day5_401Orz.textContent = +day5_401Orz.textContent + 1
            }
            if (day5_401[i].textContent == 'Не простудное') {
                day5_401Oher.textContent = +day5_401Oher.textContent + 1
            }
            if (day5_401[i].textContent == 'Другое') {
                day5_401OherReasons.textContent = +day5_401OherReasons.textContent + 1
            }
        }
        if (!day5_401Covid) {} else {
            let presentVrem401
            presentVrem401 = +day5_401Covid.textContent + +day5_401Orvi.textContent + +day5_401Orz.textContent + +day5_401Oher.textContent
            present_401_day_5.textContent = +weekStudentsBase401.length - +presentVrem401
        }
    }
    // Информация по 401 группе

    // Информация по 402 группе
    const day5_402Covid = document.querySelector('.day_5_402_covid')
    const day5_402Orvi = document.querySelector('.day_5_402_orvi')
    const day5_402Orz = document.querySelector('.day_5_402_orz')
    const day5_402Oher = document.querySelector('.day_5_402_other')
    const day5_402OherReasons = document.querySelector('.day_5_402_other_reasons')

    const day5_402 = document.querySelectorAll('.day_5_402')

    const present_402_day_5 = document.querySelector('.day_5_402_present')

    if (!day5_402Covid) {} else {
        for (var i = 0; i < day5_402.length; i++) {
            if (day5_402[i].textContent == 'COVID') {
                day5_402Covid.textContent = +day5_402Covid.textContent + 1
            }
            if (day5_402[i].textContent == 'ОРВИ') {
                day5_402Orvi.textContent = +day5_402Orvi.textContent + 1
            }
            if (day5_402[i].textContent == 'ОРЗ') {
                day5_402Orz.textContent = +day5_402Orz.textContent + 1
            }
            if (day5_402[i].textContent == 'Не простудное') {
                day5_402Oher.textContent = +day5_402Oher.textContent + 1
            }
            if (day5_402[i].textContent == 'Другое') {
                day5_402OherReasons.textContent = +day5_402OherReasons.textContent + 1
            }
        }
        if (!day5_402Covid) {} else {
            let presentVrem402
            presentVrem402 = +day5_402Covid.textContent + +day5_402Orvi.textContent + +day5_402Orz.textContent + +day5_402Oher.textContent
            present_402_day_5.textContent = +weekStudentsBase402.length - +presentVrem402
        }
    }
    // Информация по 402 группе

    // Информация по 411 группе
    const day5_411Covid = document.querySelector('.day_5_411_covid')
    const day5_411Orvi = document.querySelector('.day_5_411_orvi')
    const day5_411Orz = document.querySelector('.day_5_411_orz')
    const day5_411Oher = document.querySelector('.day_5_411_other')
    const day5_411OherReasons = document.querySelector('.day_5_411_other_reasons')

    const day5_411 = document.querySelectorAll('.day_5_411')

    const present_411_day_5 = document.querySelector('.day_5_411_present')

    if (!day5_411Covid) {} else {
        for (var i = 0; i < day5_411.length; i++) {
            if (day5_411[i].textContent == 'COVID') {
                day5_411Covid.textContent = +day5_411Covid.textContent + 1
            }
            if (day5_411[i].textContent == 'ОРВИ') {
                day5_411Orvi.textContent = +day5_411Orvi.textContent + 1
            }
            if (day5_411[i].textContent == 'ОРЗ') {
                day5_411Orz.textContent = +day5_411Orz.textContent + 1
            }
            if (day5_411[i].textContent == 'Не простудное') {
                day5_411Oher.textContent = +day5_411Oher.textContent + 1
            }
            if (day5_411[i].textContent == 'Другое') {
                day5_411OherReasons.textContent = +day5_411OherReasons.textContent + 1
            }
        }
        if (!day5_411Covid) {} else {
            let presentVrem411
            presentVrem411 = +day5_411Covid.textContent + +day5_411Orvi.textContent + +day5_411Orz.textContent + +day5_411Oher.textContent
            present_411_day_5.textContent = +weekStudentsBase411.length - +presentVrem411
        }
    }
    // Информация по 411 группе

    // Информация по 421 группе
    const day5_421Covid = document.querySelector('.day_5_421_covid')
    const day5_421Orvi = document.querySelector('.day_5_421_orvi')
    const day5_421Orz = document.querySelector('.day_5_421_orz')
    const day5_421Oher = document.querySelector('.day_5_421_other')
    const day5_421OherReasons = document.querySelector('.day_5_421_other_reasons')

    const day5_421 = document.querySelectorAll('.day_5_421')

    const present_421_day_5 = document.querySelector('.day_5_421_present')

    if (!day5_421Covid) {} else {
        for (var i = 0; i < day5_421.length; i++) {
            if (day5_421[i].textContent == 'COVID') {
                day5_421Covid.textContent = +day5_421Covid.textContent + 1
            }
            if (day5_421[i].textContent == 'ОРВИ') {
                day5_421Orvi.textContent = +day5_421Orvi.textContent + 1
            }
            if (day5_421[i].textContent == 'ОРЗ') {
                day5_421Orz.textContent = +day5_421Orz.textContent + 1
            }
            if (day5_421[i].textContent == 'Не простудное') {
                day5_421Oher.textContent = +day5_421Oher.textContent + 1
            }
            if (day5_421[i].textContent == 'Другое') {
                day5_421OherReasons.textContent = +day5_421OherReasons.textContent + 1
            }
        }
        if (!day5_421Covid) {} else {
            let presentVrem421
            presentVrem421 = +day5_421Covid.textContent + +day5_421Orvi.textContent + +day5_421Orz.textContent + +day5_421Oher.textContent
            present_421_day_5.textContent = +weekStudentsBase421.length - +presentVrem421
        }
    }
    // Информация по 421 группе

    // Информация по 431 группе
    const day5_431Covid = document.querySelector('.day_5_431_covid')
    const day5_431Orvi = document.querySelector('.day_5_431_orvi')
    const day5_431Orz = document.querySelector('.day_5_431_orz')
    const day5_431Oher = document.querySelector('.day_5_431_other')
    const day5_431OherReasons = document.querySelector('.day_5_431_other_reasons')

    const day5_431 = document.querySelectorAll('.day_5_431')

    const present_431_day_5 = document.querySelector('.day_5_431_present')

    if (!day5_431Covid) {} else {
        for (var i = 0; i < day5_431.length; i++) {
            if (day5_431[i].textContent == 'COVID') {
                day5_431Covid.textContent = +day5_431Covid.textContent + 1
            }
            if (day5_431[i].textContent == 'ОРВИ') {
                day5_431Orvi.textContent = +day5_431Orvi.textContent + 1
            }
            if (day5_431[i].textContent == 'ОРЗ') {
                day5_431Orz.textContent = +day5_431Orz.textContent + 1
            }
            if (day5_431[i].textContent == 'Не простудное') {
                day5_431Oher.textContent = +day5_431Oher.textContent + 1
            }
            if (day5_431[i].textContent == 'Другое') {
                day5_431OherReasons.textContent = +day5_431OherReasons.textContent + 1
            }
        }
        if (!day5_431Covid) {} else {
            let presentVrem431
            presentVrem431 = +day5_431Covid.textContent + +day5_431Orvi.textContent + +day5_431Orz.textContent + +day5_431Oher.textContent
            present_431_day_5.textContent = +weekStudentsBase431.length - +presentVrem431
        }
    }
    // Информация по 431 группе

    // Информация по 441 группе
    const day5_441Covid = document.querySelector('.day_5_441_covid')
    const day5_441Orvi = document.querySelector('.day_5_441_orvi')
    const day5_441Orz = document.querySelector('.day_5_441_orz')
    const day5_441Oher = document.querySelector('.day_5_441_other')
    const day5_441OherReasons = document.querySelector('.day_5_441_other_reasons')

    const day5_441 = document.querySelectorAll('.day_5_441')

    const present_441_day_5 = document.querySelector('.day_5_441_present')

    if (!day5_441Covid) {} else {
        for (var i = 0; i < day5_441.length; i++) {
            if (day5_441[i].textContent == 'COVID') {
                day5_441Covid.textContent = +day5_441Covid.textContent + 1
            }
            if (day5_441[i].textContent == 'ОРВИ') {
                day5_441Orvi.textContent = +day5_441Orvi.textContent + 1
            }
            if (day5_441[i].textContent == 'ОРЗ') {
                day5_441Orz.textContent = +day5_441Orz.textContent + 1
            }
            if (day5_441[i].textContent == 'Не простудное') {
                day5_441Oher.textContent = +day5_441Oher.textContent + 1
            }
            if (day5_441[i].textContent == 'Другое') {
                day5_441OherReasons.textContent = +day5_441OherReasons.textContent + 1
            }
        }
        if (!day5_441Covid) {} else {
            let presentVrem441
            presentVrem441 = +day5_441Covid.textContent + +day5_441Orvi.textContent + +day5_441Orz.textContent + +day5_441Oher.textContent
            present_441_day_5.textContent = +weekStudentsBase441.length - +presentVrem441
        }
    }
    // Информация по 441 группе


    // Сводка за пятый день
    const day_5_allStud = document.querySelector('.day_5_all_students')
    const day_5_allPresent = document.querySelector('.day_5_all_present')
    const day_5_allCovid = document.querySelector('.day_5_all_covid')
    const day_5_allOrv = document.querySelector('.day_5_all_orv')
    const day_5_allOrz = document.querySelector('.day_5_all_orz')
    const day_5_allOther = document.querySelector('.day_5_all_other')
    const day_5_allOtherReasons = document.querySelector('.day_5_all_other_reasons')

    const studentsday5 = document.querySelectorAll('.students_day_5')
    const covidday5 = document.querySelectorAll('.day_5_covid')
    const orvday5 = document.querySelectorAll('.day_5_orvi')
    const orzday5 = document.querySelectorAll('.day_5_orz')
    const otherday5 = document.querySelectorAll('.day_5_other')
    const otherReasonsday5 = document.querySelectorAll('.day_5_other_reasons')


    if (!day_5_allStud) {} else {
        var allStudday_5 = 0;
        for (var i = 0; i < studentsday5.length; i++) {
            allStudday_5 = +allStudday_5 + +parseInt(studentsday5[i].textContent);
        }
        day_5_allStud.textContent = allStudday_5
    }

    if (!day_5_allCovid) {} else {
        var day5Covid = 0;
        for (var i = 0; i < covidday5.length; i++) {
            day5Covid = +day5Covid + +parseInt(covidday5[i].textContent);
        }
        day_5_allCovid.textContent = day5Covid
    }

    if (!day_5_allOrv) {} else {
        var day5Orv = 0;
        for (var i = 0; i < orvday5.length; i++) {
            day5Orv = +day5Orv + +parseInt(orvday5[i].textContent);
        }
        day_5_allOrv.textContent = day5Orv
    }

    if (!day_5_allOrz) {} else {
        var day5Orz = 0;
        for (var i = 0; i < orzday5.length; i++) {
            day5Orz = +day5Orz + +parseInt(orzday5[i].textContent);
        }
        day_5_allOrz.textContent = day5Orz
    }

    if (!day_5_allOther) {} else {
        var day5Other = 0;
        for (var i = 0; i < otherday5.length; i++) {
            day5Other = +day5Other + +parseInt(otherday5[i].textContent);
        }
        day_5_allOther.textContent = day5Other
    }

    if (!day_5_allOtherReasons) {} else {
        var day5OtherReasons = 0;
        for (var i = 0; i < otherReasonsday5.length; i++) {
            day5OtherReasons = +day5OtherReasons + +parseInt(otherReasonsday5[i].textContent);
        }
        day_5_allOtherReasons.textContent = day5OtherReasons
    }

    if (!day_5_allPresent) {} else {
        day_5_allPresent.textContent = +day_5_allStud.textContent - (+day_5_allOtherReasons.textContent + +day_5_allOther.textContent + +day_5_allOrz.textContent + +day_5_allOrv.textContent + +day_5_allCovid.textContent)
    }
    // Сводка за пятый день



    // ШЕСТОЙ ДЕНЬ___________________
    // Информация по 101 группе
    const day6_101Covid = document.querySelector('.day_6_101_covid')
    const day6_101Orvi = document.querySelector('.day_6_101_orvi')
    const day6_101Orz = document.querySelector('.day_6_101_orz')
    const day6_101Oher = document.querySelector('.day_6_101_other')
    const day6_101OherReasons = document.querySelector('.day_6_101_other_reasons')

    const day6_101 = document.querySelectorAll('.day_6_101')

    const present_101_day_6 = document.querySelector('.day_6_101_present')

    if (!day6_101Covid) {} else {
        for (var i = 0; i < day6_101.length; i++) {
            if (day6_101[i].textContent == 'COVID') {
                day6_101Covid.textContent = +day6_101Covid.textContent + 1
            }
            if (day6_101[i].textContent == 'ОРВИ') {
                day6_101Orvi.textContent = +day6_101Orvi.textContent + 1
            }
            if (day6_101[i].textContent == 'ОРЗ') {
                day6_101Orz.textContent = +day6_101Orz.textContent + 1
            }
            if (day6_101[i].textContent == 'Не простудное') {
                day6_101Oher.textContent = +day6_101Oher.textContent + 1
            }
            if (day6_101[i].textContent == 'Другое') {
                day6_101OherReasons.textContent = +day6_101OherReasons.textContent + 1
            }
        }
        if (!day6_101Covid) {} else {
            let presentVrem101
            presentVrem101 = +day6_101Covid.textContent + +day6_101Orvi.textContent + +day6_101Orz.textContent + +day6_101Oher.textContent
            present_101_day_6.textContent = +weekStudentsBase101.length - +presentVrem101
        }
    }
    // Информация по 101 группе

    // Информация по 111 группе
    const day6_111Covid = document.querySelector('.day_6_111_covid')
    const day6_111Orvi = document.querySelector('.day_6_111_orvi')
    const day6_111Orz = document.querySelector('.day_6_111_orz')
    const day6_111Oher = document.querySelector('.day_6_111_other')
    const day6_111OherReasons = document.querySelector('.day_6_111_other_reasons')

    const day6_111 = document.querySelectorAll('.day_6_111')

    const present_111_day_6 = document.querySelector('.day_6_111_present')

    if (!day6_111Covid) {} else {
        for (var i = 0; i < day6_111.length; i++) {
            if (day6_111[i].textContent == 'COVID') {
                day6_111Covid.textContent = +day6_111Covid.textContent + 1
            }
            if (day6_111[i].textContent == 'ОРВИ') {
                day6_111Orvi.textContent = +day6_111Orvi.textContent + 1
            }
            if (day6_111[i].textContent == 'ОРЗ') {
                day6_111Orz.textContent = +day6_111Orz.textContent + 1
            }
            if (day6_111[i].textContent == 'Не простудное') {
                day6_111Oher.textContent = +day6_111Oher.textContent + 1
            }
            if (day6_111[i].textContent == 'Другое') {
                day6_111OherReasons.textContent = +day6_111OherReasons.textContent + 1
            }
        }
        if (!day6_111Covid) {} else {
            let presentVrem111
            presentVrem111 = +day6_111Covid.textContent + +day6_111Orvi.textContent + +day6_111Orz.textContent + +day6_111Oher.textContent
            present_111_day_6.textContent = +weekStudentsBase111.length - +presentVrem111
        }
    }
    // Информация по 111 группе

    // Информация по 121 группе
    const day6_121Covid = document.querySelector('.day_6_121_covid')
    const day6_121Orvi = document.querySelector('.day_6_121_orvi')
    const day6_121Orz = document.querySelector('.day_6_121_orz')
    const day6_121Oher = document.querySelector('.day_6_121_other')
    const day6_121OherReasons = document.querySelector('.day_6_121_other_reasons')

    const day6_121 = document.querySelectorAll('.day_6_121')

    const present_121_day_6 = document.querySelector('.day_6_121_present')

    if (!day6_121Covid) {} else {
        for (var i = 0; i < day6_121.length; i++) {
            if (day6_121[i].textContent == 'COVID') {
                day6_121Covid.textContent = +day6_121Covid.textContent + 1
            }
            if (day6_121[i].textContent == 'ОРВИ') {
                day6_121Orvi.textContent = +day6_121Orvi.textContent + 1
            }
            if (day6_121[i].textContent == 'ОРЗ') {
                day6_121Orz.textContent = +day6_121Orz.textContent + 1
            }
            if (day6_121[i].textContent == 'Не простудное') {
                day6_121Oher.textContent = +day6_121Oher.textContent + 1
            }
            if (day6_121[i].textContent == 'Другое') {
                day6_121OherReasons.textContent = +day6_121OherReasons.textContent + 1
            }
        }
        if (!day6_121Covid) {} else {
            let presentVrem121
            presentVrem121 = +day6_121Covid.textContent + +day6_121Orvi.textContent + +day6_121Orz.textContent + +day6_121Oher.textContent
            present_121_day_6.textContent = +weekStudentsBase121.length - +presentVrem121
        }
    }
    // Информация по 121 группе

    // Информация по 201 группе
    const day6_201Covid = document.querySelector('.day_6_201_covid')
    const day6_201Orvi = document.querySelector('.day_6_201_orvi')
    const day6_201Orz = document.querySelector('.day_6_201_orz')
    const day6_201Oher = document.querySelector('.day_6_201_other')
    const day6_201OherReasons = document.querySelector('.day_6_201_other_reasons')

    const day6_201 = document.querySelectorAll('.day_6_201')

    const present_201_day_6 = document.querySelector('.day_6_201_present')

    if (!day6_201Covid) {} else {
        for (var i = 0; i < day6_201.length; i++) {
            if (day6_201[i].textContent == 'COVID') {
                day6_201Covid.textContent = +day6_201Covid.textContent + 1
            }
            if (day6_201[i].textContent == 'ОРВИ') {
                day6_201Orvi.textContent = +day6_201Orvi.textContent + 1
            }
            if (day6_201[i].textContent == 'ОРЗ') {
                day6_201Orz.textContent = +day6_201Orz.textContent + 1
            }
            if (day6_201[i].textContent == 'Не простудное') {
                day6_201Oher.textContent = +day6_201Oher.textContent + 1
            }
            if (day6_201[i].textContent == 'Другое') {
                day6_201OherReasons.textContent = +day6_201OherReasons.textContent + 1
            }
        }
        if (!day6_201Covid) {} else {
            let presentVrem201
            presentVrem201 = +day6_201Covid.textContent + +day6_201Orvi.textContent + +day6_201Orz.textContent + +day6_201Oher.textContent
            present_201_day_6.textContent = +weekStudentsBase201.length - +presentVrem201
        }
    }
    // Информация по 201 группе

    // Информация по 202 группе
    const day6_202Covid = document.querySelector('.day_6_202_covid')
    const day6_202Orvi = document.querySelector('.day_6_202_orvi')
    const day6_202Orz = document.querySelector('.day_6_202_orz')
    const day6_202Oher = document.querySelector('.day_6_202_other')
    const day6_202OherReasons = document.querySelector('.day_6_202_other_reasons')

    const day6_202 = document.querySelectorAll('.day_6_202')

    const present_202_day_6 = document.querySelector('.day_6_202_present')

    if (!day6_202Covid) {} else {
        for (var i = 0; i < day6_202.length; i++) {
            if (day6_202[i].textContent == 'COVID') {
                day6_202Covid.textContent = +day6_202Covid.textContent + 1
            }
            if (day6_202[i].textContent == 'ОРВИ') {
                day6_202Orvi.textContent = +day6_202Orvi.textContent + 1
            }
            if (day6_202[i].textContent == 'ОРЗ') {
                day6_202Orz.textContent = +day6_202Orz.textContent + 1
            }
            if (day6_202[i].textContent == 'Не простудное') {
                day6_202Oher.textContent = +day6_202Oher.textContent + 1
            }
            if (day6_202[i].textContent == 'Другое') {
                day6_202OherReasons.textContent = +day6_202OherReasons.textContent + 1
            }
        }
        if (!day6_202Covid) {} else {
            let presentVrem202
            presentVrem202 = +day6_202Covid.textContent + +day6_202Orvi.textContent + +day6_202Orz.textContent + +day6_202Oher.textContent
            present_202_day_6.textContent = +weekStudentsBase202.length - +presentVrem202
        }
    }
    // Информация по 202 группе

    // Информация по 211 группе
    const day6_211Covid = document.querySelector('.day_6_211_covid')
    const day6_211Orvi = document.querySelector('.day_6_211_orvi')
    const day6_211Orz = document.querySelector('.day_6_211_orz')
    const day6_211Oher = document.querySelector('.day_6_211_other')
    const day6_211OherReasons = document.querySelector('.day_6_211_other_reasons')

    const day6_211 = document.querySelectorAll('.day_6_211')

    const present_211_day_6 = document.querySelector('.day_6_211_present')

    if (!day6_211Covid) {} else {
        for (var i = 0; i < day6_211.length; i++) {
            if (day6_211[i].textContent == 'COVID') {
                day6_211Covid.textContent = +day6_211Covid.textContent + 1
            }
            if (day6_211[i].textContent == 'ОРВИ') {
                day6_211Orvi.textContent = +day6_211Orvi.textContent + 1
            }
            if (day6_211[i].textContent == 'ОРЗ') {
                day6_211Orz.textContent = +day6_211Orz.textContent + 1
            }
            if (day6_211[i].textContent == 'Не простудное') {
                day6_211Oher.textContent = +day6_211Oher.textContent + 1
            }
            if (day6_211[i].textContent == 'Другое') {
                day6_211OherReasons.textContent = +day6_211OherReasons.textContent + 1
            }
        }
        if (!day6_211Covid) {} else {
            let presentVrem211
            presentVrem211 = +day6_211Covid.textContent + +day6_211Orvi.textContent + +day6_211Orz.textContent + +day6_211Oher.textContent
            present_211_day_6.textContent = +weekStudentsBase211.length - +presentVrem211
        }
    }
    // Информация по 211 группе

    // Информация по 221 группе
    const day6_221Covid = document.querySelector('.day_6_221_covid')
    const day6_221Orvi = document.querySelector('.day_6_221_orvi')
    const day6_221Orz = document.querySelector('.day_6_221_orz')
    const day6_221Oher = document.querySelector('.day_6_221_other')
    const day6_221OherReasons = document.querySelector('.day_6_221_other_reasons')

    const day6_221 = document.querySelectorAll('.day_6_221')

    const present_221_day_6 = document.querySelector('.day_6_221_present')

    if (!day6_221Covid) {} else {
        for (var i = 0; i < day6_221.length; i++) {
            if (day6_221[i].textContent == 'COVID') {
                day6_221Covid.textContent = +day6_221Covid.textContent + 1
            }
            if (day6_221[i].textContent == 'ОРВИ') {
                day6_221Orvi.textContent = +day6_221Orvi.textContent + 1
            }
            if (day6_221[i].textContent == 'ОРЗ') {
                day6_221Orz.textContent = +day6_221Orz.textContent + 1
            }
            if (day6_221[i].textContent == 'Не простудное') {
                day6_221Oher.textContent = +day6_221Oher.textContent + 1
            }
            if (day6_221[i].textContent == 'Другое') {
                day6_221OherReasons.textContent = +day6_221OherReasons.textContent + 1
            }
        }
        if (!day6_221Covid) {} else {
            let presentVrem221
            presentVrem221 = +day6_221Covid.textContent + +day6_221Orvi.textContent + +day6_221Orz.textContent + +day6_221Oher.textContent
            present_221_day_6.textContent = +weekStudentsBase221.length - +presentVrem221
        }
    }
    // Информация по 221 группе

    // Информация по 231 группе
    const day6_231Covid = document.querySelector('.day_6_231_covid')
    const day6_231Orvi = document.querySelector('.day_6_231_orvi')
    const day6_231Orz = document.querySelector('.day_6_231_orz')
    const day6_231Oher = document.querySelector('.day_6_231_other')
    const day6_231OherReasons = document.querySelector('.day_6_231_other_reasons')

    const day6_231 = document.querySelectorAll('.day_6_231')

    const present_231_day_6 = document.querySelector('.day_6_231_present')

    if (!day6_231Covid) {} else {
        for (var i = 0; i < day6_231.length; i++) {
            if (day6_231[i].textContent == 'COVID') {
                day6_231Covid.textContent = +day6_231Covid.textContent + 1
            }
            if (day6_231[i].textContent == 'ОРВИ') {
                day6_231Orvi.textContent = +day6_231Orvi.textContent + 1
            }
            if (day6_231[i].textContent == 'ОРЗ') {
                day6_231Orz.textContent = +day6_231Orz.textContent + 1
            }
            if (day6_231[i].textContent == 'Не простудное') {
                day6_231Oher.textContent = +day6_231Oher.textContent + 1
            }
            if (day6_231[i].textContent == 'Другое') {
                day6_231OherReasons.textContent = +day6_231OherReasons.textContent + 1
            }
        }
        if (!day6_231Covid) {} else {
            let presentVrem231
            presentVrem231 = +day6_231Covid.textContent + +day6_231Orvi.textContent + +day6_231Orz.textContent + +day6_231Oher.textContent
            present_231_day_6.textContent = +weekStudentsBase231.length - +presentVrem231
        }
    }
    // Информация по 231 группе

    // Информация по 241 группе
    const day6_241Covid = document.querySelector('.day_6_241_covid')
    const day6_241Orvi = document.querySelector('.day_6_241_orvi')
    const day6_241Orz = document.querySelector('.day_6_241_orz')
    const day6_241Oher = document.querySelector('.day_6_241_other')
    const day6_241OherReasons = document.querySelector('.day_6_241_other_reasons')

    const day6_241 = document.querySelectorAll('.day_6_241')

    const present_241_day_6 = document.querySelector('.day_6_241_present')

    if (!day6_241Covid) {} else {
        for (var i = 0; i < day6_241.length; i++) {
            if (day6_241[i].textContent == 'COVID') {
                day6_241Covid.textContent = +day6_241Covid.textContent + 1
            }
            if (day6_241[i].textContent == 'ОРВИ') {
                day6_241Orvi.textContent = +day6_241Orvi.textContent + 1
            }
            if (day6_241[i].textContent == 'ОРЗ') {
                day6_241Orz.textContent = +day6_241Orz.textContent + 1
            }
            if (day6_241[i].textContent == 'Не простудное') {
                day6_241Oher.textContent = +day6_241Oher.textContent + 1
            }
            if (day6_241[i].textContent == 'Другое') {
                day6_241OherReasons.textContent = +day6_241OherReasons.textContent + 1
            }
        }
        if (!day6_241Covid) {} else {
            let presentVrem241
            presentVrem241 = +day6_241Covid.textContent + +day6_241Orvi.textContent + +day6_241Orz.textContent + +day6_241Oher.textContent
            present_241_day_6.textContent = +weekStudentsBase241.length - +presentVrem241
        }
    }
    // Информация по 241 группе

    // Информация по 301 группе
    const day6_301Covid = document.querySelector('.day_6_301_covid')
    const day6_301Orvi = document.querySelector('.day_6_301_orvi')
    const day6_301Orz = document.querySelector('.day_6_301_orz')
    const day6_301Oher = document.querySelector('.day_6_301_other')
    const day6_301OherReasons = document.querySelector('.day_6_301_other_reasons')

    const day6_301 = document.querySelectorAll('.day_6_301')

    const present_301_day_6 = document.querySelector('.day_6_301_present')

    if (!day6_301Covid) {} else {
        for (var i = 0; i < day6_301.length; i++) {
            if (day6_301[i].textContent == 'COVID') {
                day6_301Covid.textContent = +day6_301Covid.textContent + 1
            }
            if (day6_301[i].textContent == 'ОРВИ') {
                day6_301Orvi.textContent = +day6_301Orvi.textContent + 1
            }
            if (day6_301[i].textContent == 'ОРЗ') {
                day6_301Orz.textContent = +day6_301Orz.textContent + 1
            }
            if (day6_301[i].textContent == 'Не простудное') {
                day6_301Oher.textContent = +day6_301Oher.textContent + 1
            }
            if (day6_301[i].textContent == 'Другое') {
                day6_301OherReasons.textContent = +day6_301OherReasons.textContent + 1
            }
        }
        if (!day6_301Covid) {} else {
            let presentVrem301
            presentVrem301 = +day6_301Covid.textContent + +day6_301Orvi.textContent + +day6_301Orz.textContent + +day6_301Oher.textContent
            present_301_day_6.textContent = +weekStudentsBase301.length - +presentVrem301
        }
    }
    // Информация по 301 группе

    // Информация по 302 группе
    const day6_302Covid = document.querySelector('.day_6_302_covid')
    const day6_302Orvi = document.querySelector('.day_6_302_orvi')
    const day6_302Orz = document.querySelector('.day_6_302_orz')
    const day6_302Oher = document.querySelector('.day_6_302_other')
    const day6_302OherReasons = document.querySelector('.day_6_302_other_reasons')

    const day6_302 = document.querySelectorAll('.day_6_302')

    const present_302_day_6 = document.querySelector('.day_6_302_present')

    if (!day6_302Covid) {} else {
        for (var i = 0; i < day6_302.length; i++) {
            if (day6_302[i].textContent == 'COVID') {
                day6_302Covid.textContent = +day6_302Covid.textContent + 1
            }
            if (day6_302[i].textContent == 'ОРВИ') {
                day6_302Orvi.textContent = +day6_302Orvi.textContent + 1
            }
            if (day6_302[i].textContent == 'ОРЗ') {
                day6_302Orz.textContent = +day6_302Orz.textContent + 1
            }
            if (day6_302[i].textContent == 'Не простудное') {
                day6_302Oher.textContent = +day6_302Oher.textContent + 1
            }
            if (day6_302[i].textContent == 'Другое') {
                day6_302OherReasons.textContent = +day6_302OherReasons.textContent + 1
            }
        }
        if (!day6_302Covid) {} else {
            let presentVrem302
            presentVrem302 = +day6_302Covid.textContent + +day6_302Orvi.textContent + +day6_302Orz.textContent + +day6_302Oher.textContent
            present_302_day_6.textContent = +weekStudentsBase302.length - +presentVrem302
        }
    }
    // Информация по 302 группе

    // Информация по 311 группе
    const day6_311Covid = document.querySelector('.day_6_311_covid')
    const day6_311Orvi = document.querySelector('.day_6_311_orvi')
    const day6_311Orz = document.querySelector('.day_6_311_orz')
    const day6_311Oher = document.querySelector('.day_6_311_other')
    const day6_311OherReasons = document.querySelector('.day_6_311_other_reasons')

    const day6_311 = document.querySelectorAll('.day_6_311')

    const present_311_day_6 = document.querySelector('.day_6_311_present')

    if (!day6_311Covid) {} else {
        for (var i = 0; i < day6_311.length; i++) {
            if (day6_311[i].textContent == 'COVID') {
                day6_311Covid.textContent = +day6_311Covid.textContent + 1
            }
            if (day6_311[i].textContent == 'ОРВИ') {
                day6_311Orvi.textContent = +day6_311Orvi.textContent + 1
            }
            if (day6_311[i].textContent == 'ОРЗ') {
                day6_311Orz.textContent = +day6_311Orz.textContent + 1
            }
            if (day6_311[i].textContent == 'Не простудное') {
                day6_311Oher.textContent = +day6_311Oher.textContent + 1
            }
            if (day6_311[i].textContent == 'Другое') {
                day6_311OherReasons.textContent = +day6_311OherReasons.textContent + 1
            }
        }
        if (!day6_311Covid) {} else {
            let presentVrem311
            presentVrem311 = +day6_311Covid.textContent + +day6_311Orvi.textContent + +day6_311Orz.textContent + +day6_311Oher.textContent
            present_311_day_6.textContent = +weekStudentsBase311.length - +presentVrem311
        }
    }
    // Информация по 311 группе

    // Информация по 321 группе
    const day6_321Covid = document.querySelector('.day_6_321_covid')
    const day6_321Orvi = document.querySelector('.day_6_321_orvi')
    const day6_321Orz = document.querySelector('.day_6_321_orz')
    const day6_321Oher = document.querySelector('.day_6_321_other')
    const day6_321OherReasons = document.querySelector('.day_6_321_other_reasons')

    const day6_321 = document.querySelectorAll('.day_6_321')

    const present_321_day_6 = document.querySelector('.day_6_321_present')

    if (!day6_321Covid) {} else {
        for (var i = 0; i < day6_321.length; i++) {
            if (day6_321[i].textContent == 'COVID') {
                day6_321Covid.textContent = +day6_321Covid.textContent + 1
            }
            if (day6_321[i].textContent == 'ОРВИ') {
                day6_321Orvi.textContent = +day6_321Orvi.textContent + 1
            }
            if (day6_321[i].textContent == 'ОРЗ') {
                day6_321Orz.textContent = +day6_321Orz.textContent + 1
            }
            if (day6_321[i].textContent == 'Не простудное') {
                day6_321Oher.textContent = +day6_321Oher.textContent + 1
            }
            if (day6_321[i].textContent == 'Другое') {
                day6_321OherReasons.textContent = +day6_321OherReasons.textContent + 1
            }
        }
        if (!day6_321Covid) {} else {
            let presentVrem321
            presentVrem321 = +day6_321Covid.textContent + +day6_321Orvi.textContent + +day6_321Orz.textContent + +day6_321Oher.textContent
            present_321_day_6.textContent = +weekStudentsBase321.length - +presentVrem321
        }
    }
    // Информация по 321 группе

    // Информация по 331 группе
    const day6_331Covid = document.querySelector('.day_6_331_covid')
    const day6_331Orvi = document.querySelector('.day_6_331_orvi')
    const day6_331Orz = document.querySelector('.day_6_331_orz')
    const day6_331Oher = document.querySelector('.day_6_331_other')
    const day6_331OherReasons = document.querySelector('.day_6_331_other_reasons')

    const day6_331 = document.querySelectorAll('.day_6_331')

    const present_331_day_6 = document.querySelector('.day_6_331_present')

    if (!day6_331Covid) {} else {
        for (var i = 0; i < day6_331.length; i++) {
            if (day6_331[i].textContent == 'COVID') {
                day6_331Covid.textContent = +day6_331Covid.textContent + 1
            }
            if (day6_331[i].textContent == 'ОРВИ') {
                day6_331Orvi.textContent = +day6_331Orvi.textContent + 1
            }
            if (day6_331[i].textContent == 'ОРЗ') {
                day6_331Orz.textContent = +day6_331Orz.textContent + 1
            }
            if (day6_331[i].textContent == 'Не простудное') {
                day6_331Oher.textContent = +day6_331Oher.textContent + 1
            }
            if (day6_331[i].textContent == 'Другое') {
                day6_331OherReasons.textContent = +day6_331OherReasons.textContent + 1
            }
        }
        if (!day6_331Covid) {} else {
            let presentVrem331
            presentVrem331 = +day6_331Covid.textContent + +day6_331Orvi.textContent + +day6_331Orz.textContent + +day6_331Oher.textContent
            present_331_day_6.textContent = +weekStudentsBase331.length - +presentVrem331
        }
    }
    // Информация по 331 группе

    // Информация по 341 группе
    const day6_341Covid = document.querySelector('.day_6_341_covid')
    const day6_341Orvi = document.querySelector('.day_6_341_orvi')
    const day6_341Orz = document.querySelector('.day_6_341_orz')
    const day6_341Oher = document.querySelector('.day_6_341_other')
    const day6_341OherReasons = document.querySelector('.day_6_341_other_reasons')

    const day6_341 = document.querySelectorAll('.day_6_341')

    const present_341_day_6 = document.querySelector('.day_6_341_present')

    if (!day6_341Covid) {} else {
        for (var i = 0; i < day6_341.length; i++) {
            if (day6_341[i].textContent == 'COVID') {
                day6_341Covid.textContent = +day6_341Covid.textContent + 1
            }
            if (day6_341[i].textContent == 'ОРВИ') {
                day6_341Orvi.textContent = +day6_341Orvi.textContent + 1
            }
            if (day6_341[i].textContent == 'ОРЗ') {
                day6_341Orz.textContent = +day6_341Orz.textContent + 1
            }
            if (day6_341[i].textContent == 'Не простудное') {
                day6_341Oher.textContent = +day6_341Oher.textContent + 1
            }
            if (day6_341[i].textContent == 'Другое') {
                day6_341OherReasons.textContent = +day6_341OherReasons.textContent + 1
            }
        }
        if (!day6_341Covid) {} else {
            let presentVrem341
            presentVrem341 = +day6_341Covid.textContent + +day6_341Orvi.textContent + +day6_341Orz.textContent + +day6_341Oher.textContent
            present_341_day_6.textContent = +weekStudentsBase341.length - +presentVrem341
        }
    }
    // Информация по 341 группе

    // Информация по 401 группе
    const day6_401Covid = document.querySelector('.day_6_401_covid')
    const day6_401Orvi = document.querySelector('.day_6_401_orvi')
    const day6_401Orz = document.querySelector('.day_6_401_orz')
    const day6_401Oher = document.querySelector('.day_6_401_other')
    const day6_401OherReasons = document.querySelector('.day_6_401_other_reasons')

    const day6_401 = document.querySelectorAll('.day_6_401')

    const present_401_day_6 = document.querySelector('.day_6_401_present')

    if (!day6_401Covid) {} else {
        for (var i = 0; i < day6_401.length; i++) {
            if (day6_401[i].textContent == 'COVID') {
                day6_401Covid.textContent = +day6_401Covid.textContent + 1
            }
            if (day6_401[i].textContent == 'ОРВИ') {
                day6_401Orvi.textContent = +day6_401Orvi.textContent + 1
            }
            if (day6_401[i].textContent == 'ОРЗ') {
                day6_401Orz.textContent = +day6_401Orz.textContent + 1
            }
            if (day6_401[i].textContent == 'Не простудное') {
                day6_401Oher.textContent = +day6_401Oher.textContent + 1
            }
            if (day6_401[i].textContent == 'Другое') {
                day6_401OherReasons.textContent = +day6_401OherReasons.textContent + 1
            }
        }
        if (!day6_401Covid) {} else {
            let presentVrem401
            presentVrem401 = +day6_401Covid.textContent + +day6_401Orvi.textContent + +day6_401Orz.textContent + +day6_401Oher.textContent
            present_401_day_6.textContent = +weekStudentsBase401.length - +presentVrem401
        }
    }
    // Информация по 401 группе

    // Информация по 402 группе
    const day6_402Covid = document.querySelector('.day_6_402_covid')
    const day6_402Orvi = document.querySelector('.day_6_402_orvi')
    const day6_402Orz = document.querySelector('.day_6_402_orz')
    const day6_402Oher = document.querySelector('.day_6_402_other')
    const day6_402OherReasons = document.querySelector('.day_6_402_other_reasons')

    const day6_402 = document.querySelectorAll('.day_6_402')

    const present_402_day_6 = document.querySelector('.day_6_402_present')

    if (!day6_402Covid) {} else {
        for (var i = 0; i < day6_402.length; i++) {
            if (day6_402[i].textContent == 'COVID') {
                day6_402Covid.textContent = +day6_402Covid.textContent + 1
            }
            if (day6_402[i].textContent == 'ОРВИ') {
                day6_402Orvi.textContent = +day6_402Orvi.textContent + 1
            }
            if (day6_402[i].textContent == 'ОРЗ') {
                day6_402Orz.textContent = +day6_402Orz.textContent + 1
            }
            if (day6_402[i].textContent == 'Не простудное') {
                day6_402Oher.textContent = +day6_402Oher.textContent + 1
            }
            if (day6_402[i].textContent == 'Другое') {
                day6_402OherReasons.textContent = +day6_402OherReasons.textContent + 1
            }
        }
        if (!day6_402Covid) {} else {
            let presentVrem402
            presentVrem402 = +day6_402Covid.textContent + +day6_402Orvi.textContent + +day6_402Orz.textContent + +day6_402Oher.textContent
            present_402_day_6.textContent = +weekStudentsBase402.length - +presentVrem402
        }
    }
    // Информация по 402 группе

    // Информация по 411 группе
    const day6_411Covid = document.querySelector('.day_6_411_covid')
    const day6_411Orvi = document.querySelector('.day_6_411_orvi')
    const day6_411Orz = document.querySelector('.day_6_411_orz')
    const day6_411Oher = document.querySelector('.day_6_411_other')
    const day6_411OherReasons = document.querySelector('.day_6_411_other_reasons')

    const day6_411 = document.querySelectorAll('.day_6_411')

    const present_411_day_6 = document.querySelector('.day_6_411_present')

    if (!day6_411Covid) {} else {
        for (var i = 0; i < day6_411.length; i++) {
            if (day6_411[i].textContent == 'COVID') {
                day6_411Covid.textContent = +day6_411Covid.textContent + 1
            }
            if (day6_411[i].textContent == 'ОРВИ') {
                day6_411Orvi.textContent = +day6_411Orvi.textContent + 1
            }
            if (day6_411[i].textContent == 'ОРЗ') {
                day6_411Orz.textContent = +day6_411Orz.textContent + 1
            }
            if (day6_411[i].textContent == 'Не простудное') {
                day6_411Oher.textContent = +day6_411Oher.textContent + 1
            }
            if (day6_411[i].textContent == 'Другое') {
                day6_411OherReasons.textContent = +day6_411OherReasons.textContent + 1
            }
        }
        if (!day6_411Covid) {} else {
            let presentVrem411
            presentVrem411 = +day6_411Covid.textContent + +day6_411Orvi.textContent + +day6_411Orz.textContent + +day6_411Oher.textContent
            present_411_day_6.textContent = +weekStudentsBase411.length - +presentVrem411
        }
    }
    // Информация по 411 группе

    // Информация по 421 группе
    const day6_421Covid = document.querySelector('.day_6_421_covid')
    const day6_421Orvi = document.querySelector('.day_6_421_orvi')
    const day6_421Orz = document.querySelector('.day_6_421_orz')
    const day6_421Oher = document.querySelector('.day_6_421_other')
    const day6_421OherReasons = document.querySelector('.day_6_421_other_reasons')

    const day6_421 = document.querySelectorAll('.day_6_421')

    const present_421_day_6 = document.querySelector('.day_6_421_present')

    if (!day6_421Covid) {} else {
        for (var i = 0; i < day6_421.length; i++) {
            if (day6_421[i].textContent == 'COVID') {
                day6_421Covid.textContent = +day6_421Covid.textContent + 1
            }
            if (day6_421[i].textContent == 'ОРВИ') {
                day6_421Orvi.textContent = +day6_421Orvi.textContent + 1
            }
            if (day6_421[i].textContent == 'ОРЗ') {
                day6_421Orz.textContent = +day6_421Orz.textContent + 1
            }
            if (day6_421[i].textContent == 'Не простудное') {
                day6_421Oher.textContent = +day6_421Oher.textContent + 1
            }
            if (day6_421[i].textContent == 'Другое') {
                day6_421OherReasons.textContent = +day6_421OherReasons.textContent + 1
            }
        }
        if (!day6_421Covid) {} else {
            let presentVrem421
            presentVrem421 = +day6_421Covid.textContent + +day6_421Orvi.textContent + +day6_421Orz.textContent + +day6_421Oher.textContent
            present_421_day_6.textContent = +weekStudentsBase421.length - +presentVrem421
        }
    }
    // Информация по 421 группе

    // Информация по 431 группе
    const day6_431Covid = document.querySelector('.day_6_431_covid')
    const day6_431Orvi = document.querySelector('.day_6_431_orvi')
    const day6_431Orz = document.querySelector('.day_6_431_orz')
    const day6_431Oher = document.querySelector('.day_6_431_other')
    const day6_431OherReasons = document.querySelector('.day_6_431_other_reasons')

    const day6_431 = document.querySelectorAll('.day_6_431')

    const present_431_day_6 = document.querySelector('.day_6_431_present')

    if (!day6_431Covid) {} else {
        for (var i = 0; i < day6_431.length; i++) {
            if (day6_431[i].textContent == 'COVID') {
                day6_431Covid.textContent = +day6_431Covid.textContent + 1
            }
            if (day6_431[i].textContent == 'ОРВИ') {
                day6_431Orvi.textContent = +day6_431Orvi.textContent + 1
            }
            if (day6_431[i].textContent == 'ОРЗ') {
                day6_431Orz.textContent = +day6_431Orz.textContent + 1
            }
            if (day6_431[i].textContent == 'Не простудное') {
                day6_431Oher.textContent = +day6_431Oher.textContent + 1
            }
            if (day6_431[i].textContent == 'Другое') {
                day6_431OherReasons.textContent = +day6_431OherReasons.textContent + 1
            }
        }
        if (!day6_431Covid) {} else {
            let presentVrem431
            presentVrem431 = +day6_431Covid.textContent + +day6_431Orvi.textContent + +day6_431Orz.textContent + +day6_431Oher.textContent
            present_431_day_6.textContent = +weekStudentsBase431.length - +presentVrem431
        }
    }
    // Информация по 431 группе

    // Информация по 441 группе
    const day6_441Covid = document.querySelector('.day_6_441_covid')
    const day6_441Orvi = document.querySelector('.day_6_441_orvi')
    const day6_441Orz = document.querySelector('.day_6_441_orz')
    const day6_441Oher = document.querySelector('.day_6_441_other')
    const day6_441OherReasons = document.querySelector('.day_6_441_other_reasons')

    const day6_441 = document.querySelectorAll('.day_6_441')

    const present_441_day_6 = document.querySelector('.day_6_441_present')

    if (!day6_441Covid) {} else {
        for (var i = 0; i < day6_441.length; i++) {
            if (day6_441[i].textContent == 'COVID') {
                day6_441Covid.textContent = +day6_441Covid.textContent + 1
            }
            if (day6_441[i].textContent == 'ОРВИ') {
                day6_441Orvi.textContent = +day6_441Orvi.textContent + 1
            }
            if (day6_441[i].textContent == 'ОРЗ') {
                day6_441Orz.textContent = +day6_441Orz.textContent + 1
            }
            if (day6_441[i].textContent == 'Не простудное') {
                day6_441Oher.textContent = +day6_441Oher.textContent + 1
            }
            if (day6_441[i].textContent == 'Другое') {
                day6_441OherReasons.textContent = +day6_441OherReasons.textContent + 1
            }
        }
        if (!day6_441Covid) {} else {
            let presentVrem441
            presentVrem441 = +day6_441Covid.textContent + +day6_441Orvi.textContent + +day6_441Orz.textContent + +day6_441Oher.textContent
            present_441_day_6.textContent = +weekStudentsBase441.length - +presentVrem441
        }
    }
    // Информация по 441 группе


    // Сводка за шестой день
    const day_6_allStud = document.querySelector('.day_6_all_students')
    const day_6_allPresent = document.querySelector('.day_6_all_present')
    const day_6_allCovid = document.querySelector('.day_6_all_covid')
    const day_6_allOrv = document.querySelector('.day_6_all_orv')
    const day_6_allOrz = document.querySelector('.day_6_all_orz')
    const day_6_allOther = document.querySelector('.day_6_all_other')
    const day_6_allOtherReasons = document.querySelector('.day_6_all_other_reasons')

    const studentsday6 = document.querySelectorAll('.students_day_6')
    const covidday6 = document.querySelectorAll('.day_6_covid')
    const orvday6 = document.querySelectorAll('.day_6_orvi')
    const orzday6 = document.querySelectorAll('.day_6_orz')
    const otherday6 = document.querySelectorAll('.day_6_other')
    const otherReasonsday6 = document.querySelectorAll('.day_6_other_reasons')


    if (!day_6_allStud) {} else {
        var allStudday_6 = 0;
        for (var i = 0; i < studentsday6.length; i++) {
            allStudday_6 = +allStudday_6 + +parseInt(studentsday6[i].textContent);
        }
        day_6_allStud.textContent = allStudday_6
    }

    if (!day_6_allCovid) {} else {
        var day6Covid = 0;
        for (var i = 0; i < covidday6.length; i++) {
            day6Covid = +day6Covid + +parseInt(covidday6[i].textContent);
        }
        day_6_allCovid.textContent = day6Covid
    }

    if (!day_6_allOrv) {} else {
        var day6Orv = 0;
        for (var i = 0; i < orvday6.length; i++) {
            day6Orv = +day6Orv + +parseInt(orvday6[i].textContent);
        }
        day_6_allOrv.textContent = day6Orv
    }

    if (!day_6_allOrz) {} else {
        var day6Orz = 0;
        for (var i = 0; i < orzday6.length; i++) {
            day6Orz = +day6Orz + +parseInt(orzday6[i].textContent);
        }
        day_6_allOrz.textContent = day6Orz
    }

    if (!day_6_allOther) {} else {
        var day6Other = 0;
        for (var i = 0; i < otherday6.length; i++) {
            day6Other = +day6Other + +parseInt(otherday6[i].textContent);
        }
        day_6_allOther.textContent = day6Other
    }

    if (!day_6_allOtherReasons) {} else {
        var day6OtherReasons = 0;
        for (var i = 0; i < otherReasonsday6.length; i++) {
            day6OtherReasons = +day6OtherReasons + +parseInt(otherReasonsday6[i].textContent);
        }
        day_6_allOtherReasons.textContent = day6OtherReasons
    }

    if (!day_6_allPresent) {} else {
        day_6_allPresent.textContent = +day_6_allStud.textContent - (+day_6_allOtherReasons.textContent + +day_6_allOther.textContent + +day_6_allOrz.textContent + +day_6_allOrv.textContent + +day_6_allCovid.textContent)
    }
    // Сводка за шестой день



    // Сводка за неделю для 101 группы
    const allSkipsU101Table = document.querySelector('.all_skips_u_101_table')
    const allSkipsU101 = document.querySelectorAll('.all_skips_u_101')
    const allSkipsN101Table = document.querySelector('.all_skips_n_101_table')
    const allSkipsN101 = document.querySelectorAll('.all_skips_n_101')

    if (!allSkipsU101Table) {} else {
        var allSkipsU101Vrem = 0;
        for (var i = 0; i < weekStudentsBase101.length; i++) {
            if (allSkipsU101[i].textContent != '') {
                allSkipsU101Vrem = +allSkipsU101Vrem + +parseInt(allSkipsU101[i].textContent)
            }
        }
        allSkipsU101Table.textContent = allSkipsU101Vrem
    }

    if (!allSkipsN101Table) {} else {
        var allSkipsN101Vrem = 0;
        for (var i = 0; i < allSkipsN101.length; i++) {
            if (allSkipsN101[i].textContent != '') {
                allSkipsN101Vrem = +allSkipsN101Vrem + +parseInt(allSkipsN101[i].textContent)
            }
        }
        allSkipsN101Table.textContent = allSkipsN101Vrem
    }
    // Сводка за неделю для 101 группы

    // Сводка за неделю для 111 группы
    const allSkipsU111Table = document.querySelector('.all_skips_u_111_table')
    const allSkipsU111 = document.querySelectorAll('.all_skips_u_111')
    const allSkipsN111Table = document.querySelector('.all_skips_n_111_table')
    const allSkipsN111 = document.querySelectorAll('.all_skips_n_111')

    if (!allSkipsU111Table) {} else {
        var allSkipsU111Vrem = 0;
        for (var i = 0; i < allSkipsU111.length; i++) {
            if (allSkipsU111[i].textContent != '') {
                allSkipsU111Vrem = +allSkipsU111Vrem + +parseInt(allSkipsU111[i].textContent)
            }
        }
        allSkipsU111Table.textContent = allSkipsU111Vrem
    }

    if (!allSkipsN111Table) {} else {
        var allSkipsN111Vrem = 0;
        for (var i = 0; i < allSkipsN111.length; i++) {
            if (allSkipsN111[i].textContent != '') {
                allSkipsN111Vrem = +allSkipsN111Vrem + +parseInt(allSkipsN111[i].textContent)
            }
        }
        allSkipsN111Table.textContent = allSkipsN111Vrem
    }
    // Сводка за неделю для 111 группы

    // Сводка за неделю для 121 группы
    const allSkipsU121Table = document.querySelector('.all_skips_u_121_table')
    const allSkipsU121 = document.querySelectorAll('.all_skips_u_121')
    const allSkipsN121Table = document.querySelector('.all_skips_n_121_table')
    const allSkipsN121 = document.querySelectorAll('.all_skips_n_121')

    if (!allSkipsU121Table) {} else {
        var allSkipsU121Vrem = 0;
        for (var i = 0; i < allSkipsU121.length; i++) {
            if (allSkipsU121[i].textContent != '') {
                allSkipsU121Vrem = +allSkipsU121Vrem + +parseInt(allSkipsU121[i].textContent)
            }
        }
        allSkipsU121Table.textContent = allSkipsU121Vrem
    }

    if (!allSkipsN121Table) {} else {
        var allSkipsN121Vrem = 0;
        for (var i = 0; i < allSkipsN121.length; i++) {
            if (allSkipsN121[i].textContent != '') {
                allSkipsN121Vrem = +allSkipsN121Vrem + +parseInt(allSkipsN121[i].textContent)
            }
        }
        allSkipsN121Table.textContent = allSkipsN121Vrem
    }
    // Сводка за неделю для 121 группы

    // Сводка за неделю для 201 группы
    const allSkipsU201Table = document.querySelector('.all_skips_u_201_table')
    const allSkipsU201 = document.querySelectorAll('.all_skips_u_201')
    const allSkipsN201Table = document.querySelector('.all_skips_n_201_table')
    const allSkipsN201 = document.querySelectorAll('.all_skips_n_201')

    if (!allSkipsU201Table) {} else {
        var allSkipsU201Vrem = 0;
        for (var i = 0; i < allSkipsU201.length; i++) {
            if (allSkipsU201[i].textContent != '') {
                allSkipsU201Vrem = +allSkipsU201Vrem + +parseInt(allSkipsU201[i].textContent)
            }
        }
        allSkipsU201Table.textContent = allSkipsU201Vrem
    }

    if (!allSkipsN201Table) {} else {
        var allSkipsN201Vrem = 0;
        for (var i = 0; i < allSkipsN201.length; i++) {
            if (allSkipsN201[i].textContent != '') {
                allSkipsN201Vrem = +allSkipsN201Vrem + +parseInt(allSkipsN201[i].textContent)
            }
        }
        allSkipsN201Table.textContent = allSkipsN201Vrem
    }
    // Сводка за неделю для 201 группы

    // Сводка за неделю для 202 группы
    const allSkipsU202Table = document.querySelector('.all_skips_u_202_table')
    const allSkipsU202 = document.querySelectorAll('.all_skips_u_202')
    const allSkipsN202Table = document.querySelector('.all_skips_n_202_table')
    const allSkipsN202 = document.querySelectorAll('.all_skips_n_202')

    if (!allSkipsU202Table) {} else {
        var allSkipsU202Vrem = 0;
        for (var i = 0; i < allSkipsU202.length; i++) {
            if (allSkipsU202[i].textContent != '') {
                allSkipsU202Vrem = +allSkipsU202Vrem + +parseInt(allSkipsU202[i].textContent)
            }
        }
        allSkipsU202Table.textContent = allSkipsU202Vrem
    }

    if (!allSkipsN202Table) {} else {
        var allSkipsN202Vrem = 0;
        for (var i = 0; i < allSkipsN202.length; i++) {
            if (allSkipsN202[i].textContent != '') {
                allSkipsN202Vrem = +allSkipsN202Vrem + +parseInt(allSkipsN202[i].textContent)
            }
        }
        allSkipsN202Table.textContent = allSkipsN202Vrem
    }
    // Сводка за неделю для 202 группы

    // Сводка за неделю для 211 группы
    const allSkipsU211Table = document.querySelector('.all_skips_u_211_table')
    const allSkipsU211 = document.querySelectorAll('.all_skips_u_211')
    const allSkipsN211Table = document.querySelector('.all_skips_n_211_table')
    const allSkipsN211 = document.querySelectorAll('.all_skips_n_211')

    if (!allSkipsU211Table) {} else {
        var allSkipsU211Vrem = 0;
        for (var i = 0; i < allSkipsU211.length; i++) {
            if (allSkipsU211[i].textContent != '') {
                allSkipsU211Vrem = +allSkipsU211Vrem + +parseInt(allSkipsU211[i].textContent)
            }
        }
        allSkipsU211Table.textContent = allSkipsU211Vrem
    }

    if (!allSkipsN211Table) {} else {
        var allSkipsN211Vrem = 0;
        for (var i = 0; i < allSkipsN211.length; i++) {
            if (allSkipsN211[i].textContent != '') {
                allSkipsN211Vrem = +allSkipsN211Vrem + +parseInt(allSkipsN211[i].textContent)
            }
        }
        allSkipsN211Table.textContent = allSkipsN211Vrem
    }
    // Сводка за неделю для 211 группы

    // Сводка за неделю для 221 группы
    const allSkipsU221Table = document.querySelector('.all_skips_u_221_table')
    const allSkipsU221 = document.querySelectorAll('.all_skips_u_221')
    const allSkipsN221Table = document.querySelector('.all_skips_n_221_table')
    const allSkipsN221 = document.querySelectorAll('.all_skips_n_221')

    if (!allSkipsU221Table) {} else {
        var allSkipsU221Vrem = 0;
        for (var i = 0; i < allSkipsU221.length; i++) {
            if (allSkipsU221[i].textContent != '') {
                allSkipsU221Vrem = +allSkipsU221Vrem + +parseInt(allSkipsU221[i].textContent)
            }
        }
        allSkipsU221Table.textContent = allSkipsU221Vrem
    }

    if (!allSkipsN221Table) {} else {
        var allSkipsN221Vrem = 0;
        for (var i = 0; i < allSkipsN221.length; i++) {
            if (allSkipsN221[i].textContent != '') {
                allSkipsN221Vrem = +allSkipsN221Vrem + +parseInt(allSkipsN221[i].textContent)
            }
        }
        allSkipsN221Table.textContent = allSkipsN221Vrem
    }
    // Сводка за неделю для 221 группы

    // Сводка за неделю для 231 группы
    const allSkipsU231Table = document.querySelector('.all_skips_u_231_table')
    const allSkipsU231 = document.querySelectorAll('.all_skips_u_231')
    const allSkipsN231Table = document.querySelector('.all_skips_n_231_table')
    const allSkipsN231 = document.querySelectorAll('.all_skips_n_231')

    if (!allSkipsU231Table) {} else {
        var allSkipsU231Vrem = 0;
        for (var i = 0; i < allSkipsU231.length; i++) {
            if (allSkipsU231[i].textContent != '') {
                allSkipsU231Vrem = +allSkipsU231Vrem + +parseInt(allSkipsU231[i].textContent)
            }
        }
        allSkipsU231Table.textContent = allSkipsU231Vrem
    }

    if (!allSkipsN231Table) {} else {
        var allSkipsN231Vrem = 0;
        for (var i = 0; i < allSkipsN231.length; i++) {
            if (allSkipsN231[i].textContent != '') {
                allSkipsN231Vrem = +allSkipsN231Vrem + +parseInt(allSkipsN231[i].textContent)
            }
        }
        allSkipsN231Table.textContent = allSkipsN231Vrem
    }
    // Сводка за неделю для 231 группы

    // Сводка за неделю для 241 группы
    const allSkipsU241Table = document.querySelector('.all_skips_u_241_table')
    const allSkipsU241 = document.querySelectorAll('.all_skips_u_241')
    const allSkipsN241Table = document.querySelector('.all_skips_n_241_table')
    const allSkipsN241 = document.querySelectorAll('.all_skips_n_241')

    if (!allSkipsU241Table) {} else {
        var allSkipsU241Vrem = 0;
        for (var i = 0; i < allSkipsU241.length; i++) {
            if (allSkipsU241[i].textContent != '') {
                allSkipsU241Vrem = +allSkipsU241Vrem + +parseInt(allSkipsU241[i].textContent)
            }
        }
        allSkipsU241Table.textContent = allSkipsU241Vrem
    }

    if (!allSkipsN241Table) {} else {
        var allSkipsN241Vrem = 0;
        for (var i = 0; i < allSkipsN241.length; i++) {
            if (allSkipsN241[i].textContent != '') {
                allSkipsN241Vrem = +allSkipsN241Vrem + +parseInt(allSkipsN241[i].textContent)
            }
        }
        allSkipsN241Table.textContent = allSkipsN241Vrem
    }
    // Сводка за неделю для 241 группы

    // Сводка за неделю для 301 группы
    const allSkipsU301Table = document.querySelector('.all_skips_u_301_table')
    const allSkipsU301 = document.querySelectorAll('.all_skips_u_301')
    const allSkipsN301Table = document.querySelector('.all_skips_n_301_table')
    const allSkipsN301 = document.querySelectorAll('.all_skips_n_301')

    if (!allSkipsU301Table) {} else {
        var allSkipsU301Vrem = 0;
        for (var i = 0; i < allSkipsU301.length; i++) {
            if (allSkipsU301[i].textContent != '') {
                allSkipsU301Vrem = +allSkipsU301Vrem + +parseInt(allSkipsU301[i].textContent)
            }
        }
        allSkipsU301Table.textContent = allSkipsU301Vrem
    }

    if (!allSkipsN301Table) {} else {
        var allSkipsN301Vrem = 0;
        for (var i = 0; i < allSkipsN301.length; i++) {
            if (allSkipsN301[i].textContent != '') {
                allSkipsN301Vrem = +allSkipsN301Vrem + +parseInt(allSkipsN301[i].textContent)
            }
        }
        allSkipsN301Table.textContent = allSkipsN301Vrem
    }
    // Сводка за неделю для 301 группы

    // Сводка за неделю для 302 группы
    const allSkipsU302Table = document.querySelector('.all_skips_u_302_table')
    const allSkipsU302 = document.querySelectorAll('.all_skips_u_302')
    const allSkipsN302Table = document.querySelector('.all_skips_n_302_table')
    const allSkipsN302 = document.querySelectorAll('.all_skips_n_302')

    if (!allSkipsU302Table) {} else {
        var allSkipsU302Vrem = 0;
        for (var i = 0; i < allSkipsU302.length; i++) {
            if (allSkipsU302[i].textContent != '') {
                allSkipsU302Vrem = +allSkipsU302Vrem + +parseInt(allSkipsU302[i].textContent)
            }
        }
        allSkipsU302Table.textContent = allSkipsU302Vrem
    }

    if (!allSkipsN302Table) {} else {
        var allSkipsN302Vrem = 0;
        for (var i = 0; i < allSkipsN302.length; i++) {
            if (allSkipsN302[i].textContent != '') {
                allSkipsN302Vrem = +allSkipsN302Vrem + +parseInt(allSkipsN302[i].textContent)
            }
            console.log(allSkipsN302[i].textContent)
        }
        allSkipsN302Table.textContent = allSkipsN302Vrem
    }
    // Сводка за неделю для 302 группы

    // Сводка за неделю для 311 группы
    const allSkipsU311Table = document.querySelector('.all_skips_u_311_table')
    const allSkipsU311 = document.querySelectorAll('.all_skips_u_311')
    const allSkipsN311Table = document.querySelector('.all_skips_n_311_table')
    const allSkipsN311 = document.querySelectorAll('.all_skips_n_311')

    if (!allSkipsU311Table) {} else {
        var allSkipsU311Vrem = 0;
        for (var i = 0; i < allSkipsU311.length; i++) {
            if (allSkipsU311[i].textContent != '') {
                allSkipsU311Vrem = +allSkipsU311Vrem + +parseInt(allSkipsU311[i].textContent)
            }
        }
        allSkipsU311Table.textContent = allSkipsU311Vrem
    }

    if (!allSkipsN311Table) {} else {
        var allSkipsN311Vrem = 0;
        for (var i = 0; i < allSkipsN311.length; i++) {
            if (allSkipsN311[i].textContent != '') {
                allSkipsN311Vrem = +allSkipsN311Vrem + +parseInt(allSkipsN311[i].textContent)
            }
        }
        allSkipsN311Table.textContent = allSkipsN311Vrem
    }
    // Сводка за неделю для 311 группы

    // Сводка за неделю для 321 группы
    const allSkipsU321Table = document.querySelector('.all_skips_u_321_table')
    const allSkipsU321 = document.querySelectorAll('.all_skips_u_321')
    const allSkipsN321Table = document.querySelector('.all_skips_n_321_table')
    const allSkipsN321 = document.querySelectorAll('.all_skips_n_321')

    if (!allSkipsU321Table) {} else {
        var allSkipsU321Vrem = 0;
        for (var i = 0; i < allSkipsU321.length; i++) {
            if (allSkipsU321[i].textContent != '') {
                allSkipsU321Vrem = +allSkipsU321Vrem + +parseInt(allSkipsU321[i].textContent)
            }
        }
        allSkipsU321Table.textContent = allSkipsU321Vrem
    }

    if (!allSkipsN321Table) {} else {
        var allSkipsN321Vrem = 0;
        for (var i = 0; i < allSkipsN321.length; i++) {
            if (allSkipsN321[i].textContent != '') {
                allSkipsN321Vrem = +allSkipsN321Vrem + +parseInt(allSkipsN321[i].textContent)
            }
        }
        allSkipsN321Table.textContent = allSkipsN321Vrem
    }
    // Сводка за неделю для 321 группы

    // Сводка за неделю для 331 группы
    const allSkipsU331Table = document.querySelector('.all_skips_u_331_table')
    const allSkipsU331 = document.querySelectorAll('.all_skips_u_331')
    const allSkipsN331Table = document.querySelector('.all_skips_n_331_table')
    const allSkipsN331 = document.querySelectorAll('.all_skips_n_331')

    if (!allSkipsU331Table) {} else {
        var allSkipsU331Vrem = 0;
        for (var i = 0; i < allSkipsU331.length; i++) {
            if (allSkipsU331[i].textContent != '') {
                allSkipsU331Vrem = +allSkipsU331Vrem + +parseInt(allSkipsU331[i].textContent)
            }
        }
        allSkipsU331Table.textContent = allSkipsU331Vrem
    }

    if (!allSkipsN331Table) {} else {
        var allSkipsN331Vrem = 0;
        for (var i = 0; i < allSkipsN331.length; i++) {
            if (allSkipsN331[i].textContent != '') {
                allSkipsN331Vrem = +allSkipsN331Vrem + +parseInt(allSkipsN331[i].textContent)
            }
        }
        allSkipsN331Table.textContent = allSkipsN331Vrem
    }
    // Сводка за неделю для 331 группы

    // Сводка за неделю для 341 группы
    const allSkipsU341Table = document.querySelector('.all_skips_u_341_table')
    const allSkipsU341 = document.querySelectorAll('.all_skips_u_341')
    const allSkipsN341Table = document.querySelector('.all_skips_n_341_table')
    const allSkipsN341 = document.querySelectorAll('.all_skips_n_341')

    if (!allSkipsU341Table) {} else {
        var allSkipsU341Vrem = 0;
        for (var i = 0; i < allSkipsU341.length; i++) {
            if (allSkipsU341[i].textContent != '') {
                allSkipsU341Vrem = +allSkipsU341Vrem + +parseInt(allSkipsU341[i].textContent)
            }
        }
        allSkipsU341Table.textContent = allSkipsU341Vrem
    }

    if (!allSkipsN341Table) {} else {
        var allSkipsN341Vrem = 0;
        for (var i = 0; i < allSkipsN341.length; i++) {
            if (allSkipsN341[i].textContent != '') {
                allSkipsN341Vrem = +allSkipsN341Vrem + +parseInt(allSkipsN341[i].textContent)
            }
        }
        allSkipsN341Table.textContent = allSkipsN341Vrem
    }
    // Сводка за неделю для 341 группы

    // Сводка за неделю для 401 группы
    const allSkipsU401Table = document.querySelector('.all_skips_u_401_table')
    const allSkipsU401 = document.querySelectorAll('.all_skips_u_401')
    const allSkipsN401Table = document.querySelector('.all_skips_n_401_table')
    const allSkipsN401 = document.querySelectorAll('.all_skips_n_401')

    if (!allSkipsU401Table) {} else {
        var allSkipsU401Vrem = 0;
        for (var i = 0; i < allSkipsU401.length; i++) {
            if (allSkipsU401[i].textContent != '') {
                allSkipsU401Vrem = +allSkipsU401Vrem + +parseInt(allSkipsU401[i].textContent)
            }
        }
        allSkipsU401Table.textContent = allSkipsU401Vrem
    }

    if (!allSkipsN401Table) {} else {
        var allSkipsN401Vrem = 0;
        for (var i = 0; i < allSkipsN401.length; i++) {
            if (allSkipsN401[i].textContent != '') {
                allSkipsN401Vrem = +allSkipsN401Vrem + +parseInt(allSkipsN401[i].textContent)
            }
        }
        allSkipsN401Table.textContent = allSkipsN401Vrem
    }
    // Сводка за неделю для 401 группы

    // Сводка за неделю для 402 группы
    const allSkipsU402Table = document.querySelector('.all_skips_u_402_table')
    const allSkipsU402 = document.querySelectorAll('.all_skips_u_402')
    const allSkipsN402Table = document.querySelector('.all_skips_n_402_table')
    const allSkipsN402 = document.querySelectorAll('.all_skips_n_402')

    if (!allSkipsU402Table) {} else {
        var allSkipsU402Vrem = 0;
        for (var i = 0; i < allSkipsU402.length; i++) {
            if (allSkipsU402[i].textContent != '') {
                allSkipsU402Vrem = +allSkipsU402Vrem + +parseInt(allSkipsU402[i].textContent)
            }
        }
        allSkipsU402Table.textContent = allSkipsU402Vrem
    }

    if (!allSkipsN402Table) {} else {
        var allSkipsN402Vrem = 0;
        for (var i = 0; i < allSkipsN402.length; i++) {
            if (allSkipsN402[i].textContent != '') {
                allSkipsN402Vrem = +allSkipsN402Vrem + +parseInt(allSkipsN402[i].textContent)
            }
        }
        allSkipsN402Table.textContent = allSkipsN402Vrem
    }
    // Сводка за неделю для 402 группы

    // Сводка за неделю для 411 группы
    const allSkipsU411Table = document.querySelector('.all_skips_u_411_table')
    const allSkipsU411 = document.querySelectorAll('.all_skips_u_411')
    const allSkipsN411Table = document.querySelector('.all_skips_n_411_table')
    const allSkipsN411 = document.querySelectorAll('.all_skips_n_411')

    if (!allSkipsU411Table) {} else {
        var allSkipsU411Vrem = 0;
        for (var i = 0; i < allSkipsU411.length; i++) {
            if (allSkipsU411[i].textContent != '') {
                allSkipsU411Vrem = +allSkipsU411Vrem + +parseInt(allSkipsU411[i].textContent)
            }
        }
        allSkipsU411Table.textContent = allSkipsU411Vrem
    }

    if (!allSkipsN411Table) {} else {
        var allSkipsN411Vrem = 0;
        for (var i = 0; i < allSkipsN411.length; i++) {
            if (allSkipsN411[i].textContent != '') {
                allSkipsN411Vrem = +allSkipsN411Vrem + +parseInt(allSkipsN411[i].textContent)
            }
        }
        allSkipsN411Table.textContent = allSkipsN411Vrem
    }
    // Сводка за неделю для 411 группы

    // Сводка за неделю для 421 группы
    const allSkipsU421Table = document.querySelector('.all_skips_u_421_table')
    const allSkipsU421 = document.querySelectorAll('.all_skips_u_421')
    const allSkipsN421Table = document.querySelector('.all_skips_n_421_table')
    const allSkipsN421 = document.querySelectorAll('.all_skips_n_421')

    if (!allSkipsU421Table) {} else {
        var allSkipsU421Vrem = 0;
        for (var i = 0; i < allSkipsU421.length; i++) {
            if (allSkipsU421[i].textContent != '') {
                allSkipsU421Vrem = +allSkipsU421Vrem + +parseInt(allSkipsU421[i].textContent)
            }
        }
        allSkipsU421Table.textContent = allSkipsU421Vrem
    }

    if (!allSkipsN421Table) {} else {
        var allSkipsN421Vrem = 0;
        for (var i = 0; i < allSkipsN421.length; i++) {
            if (allSkipsN421[i].textContent != '') {
                allSkipsN421Vrem = +allSkipsN421Vrem + +parseInt(allSkipsN421[i].textContent)
            }
        }
        allSkipsN421Table.textContent = allSkipsN421Vrem
    }
    // Сводка за неделю для 421 группы

    // Сводка за неделю для 431 группы
    const allSkipsU431Table = document.querySelector('.all_skips_u_431_table')
    const allSkipsU431 = document.querySelectorAll('.all_skips_u_431')
    const allSkipsN431Table = document.querySelector('.all_skips_n_431_table')
    const allSkipsN431 = document.querySelectorAll('.all_skips_n_431')

    if (!allSkipsU431Table) {} else {
        var allSkipsU431Vrem = 0;
        for (var i = 0; i < allSkipsU431.length; i++) {
            if (allSkipsU431[i].textContent != '') {
                allSkipsU431Vrem = +allSkipsU431Vrem + +parseInt(allSkipsU431[i].textContent)
            }
        }
        allSkipsU431Table.textContent = allSkipsU431Vrem
    }

    if (!allSkipsN431Table) {} else {
        var allSkipsN431Vrem = 0;
        for (var i = 0; i < allSkipsN431.length; i++) {
            if (allSkipsN431[i].textContent != '') {
                allSkipsN431Vrem = +allSkipsN431Vrem + +parseInt(allSkipsN431[i].textContent)
            }
        }
        allSkipsN431Table.textContent = allSkipsN431Vrem
    }
    // Сводка за неделю для 431 группы

    // Сводка за неделю для 441 группы
    const allSkipsU441Table = document.querySelector('.all_skips_u_441_table')
    const allSkipsU441 = document.querySelectorAll('.all_skips_u_441')
    const allSkipsN441Table = document.querySelector('.all_skips_n_441_table')
    const allSkipsN441 = document.querySelectorAll('.all_skips_n_441')

    if (!allSkipsU441Table) {} else {
        var allSkipsU441Vrem = 0;
        for (var i = 0; i < allSkipsU441.length; i++) {
            if (allSkipsU441[i].textContent != '') {
                allSkipsU441Vrem = +allSkipsU441Vrem + +parseInt(allSkipsU441[i].textContent)
            }
        }
        allSkipsU441Table.textContent = allSkipsU441Vrem
    }

    if (!allSkipsN441Table) {} else {
        var allSkipsN441Vrem = 0;
        for (var i = 0; i < allSkipsN441.length; i++) {
            if (allSkipsN441[i].textContent != '') {
                allSkipsN441Vrem = +allSkipsN441Vrem + +parseInt(allSkipsN441[i].textContent)
            }
        }
        allSkipsN441Table.textContent = allSkipsN441Vrem
    }
    // Сводка за неделю для 441 группы


    const periodDay_1_101 = document.querySelector('.period__day_1_101')
    if (!allSkipsN441Table) {} else {
    for (var i = 0; i < day1_101.length; i++) {
        if(day1_101.textContent == "'"+periodDay_1_101.textContent+"'")
        console.log('Зеленый')
        console.log('"' +periodDay_1_101.textContent+ '"')
    }
}

    // Формирование таблиц по пропускам по дням и за неделю






    // let editSkipN = document.querySelectorAll('.edit_skip_n')
    // for (let i = 0; i < editSkipN.length; i++) {
    //     editSkipN[i].setAttribute('name', 'edit_st_n_' + (+[i] + +1))
    // }
    // let editSkipU = document.querySelectorAll('.edit_skip_u')
    // for (let i = 0; i < editSkipU.length; i++) {
    //     editSkipU[i].setAttribute('name', 'edit_st_u_' + (+[i] + +1))
    // }


    let masSkip = []
    let skip = document.querySelectorAll('.skip')
    let tableSkips = document.querySelector("table.table__skips > tbody")
    if (!tableSkips) {} else {
        for (let i = 0; i < tableSkips.children.length; i++) {
            let tableChild = tableSkips.children[i].children
            masSkip.push(tableChild)
        }
    }

    for (let q = 0; q < masSkip.length; q++) {
        for (let i = 0; i < skip.length + 2; i++) {
            masSkip[q][i].removeAttribute('hidden')
        }
    }


    let massNeud = []
    for (let i = 0; i < masSkip.length; i++) {
        const abElements = [...masSkip[i]].filter(element => element.classList.contains('number__skip_n'));
        massNeud.push(abElements)
    }

    // Вывод студентов имеющих пропуски по не уважительным
    for (let q = 0; q < massNeud.length; q++) {
        if (massNeud[q][0].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__1', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[0].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__1').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__1')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][0].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)


        }
        if (massNeud[q][1].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__2', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[1].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__2').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__2')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][1].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][2].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__3', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[2].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__3').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__3')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][2].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][3].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__4', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[3].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__4').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__4')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][3].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][4].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__5', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[4].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__5').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__5')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][4].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][5].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__6', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[5].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__6').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__6')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][5].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][6].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__7', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[6].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__7').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__7')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][6].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][7].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__8', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[7].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__8').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__8')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][7].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][8].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__9', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[8].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__9').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__9')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][8].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][9].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__10', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[9].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__10').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__10')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][9].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][10].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__11', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[10].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__11').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__11')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][10].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][11].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__12', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[11].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__12').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__12')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][11].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][12].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__13', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[12].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__13').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__13')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][12].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][13].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__14', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[13].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__14').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__14')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][13].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][14].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__15', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[14].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__15').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__15')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][14].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][15].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__16', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[15].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__16').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__16')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][15].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][16].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__17', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[16].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__17').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__17')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][16].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][17].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__18', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[17].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__18').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__18')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][17].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][18].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__19', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[18].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__19').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__19')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][18].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][19].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__20', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[19].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__20').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__20')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][19].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][20].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__21', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[20].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__21').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__21')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][20].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][21].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__22', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[21].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__22').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__22')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][21].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][22].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__23', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[22].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__23').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__23')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][22].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][23].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__24', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[23].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__24').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__24')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][23].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][24].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__25', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[24].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__25').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__25')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][24].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][25].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__26', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[25].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__26').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__26')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][25].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][26].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__27', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[26].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__27').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__27')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][26].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][27].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__28', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[27].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__28').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__28')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][27].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][28].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__29', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[28].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__29').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__29')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][28].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][29].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__30', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[29].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__30').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__30')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][29].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][30].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__31', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[30].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__31').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__31')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][30].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][31].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__31', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[31].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__31').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__32')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][31].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
    }
    // Вывод студентов имеющих пропуски по не уважительным

    let summSkips_1 = document.querySelectorAll('.skips__student__1')
    let skipNameSt_1 = document.querySelector('.student__skips__1')
    var arrSt_1 = []
    if (!summSkips_1[0]) {} else {
        skipNameSt_1.removeAttribute('hidden')
        summSkips_1[0].classList.add('neud__skips')
        summSkips_1[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_1.length; i++) {
            arrSt_1.push(summSkips_1[i].textContent)
        }
        var sumSt_1 = 0;
        for (var i = 0; i < arrSt_1.length; i++) {
            sumSt_1 = +sumSt_1 + +parseInt(arrSt_1[i]);
        }
        summSkips_1[0].textContent = sumSt_1
        document.getElementById('student__skips__1').value = sumSt_1
    }

    let summSkips_2 = document.querySelectorAll('.skips__student__2')
    let skipNameSt_2 = document.querySelector('.student__skips__2')
    var arrSt_2 = []
    if (!summSkips_2[0]) {} else {
        skipNameSt_2.removeAttribute('hidden')
        summSkips_2[0].classList.add('neud__skips')
        summSkips_2[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_2.length; i++) {
            arrSt_2.push(summSkips_2[i].textContent)
        }
        var sumSt_2 = 0;
        for (var i = 0; i < arrSt_2.length; i++) {
            sumSt_2 = +sumSt_2 + +parseInt(arrSt_2[i]);
        }
        summSkips_2[0].textContent = sumSt_2
        document.getElementById('student__skips__2').value = sumSt_2
    }

    let summSkips_3 = document.querySelectorAll('.skips__student__3')
    let skipNameSt_3 = document.querySelector('.student__skips__3')
    var arrSt_3 = []
    if (!summSkips_3[0]) {} else {
        skipNameSt_3.removeAttribute('hidden')
        summSkips_3[0].classList.add('neud__skips')
        summSkips_3[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_3.length; i++) {
            arrSt_3.push(summSkips_3[i].textContent)
        }
        var sumSt_3 = 0;
        for (var i = 0; i < arrSt_3.length; i++) {
            sumSt_3 = +sumSt_3 + +parseInt(arrSt_3[i]);
        }
        summSkips_3[0].textContent = sumSt_3
        document.getElementById('student__skips__3').value = sumSt_3
    }

    let summSkips_4 = document.querySelectorAll('.skips__student__4')
    let skipNameSt_4 = document.querySelector('.student__skips__4')
    var arrSt_4 = []
    if (!summSkips_4[0]) {} else {
        skipNameSt_4.removeAttribute('hidden')
        summSkips_4[0].classList.add('neud__skips')
        summSkips_4[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_4.length; i++) {
            arrSt_4.push(summSkips_4[i].textContent)
        }
        var sumSt_4 = 0;
        for (var i = 0; i < arrSt_4.length; i++) {
            sumSt_4 = +sumSt_4 + +parseInt(arrSt_4[i]);
        }
        summSkips_4[0].textContent = sumSt_4
        document.getElementById('student__skips__4').value = sumSt_4
    }

    let summSkips_5 = document.querySelectorAll('.skips__student__5')
    let skipNameSt_5 = document.querySelector('.student__skips__5')
    var arrSt_5 = []
    if (!summSkips_5[0]) {} else {
        skipNameSt_5.removeAttribute('hidden')
        summSkips_5[0].classList.add('neud__skips')
        summSkips_5[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_5.length; i++) {
            arrSt_5.push(summSkips_5[i].textContent)
        }
        var sumSt_5 = 0;
        for (var i = 0; i < arrSt_5.length; i++) {
            sumSt_5 = +sumSt_5 + +parseInt(arrSt_5[i]);
        }
        summSkips_5[0].textContent = sumSt_5
        document.getElementById('student__skips__5').value = sumSt_5
    }

    let summSkips_6 = document.querySelectorAll('.skips__student__6')
    let skipNameSt_6 = document.querySelector('.student__skips__6')
    var arrSt_6 = []
    if (!summSkips_6[0]) {} else {
        skipNameSt_6.removeAttribute('hidden')
        summSkips_6[0].classList.add('neud__skips')
        summSkips_6[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_6.length; i++) {
            arrSt_6.push(summSkips_6[i].textContent)
        }
        var sumSt_6 = 0;
        for (var i = 0; i < arrSt_6.length; i++) {
            sumSt_6 = +sumSt_6 + +parseInt(arrSt_6[i]);
        }
        summSkips_6[0].textContent = sumSt_6
        document.getElementById('student__skips__6').value = sumSt_6
    }

    let summSkips_7 = document.querySelectorAll('.skips__student__7')
    let skipNameSt_7 = document.querySelector('.student__skips__7')
    var arrSt_7 = []
    if (!summSkips_7[0]) {} else {
        skipNameSt_7.removeAttribute('hidden')
        summSkips_7[0].classList.add('neud__skips')
        summSkips_7[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_7.length; i++) {
            arrSt_7.push(summSkips_7[i].textContent)
        }
        var sumSt_7 = 0;
        for (var i = 0; i < arrSt_7.length; i++) {
            sumSt_7 = +sumSt_7 + +parseInt(arrSt_7[i]);
        }
        summSkips_7[0].textContent = sumSt_7
        document.getElementById('student__skips__7').value = sumSt_7
    }

    let summSkips_8 = document.querySelectorAll('.skips__student__8')
    let skipNameSt_8 = document.querySelector('.student__skips__8')
    var arrSt_8 = []
    if (!summSkips_8[0]) {} else {
        skipNameSt_8.removeAttribute('hidden')
        summSkips_8[0].classList.add('neud__skips')
        summSkips_8[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_8.length; i++) {
            arrSt_8.push(summSkips_8[i].textContent)
        }
        var sumSt_8 = 0;
        for (var i = 0; i < arrSt_8.length; i++) {
            sumSt_8 = +sumSt_8 + +parseInt(arrSt_8[i]);
        }
        summSkips_8[0].textContent = sumSt_8
        document.getElementById('student__skips__8').value = sumSt_8
    }
    let summSkips_9 = document.querySelectorAll('.skips__student__9')
    let skipNameSt_9 = document.querySelector('.student__skips__9')
    var arrSt_9 = []
    if (!summSkips_9[0]) {} else {
        skipNameSt_9.removeAttribute('hidden')
        summSkips_9[0].classList.add('neud__skips')
        summSkips_9[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_9.length; i++) {
            arrSt_9.push(summSkips_9[i].textContent)
        }
        var sumSt_9 = 0;
        for (var i = 0; i < arrSt_9.length; i++) {
            sumSt_9 = +sumSt_9 + +parseInt(arrSt_9[i]);
        }
        summSkips_9[0].textContent = sumSt_9
        document.getElementById('student__skips__9').value = sumSt_9
    }
    let summSkips_10 = document.querySelectorAll('.skips__student__10')
    let skipNameSt_10 = document.querySelector('.student__skips__10')
    var arrSt_10 = []
    if (!summSkips_10[0]) {} else {
        skipNameSt_10.removeAttribute('hidden')
        summSkips_10[0].classList.add('neud__skips')
        summSkips_10[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_10.length; i++) {
            arrSt_10.push(summSkips_10[i].textContent)
        }
        var sumSt_10 = 0;
        for (var i = 0; i < arrSt_10.length; i++) {
            sumSt_10 = +sumSt_10 + +parseInt(arrSt_10[i]);
        }
        summSkips_10[0].textContent = sumSt_10
        document.getElementById('student__skips__10').value = sumSt_10
    }
    let summSkips_11 = document.querySelectorAll('.skips__student__11')
    let skipNameSt_11 = document.querySelector('.student__skips__11')
    var arrSt_11 = []
    if (!summSkips_11[0]) {} else {
        skipNameSt_11.removeAttribute('hidden')
        summSkips_11[0].classList.add('neud__skips')
        summSkips_11[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_11.length; i++) {
            arrSt_11.push(summSkips_11[i].textContent)
        }
        var sumSt_11 = 0;
        for (var i = 0; i < arrSt_11.length; i++) {
            sumSt_11 = +sumSt_11 + +parseInt(arrSt_11[i]);
        }
        summSkips_11[0].textContent = sumSt_11
        document.getElementById('student__skips__11').value = sumSt_11
    }
    let summSkips_12 = document.querySelectorAll('.skips__student__12')
    let skipNameSt_12 = document.querySelector('.student__skips__12')
    var arrSt_12 = []
    if (!summSkips_12[0]) {} else {
        skipNameSt_12.removeAttribute('hidden')
        summSkips_12[0].classList.add('neud__skips')
        summSkips_12[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_12.length; i++) {
            arrSt_12.push(summSkips_12[i].textContent)
        }
        var sumSt_12 = 0;
        for (var i = 0; i < arrSt_12.length; i++) {
            sumSt_12 = +sumSt_12 + +parseInt(arrSt_12[i]);
        }
        summSkips_12[0].textContent = sumSt_12
        document.getElementById('student__skips__12').value = sumSt_12
    }
    let summSkips_13 = document.querySelectorAll('.skips__student__13')
    let skipNameSt_13 = document.querySelector('.student__skips__13')
    var arrSt_13 = []
    if (!summSkips_13[0]) {} else {
        skipNameSt_13.removeAttribute('hidden')
        summSkips_13[0].classList.add('neud__skips')
        summSkips_13[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_13.length; i++) {
            arrSt_13.push(summSkips_13[i].textContent)
        }
        var sumSt_13 = 0;
        for (var i = 0; i < arrSt_13.length; i++) {
            sumSt_13 = +sumSt_13 + +parseInt(arrSt_13[i]);
        }
        summSkips_13[0].textContent = sumSt_13
        document.getElementById('student__skips__13').value = sumSt_13
    }
    let summSkips_14 = document.querySelectorAll('.skips__student__14')
    let skipNameSt_14 = document.querySelector('.student__skips__14')
    var arrSt_14 = []
    if (!summSkips_14[0]) {} else {
        skipNameSt_14.removeAttribute('hidden')
        summSkips_14[0].classList.add('neud__skips')
        summSkips_14[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_14.length; i++) {
            arrSt_14.push(summSkips_14[i].textContent)
        }
        var sumSt_14 = 0;
        for (var i = 0; i < arrSt_14.length; i++) {
            sumSt_14 = +sumSt_14 + +parseInt(arrSt_14[i]);
        }
        summSkips_14[0].textContent = sumSt_14
        document.getElementById('student__skips__14').value = sumSt_14
    }
    let summSkips_15 = document.querySelectorAll('.skips__student__15')
    let skipNameSt_15 = document.querySelector('.student__skips__15')
    var arrSt_15 = []
    if (!summSkips_15[0]) {} else {
        skipNameSt_15.removeAttribute('hidden')
        summSkips_15[0].classList.add('neud__skips')
        summSkips_15[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_15.length; i++) {
            arrSt_15.push(summSkips_15[i].textContent)
        }
        var sumSt_15 = 0;
        for (var i = 0; i < arrSt_15.length; i++) {
            sumSt_15 = +sumSt_15 + +parseInt(arrSt_15[i]);
        }
        summSkips_15[0].textContent = sumSt_15
        document.getElementById('student__skips__15').value = sumSt_15
    }
    let summSkips_16 = document.querySelectorAll('.skips__student__16')
    let skipNameSt_16 = document.querySelector('.student__skips__16')
    var arrSt_16 = []
    if (!summSkips_16[0]) {} else {
        skipNameSt_16.removeAttribute('hidden')
        summSkips_16[0].classList.add('neud__skips')
        summSkips_16[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_16.length; i++) {
            arrSt_16.push(summSkips_16[i].textContent)
        }
        var sumSt_16 = 0;
        for (var i = 0; i < arrSt_16.length; i++) {
            sumSt_16 = +sumSt_16 + +parseInt(arrSt_16[i]);
        }
        summSkips_16[0].textContent = sumSt_16
        document.getElementById('student__skips__16').value = sumSt_16
    }
    let summSkips_17 = document.querySelectorAll('.skips__student__17')
    let skipNameSt_17 = document.querySelector('.student__skips__17')
    var arrSt_17 = []
    if (!summSkips_17[0]) {} else {
        skipNameSt_17.removeAttribute('hidden')
        summSkips_17[0].classList.add('neud__skips')
        summSkips_17[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_17.length; i++) {
            arrSt_17.push(summSkips_17[i].textContent)
        }
        var sumSt_17 = 0;
        for (var i = 0; i < arrSt_17.length; i++) {
            sumSt_17 = +sumSt_17 + +parseInt(arrSt_17[i]);
        }
        summSkips_17[0].textContent = sumSt_17
        document.getElementById('student__skips__17').value = sumSt_17
    }
    let summSkips_18 = document.querySelectorAll('.skips__student__18')
    let skipNameSt_18 = document.querySelector('.student__skips__18')
    var arrSt_18 = []
    if (!summSkips_18[0]) {} else {
        skipNameSt_18.removeAttribute('hidden')
        summSkips_18[0].classList.add('neud__skips')
        summSkips_18[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_18.length; i++) {
            arrSt_18.push(summSkips_18[i].textContent)
        }
        var sumSt_18 = 0;
        for (var i = 0; i < arrSt_18.length; i++) {
            sumSt_18 = +sumSt_18 + +parseInt(arrSt_18[i]);
        }
        summSkips_18[0].textContent = sumSt_18
        document.getElementById('student__skips__18').value = sumSt_18
    }
    let summSkips_19 = document.querySelectorAll('.skips__student__19')
    let skipNameSt_19 = document.querySelector('.student__skips__19')
    var arrSt_19 = []
    if (!summSkips_19[0]) {} else {
        skipNameSt_19.removeAttribute('hidden')
        summSkips_19[0].classList.add('neud__skips')
        summSkips_19[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_19.length; i++) {
            arrSt_19.push(summSkips_19[i].textContent)
        }
        var sumSt_19 = 0;
        for (var i = 0; i < arrSt_19.length; i++) {
            sumSt_19 = +sumSt_19 + +parseInt(arrSt_19[i]);
        }
        summSkips_19[0].textContent = sumSt_19
        document.getElementById('student__skips__19').value = sumSt_19
    }
    let summSkips_20 = document.querySelectorAll('.skips__student__20')
    let skipNameSt_20 = document.querySelector('.student__skips__20')
    var arrSt_20 = []
    if (!summSkips_20[0]) {} else {
        skipNameSt_20.removeAttribute('hidden')
        summSkips_20[0].classList.add('neud__skips')
        summSkips_20[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_20.length; i++) {
            arrSt_20.push(summSkips_20[i].textContent)
        }
        var sumSt_20 = 0;
        for (var i = 0; i < arrSt_20.length; i++) {
            sumSt_20 = +sumSt_20 + +parseInt(arrSt_20[i]);
        }
        summSkips_20[0].textContent = sumSt_20
        document.getElementById('student__skips__20').value = sumSt_20
    }
    let summSkips_21 = document.querySelectorAll('.skips__student__21')
    let skipNameSt_21 = document.querySelector('.student__skips__21')
    var arrSt_21 = []
    if (!summSkips_21[0]) {} else {
        skipNameSt_21.removeAttribute('hidden')
        summSkips_21[0].classList.add('neud__skips')
        summSkips_21[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_21.length; i++) {
            arrSt_21.push(summSkips_21[i].textContent)
        }
        var sumSt_21 = 0;
        for (var i = 0; i < arrSt_21.length; i++) {
            sumSt_21 = +sumSt_21 + +parseInt(arrSt_21[i]);
        }
        summSkips_21[0].textContent = sumSt_21
        document.getElementById('student__skips__21').value = sumSt_21
    }
    let summSkips_22 = document.querySelectorAll('.skips__student__22')
    let skipNameSt_22 = document.querySelector('.student__skips__22')
    var arrSt_22 = []
    if (!summSkips_22[0]) {} else {
        skipNameSt_22.removeAttribute('hidden')
        summSkips_22[0].classList.add('neud__skips')
        summSkips_22[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_22.length; i++) {
            arrSt_22.push(summSkips_22[i].textContent)
        }
        var sumSt_22 = 0;
        for (var i = 0; i < arrSt_22.length; i++) {
            sumSt_22 = +sumSt_22 + +parseInt(arrSt_22[i]);
        }
        summSkips_22[0].textContent = sumSt_22
        document.getElementById('student__skips__22').value = sumSt_22
    }
    let summSkips_23 = document.querySelectorAll('.skips__student__23')
    let skipNameSt_23 = document.querySelector('.student__skips__23')
    var arrSt_23 = []
    if (!summSkips_23[0]) {} else {
        skipNameSt_23.removeAttribute('hidden')
        summSkips_23[0].classList.add('neud__skips')
        summSkips_23[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_23.length; i++) {
            arrSt_23.push(summSkips_23[i].textContent)
        }
        var sumSt_23 = 0;
        for (var i = 0; i < arrSt_23.length; i++) {
            sumSt_23 = +sumSt_23 + +parseInt(arrSt_23[i]);
        }
        summSkips_23[0].textContent = sumSt_23
        document.getElementById('student__skips__23').value = sumSt_23
    }
    let summSkips_24 = document.querySelectorAll('.skips__student__24')
    let skipNameSt_24 = document.querySelector('.student__skips__24')
    var arrSt_24 = []
    if (!summSkips_24[0]) {} else {
        skipNameSt_24.removeAttribute('hidden')
        summSkips_24[0].classList.add('neud__skips')
        summSkips_24[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_24.length; i++) {
            arrSt_24.push(summSkips_24[i].textContent)
        }
        var sumSt_24 = 0;
        for (var i = 0; i < arrSt_24.length; i++) {
            sumSt_24 = +sumSt_24 + +parseInt(arrSt_24[i]);
        }
        summSkips_24[0].textContent = sumSt_24
        document.getElementById('student__skips__24').value = sumSt_24
    }
    let summSkips_25 = document.querySelectorAll('.skips__student__25')
    let skipNameSt_25 = document.querySelector('.student__skips__25')
    var arrSt_25 = []
    if (!summSkips_25[0]) {} else {
        skipNameSt_25.removeAttribute('hidden')
        summSkips_25[0].classList.add('neud__skips')
        summSkips_25[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_25.length; i++) {
            arrSt_25.push(summSkips_25[i].textContent)
        }
        var sumSt_25 = 0;
        for (var i = 0; i < arrSt_25.length; i++) {
            sumSt_25 = +sumSt_25 + +parseInt(arrSt_25[i]);
        }
        summSkips_25[0].textContent = sumSt_25
        document.getElementById('student__skips__25').value = sumSt_25
    }
    let summSkips_26 = document.querySelectorAll('.skips__student__26')
    let skipNameSt_26 = document.querySelector('.student__skips__26')
    var arrSt_26 = []
    if (!summSkips_26[0]) {} else {
        skipNameSt_26.removeAttribute('hidden')
        summSkips_26[0].classList.add('neud__skips')
        summSkips_26[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_26.length; i++) {
            arrSt_26.push(summSkips_26[i].textContent)
        }
        var sumSt_26 = 0;
        for (var i = 0; i < arrSt_26.length; i++) {
            sumSt_26 = +sumSt_26 + +parseInt(arrSt_26[i]);
        }
        summSkips_26[0].textContent = sumSt_26
        document.getElementById('student__skips__26').value = sumSt_26
    }
    let summSkips_27 = document.querySelectorAll('.skips__student__27')
    let skipNameSt_27 = document.querySelector('.student__skips__27')
    var arrSt_27 = []
    if (!summSkips_27[0]) {} else {
        skipNameSt_27.removeAttribute('hidden')
        summSkips_27[0].classList.add('neud__skips')
        summSkips_27[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_27.length; i++) {
            arrSt_27.push(summSkips_27[i].textContent)
        }
        var sumSt_27 = 0;
        for (var i = 0; i < arrSt_27.length; i++) {
            sumSt_27 = +sumSt_27 + +parseInt(arrSt_27[i]);
        }
        summSkips_27[0].textContent = sumSt_27
        document.getElementById('student__skips__27').value = sumSt_27
    }
    let summSkips_28 = document.querySelectorAll('.skips__student__28')
    let skipNameSt_28 = document.querySelector('.student__skips__28')
    var arrSt_28 = []
    if (!summSkips_28[0]) {} else {
        skipNameSt_28.removeAttribute('hidden')
        summSkips_28[0].classList.add('neud__skips')
        summSkips_28[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_28.length; i++) {
            arrSt_28.push(summSkips_28[i].textContent)
        }
        var sumSt_28 = 0;
        for (var i = 0; i < arrSt_28.length; i++) {
            sumSt_28 = +sumSt_28 + +parseInt(arrSt_28[i]);
        }
        summSkips_28[0].textContent = sumSt_28
        document.getElementById('student__skips__28').value = sumSt_28
    }
    let summSkips_29 = document.querySelectorAll('.skips__student__29')
    let skipNameSt_29 = document.querySelector('.student__skips__29')
    var arrSt_29 = []
    if (!summSkips_29[0]) {} else {
        skipNameSt_29.removeAttribute('hidden')
        summSkips_29[0].classList.add('neud__skips')
        summSkips_29[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_29.length; i++) {
            arrSt_29.push(summSkips_29[i].textContent)
        }
        var sumSt_29 = 0;
        for (var i = 0; i < arrSt_29.length; i++) {
            sumSt_29 = +sumSt_29 + +parseInt(arrSt_29[i]);
        }
        summSkips_29[0].textContent = sumSt_29
        document.getElementById('student__skips__29').value = sumSt_29
    }
    let summSkips_30 = document.querySelectorAll('.skips__student__30')
    let skipNameSt_30 = document.querySelector('.student__skips__30')
    var arrSt_30 = []
    if (!summSkips_30[0]) {} else {
        skipNameSt_30.removeAttribute('hidden')
        summSkips_30[0].classList.add('neud__skips')
        summSkips_30[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_30.length; i++) {
            arrSt_30.push(summSkips_30[i].textContent)
        }
        var sumSt_30 = 0;
        for (var i = 0; i < arrSt_30.length; i++) {
            sumSt_30 = +sumSt_30 + +parseInt(arrSt_30[i]);
        }
        summSkips_30[0].textContent = sumSt_30
        document.getElementById('student__skips__30').value = sumSt_30
    }
    let summSkips_31 = document.querySelectorAll('.skips__student__31')
    let skipNameSt_31 = document.querySelector('.student__skips__31')
    var arrSt_31 = []
    if (!summSkips_31[0]) {} else {
        skipNameSt_31.removeAttribute('hidden')
        summSkips_31[0].classList.add('neud__skips')
        summSkips_31[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_31.length; i++) {
            arrSt_31.push(summSkips_31[i].textContent)
        }
        var sumSt_31 = 0;
        for (var i = 0; i < arrSt_31.length; i++) {
            sumSt_31 = +sumSt_31 + +parseInt(arrSt_31[i]);
        }
        summSkips_31[0].textContent = sumSt_31
        document.getElementById('student__skips__31').value = sumSt_31
    }
    let summSkips_32 = document.querySelectorAll('.skips__student__32')
    let skipNameSt_32 = document.querySelector('.student__skips__32')
    var arrSt_32 = []
    if (!summSkips_32[0]) {} else {
        skipNameSt_32.removeAttribute('hidden')
        summSkips_32[0].classList.add('neud__skips')
        summSkips_32[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_32.length; i++) {
            arrSt_32.push(summSkips_32[i].textContent)
        }
        var sumSt_32 = 0;
        for (var i = 0; i < arrSt_32.length; i++) {
            sumSt_32 = +sumSt_32 + +parseInt(arrSt_32[i]);
        }
        summSkips_32[0].textContent = sumSt_32
        document.getElementById('student__skips__32').value = sumSt_32
    }






    let massUd = document.querySelectorAll('.number__skip_u')
    if (!massUd[0]) {} else {
        for (var i = 0; i < massUd.length; i++) {
            if (massUd[i].textContent > 0) {
                let elem = document.createElement("p")
                elem.classList.add('student__skip__ud')
                elem.setAttribute('hidden', 'ok')
                var elemText = document.createTextNode(massUd[i].textContent)
                elem.appendChild(elemText)
                let wrapSkipsU = document.querySelector('.wrap__students__skips__u')
                wrapSkipsU.appendChild(elem)
            }
        }
    }
    let skipsUd = 0
    let skipsUdNumber = document.querySelectorAll('.student__skip__ud')
    let allUdSkips = document.getElementById('all__ud__skips')
    let skipsUdInput = document.getElementById('all__ud__skips__input')
    if (!allUdSkips) {} else {
        for (var i = 0; i < skipsUdNumber.length; i++) {
            skipsUd = +skipsUd + +parseInt(skipsUdNumber[i].textContent);
        }
        allUdSkips.textContent = skipsUd
        skipsUdInput.value = skipsUd
    }




    // Запись данных о количестве студентов в текущем месяце

    let monatName = document.getElementById('monat_name')

    if (!monatName) {} else {
        let monatStud = document.getElementById('monat_stud')

        if (monatName.textContent == 'Январь') {
            monatStud.value = 'calc__students_1'
        }
        if (monatName.textContent == 'Февраль') {
            monatStud.value = 'calc__students_2'
        }
        if (monatName.textContent == 'Март') {
            monatStud.value = 'calc__students_3'
        }
        if (monatName.textContent == 'Апрель') {
            monatStud.value = 'calc__students_4'
        }
        if (monatName.textContent == 'Май') {
            monatStud.value = 'calc__students_5'
        }
        if (monatName.textContent == 'Июнь') {
            monatStud.value = 'calc__students_6'
        }
        if (monatName.textContent == 'Сентябрь') {
            monatStud.value = 'calc__students_9'
        }
        if (monatName.textContent == 'Октябрь') {
            monatStud.value = 'calc__students_10'
        }
        if (monatName.textContent == 'Ноябрь') {
            monatStud.value = 'calc__students_11'
        }
        if (monatName.textContent == 'Декабрь') {
            monatStud.value = 'calc__students_12'
        }
    }
    // Запись данных о количестве студентов в текущем месяце





    let allNeud = document.querySelectorAll('.neud__skips')
    let sumNeud = 0;
    let allNeudSkips = document.getElementById('all__neud__skips')
    let skipsNeudInput = document.getElementById('all__neud__skips__input')
    let skipsAllInput = document.getElementById('all__skips__input')
    let allSkips = document.getElementById('all__skips')
    if (!allNeudSkips) {} else {
        for (var i = 0; i < allNeud.length; i++) {
            sumNeud = +sumNeud + +parseInt(allNeud[i].textContent)
        }
        allNeudSkips.textContent = sumNeud
        allSkips.textContent = (+sumNeud + +skipsUd)
        skipsNeudInput.value = sumNeud
        skipsAllInput.value = (+sumNeud + +skipsUd)
    }


    let allStudentsGroup = document.getElementById('calculation__students')

    let udSkipsForSt = document.getElementById('skips__u__for__stud')
    let neudSkipsForSt = document.getElementById('skips__n__for__stud')
    let allSkipsForSt = document.getElementById('skips__all__for__stud')

    let udSkipsForStInput = document.getElementById('skips__u__for__stud__input')
    let neudSkipsForStInput = document.getElementById('skips__n__for__stud__input')
    let allSkipsForStInput = document.getElementById('skips__all__for__stud__input')


    if (!udSkipsForSt) {} else {
        udSkipsForSt.textContent = (+skipsUd / +allStudentsGroup.value).toFixed(1)
        udSkipsForStInput.value = (+skipsUd / +allStudentsGroup.value).toFixed(1)
    }
    if (!neudSkipsForSt) {} else {
        neudSkipsForSt.textContent = (+sumNeud / +allStudentsGroup.value).toFixed(1)
        neudSkipsForStInput.value = (+sumNeud / +allStudentsGroup.value).toFixed(1)
    }
    if (!allSkipsForSt) {} else {
        allSkipsForSt.textContent = (+allSkips.textContent / +allStudentsGroup.value).toFixed(1)
        allSkipsForStInput.value = (+allSkips.textContent / +allStudentsGroup.value).toFixed(1)
    }

    // Отправка информации попропускам на группу в БД
    if (!skipsAllInput) {} else {
        let skipsUdInput = document.getElementById('all__ud__skips__input').value
        let skipsNeudInput = document.getElementById('all__neud__skips__input').value
        let skipsAllInput = document.getElementById('all__skips__input').value
        let udSkipsForStInput = document.getElementById('skips__u__for__stud__input').value
        let neudSkipsForStInput = document.getElementById('skips__n__for__stud__input').value
        let allSkipsForStInput = document.getElementById('skips__all__for__stud__input').value
        let skipsGroupNumber = document.getElementById('skips__group__number').value
        let skipsTableNumber = document.getElementById('skips__table__number').value
        $.ajax({
            url: '/func_skips.php',
            type: 'POST',
            data: {
                skipsAllInput,
                skipsUdInput,
                skipsNeudInput,
                udSkipsForStInput,
                neudSkipsForStInput,
                allSkipsForStInput,
                skipsGroupNumber,
                skipsTableNumber
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
    // Отправка информации попропускам на группу в БД



    let numberGroup = document.getElementById('number_group')

    if (!numberGroup) {} else {
        let group = numberGroup.textContent
        $.ajax({
            url: '/func_skips.php',
            type: 'POST',
            data: {
                group
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

    let skipCause = document.querySelectorAll('.skip__cause')
    let skipUd = document.querySelectorAll('.skip_u')
    let skipNu = document.querySelectorAll('.skip_n')
    for (var i = 0; i < skipCause.length; i++) {
        skipCause[i].setAttribute('id', 'skip__cause' + [i])
        skipUd[i].setAttribute('id', 'skip_u' + [i])
        skipNu[i].setAttribute('id', 'skip_n' + [i])
    }

    let skipCause0 = document.getElementById('skip__cause0')
    let skipU0 = document.getElementById('skip_u0')
    if (!skipU0) {} else {
        skipU0.oninput = function () {
            if (skipU0.value > 0) {
                skipCause0.classList.add('visible')
            }
            if (skipU0.value < 1) {
                skipCause0.classList.remove('visible')
                skipCause0.value = ' '
            }
        }
    }

    // Скрытие последней стороки в таблцах с пропусками
    let tableSkipsFootU = document.querySelectorAll('.all_skips_student_u')
    for (var i = 0; i < tableSkipsFootU.length; i++) {
        tableSkipsFootU[i].setAttribute('hidden', 'ok')
    }
    let tableSkipsFootN = document.querySelectorAll('.all_skips_student_n')
    for (var i = 0; i < tableSkipsFootN.length; i++) {
        tableSkipsFootN[i].setAttribute('hidden', 'ok')
    }

    let submitEnterSkips = document.getElementById('submit_enter_skips')
    let dateSkips = document.getElementById('date_skips')
    let alarmDate = document.querySelector('.alarm__date')
    if (!dateSkips) {} else {
        dateSkips.oninput = function () {
            submitEnterSkips.removeAttribute('disabled')
            alarmDate.setAttribute('hidden', 'ok')
        }
    }
    // Скрытие последней стороки в таблцах с пропусками

    // Заполнение пропусков в модальном окне
    let skipU_0 = document.getElementById('skip_u0')
    let skipN_0 = document.getElementById('skip_n0')
    let skipU_1 = document.getElementById('skip_u1')
    let skipN_1 = document.getElementById('skip_n1')
    let skipN_2 = document.getElementById('skip_n2')
    let skipU_2 = document.getElementById('skip_u2')
    let skipU_3 = document.getElementById('skip_u3')
    let skipN_3 = document.getElementById('skip_n3')
    let skipU_4 = document.getElementById('skip_u4')
    let skipN_4 = document.getElementById('skip_n4')
    let skipU_5 = document.getElementById('skip_u5')
    let skipN_5 = document.getElementById('skip_n5')
    let skipU_6 = document.getElementById('skip_u6')
    let skipN_6 = document.getElementById('skip_n6')
    let skipU_7 = document.getElementById('skip_u7')
    let skipN_7 = document.getElementById('skip_n7')
    let skipU_8 = document.getElementById('skip_u8')
    let skipN_8 = document.getElementById('skip_n8')
    let skipU_9 = document.getElementById('skip_u9')
    let skipN_9 = document.getElementById('skip_n9')
    let skipU_10 = document.getElementById('skip_u10')
    let skipN_10 = document.getElementById('skip_n10')
    let skipU_11 = document.getElementById('skip_u11')
    let skipN_11 = document.getElementById('skip_n11')
    let skipU_12 = document.getElementById('skip_u12')
    let skipN_12 = document.getElementById('skip_n12')
    let skipU_13 = document.getElementById('skip_u13')
    let skipN_13 = document.getElementById('skip_n13')
    let skipU_14 = document.getElementById('skip_u14')
    let skipN_14 = document.getElementById('skip_n14')
    let skipU_15 = document.getElementById('skip_u15')
    let skipN_15 = document.getElementById('skip_n15')
    let skipU_16 = document.getElementById('skip_u16')
    let skipN_16 = document.getElementById('skip_n16')
    let skipU_17 = document.getElementById('skip_u17')
    let skipN_17 = document.getElementById('skip_n17')
    let skipU_18 = document.getElementById('skip_u18')
    let skipN_18 = document.getElementById('skip_n18')
    let skipU_19 = document.getElementById('skip_u19')
    let skipN_19 = document.getElementById('skip_n19')
    let skipU_20 = document.getElementById('skip_u20')
    let skipN_20 = document.getElementById('skip_n20')
    let skipU_21 = document.getElementById('skip_u21')
    let skipN_21 = document.getElementById('skip_n21')
    let skipU_22 = document.getElementById('skip_u22')
    let skipN_22 = document.getElementById('skip_n22')
    let skipU_23 = document.getElementById('skip_u23')
    let skipN_23 = document.getElementById('skip_n23')
    let skipU_24 = document.getElementById('skip_u24')
    let skipN_24 = document.getElementById('skip_n24')
    let skipU_25 = document.getElementById('skip_u25')
    let skipN_25 = document.getElementById('skip_n25')
    let skipU_26 = document.getElementById('skip_u26')
    let skipN_26 = document.getElementById('skip_n26')
    let skipU_27 = document.getElementById('skip_u27')
    let skipN_27 = document.getElementById('skip_n27')
    let skipU_28 = document.getElementById('skip_u28')
    let skipN_28 = document.getElementById('skip_n28')
    let skipU_29 = document.getElementById('skip_u29')
    let skipN_29 = document.getElementById('skip_n29')
    let skipU_30 = document.getElementById('skip_u30')
    let skipN_30 = document.getElementById('skip_n30')
    let skipU_31 = document.getElementById('skip_u31')
    let skipN_31 = document.getElementById('skip_n31')

    if (!skipU_0) {} else {
        skipU_0.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_0.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_1) {} else {
        skipU_1.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_1.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_2) {} else {
        skipU_2.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_2.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_3) {} else {
        skipU_3.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_3.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_4) {} else {
        skipU_4.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_4.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_5) {} else {
        skipU_5.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_5.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_6) {} else {
        skipU_6.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_6.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_7) {} else {
        skipU_7.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_7.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_8) {} else {
        skipU_8.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_8.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_9) {} else {
        skipU_9.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_9.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_10) {} else {
        skipU_10.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_10.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_11) {} else {
        skipU_11.oninput = function () {
            if (skipU_11.value == '') {
                skipU_11.value = 0
            }
        }
        skipN_11.oninput = function () {
            if (skipN_11.value == '') {
                skipN_11.value = 0
            }
        }
    }


    if (!skipU_12) {} else {
        skipU_12.oninput = function () {
            if (skipU_12.value == '') {
                skipU_12.value = 0
            }
        }
        skipN_12.oninput = function () {
            if (skipN_12.value == '') {
                skipN_12.value = 0
            }
        }
    }

    if (!skipU_13) {} else {
        skipU_13.oninput = function () {
            if (skipU_13.value == '') {
                skipU_13.value = 0
            }
        }
        skipN_13.oninput = function () {
            if (skipN_13.value == '') {
                skipN_13.value = 0
            }
        }
    }

    if (!skipU_14) {} else {
        skipU_14.oninput = function () {
            if (skipU_14.value == '') {
                skipU_14.value = 0
            }
        }
        skipN_14.oninput = function () {
            if (skipN_14.value == '') {
                skipN_14.value = 0
            }
        }
    }

    if (!skipU_15) {} else {
        skipU_15.oninput = function () {
            if (skipU_15.value == '') {
                skipU_15.value = 0
            }
        }
        skipN_15.oninput = function () {
            if (skipN_15.value == '') {
                skipN_15.value = 0
            }
        }
    }

    if (!skipU_16) {} else {
        skipU_16.oninput = function () {
            if (skipU_16.value == '') {
                skipU_16.value = 0
            }
        }
        skipN_16.oninput = function () {
            if (skipN_16.value == '') {
                skipN_16.value = 0
            }
        }
    }

    if (!skipU_17) {} else {
        skipU_17.oninput = function () {
            if (skipU_17.value == '') {
                skipU_17.value = 0
            }
        }
        skipN_17.oninput = function () {
            if (skipN_17.value == '') {
                skipN_17.value = 0
            }
        }
    }

    if (!skipU_18) {} else {
        skipU_18.oninput = function () {
            if (skipU_18.value == '') {
                skipU_18.value = 0
            }
        }
        skipN_18.oninput = function () {
            if (skipN_18.value == '') {
                skipN_18.value = 0
            }
        }
    }

    if (!skipU_19) {} else {
        skipU_19.oninput = function () {
            if (skipU_19.value == '') {
                skipU_19.value = 0
            }
        }
        skipN_19.oninput = function () {
            if (skipN_19.value == '') {
                skipN_19.value = 0
            }
        }
    }

    if (!skipU_20) {} else {
        skipU_20.oninput = function () {
            if (skipU_20.value == '') {
                skipU_20.value = 0
            }
        }
        skipN_20.oninput = function () {
            if (skipN_20.value == '') {
                skipN_20.value = 0
            }
        }
    }

    if (!skipU_21) {} else {
        skipU_21.oninput = function () {
            if (skipU_21.value == '') {
                skipU_21.value = 0
            }
        }
        skipN_21.oninput = function () {
            if (skipN_21.value == '') {
                skipN_21.value = 0
            }
        }
    }

    if (!skipU_22) {} else {
        skipU_22.oninput = function () {
            if (skipU_22.value == '') {
                skipU_22.value = 0
            }
        }
        skipN_22.oninput = function () {
            if (skipN_22.value == '') {
                skipN_22.value = 0
            }
        }
    }

    if (!skipU_23) {} else {
        skipU_23.oninput = function () {
            if (skipU_23.value == '') {
                skipU_23.value = 0
            }
        }
        skipN_23.oninput = function () {
            if (skipN_23.value == '') {
                skipN_23.value = 0
            }
        }
    }

    if (!skipU_24) {} else {
        skipU_24.oninput = function () {
            if (skipU_24.value == '') {
                skipU_24.value = 0
            }
        }
        skipN_24.oninput = function () {
            if (skipN_24.value == '') {
                skipN_24.value = 0
            }
        }
    }

    if (!skipU_25) {} else {
        skipU_25.oninput = function () {
            if (skipU_25.value == '') {
                skipU_25.value = 0
            }
        }
        skipN_25.oninput = function () {
            if (skipN_25.value == '') {
                skipN_25.value = 0
            }
        }
    }

    if (!skipU_26) {} else {
        skipU_26.oninput = function () {
            if (skipU_26.value == '') {
                skipU_26.value = 0
            }
        }
        skipN_26.oninput = function () {
            if (skipN_26.value == '') {
                skipN_26.value = 0
            }
        }
    }

    if (!skipU_27) {} else {
        skipU_27.oninput = function () {
            if (skipU_27.value == '') {
                skipU_27.value = 0
            }
        }
        skipN_27.oninput = function () {
            if (skipN_27.value == '') {
                skipN_27.value = 0
            }
        }
    }

    if (!skipU_28) {} else {
        skipU_28.oninput = function () {
            if (skipU_28.value == '') {
                skipU_28.value = 0
            }
        }
        skipN_28.oninput = function () {
            if (skipN_28.value == '') {
                skipN_28.value = 0
            }
        }
    }

    if (!skipU_29) {} else {
        skipU_29.oninput = function () {
            if (skipU_29.value == '') {
                skipU_29.value = 0
            }
        }
        skipN_29.oninput = function () {
            if (skipN_29.value == '') {
                skipN_29.value = 0
            }
        }
    }

    if (!skipU_30) {} else {
        skipU_30.oninput = function () {
            if (skipU_30.value == '') {
                skipU_30.value = 0
            }
        }
        skipN_30.oninput = function () {
            if (skipN_30.value == '') {
                skipN_30.value = 0
            }
        }
    }

    if (!skipU_31) {} else {
        skipU_31.oninput = function () {
            if (skipU_31.value == '') {
                skipU_31.value = 0
            }
        }
        skipN_31.oninput = function () {
            if (skipN_31.value == '') {
                skipN_31.value = 0
            }
        }
    }
    // Заполнение пропусков в модальном окне

    // Расчет итога в таблце с пропусками по колледжу за месяц
    // Всего пропусков
    let allskipsFull = document.getElementById('allskipsfull')
    let udskipsFull = document.getElementById('udskipsfull')
    let neudskipsFull = document.getElementById('neudskipsfull')
    let allSkipsForstFull = document.getElementById('allskipsforstfull')
    let udSkipsForstFull = document.getElementById('udskipsforstfull')
    let neudSkipsForstFull = document.getElementById('neudskipsForstfull')
    // Всего пропусков
    // Пропуски на одного студента
    let skipsReportAllskips = document.querySelectorAll('.skips-report__allskips')
    let skipsReportUdskips = document.querySelectorAll('.skips-report__udskips')
    let skipsReportNeudskips = document.querySelectorAll('.skips-report__neudskips')
    let skipsReportAllSkipsForSt = document.querySelectorAll('.skips-report__allSkipsForSt')
    let skipsReportUdSkipsForSt = document.querySelectorAll('.skips-report__udSkipsForSt')
    let skipsReportNeudSkipsForSt = document.querySelectorAll('.skips-report__neudSkipsForSt')
    // Пропуски на одного студента

    if (!allskipsFull) {} else {
        let massallskipsFull = []
        for (var i = 0; i < skipsReportAllskips.length; i++) {
            elem = skipsReportAllskips[i].textContent
            massallskipsFull.push(elem)
        }
        let reducer = (previousValue, currentValue) => +previousValue + +currentValue
        allskipsFull.textContent = massallskipsFull.reduce(reducer)

    }
    if (!udskipsFull) {} else {
        let massudskipsFull = []
        for (var i = 0; i < skipsReportUdskips.length; i++) {
            elem = skipsReportUdskips[i].textContent
            massudskipsFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        udskipsFull.textContent = massudskipsFull.reduce(reducer)
    }
    if (!neudskipsFull) {} else {
        let massneudskipsFull = []
        for (var i = 0; i < skipsReportNeudskips.length; i++) {
            elem = skipsReportNeudskips[i].textContent
            massneudskipsFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        neudskipsFull.textContent = massneudskipsFull.reduce(reducer)
    }
    if (!allSkipsForstFull) {} else {
        let massallSkipsForstFull = []
        for (var i = 0; i < skipsReportAllSkipsForSt.length; i++) {
            elem = skipsReportAllSkipsForSt[i].textContent
            massallSkipsForstFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        allSkipsForstFull.textContent = massallSkipsForstFull.reduce(reducer).toFixed(1)
    }
    if (!udSkipsForstFull) {} else {
        let massudSkipsForstFull = []
        for (var i = 0; i < skipsReportUdSkipsForSt.length; i++) {
            elem = skipsReportUdSkipsForSt[i].textContent
            massudSkipsForstFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        udSkipsForstFull.textContent = massudSkipsForstFull.reduce(reducer).toFixed(1)
    }
    if (!neudSkipsForstFull) {} else {
        let massneudSkipsForstFull = []
        for (var i = 0; i < skipsReportNeudSkipsForSt.length; i++) {
            elem = skipsReportNeudSkipsForSt[i].textContent
            massneudSkipsForstFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        neudSkipsForstFull.textContent = massneudSkipsForstFull.reduce(reducer).toFixed(1)
    }

    let titleGroup = document.querySelector('.title__group')
    let groupButton = document.querySelectorAll('.button__group')
    if (!groupButton) {} else {
        for (var i = 0; i < groupButton.length; i++) {
            if (groupButton[i].title == titleGroup.textContent) {
                groupButton[i].classList.add('green__button')
            }
        }
    }
    // Расчет итога в таблце с пропусками по колледжу за месяц

    let tableSkipsWrap = document.querySelector('.table__skips')
    let skipsHead = document.querySelector('.table__skips__head')
    // console.log(tableSkipsWrap.offsetWidth)
    if (!skipsHead) {} else {
        if (skipsHead.offsetWidth > 1170) {
            tableSkipsWrap.classList.add('scroll')
        }
    }


    // Выделение цветом кнпки месяца и игруппы в пропусках
    let monatSkipsNumbers = document.querySelectorAll('.monat__skips__number')
    let groupSkipsNumbers = document.querySelectorAll('.group__skips__number')

    // let monatName = document.getElementById('monat_name')
    let groupName = document.getElementById('number_group')

    if (!monatSkipsNumbers) {} else {
        for (var i = 0; i < monatSkipsNumbers.length; i++) {
            if (monatSkipsNumbers[i].title == monatName.textContent) {
                monatSkipsNumbers[i].classList.add('green__button')
            }
        }
    }

    if (!groupSkipsNumbers) {} else {
        for (var i = 0; i < groupSkipsNumbers.length; i++) {
            if (groupSkipsNumbers[i].title == groupName.textContent) {
                groupSkipsNumbers[i].classList.add('green__button')
            }
        }
    }
    // Выделение цветом кнпки месяца и игруппы в пропусках


    // Выделение цветом кнпки месяца и игруппы в базе групп
    let groupBaseNumbers = document.querySelectorAll('.group__base__number')

    let groupNameBase = document.getElementById('number_group')

    if (!groupBaseNumbers) {} else {
        for (var i = 0; i < groupBaseNumbers.length; i++) {
            if (groupBaseNumbers[i].title == groupNameBase.textContent) {
                groupBaseNumbers[i].classList.add('green__button')
            }
        }
    }
    // Выделение цветом кнпки месяца и игруппы в базе групп



    // Всплывашка при наведении в таблице с пропусками
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Всплывашка при наведении в таблице с пропусками





    // Вывод общего количества пропусков за каждый месяц
    // Январь
    let allSkipsHide1 = document.querySelectorAll('.skips-report__allskips_1')
    let allSkips1 = document.getElementById('allskips_1')

    if (!allSkips1) {} else {
        let aS1 = 0
        for (var i = 0; i < allSkipsHide1.length; i++) {
            aS1 = +aS1 + +allSkipsHide1[i].textContent
        }
        allSkips1.textContent = aS1
    }

    let udSkipsHide1 = document.querySelectorAll('.skips-report__udskips_1')
    let udSkips1 = document.getElementById('udskips_1')

    if (!udSkips1) {} else {
        let uS1 = 0
        for (var i = 0; i < udSkipsHide1.length; i++) {
            uS1 = +uS1 + +udSkipsHide1[i].textContent
        }
        udSkips1.textContent = uS1
    }

    let neudSkipsHide1 = document.querySelectorAll('.skips-report__neudskips_1')
    let neudSkips1 = document.getElementById('neudskips_1')

    if (!neudSkips1) {} else {
        let nS1 = 0
        for (var i = 0; i < neudSkipsHide1.length; i++) {
            nS1 = +nS1 + +neudSkipsHide1[i].textContent
        }
        neudSkips1.textContent = nS1
    }

    let allSkipsForStHide1 = document.querySelectorAll('.skips-report__allskipsforst_1')
    let allSkipsForSt1 = document.getElementById('allskipsforst_1')

    if (!allSkipsForSt1) {} else {
        let aFS1 = 0
        for (var i = 0; i < allSkipsForStHide1.length; i++) {
            aFS1 = +aFS1 + +allSkipsForStHide1[i].textContent
        }
        allSkipsForSt1.textContent = aFS1.toFixed(1)
    }

    let udSkipsForStHide1 = document.querySelectorAll('.skips-report__udskipsforst_1')
    let udSkipsForSt1 = document.getElementById('udskipsforst_1')

    if (!udSkipsForSt1) {} else {
        let uFS1 = 0
        for (var i = 0; i < udSkipsForStHide1.length; i++) {
            uFS1 = +uFS1 + +udSkipsForStHide1[i].textContent
        }
        udSkipsForSt1.textContent = uFS1.toFixed(1)
    }

    let neudSkipsForStHide1 = document.querySelectorAll('.skips-report__neudskipsforst_1')
    let neudSkipsForSt1 = document.getElementById('neudskipsforst_1')

    if (!neudSkipsForSt1) {} else {
        let nFS1 = 0
        for (var i = 0; i < neudSkipsForStHide1.length; i++) {
            nFS1 = +nFS1 + +neudSkipsForStHide1[i].textContent
        }
        neudSkipsForSt1.textContent = nFS1.toFixed(1)
    }

    // console.log(et)
    // Январь

    // Февраль
    let allSkipsHide2 = document.querySelectorAll('.skips-report__allskips_2')
    let allSkips2 = document.getElementById('allskips_2')

    if (!allSkips2) {} else {
        let aS2 = 0
        for (var i = 0; i < allSkipsHide2.length; i++) {
            aS2 = +aS2 + +allSkipsHide2[i].textContent
        }
        allSkips2.textContent = aS2
    }

    let udSkipsHide2 = document.querySelectorAll('.skips-report__udskips_2')
    let udSkips2 = document.getElementById('udskips_2')

    if (!udSkips2) {} else {
        let uS2 = 0
        for (var i = 0; i < udSkipsHide2.length; i++) {
            uS2 = +uS2 + +udSkipsHide2[i].textContent
        }
        udSkips2.textContent = uS2
    }

    let neudSkipsHide2 = document.querySelectorAll('.skips-report__neudskips_2')
    let neudSkips2 = document.getElementById('neudskips_2')

    if (!neudSkips2) {} else {
        let nS2 = 0
        for (var i = 0; i < neudSkipsHide2.length; i++) {
            nS2 = +nS2 + +neudSkipsHide2[i].textContent
        }
        neudSkips2.textContent = nS2
    }

    let allSkipsForStHide2 = document.querySelectorAll('.skips-report__allskipsforst_2')
    let allSkipsForSt2 = document.getElementById('allskipsforst_2')

    if (!allSkipsForSt2) {} else {
        let aFS2 = 0
        for (var i = 0; i < allSkipsForStHide2.length; i++) {
            aFS2 = +aFS2 + +allSkipsForStHide2[i].textContent
        }
        allSkipsForSt2.textContent = aFS2.toFixed(1)
    }

    let udSkipsForStHide2 = document.querySelectorAll('.skips-report__udskipsforst_2')
    let udSkipsForSt2 = document.getElementById('udskipsforst_2')

    if (!udSkipsForSt2) {} else {
        let uFS2 = 0
        for (var i = 0; i < udSkipsForStHide2.length; i++) {
            uFS2 = +uFS2 + +udSkipsForStHide2[i].textContent
        }
        udSkipsForSt2.textContent = uFS2.toFixed(1)
    }

    let neudSkipsForStHide2 = document.querySelectorAll('.skips-report__neudskipsforst_2')
    let neudSkipsForSt2 = document.getElementById('neudskipsforst_2')

    if (!neudSkipsForSt2) {} else {
        let nFS2 = 0
        for (var i = 0; i < neudSkipsForStHide2.length; i++) {
            nFS2 = +nFS2 + +neudSkipsForStHide2[i].textContent
        }
        neudSkipsForSt2.textContent = nFS2.toFixed(1)
    }
    // Февраль

    // Март
    let allSkipsHide3 = document.querySelectorAll('.skips-report__allskips_3')
    let allSkips3 = document.getElementById('allskips_3')

    if (!allSkips3) {} else {
        let aS3 = 0
        for (var i = 0; i < allSkipsHide3.length; i++) {
            aS3 = +aS3 + +allSkipsHide3[i].textContent
        }
        allSkips3.textContent = aS3
    }

    let udSkipsHide3 = document.querySelectorAll('.skips-report__udskips_3')
    let udSkips3 = document.getElementById('udskips_3')

    if (!udSkips3) {} else {
        let uS3 = 0
        for (var i = 0; i < udSkipsHide3.length; i++) {
            uS3 = +uS3 + +udSkipsHide3[i].textContent
        }
        udSkips3.textContent = uS3
    }

    let neudSkipsHide3 = document.querySelectorAll('.skips-report__neudskips_3')
    let neudSkips3 = document.getElementById('neudskips_3')

    if (!neudSkips3) {} else {
        let nS3 = 0
        for (var i = 0; i < neudSkipsHide3.length; i++) {
            nS3 = +nS3 + +neudSkipsHide3[i].textContent
        }
        neudSkips3.textContent = nS3
    }

    let allSkipsForStHide3 = document.querySelectorAll('.skips-report__allskipsforst_3')
    let allSkipsForSt3 = document.getElementById('allskipsforst_3')

    if (!allSkipsForSt3) {} else {
        let aFS3 = 0
        for (var i = 0; i < allSkipsForStHide3.length; i++) {
            aFS3 = +aFS3 + +allSkipsForStHide3[i].textContent
        }
        allSkipsForSt3.textContent = aFS3.toFixed(1)
    }

    let udSkipsForStHide3 = document.querySelectorAll('.skips-report__udskipsforst_3')
    let udSkipsForSt3 = document.getElementById('udskipsforst_3')

    if (!udSkipsForSt3) {} else {
        let uFS3 = 0
        for (var i = 0; i < udSkipsForStHide3.length; i++) {
            uFS3 = +uFS3 + +udSkipsForStHide3[i].textContent
        }
        udSkipsForSt3.textContent = uFS3.toFixed(1)
    }

    let neudSkipsForStHide3 = document.querySelectorAll('.skips-report__neudskipsforst_3')
    let neudSkipsForSt3 = document.getElementById('neudskipsforst_3')

    if (!neudSkipsForSt3) {} else {
        let nFS3 = 0
        for (var i = 0; i < neudSkipsForStHide3.length; i++) {
            nFS3 = +nFS3 + +neudSkipsForStHide3[i].textContent
        }
        neudSkipsForSt3.textContent = nFS3.toFixed(1)
    }
    // Март

    // Апрель
    let allSkipsHide4 = document.querySelectorAll('.skips-report__allskips_4')
    let allSkips4 = document.getElementById('allskips_4')

    if (!allSkips4) {} else {
        let aS4 = 0
        for (var i = 0; i < allSkipsHide4.length; i++) {
            aS4 = +aS4 + +allSkipsHide4[i].textContent
        }
        allSkips4.textContent = aS4
    }

    let udSkipsHide4 = document.querySelectorAll('.skips-report__udskips_4')
    let udSkips4 = document.getElementById('udskips_4')

    if (!udSkips4) {} else {
        let uS4 = 0
        for (var i = 0; i < udSkipsHide4.length; i++) {
            uS4 = +uS4 + +udSkipsHide4[i].textContent
        }
        udSkips4.textContent = uS4
    }

    let neudSkipsHide4 = document.querySelectorAll('.skips-report__neudskips_4')
    let neudSkips4 = document.getElementById('neudskips_4')

    if (!neudSkips4) {} else {
        let nS4 = 0
        for (var i = 0; i < neudSkipsHide4.length; i++) {
            nS4 = +nS4 + +neudSkipsHide4[i].textContent
        }
        neudSkips4.textContent = nS4
    }

    let allSkipsForStHide4 = document.querySelectorAll('.skips-report__allskipsforst_4')
    let allSkipsForSt4 = document.getElementById('allskipsforst_4')

    if (!allSkipsForSt4) {} else {
        let aFS4 = 0
        for (var i = 0; i < allSkipsForStHide4.length; i++) {
            aFS4 = +aFS4 + +allSkipsForStHide4[i].textContent
        }
        allSkipsForSt4.textContent = aFS4.toFixed(1)
    }

    let udSkipsForStHide4 = document.querySelectorAll('.skips-report__udskipsforst_4')
    let udSkipsForSt4 = document.getElementById('udskipsforst_4')

    if (!udSkipsForSt4) {} else {
        let uFS4 = 0
        for (var i = 0; i < udSkipsForStHide4.length; i++) {
            uFS4 = +uFS4 + +udSkipsForStHide4[i].textContent
        }
        udSkipsForSt4.textContent = uFS4.toFixed(1)
    }

    let neudSkipsForStHide4 = document.querySelectorAll('.skips-report__neudskipsforst_4')
    let neudSkipsForSt4 = document.getElementById('neudskipsforst_4')

    if (!neudSkipsForSt4) {} else {
        let nFS4 = 0
        for (var i = 0; i < neudSkipsForStHide4.length; i++) {
            nFS4 = +nFS4 + +neudSkipsForStHide4[i].textContent
        }
        neudSkipsForSt4.textContent = nFS4.toFixed(1)
    }
    // Апрель

    // Май
    let allSkipsHide5 = document.querySelectorAll('.skips-report__allskips_5')
    let allSkips5 = document.getElementById('allskips_5')

    if (!allSkips5) {} else {
        let aS5 = 0
        for (var i = 0; i < allSkipsHide5.length; i++) {
            aS5 = +aS5 + +allSkipsHide5[i].textContent
        }
        allSkips5.textContent = aS5
    }

    let udSkipsHide5 = document.querySelectorAll('.skips-report__udskips_5')
    let udSkips5 = document.getElementById('udskips_5')

    if (!udSkips5) {} else {
        let uS5 = 0
        for (var i = 0; i < udSkipsHide5.length; i++) {
            uS5 = +uS5 + +udSkipsHide5[i].textContent
        }
        udSkips5.textContent = uS5
    }

    let neudSkipsHide5 = document.querySelectorAll('.skips-report__neudskips_5')
    let neudSkips5 = document.getElementById('neudskips_5')

    if (!neudSkips5) {} else {
        let nS5 = 0
        for (var i = 0; i < neudSkipsHide5.length; i++) {
            nS5 = +nS5 + +neudSkipsHide5[i].textContent
        }
        neudSkips5.textContent = nS5
    }

    let allSkipsForStHide5 = document.querySelectorAll('.skips-report__allskipsforst_5')
    let allSkipsForSt5 = document.getElementById('allskipsforst_5')

    if (!allSkipsForSt5) {} else {
        let aFS5 = 0
        for (var i = 0; i < allSkipsForStHide5.length; i++) {
            aFS5 = +aFS5 + +allSkipsForStHide5[i].textContent
        }
        allSkipsForSt5.textContent = aFS5.toFixed(1)
    }

    let udSkipsForStHide5 = document.querySelectorAll('.skips-report__udskipsforst_5')
    let udSkipsForSt5 = document.getElementById('udskipsforst_5')

    if (!udSkipsForSt5) {} else {
        let uFS5 = 0
        for (var i = 0; i < udSkipsForStHide5.length; i++) {
            uFS5 = +uFS5 + +udSkipsForStHide5[i].textContent
        }
        udSkipsForSt5.textContent = uFS5.toFixed(1)
    }

    let neudSkipsForStHide5 = document.querySelectorAll('.skips-report__neudskipsforst_5')
    let neudSkipsForSt5 = document.getElementById('neudskipsforst_5')

    if (!neudSkipsForSt5) {} else {
        let nFS5 = 0
        for (var i = 0; i < neudSkipsForStHide5.length; i++) {
            nFS5 = +nFS5 + +neudSkipsForStHide5[i].textContent
        }
        neudSkipsForSt5.textContent = nFS5.toFixed(1)
    }
    // Май

    // Июнь
    let allSkipsHide6 = document.querySelectorAll('.skips-report__allskips_6')
    let allSkips6 = document.getElementById('allskips_6')

    if (!allSkips6) {} else {
        let aS6 = 0
        for (var i = 0; i < allSkipsHide6.length; i++) {
            aS6 = +aS6 + +allSkipsHide6[i].textContent
        }
        allSkips6.textContent = aS6
    }

    let udSkipsHide6 = document.querySelectorAll('.skips-report__udskips_6')
    let udSkips6 = document.getElementById('udskips_6')

    if (!udSkips6) {} else {
        let uS6 = 0
        for (var i = 0; i < udSkipsHide6.length; i++) {
            uS6 = +uS6 + +udSkipsHide6[i].textContent
        }
        udSkips6.textContent = uS6
    }

    let neudSkipsHide6 = document.querySelectorAll('.skips-report__neudskips_6')
    let neudSkips6 = document.getElementById('neudskips_6')

    if (!neudSkips6) {} else {
        let nS6 = 0
        for (var i = 0; i < neudSkipsHide6.length; i++) {
            nS6 = +nS6 + +neudSkipsHide6[i].textContent
        }
        neudSkips6.textContent = nS6
    }

    let allSkipsForStHide6 = document.querySelectorAll('.skips-report__allskipsforst_6')
    let allSkipsForSt6 = document.getElementById('allskipsforst_6')

    if (!allSkipsForSt6) {} else {
        let aFS6 = 0
        for (var i = 0; i < allSkipsForStHide6.length; i++) {
            aFS6 = +aFS6 + +allSkipsForStHide6[i].textContent
        }
        allSkipsForSt6.textContent = aFS6.toFixed(1)
    }

    let udSkipsForStHide6 = document.querySelectorAll('.skips-report__udskipsforst_6')
    let udSkipsForSt6 = document.getElementById('udskipsforst_6')

    if (!udSkipsForSt6) {} else {
        let uFS6 = 0
        for (var i = 0; i < udSkipsForStHide6.length; i++) {
            uFS6 = +uFS6 + +udSkipsForStHide6[i].textContent
        }
        udSkipsForSt6.textContent = uFS6.toFixed(1)
    }

    let neudSkipsForStHide6 = document.querySelectorAll('.skips-report__neudskipsforst_6')
    let neudSkipsForSt6 = document.getElementById('neudskipsforst_6')

    if (!neudSkipsForSt6) {} else {
        let nFS6 = 0
        for (var i = 0; i < neudSkipsForStHide6.length; i++) {
            nFS6 = +nFS6 + +neudSkipsForStHide6[i].textContent
        }
        neudSkipsForSt6.textContent = nFS6.toFixed(1)
    }
    // Июнь

    // Сентябрь
    let allSkipsHide9 = document.querySelectorAll('.skips-report__allskips_9')
    let allSkips9 = document.getElementById('allskips_9')

    if (!allSkips9) {} else {
        let aS9 = 0
        for (var i = 0; i < allSkipsHide9.length; i++) {
            aS9 = +aS9 + +allSkipsHide9[i].textContent
        }
        allSkips9.textContent = aS9
    }

    let udSkipsHide9 = document.querySelectorAll('.skips-report__udskips_9')
    let udSkips9 = document.getElementById('udskips_9')

    if (!udSkips9) {} else {
        let uS9 = 0
        for (var i = 0; i < udSkipsHide9.length; i++) {
            uS9 = +uS9 + +udSkipsHide9[i].textContent
        }
        udSkips9.textContent = uS9
    }

    let neudSkipsHide9 = document.querySelectorAll('.skips-report__neudskips_9')
    let neudSkips9 = document.getElementById('neudskips_9')

    if (!neudSkips9) {} else {
        let nS9 = 0
        for (var i = 0; i < neudSkipsHide9.length; i++) {
            nS9 = +nS9 + +neudSkipsHide9[i].textContent
        }
        neudSkips9.textContent = nS9
    }

    let allSkipsForStHide9 = document.querySelectorAll('.skips-report__allskipsforst_9')
    let allSkipsForSt9 = document.getElementById('allskipsforst_9')

    if (!allSkipsForSt9) {} else {
        let aFS9 = 0
        for (var i = 0; i < allSkipsForStHide9.length; i++) {
            aFS9 = +aFS9 + +allSkipsForStHide9[i].textContent
        }
        allSkipsForSt9.textContent = aFS9.toFixed(1)
    }

    let udSkipsForStHide9 = document.querySelectorAll('.skips-report__udskipsforst_9')
    let udSkipsForSt9 = document.getElementById('udskipsforst_9')

    if (!udSkipsForSt9) {} else {
        let uFS9 = 0
        for (var i = 0; i < udSkipsForStHide9.length; i++) {
            uFS9 = +uFS9 + +udSkipsForStHide9[i].textContent
        }
        udSkipsForSt9.textContent = uFS9.toFixed(1)
    }

    let neudSkipsForStHide9 = document.querySelectorAll('.skips-report__neudskipsforst_9')
    let neudSkipsForSt9 = document.getElementById('neudskipsforst_9')

    if (!neudSkipsForSt9) {} else {
        let nFS9 = 0
        for (var i = 0; i < neudSkipsForStHide9.length; i++) {
            nFS9 = +nFS9 + +neudSkipsForStHide9[i].textContent
        }
        neudSkipsForSt9.textContent = nFS9.toFixed(1)
    }
    // Сентябрь

    // Октябрь
    let allSkipsHide10 = document.querySelectorAll('.skips-report__allskips_10')
    let allSkips10 = document.getElementById('allskips_10')

    if (!allSkips10) {} else {
        let aS10 = 0
        for (var i = 0; i < allSkipsHide10.length; i++) {
            aS10 = +aS10 + +allSkipsHide10[i].textContent
        }
        allSkips10.textContent = aS10
    }

    let udSkipsHide10 = document.querySelectorAll('.skips-report__udskips_10')
    let udSkips10 = document.getElementById('udskips_10')

    if (!udSkips10) {} else {
        let uS10 = 0
        for (var i = 0; i < udSkipsHide10.length; i++) {
            uS10 = +uS10 + +udSkipsHide10[i].textContent
        }
        udSkips10.textContent = uS10
        console.log(uS10)
    }

    let neudSkipsHide10 = document.querySelectorAll('.skips-report__neudskips_10')
    let neudSkips10 = document.getElementById('neudskips_10')

    if (!neudSkips10) {} else {
        let nS10 = 0
        for (var i = 0; i < neudSkipsHide10.length; i++) {
            nS10 = +nS10 + +neudSkipsHide10[i].textContent
        }
        neudSkips10.textContent = nS10
    }

    let allSkipsForStHide10 = document.querySelectorAll('.skips-report__allskipsforst_10')
    let allSkipsForSt10 = document.getElementById('allskipsforst_10')

    if (!allSkipsForSt10) {} else {
        let aFS10 = 0
        for (var i = 0; i < allSkipsForStHide10.length; i++) {
            aFS10 = +aFS10 + +allSkipsForStHide10[i].textContent
        }
        allSkipsForSt10.textContent = aFS10.toFixed(1)
    }

    let udSkipsForStHide10 = document.querySelectorAll('.skips-report__udskipsforst_10')
    let udSkipsForSt10 = document.getElementById('udskipsforst_10')

    if (!udSkipsForSt10) {} else {
        let uFS10 = 0
        for (var i = 0; i < udSkipsForStHide10.length; i++) {
            uFS10 = +uFS10 + +udSkipsForStHide10[i].textContent
        }
        udSkipsForSt10.textContent = uFS10.toFixed(1)
    }

    let neudSkipsForStHide10 = document.querySelectorAll('.skips-report__neudskipsforst_10')
    let neudSkipsForSt10 = document.getElementById('neudskipsforst_10')

    if (!neudSkipsForSt10) {} else {
        let nFS10 = 0
        for (var i = 0; i < neudSkipsForStHide10.length; i++) {
            nFS10 = +nFS10 + +neudSkipsForStHide10[i].textContent
        }
        neudSkipsForSt10.textContent = nFS10.toFixed(1)
    }
    // Октябрь

    // Ноябрь
    let allSkipsHide11 = document.querySelectorAll('.skips-report__allskips_11')
    let allSkips11 = document.getElementById('allskips_11')

    if (!allSkips11) {} else {
        let aS11 = 0
        for (var i = 0; i < allSkipsHide11.length; i++) {
            aS11 = +aS11 + +allSkipsHide11[i].textContent
        }
        allSkips11.textContent = aS11
    }

    let udSkipsHide11 = document.querySelectorAll('.skips-report__udskips_11')
    let udSkips11 = document.getElementById('udskips_11')

    if (!udSkips11) {} else {
        let uS11 = 0
        for (var i = 0; i < udSkipsHide11.length; i++) {
            uS11 = +uS11 + +udSkipsHide11[i].textContent
        }
        udSkips11.textContent = uS11
        console.log(uS11)
    }

    let neudSkipsHide11 = document.querySelectorAll('.skips-report__neudskips_11')
    let neudSkips11 = document.getElementById('neudskips_11')

    if (!neudSkips11) {} else {
        let nS11 = 0
        for (var i = 0; i < neudSkipsHide11.length; i++) {
            nS11 = +nS11 + +neudSkipsHide11[i].textContent
        }
        neudSkips11.textContent = nS11
    }

    let allSkipsForStHide11 = document.querySelectorAll('.skips-report__allskipsforst_11')
    let allSkipsForSt11 = document.getElementById('allskipsforst_11')

    if (!allSkipsForSt11) {} else {
        let aFS11 = 0
        for (var i = 0; i < allSkipsForStHide11.length; i++) {
            aFS11 = +aFS11 + +allSkipsForStHide11[i].textContent
        }
        allSkipsForSt11.textContent = aFS11.toFixed(1)
    }

    let udSkipsForStHide11 = document.querySelectorAll('.skips-report__udskipsforst_11')
    let udSkipsForSt11 = document.getElementById('udskipsforst_11')

    if (!udSkipsForSt11) {} else {
        let uFS11 = 0
        for (var i = 0; i < udSkipsForStHide11.length; i++) {
            uFS11 = +uFS11 + +udSkipsForStHide11[i].textContent
        }
        udSkipsForSt11.textContent = uFS11.toFixed(1)
    }

    let neudSkipsForStHide11 = document.querySelectorAll('.skips-report__neudskipsforst_11')
    let neudSkipsForSt11 = document.getElementById('neudskipsforst_11')

    if (!neudSkipsForSt11) {} else {
        let nFS11 = 0
        for (var i = 0; i < neudSkipsForStHide11.length; i++) {
            nFS11 = +nFS11 + +neudSkipsForStHide11[i].textContent
        }
        neudSkipsForSt11.textContent = nFS11.toFixed(1)
    }
    // Ноябрь

    // Декабрь
    let allSkipsHide12 = document.querySelectorAll('.skips-report__allskips_12')
    let allSkips12 = document.getElementById('allskips_12')

    if (!allSkips12) {} else {
        let aS12 = 0
        for (var i = 0; i < allSkipsHide12.length; i++) {
            aS12 = +aS12 + +allSkipsHide12[i].textContent
        }
        allSkips12.textContent = aS12
    }

    let udSkipsHide12 = document.querySelectorAll('.skips-report__udskips_12')
    let udSkips12 = document.getElementById('udskips_12')

    if (!udSkips12) {} else {
        let uS12 = 0
        for (var i = 0; i < udSkipsHide12.length; i++) {
            uS12 = +uS12 + +udSkipsHide12[i].textContent
        }
        udSkips12.textContent = uS12
        console.log(uS12)
    }

    let neudSkipsHide12 = document.querySelectorAll('.skips-report__neudskips_12')
    let neudSkips12 = document.getElementById('neudskips_12')

    if (!neudSkips12) {} else {
        let nS12 = 0
        for (var i = 0; i < neudSkipsHide12.length; i++) {
            nS12 = +nS12 + +neudSkipsHide12[i].textContent
        }
        neudSkips12.textContent = nS12
    }

    let allSkipsForStHide12 = document.querySelectorAll('.skips-report__allskipsforst_12')
    let allSkipsForSt12 = document.getElementById('allskipsforst_12')

    if (!allSkipsForSt12) {} else {
        let aFS12 = 0
        for (var i = 0; i < allSkipsForStHide12.length; i++) {
            aFS12 = +aFS12 + +allSkipsForStHide12[i].textContent
        }
        allSkipsForSt12.textContent = aFS12.toFixed(1)
    }

    let udSkipsForStHide12 = document.querySelectorAll('.skips-report__udskipsforst_12')
    let udSkipsForSt12 = document.getElementById('udskipsforst_12')

    if (!udSkipsForSt12) {} else {
        let uFS12 = 0
        for (var i = 0; i < udSkipsForStHide12.length; i++) {
            uFS12 = +uFS12 + +udSkipsForStHide12[i].textContent
        }
        udSkipsForSt12.textContent = uFS12.toFixed(1)
    }

    let neudSkipsForStHide12 = document.querySelectorAll('.skips-report__neudskipsforst_12')
    let neudSkipsForSt12 = document.getElementById('neudskipsforst_12')

    if (!neudSkipsForSt12) {} else {
        let nFS12 = 0
        for (var i = 0; i < neudSkipsForStHide12.length; i++) {
            nFS12 = +nFS12 + +neudSkipsForStHide12[i].textContent
        }
        neudSkipsForSt12.textContent = nFS12.toFixed(1)
    }
    // Декабрь
    // Вывод общего количества пропусков за каждый месяц

    // Итог по пропускам I полугодие
    let allSkipsFull1 = document.querySelectorAll('.allskips__full__1')
    let finalAllSkips1 = document.getElementById('allskipsfull_1')

    if (!finalAllSkips1) {} else {
        let aSF1 = 0
        for (var i = 0; i < allSkipsFull1.length; i++) {
            aSF1 = +aSF1 + +allSkipsFull1[i].textContent
        }
        finalAllSkips1.textContent = aSF1
    }

    let udSkipsFull1 = document.querySelectorAll('.udskips__full__1')
    let finalUdSkips1 = document.getElementById('udskipsfull_1')

    if (!finalUdSkips1) {} else {
        let uSF1 = 0
        for (var i = 0; i < udSkipsFull1.length; i++) {
            uSF1 = +uSF1 + +udSkipsFull1[i].textContent
        }
        finalUdSkips1.textContent = uSF1
    }

    let neudSkipsFull1 = document.querySelectorAll('.neudskips__full__1')
    let finalNeudSkips1 = document.getElementById('neudskipsfull_1')

    if (!finalNeudSkips1) {} else {
        let nSF1 = 0
        for (var i = 0; i < neudSkipsFull1.length; i++) {
            nSF1 = +nSF1 + +neudSkipsFull1[i].textContent
        }
        finalNeudSkips1.textContent = nSF1
    }

    let allSkipsForStFull1 = document.querySelectorAll('.allskipsforst__full__1')
    let finalAllSkipsForSt1 = document.getElementById('allskipsforstfull_1')

    if (!finalAllSkipsForSt1) {} else {
        let aSF1 = 0
        for (var i = 0; i < allSkipsForStFull1.length; i++) {
            aSF1 = +aSF1 + +allSkipsForStFull1[i].textContent
        }
        finalAllSkipsForSt1.textContent = aSF1.toFixed(1)
    }

    let udSkipsForStFull1 = document.querySelectorAll('.udskipsforst__full__1')
    let finalUdSkipsForSt1 = document.getElementById('udskipsforstfull_1')

    if (!finalUdSkipsForSt1) {} else {
        let nSF1 = 0
        for (var i = 0; i < udSkipsForStFull1.length; i++) {
            nSF1 = +nSF1 + +udSkipsForStFull1[i].textContent
        }
        finalUdSkipsForSt1.textContent = nSF1.toFixed(1)
    }

    let neudSkipsForStFull1 = document.querySelectorAll('.neudskipsforst__full__1')
    let finalNeudSkipsForSt1 = document.getElementById('neudskipsforstfull_1')

    if (!finalNeudSkipsForSt1) {} else {
        let nSF1 = 0
        for (var i = 0; i < neudSkipsForStFull1.length; i++) {
            nSF1 = +nSF1 + +neudSkipsForStFull1[i].textContent
        }
        finalNeudSkipsForSt1.textContent = nSF1.toFixed(1)
    }

    // Итог по пропускам I полугодие

    // Итог по пропускам II полугодие
    let allSkipsFull2 = document.querySelectorAll('.allskips__full__2')
    let finalAllSkips2 = document.getElementById('allskipsfull_2')

    if (!finalAllSkips2) {} else {
        let aSF2 = 0
        for (var i = 0; i < allSkipsFull2.length; i++) {
            aSF2 = +aSF2 + +allSkipsFull2[i].textContent
        }
        finalAllSkips2.textContent = aSF2
    }

    let udSkipsFull2 = document.querySelectorAll('.udskips__full__2')
    let finalUdSkips2 = document.getElementById('udskipsfull_2')

    if (!finalUdSkips2) {} else {
        let uSF2 = 0
        for (var i = 0; i < udSkipsFull2.length; i++) {
            uSF2 = +uSF2 + +udSkipsFull2[i].textContent
        }
        finalUdSkips2.textContent = uSF2
    }

    let neudSkipsFull2 = document.querySelectorAll('.neudskips__full__2')
    let finalNeudSkips2 = document.getElementById('neudskipsfull_2')

    if (!finalNeudSkips2) {} else {
        let nSF2 = 0
        for (var i = 0; i < neudSkipsFull2.length; i++) {
            nSF2 = +nSF2 + +neudSkipsFull2[i].textContent
        }
        finalNeudSkips2.textContent = nSF2
    }

    let allSkipsForStFull2 = document.querySelectorAll('.allskipsforst__full__2')
    let finalAllSkipsForSt2 = document.getElementById('allskipsforstfull_2')

    if (!finalAllSkipsForSt2) {} else {
        let aSF2 = 0
        for (var i = 0; i < allSkipsForStFull2.length; i++) {
            aSF2 = +aSF2 + +allSkipsForStFull2[i].textContent
        }
        finalAllSkipsForSt2.textContent = aSF2.toFixed(1)
    }

    let udSkipsForStFull2 = document.querySelectorAll('.udskipsforst__full__2')
    let finalUdSkipsForSt2 = document.getElementById('udskipsforstfull_2')

    if (!finalUdSkipsForSt2) {} else {
        let nSF2 = 0
        for (var i = 0; i < udSkipsForStFull2.length; i++) {
            nSF2 = +nSF2 + +udSkipsForStFull2[i].textContent
        }
        finalUdSkipsForSt2.textContent = nSF2.toFixed(1)
    }

    let neudSkipsForStFull2 = document.querySelectorAll('.neudskipsforst__full__2')
    let finalNeudSkipsForSt2 = document.getElementById('neudskipsforstfull_2')

    if (!finalNeudSkipsForSt2) {} else {
        let nSF2 = 0
        for (var i = 0; i < neudSkipsForStFull2.length; i++) {
            nSF2 = +nSF2 + +neudSkipsForStFull2[i].textContent
        }
        finalNeudSkipsForSt2.textContent = nSF2.toFixed(1)
    }

    // Итог по пропускам II полугодие


    // Построение графиков
    let allSkipsSemestr1
    let udSkipsSemestr1
    let neudSkipsSemestr1
    let allForStudSkipsSemestr1
    let udForStudSkipsSemestr1
    let neudForStudSkipsSemestr1

    let allSkipsSemestr2
    let udSkipsSemestr2
    let neudSkipsSemestr2
    let allForStudSkipsSemestr2
    let udForStudSkipsSemestr2
    let neudForStudSkipsSemestr2

    let allSkipsSemestrFull
    let udSkipsSemestrFull
    let neudSkipsSemestrFull
    let allForStudSkipsSemestrFull
    let udForStudSkipsSemestrFull
    let neudForStudSkipsSemestrFull



    if (!document.getElementById('allskipsfull')) {} else {
        // Всего пропусков
        let allSeptember = document.getElementById('allskips_9').textContent
        let allSep = 0 + +allSeptember

        let allOctober = document.getElementById('allskips_10').textContent
        let allOct = 0 + +allOctober

        let allNovember = document.getElementById('allskips_11').textContent
        let allNov = 0 + +allNovember

        let allDecember = document.getElementById('allskips_12').textContent
        let allDec = 0 + +allDecember

        let allYanuar = document.getElementById('allskips_1').textContent
        let allYan = 0 + +allYanuar

        let allFebruary = document.getElementById('allskips_2').textContent
        let allFeb = 0 + +allFebruary

        let allMarch = document.getElementById('allskips_3').textContent
        let allMar = 0 + +allMarch

        let allApril = document.getElementById('allskips_4').textContent
        let allApr = 0 + +allApril

        let allMayy = document.getElementById('allskips_5').textContent
        let allMay = 0 + +allMayy

        let allJune = document.getElementById('allskips_6').textContent
        let allJun = 0 + +allJune
        // Всего пропусков

        // Всего уважительных
        let udSeptember = document.getElementById('udskips_9').textContent
        let udSep = 0 + +udSeptember

        let udOctober = document.getElementById('udskips_10').textContent
        let udOct = 0 + +udOctober

        let udNovember = document.getElementById('udskips_11').textContent
        let udNov = 0 + +udNovember

        let udDecember = document.getElementById('udskips_12').textContent
        let udDec = 0 + +udDecember

        let udYanuar = document.getElementById('udskips_1').textContent
        let udYan = 0 + +udYanuar

        let udFebruary = document.getElementById('udskips_2').textContent
        let udFeb = 0 + +udFebruary

        let udMarch = document.getElementById('udskips_3').textContent
        let udMar = 0 + +udMarch

        let udApril = document.getElementById('udskips_4').textContent
        let udApr = 0 + +udApril

        let udMayy = document.getElementById('udskips_5').textContent
        let udMay = 0 + +udMayy

        let udJune = document.getElementById('udskips_6').textContent
        let udJun = 0 + +udJune
        // Всего уважительных

        // Всего неуважительных
        let neudSeptember = document.getElementById('neudskips_9').textContent
        let neudSep = 0 + +neudSeptember

        let neudOctober = document.getElementById('neudskips_10').textContent
        let neudOct = 0 + +neudOctober

        let neudNovember = document.getElementById('neudskips_11').textContent
        let neudNov = 0 + +neudNovember

        let neudDecember = document.getElementById('neudskips_12').textContent
        let neudDec = 0 + +neudDecember

        let neudYanuar = document.getElementById('neudskips_1').textContent
        let neudYan = 0 + +neudYanuar

        let neudFebruary = document.getElementById('neudskips_2').textContent
        let neudFeb = 0 + +neudFebruary

        let neudMarch = document.getElementById('neudskips_3').textContent
        let neudMar = 0 + +neudMarch

        let neudApril = document.getElementById('neudskips_4').textContent
        let neudApr = 0 + +neudApril

        let neudMayy = document.getElementById('neudskips_5').textContent
        let neudMay = 0 + +neudMayy

        let neudJune = document.getElementById('neudskips_6').textContent
        let neudJun = 0 + +neudJune
        // Всего неуважительных

        // Всего на одного
        let allfForStSeptember = document.getElementById('allskipsforst_9').textContent
        let allfForStSep = 0 + +allfForStSeptember

        let allfForStOctober = document.getElementById('allskipsforst_10').textContent
        let allfForStOct = 0 + +allfForStOctober

        let allfForStNovember = document.getElementById('allskipsforst_11').textContent
        let allfForStNov = 0 + +allfForStNovember

        let allfForStDecember = document.getElementById('allskipsforst_12').textContent
        let allfForStDec = 0 + +allfForStDecember

        let allfForStYanuar = document.getElementById('allskipsforst_1').textContent
        let allfForStYan = 0 + +allfForStYanuar

        let allfForStFebruary = document.getElementById('allskipsforst_2').textContent
        let allfForStFeb = 0 + +allfForStFebruary

        let allfForStMarch = document.getElementById('allskipsforst_3').textContent
        let allfForStMar = 0 + +allfForStMarch

        let allfForStApril = document.getElementById('allskipsforst_4').textContent
        let allfForStApr = 0 + +allfForStApril

        let allfForStMayy = document.getElementById('allskipsforst_5').textContent
        let allfForStMay = 0 + +allfForStMayy

        let allfForStJune = document.getElementById('allskipsforst_6').textContent
        let allfForStJun = 0 + +allfForStJune
        // Всего на одного

        // Уважитеьных на одного
        let udfForStSeptember = document.getElementById('udskipsforst_9').textContent
        let udfForStSep = 0 + +udfForStSeptember

        let udfForStOctober = document.getElementById('udskipsforst_10').textContent
        let udfForStOct = 0 + +udfForStOctober

        let udfForStNovember = document.getElementById('udskipsforst_11').textContent
        let udfForStNov = 0 + +udfForStNovember

        let udfForStDecember = document.getElementById('udskipsforst_12').textContent
        let udfForStDec = 0 + +udfForStDecember

        let udfForStYanuar = document.getElementById('udskipsforst_1').textContent
        let udfForStYan = 0 + +udfForStYanuar

        let udfForStFebruary = document.getElementById('udskipsforst_2').textContent
        let udfForStFeb = 0 + +udfForStFebruary

        let udfForStMarch = document.getElementById('udskipsforst_3').textContent
        let udfForStMar = 0 + +udfForStMarch

        let udfForStApril = document.getElementById('udskipsforst_4').textContent
        let udfForStApr = 0 + +udfForStApril

        let udfForStMayy = document.getElementById('udskipsforst_5').textContent
        let udfForStMay = 0 + +udfForStMayy

        let udfForStJune = document.getElementById('udskipsforst_6').textContent
        let udfForStJun = 0 + +udfForStJune
        // Уважитеьных на одного

        // Не уважитеьных на одного
        let neudfForStSeptember = document.getElementById('neudskipsforst_9').textContent
        let neudfForStSep = 0 + +neudfForStSeptember

        let neudfForStOctober = document.getElementById('neudskipsforst_10').textContent
        let neudfForStOct = 0 + +neudfForStOctober

        let neudfForStNovember = document.getElementById('neudskipsforst_11').textContent
        let neudfForStNov = 0 + +neudfForStNovember

        let neudfForStDecember = document.getElementById('neudskipsforst_12').textContent
        let neudfForStDec = 0 + +neudfForStDecember

        let neudfForStYanuar = document.getElementById('neudskipsforst_1').textContent
        let neudfForStYan = 0 + +neudfForStYanuar

        let neudfForStFebruary = document.getElementById('neudskipsforst_2').textContent
        let neudfForStFeb = 0 + +neudfForStFebruary

        let neudfForStMarch = document.getElementById('neudskipsforst_3').textContent
        let neudfForStMar = 0 + +neudfForStMarch

        let neudfForStApril = document.getElementById('neudskipsforst_4').textContent
        let neudfForStApr = 0 + +neudfForStApril

        let neudfForStMayy = document.getElementById('neudskipsforst_5').textContent
        let neudfForStMay = 0 + +neudfForStMayy

        let neudfForStJune = document.getElementById('neudskipsforst_6').textContent
        let neudfForStJun = 0 + +neudfForStJune
        // Не уважитеьных на одного
        Highcharts.chart('container', {
            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'Количество пропущенных уроков'
                }
            },

            xAxis: {
                categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь']
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                    name: 'Всего пропусков',
                    data: [allSep, allOct, allNov, allDec, allYan, allFeb, allMar, allApr, allMay, allJun],
                    marker: {
                        symbol: 'circle'
                    }
                }, {
                    name: 'Всего уважительных',
                    data: [udSep, udOct, udNov, udDec, udYan, udFeb, udMar, udApr, udMay, udJun],
                    marker: {
                        symbol: 'circle'
                    },
                    color: '#07da35'
                }, {
                    name: 'Всего НЕ уважительных',
                    data: [neudSep, neudOct, neudNov, neudDec, neudYan, neudFeb, neudMar, neudApr, neudMay, neudJun],
                    marker: {
                        symbol: 'circle'
                    }
                },
                {
                    name: 'Всего на одного студента',
                    data: [allfForStSep, allfForStOct, allfForStNov, allfForStDec, allfForStYan, allfForStFeb, allfForStMar, allfForStApr, allfForStMay, allfForStJun],
                    marker: {
                        symbol: 'circle'
                    }
                },
                {
                    name: 'Уважительных на одного студента',
                    data: [udfForStSep, udfForStOct, udfForStNov, udfForStDec, udfForStYan, udfForStFeb, udfForStMar, udfForStApr, udfForStMay, udfForStJun],
                    marker: {
                        symbol: 'circle'
                    }
                },
                {
                    name: 'НЕ уважительных на одного студента',
                    data: [neudfForStSep, neudfForStOct, neudfForStNov, neudfForStDec, neudfForStYan, neudfForStFeb, neudfForStMar, neudfForStApr, neudfForStMay, neudfForStJun],
                    marker: {
                        symbol: 'circle'
                    }
                }
            ],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });

        Highcharts.chart('container1', {

            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'Количество пропущенных уроков'
                }
            },

            xAxis: {
                categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                name: '2019-2020 учебный год',
                data: [43934, 52503, 57177, 69658],
                marker: {
                    symbol: 'circle'
                }
            }, {
                name: '2020-2021 учебный год',
                data: [24916, 24064, 29742, 29851],
                marker: {
                    symbol: 'circle'
                },
                color: '#07da35'
            }, {
                name: '2021-2022 учебный год',
                data: [11744, 17722, 16005, 19771],
                marker: {
                    symbol: 'circle'
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    }
    // Построение графиков

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
});