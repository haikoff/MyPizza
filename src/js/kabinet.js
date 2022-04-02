import"../js/header.js";
import "../css/oforml.scss";
import "../scss/main.scss";
import "./footer.js";
import "./vihod.js";
import "./chat.js";
import "../scss/kabinet.scss";
import "../scss/adaptiv.scss";
let email = sessionStorage.getItem('u-email');
let keys = Object.keys(localStorage);
let kod = '';
for(let key of keys) {
    if(key.toString().indexOf('№')>0){
        if((key.substring((key.indexOf('-')+1), key.indexOf('№')-1)) == email){
            kod += `
            ${localStorage.getItem(key)}`}   
    }
}

document.querySelector('section').innerHTML += `<div class="order"><h2>История заказов</h2>${kod}</div>`;


for(let key of keys) {
    if(key.toString() !== 'accounts' && !(key.toString().indexOf('№') > 0) && key.toString() !== 'count'){
        localStorage.removeItem(key);
    }
}

document.querySelectorAll('.countPlus').forEach(el =>{
    el.innerHTML='';
})

document.querySelectorAll('.countMinus').forEach(el =>{
    el.innerHTML='Количество: ';
})

