const searchButton = () => {
    const input = document.getElementById('input-value');
    const errorMessage = document.getElementById('error-message');

    const inputValue = parseInt(input.value);
    if (isNaN(inputValue)) {
        // alert('pls give number')
        errorMessage.innerText = 'Please Give Number';
        input.value = '';
    }
    if (inputValue == "") {
        errorMessage.innerText = 'Please give value';
        input.value = '';
    }
    else if (inputValue <= 0) {
        errorMessage.innerText = 'Please give positive number';
        input.value = '';
    }
    else if (inputValue > 52) {
        errorMessage.innerText = 'error: "Not enough cards remaining to draw additional"';
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
    const cardContainer = document.getElementById('display-card');
    cardsPara.forEach(card => { // cardsPara parameter use kore cards object ke access kore cards namok array ke loop
        console.log(card.image);
        const div = document.createElement('div');
        div.innerHTML = `<div class="card">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;

        // cardContainer.appendChild(div);

    })
}