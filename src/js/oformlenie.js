import"./footer.js";
import "../css/oforml.scss";
import "../scss/main.scss";
import "./header.js";
import "./vihod.js";
import {otkuda} from "./header.js";
let kolvo = localStorage.getItem('kolvoZakazov');
    for(let i=1; i<=kolvo; i++){
        document.querySelector('section .oformlenie').innerHTML += localStorage.getItem(`zakaz-${i}`);
        document.querySelector(`.zakaz .zakaz-describe .zakaz-niz #zak${i} .zakaz-count`).innerHTML = (localStorage.getItem(`zakaz-${i}-count`) || 1);
        document.querySelector(`.zakaz .zakaz-describe .zakaz-niz #zak${i}`).nextElementSibling.innerHTML = `${document.querySelector(`.zakaz .zakaz-describe .zakaz-niz #zak${i}`).dataset.price * (localStorage.getItem(`zakaz-${i}-count`) || 1)} руб.`;
    }

    let zakazi = document.querySelectorAll('.zakaz-summa');
    export let stoimost = 0;
    zakazi.forEach(zakaz =>{
        stoimost += Number(zakaz.innerHTML.slice(0, zakaz.innerHTML.indexOf(' ')));
    })
    document.querySelector('.kupon p').innerHTML = `Итого: ${stoimost} руб.`; 
    document.querySelector('.summ').innerHTML = `${stoimost}`; 
/*     let close = ()=>{
        document.querySelector('.loader').style.display ='none';
    }
    setTimeout(close, 2500);
 */ 
    document.querySelector('.oformZakaz').addEventListener('click', ()=>{
        let email = sessionStorage.getItem('u-email');
        const createZakaz = (event)=>{
            localStorage.setItem(`zakaz-${email}-№${localStorage.getItem('count')}`, `${document.querySelector('.oformlenie').innerHTML}`);
            localStorage.setItem('count', Number(localStorage.getItem('count'))+1);
            otkuda = true;
        }
        createZakaz();
    })

    
    