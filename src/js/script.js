
import { diam } from "./zakaz-add.js";
import {isAuthorisation} from "./login.js";
console.log(diam);
let finalSum = 0;
let sum = 0;
export let opisanieName = '';
let opisanie = '';
let testo = '';
let dop = 0;
export let itogo = 0;
export let pict = '';
let nacenka = 0;
export let proverka = true;
const adres = window.location.href;
const viborBtn = document.querySelector('.vibor');
viborBtn.addEventListener('click', (event)=>{
  if (event.target.classList.contains('card2')){
    let cards = document.querySelectorAll('.prod');
    cards.forEach(tov =>{
      tov.classList.add('hide');
    })
    document.querySelector(`.products-cards #${event.target.getAttribute('id')}`).classList.remove('hide');
  }
  window.location = `${adres}#checkAdres`; 
})

document.querySelector('.products-cards').addEventListener('click', (event)=>{

  if(event.target.closest('.cartochka')){
    if(event.target.closest('.pizza')){
      document.querySelector('.dobavki').style.display = 'flex';  
      document.querySelector('.btn-group').style.display = 'inline-flex'; 
      document.querySelector('.form_radio_group').style.display = 'flex';  
      document.querySelector('.dobav').style.display = 'block';   
      proverka = true;
      sum = Number(event.target.nextElementSibling.innerHTML.slice(3).substr(0,event.target.nextElementSibling.innerHTML.slice(3).indexOf(' ')));
      let h3 = event.target.parentNode.parentNode.children;
          if (event.target.classList.contains('choose')){
            document.querySelector('.vibor-title').innerHTML = h3[1].innerHTML;
            document.querySelector('.choose-content img').setAttribute('src', h3[0].getAttribute('src'));
            document.querySelector('.describes').innerHTML = h3[2].innerHTML;
            pict = h3[0].getAttribute('src');
            opisanieName = h3[1].innerHTML;
            nachislenie();
          }

            document.querySelector('.add-tov').addEventListener('click', () =>{
              if (dop === 0){
                opisanie = `${testo} тесто, диаметр:${diam}. Без добавок.`
              }
              else{
                let dob = [];
                document.querySelectorAll('.dobavkadd').forEach(el =>{
                  dob.push(el.children[1].textContent.toLowerCase());
                })
                opisanie = `${testo} тесто, диаметр: ${diam}. Добавки: ${dob.join(', ')}. Сумма = ${itogo}`}
            })
    }else{
      proverka = false;
      document.querySelector('.dobavki').style.display = 'none'; 
      document.querySelector('.btn-group').style.display = 'none'; 
      document.querySelector('.form_radio_group').style.display = 'none'; 
      document.querySelector('.dobav').style.display = 'none'; 
      sum = Number(event.target.nextElementSibling.innerHTML.slice(3).substr(0,event.target.nextElementSibling.innerHTML.slice(3).indexOf(' ')));
      let h3 = event.target.parentNode.parentNode.children;
      if (event.target.classList.contains('choose')){
          document.querySelector('.vibor-title').innerHTML = h3[1].innerHTML;
          document.querySelector('.choose-content img').setAttribute('src', h3[0].getAttribute('src'));
          document.querySelector('.describes').innerHTML = h3[2].innerHTML;
          pict = h3[0].getAttribute('src');
          opisanieName = h3[1].innerHTML;
          nachislenie();
      }    
    }
  }
})

  const nachislenie = () =>{
    if(proverka){
      dop = parseFloat(document.querySelectorAll('.dobavkadd').length * 3.5);
      if (document.querySelector('#radio-2').checked){
        nacenka = 3;
      } else if (document.querySelector('#radio-3').checked){
        nacenka = 7;
      } else{
        nacenka = 0;
      }
    }else{
      nacenka = 0;
      dop = 0;
    }
    itogo = sum + dop + nacenka;
    document.querySelector('.add-tov').innerHTML = `Добавить в корзину за ${itogo} руб.`;  
  }

  document.querySelector('.form_radio_group').addEventListener('click', nachislenie);
  document.querySelector('.dobavki').addEventListener('click', (event)=>{
    if(event.target.parentNode.classList.contains('dobavka')){
      event.target.parentNode.classList.toggle('dobavkadd');
      nachislenie();}
  })

  document.querySelector('.header-niz-left').addEventListener('click', event=>{
    document.location.href = "#top";
  })

  let zakazItems = ''; 

  document.querySelector('.oformlenie').addEventListener('click', ()=>{
    isAuthorisation();
    zakazItems = document.querySelectorAll('.zakaz');
  })

 