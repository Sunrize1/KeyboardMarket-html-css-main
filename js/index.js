let headerNode = document.querySelector(`#header`);
let burgerNode = document.querySelector(`#brg`);
let dropdownNode = document.querySelector(`.profile-settings`);
let profile = document.querySelector(`#profileLogo`);
let basketPopupOpen = document.querySelector(`#basket`);
let popup = document.querySelector(`#popup`);
let closePopup = document.querySelector(`.close`);
let allPage = document.querySelector(`#all`);
let buyButtons = document.querySelectorAll(`.buy-btn`);
let basket = document.querySelector(`.basket`);
let basketCardsList = document.querySelector(`.itemList`);
let input = document.querySelector(`.mainInput`);
let cards = [];


function renderItem(evt){
    for(let i = 0; i < cards.length; i++){
        if(cards[i] == evt.target.closest(`.card`)){
            return;
        }
    }
    cards.push(evt.target.closest(`.card`));
}

function render(){
    basket.innerHTML = ``;
    basketCardsList.innerHTML = ``;

    for(let i = 0; i < cards.length; i++){
        basket.innerHTML += cards[i].querySelector(`.card-image`).innerHTML;
        basketCardsList.innerHTML += `<li>${cards[i].querySelector(`.card-header`).innerHTML}</li>`;
    }
}

burgerNode.addEventListener(`click`, function(){
    headerNode.classList.toggle(`brgOn`)
});

document.addEventListener(`click`, function(evt){
    if(evt.target == profile) {
        dropdownNode.classList.toggle(`profile-settingsOff`);
    } else if(evt.target != dropdownNode) {
        dropdownNode.classList.add(`profile-settingsOff`);
    }
});

basketPopupOpen.addEventListener(`click`, function(){
    popup.classList.add(`popup`);
    allPage.classList.add(`popupEnable`);
});

closePopup.addEventListener(`click`, function(){
    popup.classList.remove(`popup`);
    allPage.classList.remove(`popupEnable`);
});

for(let i = 0; i < buyButtons.length; i++){
    buyButtons[i].addEventListener(`click`, renderItem);
    buyButtons[i].addEventListener(`click`, render);
};

basket.addEventListener(`click`, function(evt){
    for(let i = 0; i < cards.length; i++){
        if(evt.target.src == cards[i].querySelector(`img`).src){
            cards.splice(i, 1);
        }
    };
    render();
});

input.addEventListener(`input`, function(){
    let allCards = document.querySelectorAll(`.card`);
    for(let i = 0; i < allCards.length; i++){
        allCards[i].classList.add(`hide`);
        if(allCards[i].querySelector(`.card-header`).innerHTML.toLowerCase().includes(input.value.toLowerCase())){
            allCards[i].classList.remove(`hide`);
        }
    }
});



