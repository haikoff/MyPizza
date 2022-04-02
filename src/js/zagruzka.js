
const DATA_URL = "https://pizza-serv.herokuapp.com/api/";
const products = ["pizza", "sushi", "zakuski", "desert", "drink", "kombo", "sous"];

const getData = async (URL) =>{
    try {
        const res = await fetch(URL);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export const getResult = async (tov) =>{
    const cartochka = document.querySelector(`#cart-${tov} .items`);
    const result = await getData(`${DATA_URL}${tov}`);
    cartochka.innerHTML = '';
    result.forEach(produkt => {
         cartochka.innerHTML += `
        <div class="cartochka ${tov}">
                    <img src="${produkt.image}" alt="">
                    <h3>${produkt.title}</h3>
                    <p class="describe">${produkt.description}</p>
                    <div class="cartochka-niz" id="${tov}">
                        <button class="choose" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Выбрать</button>
                        <p>От ${produkt.price} руб.</p>
                    </div>
                    
        </div>
        `
    });
}


export const zagruz = ()=>{
    products.forEach(tovar =>{
        getResult(tovar); 
    })
}

zagruz();

