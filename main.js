const inputDate = document.querySelector('.input-date');
const inputName = document.querySelector('.input-name');
const createBtn = document.querySelector('.create-btn');
const delBtn = document.querySelector('.del-btn')
const nameBox = document.querySelectorAll('.name-box');
const dateBox = document.querySelectorAll('.date-box')
const allDelBtn = document.querySelector('.all-del-btn')

const nullText = '';



createBtn.addEventListener('click', function(){
        localStorage.setItem('name', inputName.value);
        const str = localStorage.name;
        return nameBox.innerHTML = str;
})

delBtn.addEventListener('click', function(){
    dateBox[0].innerHTML = nullText;
    nameBox[0].innerHTML = nullText;
})

allDelBtn.addEventListener('click', function(){
    for(let i=0; i<dateBox.length; i++){
            dateBox[i].innerHTML = nullText;
            nameBox[i].innerHTML = nullText;
        }
})