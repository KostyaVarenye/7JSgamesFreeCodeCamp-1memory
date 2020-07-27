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

    const grid = document.querySelector('.grid');
    /*create the board function by running through our array of cards and creating an img element with the appropriate image src with data id number*/

    function createBoard() { //length without () because its an attribute
        for (let i=0; i < cardArray.length;++i){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            //add function for when the card is flipped, to change from blank
            //card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }


    // check for matches

    // flip your card
    
    createBoard();

})