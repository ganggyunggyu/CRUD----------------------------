const inputDate = document.querySelector('.input-date');
const inputName = document.querySelector('.input-name');
const nameBox = document.querySelectorAll('.name-box');
const dateBox = document.querySelectorAll('.date-box');
const allDelBtn = document.querySelector('.all-del-btn');
const reloadBtn = document.querySelector('.reload-btn');
const createBtn = document.querySelector('.create-btn');
const delBtn = document.querySelectorAll('.del-btn');
const updateBtn = document.querySelectorAll('.update-btn');
const mainUpBtn = document.querySelector('.main-up-btn');

let nameArr = [];
let dateArr = [];
let maxArrayData = 3;

const textClear = (text) => text.innerHTML = '';
const valueClear = (text) => text.value = '';

const setArr = (key, arr) => localStorage.setItem(key, JSON.stringify(arr));
const getArr = (key) => JSON.parse(localStorage.getItem(key));

const nullCheck = () => {
    if (inputName.value == '' || inputDate.value == '') {
        alert('박스를 채워주시오');
    }
}

if (getArr('name') && getArr('date')) {
    getArr('name').forEach((el, i) => {
        nameArr.push(el)
        nameBox[i].innerHTML = el;
    });
    getArr('date').forEach((el, i) => {
        dateArr.push(el);
        dateBox[i].innerHTML = el;

    });
}

reloadBtn.addEventListener('click', function () {
    window.location.reload();
})

createBtn.addEventListener('submit', function (e) {
    e.preventDefault();
})

createBtn.addEventListener('click', function () {
    if (inputName.value == '' || inputDate.value == '') {
        alert('박스가 비었다');
    } else {
        for (let i = 0; i < maxArrayData; i++) {
            if (nameArr.length == i && dateArr.length == i) {
                nameArr.push(inputName.value);
                dateArr.push(inputDate.value);
                setArr('name', nameArr);
                setArr('date', dateArr);
                const getName = getArr('name');
                const getDate = getArr('date');
                nameBox[i].innerHTML = getName[i];
                dateBox[i].innerHTML = getDate[i];
                valueClear(inputName);
                valueClear(inputDate);
                break;
            } else if (nameArr[i] == '' && dateArr[i] == '') {
                nameArr[i] = inputName.value;
                dateArr[i] = inputName.value;
                setArr('name', nameArr);
                setArr('date', dateArr);
                nameBox[i].innerHTML = getArr('name')[i];
                dateBox[i].innerHTML = getArr('date');[i];
                valueClear(inputName);
                valueClear(inputDate);
                break;
            } else {
                continue;
            }
        }
    }
})

for (let i = 0; i < maxArrayData; i++) {
    delBtn[i].addEventListener('click', function () {
        nameArr[i] = '';
        dateArr[i] = '';
        setArr('name', nameArr);
        setArr('date', dateArr);
        textClear(dateBox[i]);
        textClear(nameBox[i]);
    })
}

for (let i = 0; i < updateBtn.length; i++) {
    updateBtn[i].addEventListener('click', function () {
        createBtn.classList.add('close')
        mainUpBtn.classList.remove('close')
        let getUpNameArr = getArr('name');
        let getUpDateArr = getArr('date');
        console.log(getUpNameArr)
        inputName.value = getUpNameArr[i];
        inputDate.value = getUpDateArr[i];
        mainUpBtn.addEventListener('click', function () {
            createBtn.classList.remove('close')
            mainUpBtn.classList.add('close')
            nameArr[i] = inputName.value;
            dateArr[i] = inputDate.value;
            setArr('name', nameArr);
            setArr('date', dateArr);
        })
    })
}

allDelBtn.addEventListener('click', function () {
    for (let i = 0; i < dateBox.length; i++) {
        textClear(nameBox[i]);
        textClear(dateBox[i]);
    }
    valueClear(inputName);
    valueClear(inputDate);
    nameArr = [];
    dateArr = [];
    setArr('name', nameArr);
    setArr('date', dateArr);
})