document.addEventListener('DOMContentLoaded', () => {
    //create card array for all our card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        }
    ]; // surely theres a better way to do it ...

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    /*create the board function by running through our array of cards and creating an img element with the appropriate image src with data id number*/
    //empty array of cards chosen
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() { //length without () because its an attribute
        for (let i=0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            //add function for when the card is flipped, to change from blank
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }


    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);

        } else {
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            alert('Sorry, try again!');
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2){
            alert('oh my... you\'ve won!')
            resultDisplay.textContent = 'Congratulations';
        }

    }
    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }

    }

    createBoard();

})