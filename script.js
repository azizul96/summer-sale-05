// function cardNameEntry(cardName){
//     const cardEntryArea = document.getElementById('card-entry-area')
//     const p = document.createElement('p')
//     const count = cardEntryArea.childElementCount
//     p.innerHTML = `${count +1}. ${cardName}`
//     cardEntryArea.appendChild(p)
// }



// document.getElementById("card1").addEventListener('click', function(){
//     cardNameEntry("K. Accessories" )
    
// })
// ------------------------------------------------------

// function clickHandler(target){
//     const cardsEntry = document.getElementById('cards-entry')
//     const card = target.childNodes[3].childNodes[3].innerText
//     const p = document.createElement('p')
//     p.innerText = card;
//     cardsEntry.appendChild(p);
// }
let totalPrice = 0;
function clickHandler(target){
    const cardsEntry = document.getElementById('cards-entry')
    const card = target.childNodes[3].childNodes[3].innerHTML
    const p = document.createElement('p')
    const count = cardsEntry.childElementCount
    p.innerHTML = `${count +1}. ${card}`;
    cardsEntry.appendChild(p);

    const cardPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0]
    totalPrice = parseFloat(cardPrice) + parseFloat(totalPrice);
    const getTotalPrice = document.getElementById('total-price')
    getTotalPrice.innerText = totalPrice.toFixed(2);


    document.getElementById('grand-total').innerText = totalPrice.toFixed(2)
    
}