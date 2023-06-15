const inputDate = document.querySelector('.input-date');
const inputName = document.querySelector('.input-name');
const nameBox = document.querySelectorAll('.name-box');
const dateBox = document.querySelectorAll('.date-box');
const allDelBtn = document.querySelector('.all-del-btn');
const reloadBtn = document.querySelector('.reload-btn');
const createBtn = document.querySelector('.create-btn');
const delBtn = document.querySelectorAll('.del-btn');
const updateBtn = document.querySelectorAll('.update-btn');

let nameArr = [];
let dateArr = [];
let maxArrayData = 3;

const textClear = (text) => text.innerHTML = '';
const valueClear = (text) => text.value = '';

const setArr = (key, arr)=>localStorage.setItem(key, JSON.stringify(arr));
const getArr = (key)=>JSON.parse(localStorage.getItem(key));

if(getArr('name') && getArr('date')){
    getArr('name').forEach((el, i) => {
        nameArr.push(el)
        nameBox[i].innerHTML = el;
    });
    getArr('date').forEach((el, i)=>{
        dateArr.push(el);
        dateBox[i].innerHTML = el;
    });
}

reloadBtn.addEventListener('click',function(){
    window.location.reload();
})

createBtn.addEventListener('click', function(){
    if(inputName.value == '' || inputDate.value == ''){
        alert('박스를 채워주시오');
    }else{
        for(let i=0; i<maxArrayData; i++){
            if(nameArr.length==i && dateArr.length==i){
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
            }else if(nameArr[i] == '' && dateArr[i] == ''){
                nameArr[i] = inputName.value;
                dateArr[i] = inputName.value;
                setArr('name', nameArr);
                setArr('date', dateArr);
                const getDate = getArr('date');
                nameBox[i].innerHTML = getArr('name')[i];
                dateBox[i].innerHTML = getDate[i];  
                valueClear(inputName);
                valueClear(inputDate);
                break;
            }else{
                continue;
            } 
        }
    }
})

for(let i=0; i<maxArrayData; i++){
    delBtn[i].addEventListener('click', function(){
        nameArr[i] = '';
        dateArr[i] = '';
        setArr('name',nameArr);
        setArr('date',dateArr);
        textClear(dateBox[i]);
        textClear(nameBox[i]);
    })
}

// delBtn[0].addEventListener('click', function(){
//     nameArr[0] = '';
//     dateArr[0] = '';
//     setArr('name',nameArr);
//     setArr('date',dateArr);
//     textClear(dateBox[0]);
//     textClear(nameBox[0]);
// })
// delBtn[1].addEventListener('click', function(){
//     nameArr[1] = '';
//     dateArr[1] = '';
//     setArr('name',nameArr);
//     setArr('date',dateArr);
//     textClear(dateBox[1]);
//     textClear(nameBox[1]);
// })
// delBtn[2].addEventListener('click', function(){
//     nameArr[2] = '';
//     dateArr[2] = '';
//     setArr('name',nameArr);
//     setArr('date',dateArr);
//     textClear(dateBox[2]);
//     textClear(nameBox[2]);
// })

updateBtn[0].addEventListener('click', function(){
    createBtn.innerHTML = '수정하기';
    inputName.value = nameArr[0];
    inputDate.value = dateArr[0];
})



allDelBtn.addEventListener('click', function(){
    for(let i=0; i<dateBox.length; i++){
        textClear(nameBox[i]);
        textClear(dateBox[i]);
        }
    valueClear(inputName);
    valueClear(inputDate);
    localStorage.clear();
    nameArr = [];
    dateArr = [];
})