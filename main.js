const inputDate = document.querySelector('.input-date');
const inputName = document.querySelector('.input-name');
const createBtn = document.querySelector('.create-btn');
const delBtn = document.querySelectorAll('.del-btn');
const nameBox = document.querySelectorAll('.name-box');
const dateBox = document.querySelectorAll('.date-box');
const allDelBtn = document.querySelector('.all-del-btn');
const reloadBtn = document.querySelector('.re-btn');

const nullText = '';

let nameArr = [];
const setArr = (key, arr)=>localStorage.setItem(key, JSON.stringify(arr));
const getArr = (key)=>JSON.parse(localStorage.getItem(key))

reloadBtn.addEventListener('click',function(){
    window.location.reload();
})

createBtn.addEventListener('click', function(){
    if(nameArr.length == 0){
        if(inputName.value == ''){
            alert('박스를 채워주시오')
        }else{
        nameArr.push(inputName.value);
        setArr('name', nameArr);
        const getEl = getArr('name');
        nameBox[0].textContent = getEl;
    }
    }   
    inputName.value = '';
})

delBtn[0].addEventListener('click', function(){
    nameArr.splice(0,1);
    setArr('name',nameArr)
    dateBox[0].innerHTML = nullText;
    nameBox[0].innerHTML = nullText;
})

allDelBtn.addEventListener('click', function(){
    for(let i=0; i<dateBox.length; i++){
            dateBox[i].textContent = nullText;
            nameBox[i].textContent = nullText;
        }
    localStorage.clear();
    nameArr = [];
})