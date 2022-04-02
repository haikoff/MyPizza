export let diam = '0';
import {proverka, opisanieName, itogo, pict} from "./script.js";
let testo = '';
let stoimost = 0;
export let opisanieMin = '';
let x = localStorage.getItem('kolvoZakazov') || 0;
document.querySelector('.add-tov').addEventListener('click', ()=>{
    x++;
    localStorage.setItem('kolvoZakazov', x);
    diam =  document.querySelector('input[name="radio"]:checked').value;
    testo = document.querySelector('input[name="btnradio"]:checked').value;
    if (proverka){
        opisanieMin = `${testo} тесто, диаметр:${diam}`;
    }else{
        opisanieMin = '';
    }
    localStorage.setItem(`zakaz-${x}`, `<div class="zakaz">
    <div class="zakaz-image"><img src="${pict}" alt="image"></div>
    <div class="zakaz-describe">
        <div>
        <h6>${opisanieName}</h6>
        <p class="describe">${opisanieMin}</p>
        </div>
        <div class="zakaz-niz">
            <div class="zakaz-counter" id="zak${x}" data-price="${itogo}" data-name="zakaz-${x}-count">
                <p class="countMinus">-</p>
                <p class="zakaz-count">1</p>
                <p class="countPlus">+</p>
            </div>
            <p class="zakaz-summa">${itogo} руб.</p>
        </div>    
    </div>
    </div>`);
    document.querySelector('#offcanvasRight2 .offcanvas-body').innerHTML += 
    localStorage.getItem(`zakaz-${x}`);
    schetStoim(); 
})


document.querySelector('#offcanvasRight2 .offcanvas-body').addEventListener('click', event=>{
    if(event.target.className === 'countPlus'){
        event.target.previousElementSibling.innerHTML = (Number(event.target.previousElementSibling.innerHTML)+1);
        event.target.parentNode.nextElementSibling.innerHTML = `${Number(event.target.parentNode.dataset.price)*Number(event.target.previousElementSibling.innerHTML)} руб.`; 
        localStorage.setItem(`${event.target.parentNode.dataset.name}`, event.target.previousElementSibling.innerHTML);
        schetStoim();
    }else if(event.target.className === 'countMinus' && (Number(event.target.nextElementSibling.innerHTML)  > 1)){
        event.target.nextElementSibling.innerHTML = Number(event.target.nextElementSibling.innerHTML)-1;
        event.target.parentNode.nextElementSibling.innerHTML = `${Number(event.target.parentNode.dataset.price)*Number(event.target.nextElementSibling.innerHTML)} руб.`; 
        localStorage.setItem(`${event.target.parentNode.dataset.name}`, event.target.nextElementSibling.innerHTML);
        schetStoim();
    }
})

const schetStoim = ()=>{
    stoimost = 0;
    let zakazi = document.querySelectorAll('.zakaz-summa');
    zakazi.forEach(zakaz=>{
        stoimost += Number(zakaz.innerHTML.slice(0, zakaz.innerHTML.indexOf(' ')));
    })
    document.querySelector('.summ').innerHTML = `${stoimost}`;
    document.querySelector('.itogo').innerHTML = `Итого: ${stoimost} руб.`
}

const zagruzkaZakazov = ()=>{
    let kolvo = localStorage.getItem('kolvoZakazov');
    for(let i=1; i<=kolvo; i++){
        document.querySelector('#offcanvasRight2 .offcanvas-body').innerHTML += localStorage.getItem(`zakaz-${i}`);
        document.querySelector(`.zakaz .zakaz-describe .zakaz-niz #zak${i} .zakaz-count`).innerHTML = (localStorage.getItem(`zakaz-${i}-count`) || 1);
        document.querySelector(`.zakaz .zakaz-describe .zakaz-niz #zak${i}`).nextElementSibling.innerHTML = `${document.querySelector(`.zakaz .zakaz-describe .zakaz-niz #zak${i}`).dataset.price * (localStorage.getItem(`zakaz-${i}-count`) || 1)} руб.`;
    }
    schetStoim();
}

zagruzkaZakazov();  