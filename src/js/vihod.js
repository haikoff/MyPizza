document.querySelector('.header-top-right .enter p').addEventListener('click', (event)=>{
    if(event.target.textContent === "Выйти"){
        sessionStorage.clear();
        window.location = './index.html';
    }
})

document.querySelector('.header-top-right .enter svg').addEventListener('click', (event)=>{
    if(event.target.nextElementSibling.textContent === "Выйти"){
        window.location = './kabinet.html';
    } 
})