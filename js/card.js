// 1. button event handler setup
// 2. get input value
// error handling for string value

// https://deckofcardsapi.com/api/deck/new/draw/?count=10
// https://api.thedogapi.com/v1/breeds

const cardContainer = document.getElementById('display-card');
const searchButton = () => {
    const input = document.getElementById('input-value');
    const errorMessage = document.getElementById('error-message');

    const inputValue = parseInt(input.value);
    if (isNaN(inputValue) || inputValue == "") {
        // alert('pls give number')
        errorMessage.innerText = 'Please Give Number';
        input.value = '';
        cardContainer.innerHTML = '';
    }
    else if (inputValue <= 0) {
        errorMessage.innerText = 'Please give positive number';
        input.value = '';
    }
    else if (inputValue > 52) {
        errorMessage.innerText = 'error: "Not enough cards remaining to draw additional"';
        input.value = '';
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(response => response.json())
            .then(data => displayCards(data.cards)); // object er vitore cards object can access from here

        input.value = "";
    }
};
const displayCards = (cardsPara) => {
    // console.log(cards);
    // cards = cardsPara.cards; // object er vitore cards array ke- can access from here
    // const cardContainer = document.getElementById('display-card');
    cardsPara.forEach(card => { // cardsPara parameter use kore cards object ke access kore cards namok array ke loop
        // console.log(card);
        // console.log(card.image); // evabe 1ta 1ta koreo access kora jai
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6', 'mb-5', 'rounded');
        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.suit}</h5>
          <p class="card-text">${card.value}</p>
          <p class="card-text">${card.code}</p>
          <button href="#" class="btn btn-primary">Go somewhere</button>
        </div>
      </div>`;

        cardContainer.appendChild(div);

    })
}